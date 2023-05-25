import React from 'react'
import './navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef, useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    document.title = "Jesper Sjostrom | Frontend Developer"
 }, []);
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  const closeNavbar = () => {
    navRef.current.classList.remove('responsive_nav');
  };

  return (
    
    <header className="header">
        <a href="#home" className="logo"> <span>J</span>esper. </a>

        <nav ref={navRef} className="navbar">
        <a href="#about" onClick={closeNavbar}>About</a>
        <a href="#education" onClick={closeNavbar}>Education</a>
        <a href="#skills" onClick={closeNavbar}>Skills</a>
        <a href="#contact" onClick={closeNavbar}>Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}> 
          <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
        </button>
    </header>
  )
}

export default Navbar