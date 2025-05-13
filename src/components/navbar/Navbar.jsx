import React, { useRef, useState, useEffect } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const headerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="header">
      <Link to="/hub">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      
      <button className="nav-btn" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`navbar ${isMenuOpen ? 'responsive_nav' : ''}`}>
        <ScrollLink 
          to="about" 
          smooth={true} 
          duration={800} 
          offset={-80} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          className="nav-link"
        >
          About
        </ScrollLink>
        <ScrollLink 
          to="education" 
          smooth={true} 
          duration={800} 
          offset={-80} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          className="nav-link"
        >
          Education
        </ScrollLink>
        <ScrollLink 
          to="projects" 
          smooth={true} 
          duration={800} 
          offset={-80} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          className="nav-link"
        >
          Projects
        </ScrollLink>
        <ScrollLink 
          to="skills" 
          smooth={true} 
          duration={800} 
          offset={-80} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          className="nav-link"
        >
          Skills
        </ScrollLink>
        <ScrollLink 
          to="contact" 
          smooth={true} 
          duration={800} 
          offset={-80} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          className="nav-link"
        >
          Contact
        </ScrollLink>
        <Link to="/cv" className="cv" onClick={closeMenu}>
          <span>CV</span>
          <i></i>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
