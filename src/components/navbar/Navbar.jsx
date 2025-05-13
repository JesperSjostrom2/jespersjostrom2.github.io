import React, { useRef, useState, useEffect } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, Events } from 'react-scroll';

const Navbar = () => {
  const headerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  // Handle scroll spy cleanup
  useEffect(() => {
    if (location.pathname !== '/') {
      // Disable all scroll spy events
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      // Reset scroll position
      window.scrollTo(0, 0);
    } else {
      // Re-enable scroll spy events on home page
      Events.scrollEvent.register('begin', () => {});
      Events.scrollEvent.register('end', () => {});
    }

    return () => {
      // Cleanup scroll events
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, [location]);

  const renderNavLinks = () => {
    if (location.pathname !== '/') {
      return (
        <>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/cv" className="cv" onClick={closeMenu}>
            <span>CV</span>
            <i></i>
          </Link>
        </>
      );
    }

    return (
      <>
        <ScrollLink 
          to="about" 
          smooth={true} 
          duration={800} 
          offset={-80} 
          onClick={closeMenu}
          spy={true}
          activeClass="active"
          className="nav-link"
          isDynamic={true}
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
          isDynamic={true}
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
          isDynamic={true}
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
          isDynamic={true}
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
          isDynamic={true}
        >
          Contact
        </ScrollLink>
        <Link to="/cv" className="cv" onClick={closeMenu}>
          <span>CV</span>
          <i></i>
        </Link>
      </>
    );
  };

  return (
    <header ref={headerRef} className="header">
      <Link to="/hub">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      
      <button className="nav-btn" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`navbar ${isMenuOpen ? 'responsive_nav' : ''}`}>
        {renderNavLinks()}
      </nav>
    </header>
  );
};

export default Navbar;
