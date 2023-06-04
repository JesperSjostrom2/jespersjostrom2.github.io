import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Loginpage from './components/loginpage/Loginpage';
import Adminpage from './components/admin/Admin';
import Signup from './components/signup/Signup';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Jesper Sjöström | Frontend Developer</title>
        <meta name="description" content="I am a frontend developer who loves design and creating websites." />
      </Helmet>
      <Navbar />
      <Intro />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Adminpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;