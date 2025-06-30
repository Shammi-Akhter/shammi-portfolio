import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaWhatsapp
} from 'react-icons/fa';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const Home = () => {
  useEffect(() => {
    const section = sessionStorage.getItem('scrollToSection');
    if (section) {
      // Wait for DOM to be ready
      setTimeout(() => {
        const el = document.querySelector(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        sessionStorage.removeItem('scrollToSection');
      }, 200);
    }
  }, []);

  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Education />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </div>
  );
};

export default Home; 