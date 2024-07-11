import React, { useEffect, useState } from 'react';
import './skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DiJavascript1 } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { FaBootstrap } from 'react-icons/fa';
import { DiHeroku } from 'react-icons/di';
import { TbBrandCypress } from 'react-icons/tb';
import { SiPostman } from 'react-icons/si';
import { TbBrandBackbone } from 'react-icons/tb';
import { FiFigma } from 'react-icons/fi';
import { BsGit } from 'react-icons/bs';
import { FaLess } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';

const Skills = () => {
  const [showAllIcons, setShowAllIcons] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleIcons = () => {
    setShowAllIcons(!showAllIcons);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 500) {
      setShowAllIcons(false);
    } else {
      setShowAllIcons(true);
    }
  }, [windowWidth]);

  return (
    <div className="skills-container">
      <section id="skills">
        <div className="skills-content">
          <h1 className="skills-header" data-aos="fade-up" data-aos-delay="100">
            My <span>Skills</span>
          </h1>
          <h3 className="skills-technologies" data-aos="fade-up" data-aos-delay="150">
          I have experience with the following technologies.
          </h3>

          <div className="skills-icons" data-aos="fade-up" data-aos-delay="250">
            <div className="box-box">
              <DiJavascript1 className="icons-css" />
              <h3>Javascript</h3>
            </div>
            <div className="box-box">
                  <AiFillHtml5 className="icons-css" />
                  <h3>HTML5</h3>
                </div>
                <div className="box-box">
                  <IoLogoCss3 className="icons-css" />
                  <h3>CSS3</h3>
                </div>
                <div className="box-box">
                  <FaReact className="icons-css" />
                  <h3>React</h3>
                </div>
                <div className="box-box">
                  <FaNodeJs className="icons-css" />
                  <h3>Node</h3>
                </div>
                <div className="box-box">
                  <BsGithub className="icons-css" />
                  <h3>GitHub</h3>
                </div>
                <div className="box-box">
                  <BsGit className="icons-css" />
                  <h3>Git</h3>
                </div>
                <div className="box-box">
                  <FaBootstrap className="icons-css" />
                  <h3>Bootstrap</h3>
                </div>

            {showAllIcons && (
              <>
              
                
                <div className="box-box">
                  <DiHeroku className="icons-css" />
                  <h3>Heroku</h3>
                </div>
                <div className="box-box">
                  <TbBrandCypress className="icons-css" />
                  <h3>Cypress</h3>
                </div>
                <div className="box-box">
                  <SiPostman className="icons-css" />
                  <h3>Postman</h3>
                </div>
                <div className="box-box">
                  <TbBrandBackbone className="icons-css" />
                  <h3>Backbone</h3>
                </div>
                <div className="box-box">
                  <FiFigma className="icons-css" />
                  <h3>Figma</h3>
                </div>
                <div className="box-box">
                  <FaLess className="icons-css" />
                  <h3>Less</h3>
                </div>
                <div className="box-box">
                  <FaSass className="icons-css" />
                  <h3>Sass</h3>
                </div>
              </>
            )}
          </div>

          {windowWidth < 500 && (
          <div class="dots-container" onClick={toggleIcons}>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Skills;