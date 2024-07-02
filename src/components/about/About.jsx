import React, {useEffect} from 'react'
import './about.css'
import aboutimage from '../../assets/aboutimg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=> {
    AOS.init({duration: 1000});
    AOS.init({once: true});
  }, []);

  return (
    <section className="about" id="about">
    <div className="about-container">
    <div className="introimg">
            <div className="intro-glowing-circle">
              <div className="image" data-aos="fade-up">
              <img src={aboutimage} className="App-logo" alt="logo" />
              </div>
            </div>
          </div>
        <div className="about-content">
        <h2 className="heading" data-aos="fade-up" data-aos-delay="100"> My <span> Journey </span></h2>
        <h3 data-aos="fade-up" data-aos-delay="150"> Jesper Sjöström - 24 y/o - Stockholm / Helsinki </h3>
        <p data-aos="fade-up" data-aos-delay="200">
          My journey in <span>web development</span> has been a progression of discovery:
          <ul><li>At Huddinge Gymnasiet, I studied Informatics and Media Technology for 3 years, sparking my interest in programming.
       </li>
        <li>A 4th technical year at <span>Östra Gymnasiet</span> where we did mostly programming helped me discover my passion for front-end development instead of backend.
        </li>
        <li>I then graduated as a Frontend Developer from <span>KYH Yrkeshögskola's</span> two-year program.
        </li>
        </ul>
        My practical experience includes an internship at <span>Vello,</span> where I worked as a developer in a professional setting, and a comprehensive branding project for <span>Cafe & Bistro Kerma,</span> where I designed their logo and developed their website from scratch.
        These experiences have reinforced my passion for creating clean, functional, and visually appealing web solutions.
        </p>
        <a href="#contact" className="btn-cta" data-aos="fade-up" data-aos-delay="350">Say Hello!</a>
        </div>
      </div>
      </section>
  )
}

export default About