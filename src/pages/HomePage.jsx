

// src/pages/HomePage.jsx
import React from "react";
import "./HomePage.css";

const dummyQuestions = [
  {
    id: 1,
    title: "How to join 2 columns in a data set to make a separate column in SQL?",
    description:
      "I do not know the code for it as I am a beginner. As an example what I need to do is like there is a column 1 containing First name , and column 2 consists of last name I want a column to combine ...",
    tags: ["SQL", "Beginner", "Data"],
    username: "User123",
    answers: 5,
  },
  {
    id: 2,
    title: "Difference between var, let and const in JavaScript",
    description:
      "I am new to JS and confused between var, let, and const. When should I use each?",
    tags: ["JavaScript", "Variables"],
    username: "Coder101",
    answers: 3,
  },
  {
    id: 3,
    title: "How to center a div using CSS?",
    description:
      "Trying to vertically and horizontally center a div using CSS but not getting proper result.",
    tags: ["CSS", "Layout"],
    username: "FrontendDev",
    answers: 2,
  },
];

function HomePage() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Your Knowledge, collaboratively shared</h1>
        <button className="ask-button">+ Ask a Question</button>
      </div>

      <div className="filter-bar">
        <select className="filter-select">
          <option>Newest</option>
          <option>Unanswered</option>
          <option>Most Answered</option>
        </select>
        <input type="text" placeholder="Search questions..." className="search-bar" />
      </div>

      <div className="question-list">
        {dummyQuestions.map((q) => (
          <div key={q.id} className="question-item">
            <div className="question-left">
              <h3 className="question-title">{q.title}</h3>
              <p className="question-desc">{q.description}</p>
              <div className="tags">
                {q.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="username">👤 {q.username}</p>
            </div>
            <div className="answer-count">
              <strong>{q.answers}</strong>
              <span> Answers</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <button key={num} className="page-button">{num}</button>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

