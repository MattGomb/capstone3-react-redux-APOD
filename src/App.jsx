import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailsDisplay from './pages/DetailsPage';
import PicturesDisplay from './pages/MainPage';
import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<PicturesDisplay />} />
          <Route path="/Details/:title" element={<DetailsDisplay />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
