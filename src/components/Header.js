import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" id="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/Images/LOGO.png'} alt="ASRC Logo" style={{ width: '150px', height: 'auto' }} />
      </div>
      <div className={`r-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="menuList">
          <li><a href="#home" className="nav">Home</a></li>
          <li><a href="#about" className="nav">About</a></li>
          <li><a href="#team" className="nav">Team</a></li>
          <li><a href="#projects" className="nav">Projects</a></li>
          <li><a href="#contact" className="nav">Contact</a></li>
        </ul>
      </div>
      <i className="menu-bar ri-menu-line" onClick={toggleMenu}></i>
    </header>
  );
}

export default Header;
