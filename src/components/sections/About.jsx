import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import shammi2 from '../../assets/shammi2.webp'

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </motion.div>

        <div className="glass rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex-shrink-0 flex justify-center items-stretch w-full md:w-[340px]"
          >
            <div className="flex flex-col gap-2">
              <div className="relative h-90% w-full flex items-stretch">
                <img
                  src={shammi2}
                  alt="Shammi Akther Sumi"
                  className="h-full w-full max-h-[500px] object-cover rounded-2xl border-4 border-white shadow-2xl bg-slate-900"
                  style={{ minHeight: '350px' }}
                />
              </div >
              {/* Personal Traits */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-700/60 p-4 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-1">Problem Solver</h4>
                  <p className="text-gray-300 text-xs">I love tackling complex challenges and finding elegant solutions.</p>
                </div>
                <div className="bg-slate-700/60 p-4 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-1">Team Player</h4>
                  <p className="text-gray-300 text-xs">I thrive in collaborative environments and enjoy sharing knowledge.</p>
                </div>
                <div className="bg-slate-700/60 p-4 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-1">Continuous Learner</h4>
                  <p className="text-gray-300 text-xs">Always eager to learn new technologies and improve my skills.</p>
                </div>
                <div className="bg-slate-700/60 p-4 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-1">Detail Oriented</h4>
                  <p className="text-gray-300 text-xs">I pay attention to the small details that make a big difference.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              {/* Academic Block */}
              <div className="bg-slate-900/70 border-l-4 border-purple-500 rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold text-purple-300 mb-1">Shammi Akther Sumi</h3>
                <p className="text-gray-200 text-sm mb-1">B.Sc. in Computer Science & Engineering</p>
                <p className="text-gray-400 text-xs">Bangladesh University of Business and Technology (CGPA 3.80)</p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a Computer Science and Engineering graduate with a passion for technology and innovation. With a strong academic foundation from Bangladesh University of Business and Technology, I bring technical expertise, analytical thinking, and a creative approach to solving complex technological challenges.<br />

              </p>

              <div className="border-t border-slate-700 my-4"></div>

              {/* Programming Journey */}
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">My Programming Journey</h3>
                <p className="text-gray-300 leading-relaxed">
                  My journey in programming began with a curiosity about how websites work. What started as simple HTML pages has evolved into a passion for creating full-stack applications that solve real-world problems. I've spent countless hours learning new technologies, debugging code, and collaborating with other developers to bring ideas to life.
                </p>
              </div>

              {/* Enjoy Working On */}
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">What I Enjoy Working On</h3>
                <p className="text-gray-300 leading-relaxed">
                  I particularly enjoy working on projects that challenge me to think creatively and solve complex problems. Whether it's building responsive user interfaces, designing efficient databases, or implementing new features, I love the process of turning concepts into functional applications. I'm especially passionate about creating user-friendly experiences that make technology accessible to everyone.
                </p>
              </div>

              {/* Beyond Programming */}
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Beyond Programming</h3>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, reading about the latest industry trends, or contributing to open-source projects. I also enjoy playing guitar, hiking in nature, and experimenting with photography. These hobbies help me maintain a balanced perspective and often inspire creative solutions to programming challenges.
                </p>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 