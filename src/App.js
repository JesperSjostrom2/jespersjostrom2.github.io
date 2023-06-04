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
import NotFound from './notfound/NotFound';
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
     <Helmet>
        <title>Jesper Sjöström | Frontend Developer </title>
        <meta name="description" content="I am a frontend developer who loves design and creating websites." />
      </Helmet>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Intro />
              <About />
              <Education />
              <Skills />
              <Contact />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;