import React, {useEffect} from 'react'
import './about.css'
import aboutimage from '../../assets/aboutimg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=> {
    AOS.init({duration: 1000});
  }, []);

  return (
    <section className="about" id="about">
    <div className="about-container">
    <div className="introimg">
            <div className="intro-glowing-circle" data-aos="fade-up" data-aos-delay="200">
              <div className="image">
              <img src={aboutimage} className="App-logo" alt="logo" />
              </div>
            </div>
          </div>
        <div className="about-content">
        <h2 class="heading" data-aos="fade-up" data-aos-delay="100"> About <span> Me</span></h2>
        <h3 data-aos="fade-up" data-aos-delay="300"> Jesper Sjöström - 23 y/o - Stockholm / Helsinki </h3>
        <p data-aos="fade-up" data-aos-delay="400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maiores voluptatum perferendis odio fugiat ratione modi. Necessitatibus, ipsum accusantium ipsam beatae corrupti exercitationem quo. Dolorem in illum ut facere at!</p>
        <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nobis dolor dolorum nulla distinctio enim, tempora delectus ratione tempore doloribus iure reiciendis cumque eligendi nihil ut dolore architecto eius eaque.</p>
        <a href="#contact" className="btn-cta" data-aos="fade-up" data-aos-delay="1000">Say Hello!</a>
        </div>
      </div>
      </section>
  )
}

export default About