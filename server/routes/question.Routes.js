import express from "express";
import { getAllQuestions, askQuestion } from "../controllers/question.Controller.js";

const router = express.Router();

// GET /api/questions
router.get("/", getAllQuestions);

// POST /api/questions/ask
router.post("/ask", askQuestion);

export default router;