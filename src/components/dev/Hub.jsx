import React, { useEffect } from 'react';
import './hub.css';
import ghostPfp from '../../assets/ghostpfp.jpg'; 
import bannerGif from '../../assets/97772ac99161f4214003456692dbf47b.gif'; // Use GIF for banner
import moonSvg from '../../assets/Subtract.svg';
import hypesquadBadge from '../../assets/discord badges/icons8-discord-hypesquad-bravery-house-badge-48.png';
import nitroBadge from '../../assets/discord badges/icons8-discord-nitro-badge-48.png';
import activeDeveloperBadge from '../../assets/discord badges/icons8-discord-active-developer-badge-48.png';
import earlySupporterBadge from '../../assets/discord badges/icons8-discord-early-supporter-badge-48.png';
import botDeveloperBadge from '../../assets/discord badges/icons8-discord-early-verified-bot-developer-badge-48.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaTwitter, FaLinkedin, FaKeyboard, FaFile } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import { BsCode } from 'react-icons/bs';
import { FaSteam } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hub = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.init({ once: true });
    
    // Set document title
    document.title = "Jepps";
    
    // Return a cleanup function to reset the title when component unmounts
    return () => {
      document.title = "Jesper Sjöström";
    };
  }, []);

  return (
    <section className="hub" id="hub">
      <div className="hub-container">
        <div className="profile-card-wrapper" data-aos="fade-up">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-banner" style={{ backgroundImage: `url(${bannerGif})` }}>
                <div className="social-icons">
                  <a href="https://github.com/JesperSjostrom2" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://x.com/JeppsOW" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://www.linkedin.com/in/jesper-sj%C3%B6str%C3%B6m-521995232/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              
              <div className="profile-avatar-container">
                <img src={ghostPfp} className="profile-avatar" alt="Profile" />
                <div className="moon-icon">
                  <img src={moonSvg} alt="Moon" />
                </div>
              </div>
              
              <div className="status-button">
                <FaRegMessage className="status-button-icon" />
                <span>darango </span>
              </div>
            </div>
            
            <div className="profile-content">
              <div className="content-glass-container">
                <div className="profile-name-container">
                  <h1 className="profile-name">Jepps</h1>
                  <div className="username-badge-container">
                    <div className="profile-username">jepps</div>
                    <div className="discord-badges">
                      <img src={activeDeveloperBadge} className="discord-badge" alt="Active Developer" />
                      <img src={hypesquadBadge} className="discord-badge" alt="Hypesquad Bravery" />
                      <img src={botDeveloperBadge} className="discord-badge" alt="Bot Developer" />
                      <img src={nitroBadge} className="discord-badge" alt="Nitro" />
                      <img src={earlySupporterBadge} className="discord-badge" alt="Early Supporter" />
                    </div>
                  </div>
                </div>
                
                <div className="divider"></div>
                
                <div className="section">
                  <h3 className="section-title">ABOUT ME</h3>
                  <div className="section-content">
                    <div className="section-item">
                      <BsCode className="section-icon" />
                      <span>25 | Frontend Developer</span>
                    </div>
                    <div className="section-item">
                      <FaKeyboard className="section-icon" />
                      <span>Currently using: React, Tailwind, Firebase, Figma</span>
                    </div>
                  </div>
                </div>
                
                <div className="divider"></div>
                
                <div className="section">
                  <h3 className="section-title">NAVIGATION</h3>
                  <div className="navigation-buttons">
                    <Link to="/cv" className="nav-button nav-button-left">
                      <FaFile className="nav-button-icon" />
                      <span>View CV</span>
                    </Link>
                    <a href="https://steamcommunity.com/id/jepps/" target="_blank" rel="noopener noreferrer" className="nav-button nav-button-right">
                      <FaSteam className="nav-button-icon" />
                      <span>Steam</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hub;