// Mock controller functions

// GET /api/questions
const getAllQuestions = (req, res) => {
  res.status(200).json({
    message: "All questions fetched (mock)",
    questions: [],
  });
};

// POST /api/questions/ask
const askQuestion = (req, res) => {
  const { title, description, tags } = req.body;

  if (!title || !description || !tags) {
    return res.status(400).json({ error: "All fields are required" });
  }

  res.status(201).json({
    message: "Question posted (mock)",
    question: { title, description, tags },
  });
};

module.exports = {
  getAllQuestions,
  askQuestion,
};
