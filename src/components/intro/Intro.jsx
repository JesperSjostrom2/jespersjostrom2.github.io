import React from 'react'
import './intro.css'
import portfolioimg from '../../assets/imagebg.png'
import  { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'

const Intro = () => {
  return (
    <section className="home" id="home">
    <div className="intro-container">
      <div className="intro-content">
        <h1>Jesper Sjöström</h1>
        <h3>Front End Developer</h3>
        <p>Passionate Frontend Developer with expertise in crafting visually appealing and user-friendly websites. Bringing creativity and technical expertise to deliver immersive web experiences.</p>
        <div className="intro-socials">
        <a href="https://www.linkedin.com/in/jesper-sj%C3%B6str%C3%B6m-521995232/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/JesperSjostrom2?tab=overview&from=2023-04-01&to=2023-04-28" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/jespersjostrom00/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
      </div>
        <a href="#contact" className="btn-cta">Let's talk</a>
          </div>

          <div className="intro-img">
            <div className="intro-glowing-circle">
              <span></span>
              <span></span>
              <div className="image">
              <img src={portfolioimg} className="App-logo" alt="logo" />
              </div>
            </div>
          </div>
        </div>
        </section>
  )
}

export default Intro