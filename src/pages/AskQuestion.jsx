
// src/pages/AskQuestion.jsx
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./AskQuestion.css";

function AskQuestion() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, description, tags });
  };

  return (
    <div className="ask-container">
      <h2 className="ask-heading">📝 Ask a New Question</h2>
      <form className="ask-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="e.g. How to center a div in CSS?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <ReactQuill
          value={description}
          onChange={setDescription}
          placeholder="Provide detailed context, code, or error message…"
          className="quill-editor"
        />

        <label>Tags</label>
        <input
          type="text"
          placeholder="e.g. CSS, Flexbox, Centering"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <button type="submit"> Submit Question</button>
      </form>
    </div>
  );
}

export default AskQuestion;






