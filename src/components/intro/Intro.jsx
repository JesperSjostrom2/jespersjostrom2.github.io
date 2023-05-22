import React from 'react'
import './intro.css'
import portfolioimg from '../../assets/imagebg.png'
import  { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'

const Intro = () => {
  return (
    <section class="home" id="home">
    <div className="intro-container">
      <div className="intro-content">
        <h1>Jesper Sjöström</h1>
        <h3>Front End Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo veritatis quaerat dolorem libero officia expedita odit ullam recusandae at.</p>
        <div className="intro-socials">
        <a href="https://www.linkedin.com/in/jesper-sj%C3%B6str%C3%B6m-521995232/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/JesperSjostrom2?tab=overview&from=2023-04-01&to=2023-04-28"target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/jespersjostrom00/"target="_blank"><FaInstagram/></a>
      </div>
        <a href="" className="btn-cta">Let's talk</a>
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