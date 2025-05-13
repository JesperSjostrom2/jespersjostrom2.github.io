import React, { useEffect, useState } from 'react';
import './cv.css';
import { FaFileDownload, FaFileAlt, FaArrowLeft, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const CV = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set document title
    document.title = "Jepps | CV";
    
    // Return a cleanup function to reset the title
    return () => {
      document.title = "Jesper Sjöström";
    };
  }, []);

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="cv-page">
      <div className="cv-container">
        <div className="cv-left-panel">
          <div className="cv-header">
            <Link to="/" className="back-button">
              <FaArrowLeft />
              <span>Back to Portfolio</span>
            </Link>
            <h1>Interactive CV</h1>
            <div className="download-buttons">
              <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download className="download-button original-cv">
                <FaFileDownload />
                <span>Download CV</span>
              </a>
              <a href={`${process.env.PUBLIC_URL}/Jesper_Sjostrom_FE_CV.pdf`} download className="download-button ats-cv">
                <FaFileAlt />
                <span>Simplified Version</span>
              </a>
            </div>
          </div>
          
          <div className="cv-info-footer">
            <div className="info-card">
              <h2>About My CV</h2>
              <p>This interactive 3D CV was created using Spline, showcasing my skills and experience in a unique format. Feel free to explore the 3D environment by clicking and dragging in the background.</p>
              <p>For a more traditional version, download the PDF using the buttons above.</p>
              
              <h2>Skills Highlight</h2>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">React</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">CSS/SCSS</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Backbone.js</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Git</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Figma</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cv-right-panel">
          <div className="cv-interactive-container">
            {isLoading && (
              <div className="loading-overlay">
                <div className="loading-spinner"></div>
              </div>
            )}
            <div className="spline-wrapper">
              <Spline
                scene="https://prod.spline.design/IvAKKcRHm80QDPbv/scene.splinecode"
                onLoad={handleSplineLoad}
              />
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Middle mouse to move around, Left click to turn camera, scroll to zoom <FaChevronDown className="scroll-arrow" /></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV; 