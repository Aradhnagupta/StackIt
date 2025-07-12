// import HomePage from './pages/HomePage.jsx';
// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }

// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
  import AppRoutes from './routes/AppRoutes.jsx';
import Navbar from './components/Navbar.jsx';
// import './main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;

