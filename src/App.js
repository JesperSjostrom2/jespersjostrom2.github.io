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
import Projects from './components/projects/Projects';
import Hub from './components/dev/Hub';
import CV from './components/cv/CV';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Intro />
            <About />
            <Education />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
            <Navbar />
            <Loginpage />
            <Footer />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Navbar />
            <Signup />
            <Footer />
          </>
        } />
        <Route path="/admin" element={
          <>
            <Navbar />
            <Adminpage />
            <Footer />
          </>
        } />
        <Route path="/hub" element={<Hub />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;