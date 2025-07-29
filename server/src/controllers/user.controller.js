import Users from "../schema/user.schema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function Register(req, res) {
    const {name, email, password} = req.body;

    try {
        const user = await Users.findOne({email})

        if(user) {
            return res.status(400).json({message: "User Already Exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newuser = await Users.create({ name, email, password: hashedPassword })
        await newuser.save();

        res.status(201).json({ message: "User Registered Successfully" });

    } catch (error) {
        res.status(500).json({message: "Error: ", error})
    }
}

export async function Login(req, res) {
    const {email, password} = req.body

    try {
        const user = await Users.findOne({email})
        if(!user) {
            return res.status(400).json({message: "User Not Found"})
        }
    
        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword) {
            return res.status(400).json({message: "Wrong Credentials"})
        }
        
        const jwtSecret = process.env.JWT_SECRET
        const token = jwt.sign({ id: user._id }, jwtSecret)
        res.json({token, userID: user._id})

    } catch (error) {
        res.status(500).json({message: "Error: ", error})
    }
}
