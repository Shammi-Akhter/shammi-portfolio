import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experienceData = [
    {
      position: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2023 - Present",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description: "Leading development of enterprise web applications using modern technologies. Mentoring junior developers and implementing best practices.",
      responsibilities: [
        "Developed and maintained 5+ enterprise web applications",
        "Led a team of 4 junior developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Optimized application performance resulting in 40% faster load times",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"],
      achievements: [
        "Employee of the Month - March 2024",
        "Successfully delivered 3 major projects on time",
        "Reduced bug reports by 50% through improved testing practices"
      ]
    },
    {
      position: "Frontend Developer",
      company: "Digital Innovations Ltd.",
      duration: "Jun 2022 - Dec 2022",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description: "Specialized in creating responsive and user-friendly web interfaces. Worked closely with designers to implement pixel-perfect designs.",
      responsibilities: [
        "Built responsive user interfaces for 8+ client projects",
        "Collaborated with UI/UX designers to implement designs",
        "Optimized website performance and accessibility",
        "Maintained and updated existing client websites",
        "Participated in code reviews and team meetings"
      ],
      technologies: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Git"],
      achievements: [
        "Improved website loading speed by 35%",
        "Received 5-star client feedback on all projects",
        "Contributed to company's design system development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={`${experience.position}-${experience.company}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-purple-600 p-3 rounded-full">
                      <FaBriefcase className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {experience.position}
                      </h3>
                      <p className="text-purple-400 text-lg font-semibold mb-2">
                        {experience.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-purple-400" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-purple-400" />
                          {experience.location}
                        </div>
                        <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">
                          {experience.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + respIndex * 0.1, duration: 0.5 }}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          {responsibility}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.2 + techIndex * 0.05, duration: 0.5 }}
                          className="bg-slate-600/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-500/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + achievementIndex * 0.1, duration: 0.5 }}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-4 border border-purple-500/30">
                    <h4 className="text-white font-semibold mb-2">Experience Level</h4>
                    <p className="text-2xl font-bold text-purple-400">
                      {index === 0 ? "Senior" : "Mid-level"}
                    </p>
                  </div>

                  <div className="bg-slate-600/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Duration</h4>
                    <p className="text-gray-300 text-sm">{experience.duration}</p>
                  </div>

                  <div className="bg-slate-600/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Location</h4>
                    <p className="text-gray-300 text-sm">{experience.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {experienceData.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <div className="bg-slate-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Currently Seeking Opportunities
              </h3>
              <p className="text-gray-300 mb-6">
                I'm actively looking for opportunities to apply my skills and grow professionally. 
                While I may not have extensive work experience yet, I've completed numerous projects 
                and am eager to contribute to meaningful work.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View My Projects
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience; 