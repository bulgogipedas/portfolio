import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Notes from './pages/Notes';
import Tucome from './pages/detailed/Tucome'

export default function App() {
  return (
    <Router>
      <div className='bg-[#283831] min-h-screen px-[200px]'>
        <Navbar />
        <Routes>
          <Route path="/Work" element={<Work />} />
          <Route path="/" element={<About />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Tucome" element={<Tucome />} />
        </Routes>
      </div>
    </Router>
  );
}
