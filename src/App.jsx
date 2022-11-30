import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailsDisplay from './pages/DetailsPage';
import PicturesDisplay from './pages/MainPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<PicturesDisplay />} />
          <Route path="/Details/:title" element={<DetailsDisplay />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
