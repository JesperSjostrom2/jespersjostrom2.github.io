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
             <FiChevronRight style={styleEducation}/> Inriktning Informations- och medieteknik
            </li>
            <li data-aos="fade-right" data-aos-delay="600">
            <FiChevronRight style={styleEducation}/> Introduktion till HTML, CSS & Javascript 
            </li>
            <li data-aos="fade-right" data-aos-delay="700">
            <FiChevronRight style={styleEducation}/> Datorteknik 1b, Digitalt skapade 1, Gränssnitsdesign, Programmering 1 (Java), Teknik 1, Webbserverprogrammering 1, Webbutveckling 1
            </li>
            <li data-aos="fade-right" data-aos-delay="800">
            <FiChevronRight style={styleEducation}/> Intresset av webbutveckling & design började här
            </li>
          </ul>
        </div>
    );

      //ÖSTRA GYMNASIET
    case 'button2':
      return (
        <div className="button-output-content">
          <h2>Östra gymnasiet</h2>
          <h4>Gymnasieingenjör</h4>
          <h5> 2019-2020 </h5>
          <ul>
            <li>
             <FiChevronRight style={styleEducation}/> Inriktning Webbutveckling
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> Programmering 2 & 3 (C# & JS)
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> Mjukvarudesign, Datalagring, Gränssnitsdesign, Teknik, Backend, Praktik, Examensarbete
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> Här fick jag både prova på Frontend och Backend och det var här jag insåg att jag hade mycket mer intresse i design och Frontend utveckling till skillnad mot backend
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
             <FiChevronRight style={styleEducation}/> Inriktning Frontend Developer
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> Javascript 1, 2 & 3, HTML & CSS, Arbetsmetodik 1 & 2, UX & Grafiska verktyg, Frontend utveckling, Backend utveckling, LIA (Hos Vello i 20 veckor)
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> I slutet av kursen så hade vi en praktikperiod på 20 veckor där jag var hos ett finsk företag som heter "Vello" där jag fastnade för arbetet som en Frontend developer till skillnad från att studera
            </li>
          </ul>
        </div>
      );

      // VELLO
    case 'button4':
      return (
        <div className="button-output-content">
          <h2>Vello</h2>
          <h4>Praktikant</h4>
          <h5> 2022-2023 </h5>
          <ul>
            <li>
             <FiChevronRight style={styleEducation}/> Med mina tidigare kunskaper så fick jag utveckla vidare på det som redan fanns med i Vello där jag bland annat skapade ya views, designade i figma och sedan utveckla det till live servern
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> Fick mycket bra kunskap inom hur arbetsmiljön ser ut hos ett företag och hur kommunikationen ser ut
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> Jobbade med Backbone, HTML, CSS, Javascript, Cypress (E2E Testing) Figma & Linear
            </li>
            <li>
            <FiChevronRight style={styleEducation}/> Kom med förslag på nya features, bug testade och utvecklade
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
    <section class="education "id="education">
    <div className="education-container">
    <h2 class="education-header" data-aos="fade-up" data-aos-delay="100"> My <span> Education </span></h2>
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