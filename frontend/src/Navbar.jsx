
import { Link } from "react-scroll";
import './Navbar.css'; // Import Navbar styles
import logo from './assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" /> {/* Add your logo here */}
      </div>
      <ul className="nav-list">
        <li><Link to="banner" smooth={true} duration={500} className="nav-link">Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} className="nav-link">About</Link></li>
        <li><Link to="services" smooth={true} duration={500} className="nav-link">Services</Link></li>
        <li><Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link></li>
      </ul>
      <div className="navbar-right">
        <input type="text" className="search" placeholder="Search..." />
        <button className="sign-in-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
