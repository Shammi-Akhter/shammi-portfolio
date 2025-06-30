import { motion } from 'framer-motion';
import shammi from '../../assets/shammi.jpg'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaDownload
} from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Shammi-Akhter', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shammi-akther37/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/ShammiAkth36648', label: 'Twitter' },
    
  ];

  const handleResumeDownload = () => {
    // Replace with actual resume file path when ready
    alert('Resume download feature will be implemented when resume is ready!');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Hi, I'm <br /> <span className="text-purple-400">Shammi Akther Sumi</span>
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-purple-300 mb-6"
            >
              Full Stack Developer
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl"
            >
              Passionate about creating innovative web solutions and turning ideas into reality.
              I specialize in modern web technologies and love building user-friendly applications.
            </motion.p>

            {/* Resume Download Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 mb-8"
            >
              <FaDownload />
              Download Resume
            </motion.button>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start gap-4 "
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {/* Placeholder for professional photo */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
              
                  
                    <img className='w-80 h-80 object-cover rounded-full' src={shammi} alt="" />
                
                  
                
              </div>

              {/* Floating elements for visual appeal */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-purple-400 rounded-full opacity-20"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full opacity-20"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 