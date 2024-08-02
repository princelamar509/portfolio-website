import React, { useState } from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun, FaInstagram } from "react-icons/fa";
import profilePicture from "../assets/hero-image.jpg"; // Replace with your picture

function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className={`hero ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="hero-content">
        <h2 className="heading-lg">Hello, I'm Madeus Rene</h2>
        <h1 className="heading-md">Front End <span className="highlight">Developer</span></h1>
        <p className="paragraph">
          I'm a passionate front end developer with a strong foundation in HTML, CSS, and JavaScript.
        </p>
        <div className="social-icons">
          <a href="https://github.com/princelamar509" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/madeus-rene-294196318/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
        <div className="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </div>
      </div>
      <div className="hero-image">
        <img src={profilePicture} alt="Madeus Rene" />
      </div>
    </div>
  );
}

export default Hero;
