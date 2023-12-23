import express from "express";
const router = express.Router();
import { LoginIn, signUp } from "../Controllers/AuthController.js";

router.post("/login", LoginIn);
router.post("/signIn", signUp);

export default router;
