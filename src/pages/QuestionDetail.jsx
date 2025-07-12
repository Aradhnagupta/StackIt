import './QuestionDetail.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuestionDetail() {
  return (
    <div className="detail-container">
      <h2>How to join 2 columns in SQL?</h2>
      <p>I want to merge two columns...</p>
      <h3>Answers</h3>
      <div className="answer">
        <p>Use CONCAT or CONCAT_WS depending on SQL dialect.</p>
      </div>
      <h4>Submit Your Answer</h4>
      <ReactQuill placeholder="Write your answer..." />
      <button>Submit Answer</button>
    </div>
  );
}

export default QuestionDetail;