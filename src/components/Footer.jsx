import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900/90 border-t border-slate-800 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Shammi Akhter Sumi &mdash; All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer; 