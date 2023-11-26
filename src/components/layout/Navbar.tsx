

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="font-segoe_ui fixed font-medium top-12 right-0 left-0 text-white items-center flex justify-center txt-[24px]">
      <ul className="flex gap-10 items-center w-fit">
        <li><Link to="/Work">Work</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/Notes">Notes</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
