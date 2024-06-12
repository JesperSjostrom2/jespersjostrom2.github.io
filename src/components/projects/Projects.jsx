import React, { useEffect } from 'react';
import './projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import kermapng from '../../assets/kermaprojects.png';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.init({ once: true });
  }, []);

  return (
<section className="projects" id="projects">
  <div className="projects-container">
    <div className="project-content">
      <h2 className="project-header" data-aos="fade-up" data-aos-delay="300">
        My <span> Projects </span>
      </h2>
    </div>

    <div className="card-container">
      <div className="header-card">
        <img src={kermapng} alt="kerma" />
        <div className="card-text">Cafe & Bistro Kerma</div>
      </div>

      <div className="sub-card">
        <img src={kermapng} alt="sub1" />
        <div className="card-text">Sub Card 1</div>
      </div>

      <div className="sub-card">
        <img src={kermapng} alt="sub2" />
        <div className="card-text">Sub Card 2</div>
      </div>

      <div className="sub-card">
        <img src={kermapng} alt="sub3" />
        <div className="card-text">Sub Card 3</div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Projects;
