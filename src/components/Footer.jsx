// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <p className="footer-text">
          Made with 💙 by <Link to="/" className="footer-brand">StackIt</Link>
        </p>
        <div className="footer-links">
          <Link to="/" className="footer-nav">Home</Link>
          <Link to="/ask" className="footer-nav">Ask</Link>
          <Link to="/login" className="footer-nav">Login</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


