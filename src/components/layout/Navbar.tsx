import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  window.addEventListener('scroll', () => {
    if(window.scrollY > 500) setIsVisible(true)
    else setIsVisible(false)
  })
  

  return (
    <nav className={`font-segoe_ui fixed font-medium top-12 right-0 left-0 text-white items-center flex justify-center txt-[24px]`}>
      <ul className={`p-3 rounded-full flex gap-10 items-center w-fit ${isVisible && 'bg-black/10 backdrop-blur-sm '}`}>
        <li>
          <Link
            className={`py-1 px-3 duration-300 rounded-full hover:bg-white/20 ${
              location.pathname === '/Work' ? 'bg-white/20' : ''
            }`}
            to="/Work"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className={`py-1 px-3 duration-300 rounded-full hover:bg-white/20 ${
              location.pathname === '/' ? 'bg-white/20' : ''
            }`}
            to="/"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`py-1 px-3 duration-300 rounded-full hover:bg-white/20 ${
              location.pathname === '/Notes' ? 'bg-white/20' : ''
            }`}
            to="/Notes"
          >
            Notes
          </Link>
        </li>
        <li>
          <Link
            className={`py-1 px-3 duration-300 rounded-full hover:bg-white/20 ${
              location.pathname === '/Contact' ? 'bg-white/20' : ''
            }`}
            to="/Contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
