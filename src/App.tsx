import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Notes from './pages/Notes';
import Tucome from './pages/detailed/Tucome';
import Savefood from './pages/detailed/Savefood';
import Coddie from './pages/detailed/Coddie';
import NutriSync from './pages/detailed/NutriSync';
import Ecotions from './pages/detailed/Ecotions';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

export default function App() {
  return (
    <Router>
      <div className='bg-[#283831] min-h-screen lg:px-[200px] md:px-[100px] px-[40px]'>
        <Navbar />
        <Routes>
          <Route path="/Work" element={<Work />} />
          <Route path="/" element={<About />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Tucome" element={<Tucome />} />
          <Route path="/Savefood" element={<Savefood />} />
          <Route path="/Coddie" element={<Coddie />} />
          <Route path="/NutriSync" element={<NutriSync />} />
          <Route path="/Ecotions" element={<Ecotions />} />
        </Routes>
      </div>
    </Router>
  );
}
