import React, { useEffect, useState } from 'react';
import './cv.css';
import Spline from '@splinetool/react-spline';
import { FaFileDownload, FaFileAlt, FaArrowLeft, FaCube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CV = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    // Set document title
    document.title = "Jepps | CV";
    
    // Return a cleanup function to reset the title when component unmounts
    return () => {
      document.title = "Jesper Sjöström";
    };
  }, []);

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  const handleSplineError = () => {
    setSplineError(true);
    console.log("Spline failed to load");
  };

  return (
    <section className="cv-page">
      <div className="cv-container">
        <div className="cv-header">
          <Link to="/hub" className="back-button">
            <FaArrowLeft />
            <span>Back to Profile</span>
          </Link>
          <h1>Interactive CV</h1>
          <div className="download-buttons">
            <a href="/cv/jesper-sjostrom-cv.pdf" download className="download-button original-cv">
              <FaFileDownload />
              <span>Download CV</span>
            </a>
            <a href="/cv/jesper-sjostrom-ats-cv.pdf" download className="download-button ats-cv">
              <FaFileAlt />
              <span>ATS-Friendly Version</span>
            </a>
          </div>
        </div>
        
        <div className="spline-container">
          <div className="spline-inner">
            {splineError ? (
              <div className="spline-placeholder">
                <FaCube className="cube-icon" />
                <p>3D CV Loading Error</p>
                <p>Please replace with your actual Spline scene URL</p>
              </div>
            ) : (
              <>
                {/* Replace the URL below with your actual Spline scene URL */}
                {/* Comment out this line and uncomment when you have a valid Spline URL */}
                {/* <Spline 
                  scene="https://prod.spline.design/YOUR_SPLINE_ID_HERE" 
                  onLoad={handleSplineLoad}
                  onError={handleSplineError}
                /> */}
                <div className="spline-placeholder">
                  <FaCube className="cube-icon" />
                  <p>Add Your 3D CV Here</p>
                  <p>Replace the placeholder URL with your Spline scene</p>
                </div>
              </>
            )}
            <div className="spline-overlay" style={{ opacity: splineLoaded ? 0 : 1 }}>
              <div className="overlay-content">
                <p>3D Interactive Resume</p>
                <p>Click and drag to explore</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cv-info">
          <div className="info-card">
            <h2>About My CV</h2>
            <p>This interactive 3D CV was created using Spline, showcasing my skills and experience in a unique format. Feel free to explore the 3D environment by clicking and dragging.</p>
            <p>For a more traditional version, download the PDF using the buttons above.</p>
          </div>
          
          <div className="info-card">
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
                <span className="skill-name">Tailwind</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Firebase</span>
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
    </section>
  );
};

export default CV; 