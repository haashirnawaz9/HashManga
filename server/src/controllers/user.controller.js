import Users from "../schema/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

function issueToken(user) {
  const jwtSecret = process.env.JWT_SECRET;
  return jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "7d" });
}

export async function Register(req, res) {
  const { name, email, password } = req.body;

  try {
    const existing = await Users.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err });
  }
}

export async function Login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) return res.status(400).json({ message: "Wrong credentials" });

    const token = issueToken(user);
    res.json({ token, userID: user._id, name: user.name, email: user.email });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err });
  }
}

export async function GoogleLogin(req, res) {
  try {
    const { credential } = req.body; // Google ID token
    if (!credential) return res.status(400).json({ message: "Missing credential" });

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    let user = await Users.findOne({ email });
    if (!user) {
      user = await Users.create({
        name,
        email,
        password: "GOOGLE_AUTH", // placeholder since no password
      });
    }

    const token = issueToken(user);
    res.json({ token, userID: user._id, name: user.name, email: user.email, picture });
  } catch (err) {
    console.error("Google login error:", err);
    res.status(401).json({ message: "Invalid Google token" });
  }
}
