import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, color: "from-purple-500 to-pink-500" },
        { name: "JavaScript", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "HTML/CSS", level: 95, color: "from-purple-500 to-pink-500" },
        { name: "Tailwind CSS", level: 88, color: "from-purple-500 to-pink-500" },
        { name: "TypeScript", level: 75, color: "from-purple-500 to-pink-500" },
        { name: "Next.js", level: 80, color: "from-purple-500 to-pink-500" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 82, color: "from-purple-500 to-pink-500" },
        { name: "Express.js", level: 78, color: "from-purple-500 to-pink-500" },
        { name: "MongoDB", level: 75, color: "from-purple-500 to-pink-500" },
        { name: "Firebase", level: 72, color: "from-purple-500 to-pink-500" },
        { name: "vercel", level: 60, color: "from-purple-500 to-pink-500" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Netlify", level: 65, color: "from-purple-500 to-pink-500" },
        { name: "Figma", level: 70, color: "from-purple-500 to-pink-500" },
        { name: "Vite", level: 80, color: "from-purple-500 to-pink-500" },
        { name: "VScode", level: 75, color: "from-purple-500 to-pink-500" },
        { name: "cursor", level: 60, color: "from-purple-500 to-pink-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've developed expertise in various technologies through hands-on projects and continuous learning. 
            Here's a breakdown of my technical skills across different categories.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="bg-slate-800/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.6 
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-white font-semibold">{skill.name}</h4>
                      <span className="text-purple-400 font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-600 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Other <span className="text-purple-400">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Redux", "Context API", "REST APIs", "GraphQL", "JWT", "OAuth",
              "Responsive Design", "Progressive Web Apps", "SEO", "Performance Optimization",
              "Testing (Jest, React Testing Library)", "CI/CD", "Agile/Scrum", "RESTful APIs"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 