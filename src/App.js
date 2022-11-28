import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FilmsDisplay from './pages/FilmsPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<FilmsDisplay />} />
          <Route />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
