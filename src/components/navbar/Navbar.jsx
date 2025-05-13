import React, { useRef, useState, useEffect } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();
  const headerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > headerRef.current.offsetTop) {
        headerRef.current.classList.add('sticky');
      } else {
        headerRef.current.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <Link to="/">
        <img
          src={logo}
          className={`logo ${isOpen ? 'logo-open' : ''}`}
          alt="logo"
        />
      </Link>
      <nav ref={navRef} className={`navbar ${isOpen ? 'responsive_nav' : ''}`}>
        <a href="/#about" onClick={closeNavbar}>About</a>
        <a href="/#education" onClick={closeNavbar}>Education</a>
        <a href="/#projects" onClick={closeNavbar}>Projects</a>
        <a href="/#skills" onClick={closeNavbar}>Skills</a>
        <a href="/#contact" onClick={closeNavbar}>Contact</a>
        <Link to="/hub" className="nav-link" onClick={closeNavbar}>Hub</Link>
        <button className="cv">
          <a href="https://github.com/jespersjostrom2/my-cv/raw/main/updatedcv.pdf" download="cv.pdf">
            <span>Download CV</span>
            <i></i>
          </a>
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
