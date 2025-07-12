import Question from '../models/Question.js';

export const askQuestion = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const question = new Question({
      title,
      description,
      tags,
      user: req.user.id, // Assuming auth middleware adds req.user
    });
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate('user', 'username');
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};