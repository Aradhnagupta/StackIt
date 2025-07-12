import './AskQuestion.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AskQuestion() {
  return (
    <div className="ask-container">
      <h2>Ask a New Question</h2>
      <input type="text" placeholder="Title" />
      <ReactQuill placeholder="Describe your question..." />
      <input type="text" placeholder="Tags (comma separated)" />
      <button>Submit</button>
    </div>
  );
}

export default AskQuestion;