import express from 'express';
import { getAllQuestions, askQuestion } from '../controllers/questionController.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', getAllQuestions);
router.post('/ask', requireAuth, askQuestion);

export default router;
