import Users from "../schema/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function Register(req, res) {
  const { name, email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = await Users.create({ name, email, password: hashedPassword });
    console.log(newuser)

    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error: ", error });
  }
}

export async function Login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(400).json({ message: "Wrong Credentials" });
    }

    const jwtSecret = process.env.JWT_SECRET;
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "7d" });

    res.json({ token, userID: user._id });
  } catch (error) {
    res.status(500).json({ message: "Error: ", error });
  }
}

export async function GoogleLogin(req, res) {
  try {
    const { credential } = req.body; // Google ID token from frontend

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload;

    let user = await Users.findOne({ email });

    if (!user) {
      user = await Users.create({
        name,
        email,
        password: "GOOGLE_AUTH", // dummy password
      });
    }

    const jwtSecret = process.env.JWT_SECRET;
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "7d" });

    res.json({ token, userID: user._id, name: user.name, email: user.email, picture });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid Google token" });
  }
}
