// src/pages/SignupPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Here you can add actual signup logic
    // For now, just navigate to home
    navigate("/");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter username" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create password" required />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="redirect-text">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;

