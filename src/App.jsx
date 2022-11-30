import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailsDisplay from './pages/FilmCardDetailsPage';
import FilmsDisplay from './pages/FilmsPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<FilmsDisplay />} />
          <Route path="/Details/:id" element={<DetailsDisplay />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
