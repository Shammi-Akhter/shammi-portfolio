import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import HobbyHive from '../../assets/HobbyHive.png'
import FindFest from '../../assets/Findfest.png'
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: "Language Learning Platform",
      description: "A modern language exchange platform to browse, book, and review tutors with secure JWT auth, theme toggle, and full CRUD features.",
      image: "/Language.png",
      technologies: ["HTML","Tailwind CSS","React", "Node.js", "MongoDB", "Express.js", "JWT"],
      liveLink: "https://language-exchange-app-dde7b.web.app/",
      githubLink: "https://github.com/Shammi-Akhter/Language-Learning-Platform-client",
      category: "Full Stack",
      features: ["User Authentication", "Language Catalog", "Tutors List" , "Tutors Details", "Booking Management"]
    },
    {
      id: 2,
      title: "Event Explorer",
      description: "A responsive React app for discovering and exploring events, with Firebase Auth, protected routes, and dynamic UI. ",
      image: "/Findfest.png",
      technologies: ["React", "Firebase", "React Router", "Context API", "Tailwind CSS", "AOS", "React Slick"],
      liveLink: "https://event-explorer-findfest.netlify.app/",
      githubLink: "https://github.com/Shammi-Akhter/FindFest-Event-Explorer",
      category: "Frontend",
      features: ["Real-time Updates", "Team Collaboration", "Progress Tracking", "Task Categories", "Due Date Management", "User Roles"]
    },
    {
      id: 3,
      title: "Community Hub",
      description: "Discover and join hobby-based communities like book clubs, hiking groups, and painting circles!",
      image: "/HobbyHive.png",
      technologies: ["React",  "React", "Firebase Auth", "Node.js", "Express", "MongoDB", "Tailwind CSS", "DaisyUI"],
      liveLink: "https://hobby-hive-55664.web.app/",
      githubLink: "https://github.com/Shammi-Akhter/Hobby-Hive-Client",
      category: "Frontend",
      features: ["Current Ongoing Groups ", "Different Groups Information ", "Interactive Features", "Support", "Understandable Dashboard", "Responsive Design"]
    },
    
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills 
            and technologies I've learned and applied in real-world scenarios.
          </p>
        </motion.div>

        {/* Project Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`bg-slate-700/50 text-gray-300 px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category ? 'bg-purple-600 text-white' : 'hover:bg-purple-600 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-slate-700/30 rounded-2xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-600/50 text-gray-300 px-2 py-1 rounded text-xs border border-slate-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-slate-600/50 text-gray-300 px-2 py-1 rounded text-xs border border-slate-500/30">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Link
                    to={`/project/${project.id}`}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaEye />
                    View Details
                  </Link>
                  
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-600 hover:bg-slate-500 text-white p-2 rounded-lg transition-all duration-300"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                  
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-600 hover:bg-slate-500 text-white p-2 rounded-lg transition-all duration-300"
                    title="GitHub Repository"
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 