


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function AppWrapper() {
  const location = useLocation();
  const hideForAuthPages = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="app-container">
      {!hideForAuthPages && <Navbar />}
      <AppRoutes />
      {!hideForAuthPages && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
