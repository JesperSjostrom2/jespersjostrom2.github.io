import React from 'react'
import './about.css'
import aboutimage from '../../assets/aboutimg.png'

const About = () => {
  return (
    <section className="about" id="about">
    <div className="about-container">
    <div className="introimg">
            <div className="intro-glowing-circle">
              <div className="image">
              <img src={aboutimage} className="App-logo" alt="logo" />
              </div>
            </div>
          </div>
        <div className="about-content">
        <h2 class="heading"> About <span> Me</span></h2>
        <h3> Jesper Sjöström - 23 y/o - Stockholm / Helsinki </h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maiores voluptatum perferendis odio fugiat ratione modi. Necessitatibus, ipsum accusantium ipsam beatae corrupti exercitationem quo. Dolorem in illum ut facere at!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nobis dolor dolorum nulla distinctio enim, tempora delectus ratione tempore doloribus iure reiciendis cumque eligendi nihil ut dolore architecto eius eaque.</p>
        <a href="#contact" className="btn-cta">Say Hello!</a>
        </div>
      </div>
      </section>
  )
}

export default About