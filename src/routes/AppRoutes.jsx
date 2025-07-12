import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import SignupPage from '../pages/SignupPage.jsx';
import AskQuestion from '../pages/AskQuestion.jsx';
import QuestionDetail from '../pages/QuestionDetail.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/ask" element={<AskQuestion />} />
      <Route path="/question/:id" element={<QuestionDetail />} />
    </Routes>
  );
}

export default AppRoutes;

