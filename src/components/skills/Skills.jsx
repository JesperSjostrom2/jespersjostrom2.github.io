import React, {useEffect} from 'react'
import './skills.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {DiJavascript1 } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import {FaBootstrap } from 'react-icons/fa'
import { SiMicrosoftazure } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
import { FaAws } from 'react-icons/fa'
import { DiHeroku } from 'react-icons/di'
import { TbBrandCypress } from 'react-icons/tb'
import { SiPostman } from 'react-icons/si'
import { TbBrandBackbone } from 'react-icons/tb'
import { FiFigma } from 'react-icons/fi'
import { BsGit } from 'react-icons/bs'
import { FaLess } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'

const style = { color: "white", background: "#F06", fontSize: "4rem", borderRadius: "10px", padding: "5px"}

const Skills = () => {
  useEffect(()=> {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div className="skills-container">
      <section id="skills">
      <div className="skills-content">
      <h1 className="skills-header" data-aos="fade-up" data-aos-delay="400"> My <span>Skills</span></h1>
      <h3 className="skills-technologies" data-aos="fade-up" data-aos-delay="500">Technologies that I am familiar with</h3>

      <div className="skills-icons" data-aos="fade-up" data-aos-delay="600">

      <div className="box-box"><DiJavascript1 style={style}/>
      <h3>Javascript</h3>
      </div>

      <div className="box-box"><AiFillHtml5 style={style}/>
      <h3>HTML5</h3>
      </div>

      <div className="box-box"><IoLogoCss3 style={style}/>
      <h3>CSS3</h3>
      </div>

      <div className="box-box"><FaReact style={style}/>
      <h3>React</h3>
      </div>

      <div className="box-box"><FaNodeJs style={style}/>
      <h3>Node</h3>
      </div>

      <div className="box-box"><BsGithub style={style}/>
      <h3>GitHub</h3>
      </div>

      <div className="box-box"><BsGit style={style}/>
      <h3>Git</h3>
      </div>

      <div className="box-box"><FaBootstrap style={style}/>
      <h3>Bootstrap</h3>
      </div>

      <div className="box-box"><SiMicrosoftazure style={style}/>
      <h3>Azure</h3>
      </div>

      <div className="box-box"><DiMongodb style={style}/>
      <h3>MongoDB</h3>
      </div>

      <div className="box-box"><FaAws style={style}/>
      <h3>AWS</h3>
      </div>

      <div className="box-box"><DiHeroku style={style}/>
      <h3>Heroku</h3>
      </div>

      <div className="box-box"><TbBrandCypress style={style}/>
      <h3>Cypress</h3>
      </div>

      <div className="box-box"><SiPostman style={style}/>
      <h3>Postman</h3>
      </div>

      <div className="box-box"><TbBrandBackbone style={style}/>
      <h3>Backbone</h3>
      </div>

      <div className="box-box"><FiFigma style={style}/>
      <h3>Figma</h3>
      </div>

      <div className="box-box"><FaLess style={style}/>
      <h3>Less</h3>
      </div>

      <div className="box-box"><FaSass style={style}/>
      <h3>Sass</h3>
      </div>
      </div>
      </div>
      </section>
      </div>
  )
}

export default Skills