import React, { useEffect } from 'react';
import './projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import kermapng from '../../assets/kermabg.JPG';
import github from '../../assets/github.png';
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.init({ once: true });
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="project-content">
          <h2 className="project-header" data-aos="fade-up" data-aos-delay="100">
            My <span> Projects </span>
          </h2>
        </div>

        <div className="card-container">
          <div className="header-card" data-aos="fade-up" data-aos-delay="150">
            <a href="https://www.tahkonkerma.fi" target="_blank" rel="noopener noreferrer" >
              <div className="image-container">
                <img src={kermapng} alt="kerma" />
                <div className="image-overlay"></div>
              </div>
            </a>
            <div className="card-text-main">Cafe & Bistro Kerma</div>
            <div className="project-link">
              <a href="https://www.tahkonkerma.fi/closed" target="_blank" rel="noopener noreferrer">View project <FaArrowRight className="arrow-icon" /></a>
            </div>
          </div>

          <div className="other-projects">
            <h1 data-aos="fade-up" data-aos-delay="100" className="school-projects">
              School Projects
            </h1>
          </div>

          <div className="sub-card">
            <a href="https://github.com/JesperSjostrom2/JS3Project" target="_blank" rel="noopener noreferrer">
              <div className="image-container-sub" data-aos="fade-up" data-aos-delay="200">
                <img src={github} alt="project1" />
              </div>
            </a>
            <div className="card-text" data-aos="fade-up" data-aos-delay="250">Blogify</div>
            <div className="project-link">
              <a href="https://github.com/JesperSjostrom2/JS3Project" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="300">View project <FaArrowRight className="arrow-icon" /></a>
            </div>
          </div>

          <div className="sub-card">
            <a href="https://github.com/JesperSjostrom2/js3-mern" target="_blank" rel="noopener noreferrer">
              <div className="image-container-sub" data-aos="fade-up" data-aos-delay="250">
                <img src={github} alt="project2" />
              </div>
            </a>
            <div className="card-text" data-aos="fade-up" data-aos-delay="300">Mern project</div>
            <div className="project-link">
              <a href="https://github.com/JesperSjostrom2/js3-mern" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="350">View project <FaArrowRight className="arrow-icon" /></a>
            </div>
          </div>

          <div className="sub-card">
            <a href="https://github.com/JesperSjostrom2/portfolio-react" target="_blank" rel="noopener noreferrer">
              <div className="image-container-sub" data-aos="fade-up" data-aos-delay="300">
                <img src={github} alt="project3" />
              </div>
            </a>
            <div className="card-text" data-aos="fade-up" data-aos-delay="400">Old portfolio</div>
            <div className="project-link">
              <a href="https://github.com/JesperSjostrom2/portfolio-react" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="450">View project <FaArrowRight className="arrow-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
