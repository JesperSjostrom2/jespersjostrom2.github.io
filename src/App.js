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

function MainLayout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Jesper Sjöström | Frontend Developer</title>
                <meta name="description" content="I am a frontend developer who loves design and creating websites." />
              </Helmet>
              <MainLayout>
                <Intro />
                <About />
                <Education />
                <Skills />
                <Contact />
              </MainLayout>
            </>
          }
        />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Adminpage />} />
      </Routes>
    </BrowserRouter>
  );
}