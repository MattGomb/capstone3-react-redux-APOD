import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import Details from './pages/DetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route />
          <Route />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
