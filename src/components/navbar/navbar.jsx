// Navbar.jsx
import { useState } from 'react';
import './Navbar.css'; // Assuming you have some CSS styles

const Navbar = () => {
  const [active, setActive] = useState('#resume');

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-name">Ratthabhumi Peansukmanee</span>
        <span className="navbar-role">Editor</span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#resume" className={active === '#resume' ? 'active' : ''} onClick={() => handleClick('#resume')}>Resume</a>
        </li>
        <li className="navbar-item">
          <a href="#projects" className={active === '#projects' ? 'active' : ''} onClick={() => handleClick('#projects')}>Projects</a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className={active === '#contact' ? 'active' : ''} onClick={() => handleClick('#contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
