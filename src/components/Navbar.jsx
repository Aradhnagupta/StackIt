

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NotificationBell from './NotificationBell.jsx';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">StackIt</Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        &#9776;
      </div>

      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        {/* Close button inside the menu */}
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          &times;
        </div>

        <ul className="navbar-links">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/ask" onClick={() => setMenuOpen(false)}>Ask</Link></li>
        </ul>
        <div className="navbar-auth">
           <div className="auth-right">
           <NotificationBell />
          <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/signup" className="signup-btn" onClick={() => setMenuOpen(false)}>Sign Up</Link>
           </div>
           
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



