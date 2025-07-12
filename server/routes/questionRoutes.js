const express = require("express");
const router = express.Router();
const {
  getAllQuestions,
  askQuestion,
} = require("../controllers/questionController");

// GET /api/questions
router.get("/", getAllQuestions);

// POST /api/questions/ask
router.post("/ask", askQuestion);

module.exports = router;
