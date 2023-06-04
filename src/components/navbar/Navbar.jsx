import React, { useRef, useState } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <a href="#home">
        <img
          src={logo}
          className={`logo ${isOpen ? 'logo-open' : ''}`}
          alt="logo"
        />
      </a>
      <nav ref={navRef} className={`navbar ${isOpen ? 'responsive_nav' : ''}`}>
        <a href="#about" onClick={closeNavbar}>
          About
        </a>
        <a href="#education" onClick={closeNavbar}>
          Education
        </a>
        <a href="#skills" onClick={closeNavbar}>
          Skills
        </a>
        <a href="#contact" onClick={closeNavbar}>
          Contact
        </a>
        <button className="cv">
          <span>CV</span>
          <i></i>
        </button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;