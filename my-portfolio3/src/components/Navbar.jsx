import React, { useState }  from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
  
     <div className="logo">
        <img src="https://i.fbcd.co/products/resized/resized-750-500/rm-letter-logo-designs-2-6279fa709985f9b94d323813c0bf6eb7f823f52709b085cb5335716e02a4d135.jpg" alt="Logo" />
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <button className="cv-button" onClick={() => window.open('https://www.freecodecamp.org/fcc26a7b363-6241-4a85-8fe6-5441e553b973',  '_blank.' )}>Download <span>My CV</span> </button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

    </nav>
  );
}

export default Navbar;

