import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API or database
  const projectData = {
    1: {
      title: "Secjaf-Language Learning Platform",
      description: "A modern language exchange platform to browse, book, and review tutors with secure JWT auth, theme toggle, and full CRUD features. ",
      image: "/Language.png",
      technologies: ["HTML","Tailwind CSS","React", "Node.js", "MongoDB", "Express.js", "JWT"],
      liveLink: "https://language-exchange-app-dde7b.web.app/add-tutorials",
      githubLink: "https://github.com/Shammi-Akhter/Language-Learning-Platform-client",
      category: "Full Stack",
      features: ["User Authentication", "Language Catalog", "Tutors List" , "Tutors Details", "Booking Management"],
      challenges: [
        "Implementing dark theme with no issues",
        "Managing complex state",
        "Connecting database queries efficiently",
        "Ensuring responsive design across all devices"
      ],
      improvements: [
        "Add real-time booking tracking",
        "Implement advanced search and filtering",
        "Add multi-language support",
        "Integrate with payment gateways"
      ],
      duration: "3 months",
      teamSize: "Solo project"
    },
    
    2: {
      title: "FindFest-Event Explorer",
      description: "A responsive React app for discovering and exploring events, with Firebase Auth, protected routes, and dynamic UI.",
      image: "/Findfest.png",
      technologies: ["React", "Firebase", "React Router", "Context API", "Tailwind CSS", "AOS", "React Slick"],
      liveLink: "https://event-explorer-findfest.netlify.app/",
      githubLink: "https://github.com/Shammi-Akhter/FindFest-Event-Explorer",
      category: "Frontend",
      features: ["Real-time Updates", "Team Collaboration", "Progress Tracking", "Task Categories", "Due Date Management", "User Roles"],
      challenges: [
        "Implementing real-time data synchronization",
        "Managing complex user permissions",
        "Creating intuitive drag-and-drop interface",
    
      ],
      improvements: [
        "Add file attachment functionality",
        "Implement advanced reporting features",
        "Add mobile app version",
        "Integrate with calendar applications"
      ],
      duration: "2 months",
      teamSize: "Solo project"
    },

    

    3: {
      title: "HobbyHive-Community Hub",
      description: "Discover and join hobby-based communities like book clubs, hiking groups, and painting circles!",
      image: "/HobbyHive.png",
      technologies:  ["React",  "React", "Firebase Auth", "Node.js", "Express", "MongoDB", "Tailwind CSS", "DaisyUI"],
      liveLink: "https://hobby-hive-55664.web.app/",
      githubLink: "https://github.com/Shammi-Akhter/Hobby-Hive-Client",
    category: "Frontend",
    features: ["Current Ongoing Groups ", "Different Groups Information ", "Interactive Features", "Support", "Understandable Dashboard", "Responsive Design"],
      challenges: [
        "Integrating multiple group's APIs",
        "Implementing accurate ongoing groups services",
        "Creating responsive user interface",
        
      ],
      improvements: [
        "Add historical events data",
        "Implement new group's event notifications",
        "Add more detailed information",
        "Support for multiple languages"
      ],
      duration: "1 month",
      teamSize: "Solo project"
    }
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-purple-400 hover:text-purple-300">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {project.category}
            </span>
            <span className="text-gray-300 text-sm">{project.duration}</span>
            <span className="text-gray-300 text-sm">{project.teamSize}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Project Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <FaExternalLinkAlt />
            Live Demo
          </motion.a>
          
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <FaGithub />
            View Code
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaCode className="text-purple-400" />
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-700/50 text-gray-300 px-4 py-2 rounded-full border border-slate-500/30 hover:bg-slate-700/70 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaLightbulb className="text-purple-400" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaRocket className="text-purple-400" />
                Challenges Faced
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Future Improvements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaLightbulb className="text-purple-400" />
                Future Improvements
              </h2>
              <ul className="space-y-3">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    {improvement}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 