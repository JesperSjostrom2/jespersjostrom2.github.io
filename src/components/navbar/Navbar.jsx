import React from 'react'
import './navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react';

const Navbar = () => {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  const closeNavbar = () => {
    navRef.current.classList.remove('responsive_nav');
  };

  return (
    <header class="header">
        <a href="#" class="logo"> <span>J</span>esper. </a>

        <nav ref={navRef} class="navbar">
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