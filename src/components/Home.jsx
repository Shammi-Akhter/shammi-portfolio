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