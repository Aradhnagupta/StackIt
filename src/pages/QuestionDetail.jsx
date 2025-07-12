// src/pages/QuestionDetail.jsx
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./QuestionDetail.css";

function QuestionDetail() {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit answer logic here
    console.log("Submitted Answer:", answer);
  };

  return (
    <div className="detail-container">
      <div className="question-box">
        <h2 className="question-title">🧩 How to join 2 columns in SQL?</h2>
        <p className="question-body">
          I want to merge two columns in SQL. For example, I have a column for first name and one for last name, and I want to display the full name in a single column.
        </p>
        <div className="tags">
          <span className="tag">#SQL</span>
          <span className="tag">#Database</span>
          <span className="tag">#Beginner</span>
        </div>
      </div>

      <div className="answers-section">
        <h3 className="section-heading"> Top Answer</h3>
        <div className="answer">
          <p>
            You can use `CONCAT(first_name, ' ', last_name)` or `CONCAT_WS(' ', first_name, last_name)` depending on your SQL version.
          </p>
          <span className="answered-by">— Answered by DataGuru</span>
        </div>
      </div>

      <div className="submit-answer">
        <h4 className="section-heading"> Submit Your Answer</h4>
        <form onSubmit={handleSubmit}>
          <ReactQuill
            value={answer}
            onChange={setAnswer}
            placeholder="Write your answer with clarity..."
            className="quill-editor"
          />
          <button type="submit" className="submit-btn"> Submit Answer</button>
        </form>
      </div>
    </div>
  );
}

export default QuestionDetail;
