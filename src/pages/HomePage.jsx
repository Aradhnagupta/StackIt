

// // src/pages/HomePage.jsx
// import React from "react";
// import "./HomePage.css";

// const dummyQuestions = [
//   {
//     id: 1,
//     title: "How to join 2 columns in a data set to make a separate column in SQL?",
//     description:
//       "I do not know the code for it as I am a beginner. As an example what I need to do is like there is a column 1 containing First name , and column 2 consists of last name I want a column to combine ...",
//     tags: ["SQL", "Beginner", "Data"],
//     username: "User123",
//     answers: 5,
//   },
//   {
//     id: 2,
//     title: "Difference between var, let and const in JavaScript",
//     description:
//       "I am new to JS and confused between var, let, and const. When should I use each?",
//     tags: ["JavaScript", "Variables"],
//     username: "Coder101",
//     answers: 3,
//   },
//   {
//     id: 3,
//     title: "How to center a div using CSS?",
//     description:
//       "Trying to vertically and horizontally center a div using CSS but not getting proper result.",
//     tags: ["CSS", "Layout"],
//     username: "FrontendDev",
//     answers: 2,
//   },
//   {
//     id: 4,
//     title: "What is the difference between == and === in JavaScript?",
//     description:
//       "I'm confused about the difference between double and triple equals.",
//     tags: ["JavaScript", "Equality"],
//     username: "DevDoubt",
//     answers: 7,
//   },
//   {
//     id: 5,
//     title: "How to use useEffect in React?",
//     description:
//       "I want to fetch data from an API when the component mounts.",
//     tags: ["React", "Hooks"],
//     username: "HookLearner",
//     answers: 4,
//   },
// ];

// function HomePage() {
//   return (
//     <div className="home-container">
//       <div className="home-header">
//         <div className="header-left">
//           <h1 className="home-title">Your Knowledge, Collaboratively Shared</h1>
//           <p className="home-subtitle">A space to ask, answer, and grow together.</p>
//         </div>
//         <button className="ask-button">+ Ask a Question</button>
//       </div>

//       <div className="filter-bar">
//         <select className="filter-select">
//           <option>Newest</option>
//           <option>Unanswered</option>
//           <option>Most Answered</option>
//         </select>
//         <input type="text" placeholder="Search questions..." className="search-bar" />
//       </div>

//       <div className="question-list">
//         {dummyQuestions.map((q) => (
//           <div key={q.id} className="question-item">
//             <div className="question-left">
//               <p className="questiontitle">{q.title}</p>
//               <p className="question-desc">{q.description}</p>
//               <div className="tags">
//                 {q.tags.map((tag, i) => (
//                   <span key={i} className="tag">
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//               <p className="username">👤 {q.username}</p>
//             </div>
//             <div className="answer-count">
//               <strong>{q.answers}</strong>
//               <span> &nbsp;Answers</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="pagination">
//         {[1, 2, 3, 4, 5, 6, 7].map((num) => (
//           <button key={num} className="page-button">{num}</button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

// src/pages/HomePage.jsx
import React, { useState } from "react";
import "./HomePage.css";

const initialQuestions = [
  {
    id: 1,
    title: "How to join 2 columns in a data set to make a separate column in SQL?",
    description:
      "I do not know the code for it as I am a beginner. As an example what I need to do is like there is a column 1 containing First name , and column 2 consists of last name I want a column to combine ...",
    tags: ["SQL", "Beginner", "Data"],
    username: "User123",
    answers: 5,
    votes: 0,
  },
  {
    id: 2,
    title: "Difference between var, let and const in JavaScript",
    description:
      "I am new to JS and confused between var, let, and const. When should I use each?",
    tags: ["JavaScript", "Variables"],
    username: "Coder101",
    answers: 3,
    votes: 0,
  },
  {
    id: 3,
    title: "How to center a div using CSS?",
    description:
      "Trying to vertically and horizontally center a div using CSS but not getting proper result.",
    tags: ["CSS", "Layout"],
    username: "FrontendDev",
    answers: 2,
    votes: 0,
  },
  {
    id: 4,
    title: "What is the difference between == and === in JavaScript?",
    description: "I'm confused about the difference between double and triple equals.",
    tags: ["JavaScript", "Equality"],
    username: "DevDoubt",
    answers: 7,
    votes: 0,
  },
  {
    id: 5,
    title: "How to use useEffect in React?",
    description: "I want to fetch data from an API when the component mounts.",
    tags: ["React", "Hooks"],
    username: "HookLearner",
    answers: 4,
    votes: 0,
  },
];

function HomePage() {
  const [questions, setQuestions] = useState(initialQuestions);

  const handleVote = (id, type) => {
  const updatedQuestions = questions.map((q) => {
    if (q.id === id) {
      const up = q.upvotes || 0;
      const down = q.downvotes || 0;
      return {
        ...q,
        upvotes: type === "up" ? up + 1 : up,
        downvotes: type === "down" ? down + 1 : down,
      };
    }
    return q;
  });
  setQuestions(updatedQuestions);
};


  return (
    <div className="home-container">
      <div className="home-header">
        <div className="header-left">
          <h1 className="home-title">Your Knowledge, Collaboratively Shared</h1>
          <p className="home-subtitle">A space to ask, answer, and grow together.</p>
        </div>
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
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <div className="question-left">
              <p className="questiontitle">{q.title}</p>
              <p className="question-desc">{q.description}</p>

              <div className="tags">
                {q.tags.map((tag, i) => (
                  <span key={i} className="tag">#{tag}</span>
                ))}
              </div>

              <div className="meta-info">
                <p className="username">👤 {q.username}</p>
                <div className="vote-inline">
                  <button onClick={() => handleVote(q.id, "up")} title="Upvote">↑</button>
                   <span>{q.upvotes}</span>
                   <button onClick={() => handleVote(q.id, "down")} title="Downvote">↓</button>
                   <span>{q.downvotes}</span>

                </div>
              </div>
            </div>

            <div className="answer-count">
              <strong>{q.answers}</strong>
              <span> &nbsp;Answers</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {[1, 2, 3, 4,5,6,7].map((num) => (
          <button key={num} className="page-button">{num}</button>
        ))}
      </div>
    </div>
  );
}

export default HomePage;



