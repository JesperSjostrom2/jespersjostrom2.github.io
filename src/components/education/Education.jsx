import React, { useState } from 'react';
import { useEffect } from 'react';
import './education.css';
import { FiChevronRight } from 'react-icons/fi';
import AOS from 'aos'
import 'aos/dist/aos.css'

const styleEducation = { color: "#F06"}

function ButtonGroup({ selectedButton, handleButtonClick }) {
  return (
    <div className="education-buttons" data-aos="fade-right" data-aos-delay="300">
      <button
        className={selectedButton === 'button1' ? 'selected' : ''}
        onClick={() => handleButtonClick('button1')}
      >
        Huddinge gymnasiet
      </button>
      <button
        className={selectedButton === 'button2' ? 'selected' : ''}
        onClick={() => handleButtonClick('button2')}
      >
        Östra gymnasiet
      </button>
      <button
        className={selectedButton === 'button3' ? 'selected' : ''}
        onClick={() => handleButtonClick('button3')}
      >
        KYH Yrkeshögskola
      </button>
      <button
        className={selectedButton === 'button4' ? 'selected' : ''}
        onClick={() => handleButtonClick('button4')}
      >
        Vello
      </button>
    </div>
  );
}

function ButtonOutput({ selectedButton }) {
  useEffect(()=> {
    AOS.init({duration: 1000});
  }, []);
  switch (selectedButton) {
    case 'button1':
      return (
        
        //HUDDINGE GYMNASIET
        <div className="button-output-content">
          <h2 data-aos="fade-right" data-aos-delay="200">Huddinge gymnasiet</h2>
          <h4 data-aos="fade-right" data-aos-delay="300">Student</h4>
          <h5 data-aos="fade-right" data-aos-delay="400"> 2016-2019 </h5>
          <ul>
            <li data-aos="fade-right" data-aos-delay="500">
             <FiChevronRight style={styleEducation}/> Specialization in Information and Media Technology.
            </li>
            <li data-aos="fade-right" data-aos-delay="600">
            <FiChevronRight style={styleEducation}/> Introduction to HTML, CSS & Javascript.
            </li>
            <li data-aos="fade-right" data-aos-delay="700">
            <FiChevronRight style={styleEducation}/> Courses: Computer Technology, Digital Creation, Interface Design, Programming (Java), Technology, Web Server Programming, Web Development.
            </li>
            <li data-aos="fade-right" data-aos-delay="800">
            <FiChevronRight style={styleEducation}/> The interest in web development & design began here.
            </li>
          </ul>
        </div>
    );

      //ÖSTRA GYMNASIET
    case 'button2':
      return (
        <div className="button-output-content">
          <h2>Östra gymnasiet</h2>
          <h4>High School Engineer.</h4>
          <h5> 2019-2020 </h5>
          <ul>
            <li>
             <FiChevronRight style={styleEducation}/> Specialization in Web Development.
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> Programming 2 & 3 (C# & JS)
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> Software Design, Data Storage, Interface Design, Technology, Internship, Exam work.
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> Mainly focused on frontend development but also learning how backend works
Here, I got to experience both frontend and backend, and it was here that I realized I had more interest in design and frontend development compared to backend.
            </li>
          </ul>
        </div>
      );
      
      // KYH YRKESHÖGSKOLA
    case 'button3':
      return (
        <div className="button-output-content">
          <h2>KYH Yrkeshögskola</h2>
          <h4>Frontend Developer</h4>
          <h5> 2021-2023 </h5>
          <ul>
            <li>
             <FiChevronRight style={styleEducation}/> Specialization in Frontend Development.
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> Courses: JavaScript 1, 2 & 3, HTML & CSS, Work Methodology 1 & 2, UX & Graphic Tools, Frontend Development, Backend Development, Internship (Vello for 20 weeks).
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> At the end of the course, we had a 20-week internship period where I worked at a Finnish company called "Vello" and became interested in the role of a Frontend Developer, as opposed to pursuing further studies.
            </li>
          </ul>
        </div>
      );

      // VELLO
    case 'button4':
      return (
        <div className="button-output-content">
          <h2>Vello</h2>
          <h4>Intern</h4>
          <h5> 2022-2023 </h5>
          <ul>
            <li>
             <FiChevronRight style={styleEducation}/> With my previous knowledge, I was able to further develop what was already in place at Vello. This included tasks such as creating new views, designing in Figma, and then developing them on the live server.
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> I gained valuable insights into the work environment at a company and experienced how communication flows.
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> During my time at Vello, I worked with Backbone, HTML, CSS, JavaScript, Cypress (E2E Testing), Figma, and Linear.
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> I contributed by suggesting new features, conducting bug testing, and participating in development.
            </li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}

const Education = () => {
  const [selectedButton, setSelectedButton] = useState('button1');

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <section className="education "id="education">
    <div className="education-container">
    <h2 className="education-header" data-aos="fade-up" data-aos-delay="100"> My <span> Education </span></h2>
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