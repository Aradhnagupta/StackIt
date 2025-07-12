import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <h1>StackIt</h1>
      <button>Ask New Question</button>
      <div className="question-list">
        <div className="question-item">
          <h3>How to join 2 columns in SQL?</h3>
          <p>I want to merge two columns in SQL...</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;