import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
        {/* Catch all route for 404 */}
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={
          <div className="not-found-container">
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="btn">Back to Home</a>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;