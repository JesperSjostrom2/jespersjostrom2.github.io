import React from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <About/>
    <Education/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
