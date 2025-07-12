// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">StackIt</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ask">Ask Question</Link></li>
        <li><Link to="/questions">Browse Questions</Link></li>
      </ul>

      <div className="navbar-search">
        <input type="text" placeholder="Search questions..." />
        <button>🔍</button>
      </div>

      <div className="navbar-auth">
        {/* Replace with conditional rendering later */}
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
