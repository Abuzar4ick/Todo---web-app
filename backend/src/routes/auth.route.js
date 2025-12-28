import { Router } from "express";
const router = Router();
import { signup, login, logout } from "../controllers/auth.controller.js";
import { protectRouter } from "../middleware/auth.middleware.js";
import { signupSchema, loginSchema } from "../lib/zod.js";
import { validate } from "../middleware/validate.js";

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);
router.post("/logout", protectRouter, logout);

router.get("/check", protectRouter, (req, res) => res.status(200).json(req.user));

export default router;
