import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import shammi2 from '../../assets/shammi2.jpg'
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </motion.div>
        <p className="text-gray-300 leading-relaxed">
          I'm Shammi Akther Sumi, a Computer Science and Engineering graduate with a passion for technology and innovation. With a strong academic foundation (CGPA 3.80) from Bangladesh University of Business and Technology, I bring technical expertise, analytical thinking, and a creative approach to solving complex technological challenges.
          My journey in Computer Science and Engineering has equipped me with a comprehensive understanding of software development, system analysis, and emerging technologies. I'm driven by the endless possibilities that technology offers to transform ideas into reality and create meaningful solutions that impact people's lives.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center lg:justify-center lg:w-full"
          >
            <div className="relative">
              <div className="w-80 h-100 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <img className='w-75 h-96' src={shammi2} alt="" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-400 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full opacity-30"></div>
            </div>
          </motion.div>

          {/* Right Content - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4">
                My Programming Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                My journey in programming began with a curiosity about how websites work.
                What started as simple HTML pages has evolved into a passion for creating
                full-stack applications that solve real-world problems. I've spent countless
                hours learning new technologies, debugging code, and collaborating with
                other developers to bring ideas to life.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4">
                What I Enjoy Working On
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I particularly enjoy working on projects that challenge me to think creatively
                and solve complex problems. Whether it's building responsive user interfaces,
                designing efficient databases, or implementing new features, I love the
                process of turning concepts into functional applications. I'm especially
                passionate about creating user-friendly experiences that make technology
                accessible to everyone.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Beyond Programming
              </h3>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, reading
                about the latest industry trends, or contributing to open-source projects.
                I also enjoy playing guitar, hiking in nature, and experimenting with
                photography. These hobbies help me maintain a balanced perspective and
                often inspire creative solutions to programming challenges.
              </p>
            </div>

            {/* Personal Traits */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">Problem Solver</h4>
                <p className="text-gray-300 text-sm">I love tackling complex challenges and finding elegant solutions.</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">Team Player</h4>
                <p className="text-gray-300 text-sm">I thrive in collaborative environments and enjoy sharing knowledge.</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">Continuous Learner</h4>
                <p className="text-gray-300 text-sm">Always eager to learn new technologies and improve my skills.</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">Detail Oriented</h4>
                <p className="text-gray-300 text-sm">I pay attention to the small details that make a big difference.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 