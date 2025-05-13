import React, { useState, useEffect } from 'react';
import './education.css';
import { FiChevronRight } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ButtonGroup({ selectedButton, handleButtonClick }) {
  return (
    <div className="education-buttons" data-aos="fade-right" data-aos-delay="100">
      <button
        className={selectedButton === 'button0' ? 'selected' : ''}
        onClick={() => handleButtonClick('button0')}
      >
        Cafe & Bistro Kerma
      </button>
      <button
        className={selectedButton === 'button1' ? 'selected' : ''}
        onClick={() => handleButtonClick('button1')}
      >
        Vello
      </button>
      <button
        className={selectedButton === 'button2' ? 'selected' : ''}
        onClick={() => handleButtonClick('button2')}
      >
        KYH Yrkeshögskola
      </button>
      <button
        className={selectedButton === 'button3' ? 'selected' : ''}
        onClick={() => handleButtonClick('button3')}
      >
        Östra Gymnasiet
      </button>
      <button
        className={selectedButton === 'button4' ? 'selected' : ''}
        onClick={() => handleButtonClick('button4')}
      >
        Huddinge gymnasiet
      </button>
    </div>
  );
}

function ButtonOutput({ selectedButton }) {
  const [content, setContent] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedButton]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderContent = () => {
    switch (selectedButton) {
      case 'button0':
        return (
          <div className={`button-output-content ${!isTransitioning ? 'active' : ''}`}>
            <h2>Cafe & Bistro Kerma</h2>
            <h4>Worker & Web Developer</h4>
            <h5>2023 - 2024</h5>
            <ul>
              <li>
                <FiChevronRight className="chevron" />
                <span>At Café & Bistro Kerma, I was an all-around worker responsible for a wide range of tasks including inventory management, serving food, cooking, and working at the bar.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>I designed and developed the website, creating a user-friendly platform with an online menu and reservation system.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>In addition to the website I also designed and created the logotype, creating an easy and simple logo to recognize.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>I had close contact with my customer to ensure they were satisfied with the logotype and website I created. By actively seeking and incorporating their feedback, I was able to refine the brand identity and online presence to better meet their needs and preferences.</span>
              </li>
            </ul>
          </div>
        );

      case 'button1':
        return (
          <div className={`button-output-content ${!isTransitioning ? 'active' : ''}`}>
            <h2>Vello</h2>
            <h4>Web developer Internship</h4>
            <h5>2022-2023</h5>
            <ul>
              <li>
                <FiChevronRight className="chevron" />
                <span>With my previous knowledge, I was able to further develop what was already in place at Vello. This included tasks such as creating new views, designing in Figma, and then developing them on the live server.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>I gained valuable insights into the work environment at a company and experienced how communication flows.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>During my time at Vello, I worked with Backbone, HTML, CSS, JavaScript, Cypress (E2E Testing), Figma, and Linear.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>I contributed by suggesting new features, conducting bug testing, and participating in development.</span>
              </li>
            </ul>
          </div>
        );

      case 'button2':
        return (
          <div className={`button-output-content ${!isTransitioning ? 'active' : ''}`}>
            <h2>KYH Yrkeshögskola</h2>
            <h4>Frontend Developer</h4>
            <h5>2021-2023</h5>
            <ul>
              <li>
                <FiChevronRight className="chevron" />
                <span>Specialization in Frontend Development.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>Courses: JavaScript 1, 2 & 3, HTML & CSS, Work Methodology 1 & 2, UX & Graphic Tools, Frontend Development, Backend Development, Internship (Vello for 20 weeks).</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>At the end of the course, we had a 20-week internship period where I worked at a Finnish company called "Vello" and became interested in the role of a Frontend Developer, as opposed to pursuing further studies.</span>
              </li>
            </ul>
          </div>
        );

      case 'button3':
        return (
          <div className={`button-output-content ${!isTransitioning ? 'active' : ''}`}>
            <h2>Östra gymnasiet</h2>
            <h4>High School Engineer</h4>
            <h5>2019-2020</h5>
            <ul>
              <li>
                <FiChevronRight className="chevron" />
                <span>Specialization in Web Development.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>Programming 2 & 3 (C# & JS)</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>Software Design, Data Storage, Interface Design, Technology, Internship, Exam work.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>Mainly focused on frontend development but also learning how backend works here, I got to experience both frontend and backend, and it was here that I realized I had more interest in design and frontend development compared to backend.</span>
              </li>
            </ul>
          </div>
        );

      case 'button4':
        return (
          <div className={`button-output-content ${!isTransitioning ? 'active' : ''}`}>
            <h2>Huddinge gymnasiet</h2>
            <h4>Student</h4>
            <h5>2016-2019</h5>
            <ul>
              <li>
                <FiChevronRight className="chevron" />
                <span>Specialization in Information and Media Technology.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>Introduction to HTML, CSS & Javascript.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>Courses: Computer Technology, Digital Creation, Interface Design, Programming (Java), Technology, Web Server Programming, Web Development.</span>
              </li>
              <li>
                <FiChevronRight className="chevron" />
                <span>The interest in web development & design began here.</span>
              </li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="button-output">
      {renderContent()}
    </div>
  );
}

const Education = () => {
  const [selectedButton, setSelectedButton] = useState('button0');

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="education-header" data-aos="fade-up" data-aos-delay="300">
          My <span>Education / Work</span>
        </h2>
        <div className="education-content">
          <div className="button-wrapper">
            <ButtonGroup
              selectedButton={selectedButton}
              handleButtonClick={handleButtonClick}
            />
            <ButtonOutput selectedButton={selectedButton} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;