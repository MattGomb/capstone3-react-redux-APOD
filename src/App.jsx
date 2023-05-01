import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailsDisplay from './pages/DetailsPage';
import MainDisplay from './pages/MainPage';
import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainDisplay />} />
          <Route path="/Details/:title" element={<DetailsDisplay />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
