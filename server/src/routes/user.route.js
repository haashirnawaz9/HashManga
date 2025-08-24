import express from "express";
import { Login, Register } from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post('/register', Register)
router.post('/login', Login)
router.post("/google-login", GoogleLogin);

router.get("/protected", protect, (res) => res.json({ message: "You are authorized" }));


export { router as userRouter };