import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Bangladesh University of Business & Technology",
      duration: "2017 - 2021",
      location: "Dhaka, Bangladesh",
      description: "Focused on software engineering, algorithms, data structures, and web development. Graduated with honors and completed capstone project.",
      achievements: [
        "Graduated with First Class Honours",
        "Member of Programming Club",
        "Participated in inter-university coding competitions"
      ],
      gpa: "3.8/4.0"
    },
    
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Educational <span className="text-purple-400">Background</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <motion.div
              key={education.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-slate-700/30 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-purple-600 p-3 rounded-full">
                      <FaGraduationCap className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {education.degree}
                      </h3>
                      <p className="text-purple-400 text-lg font-semibold mb-4">
                        {education.institution}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {education.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {education.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + achievementIndex * 0.1, duration: 0.5 }}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  {/* Duration */}
                  <div className="bg-slate-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <FaCalendarAlt className="text-purple-400" />
                      <h4 className="text-white font-semibold">Duration</h4>
                    </div>
                    <p className="text-gray-300">{education.duration}</p>
                  </div>

                  {/* Location */}
                  <div className="bg-slate-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <FaMapMarkerAlt className="text-purple-400" />
                      <h4 className="text-white font-semibold">Location</h4>
                    </div>
                    <p className="text-gray-300">{education.location}</p>
                  </div>

                  {/* GPA */}
                  <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-4 border border-purple-500/30">
                    <h4 className="text-white font-semibold mb-2">GPA</h4>
                    <p className="text-3xl font-bold text-purple-400">{education.gpa}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Additional <span className="text-purple-400">Certifications</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                year: "2023",
                description: "Cloud development and deployment expertise"
              },
              {
                name: "React Developer Certification",
                issuer: "Meta",
                year: "2023",
                description: "Advanced React development skills"
              },
              {
                name: "MongoDB Database Administrator",
                issuer: "MongoDB University",
                year: "2022",
                description: "Database management and optimization"
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                <p className="text-purple-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 