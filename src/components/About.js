import { motion } from "framer-motion";
import Image from 'next/image';
import {
  FaCode,
  FaBrain,
  FaChess,
  FaDumbbell,
  FaFutbol,
  FaHandsHelping,
  FaStar,
  FaTrophy,
  FaTerminal,
  FaLaptopCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      className="py-16 px-4 bg-background relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 text-accent/5 text-6xl font-mono">
          {"</>"}
        </div>
        <div className="absolute bottom-20 left-10 text-accent/5 text-6xl font-mono">
          {"<code>"}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-muted ml-2">about.js</span>
            </div>
            <h2 className="text-4xl font-bold">
              <span className="text-accent">&lt;</span>
              About Me
              <span className="text-accent">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Code-like Frame */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-accent/20 rounded-lg blur-2xl transform rotate-3"></div>
            <div className="relative bg-card/50 backdrop-blur-sm p-4 rounded-lg border-2 border-accent/20 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-muted ml-2">profile.js</span>
              </div>
              <Image
                src="/images/profile.png"
                alt="Aleksandar Gjorgev"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            {/* Decorative Terminal Icon */}
            <div className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-sm p-3 rounded-lg border border-accent/20 shadow-lg">
              <FaTerminal className="text-2xl text-accent" />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                <FaLaptopCode />
                <span>FullStack Developer</span>
              </h3>
              <p className="text-muted leading-relaxed">
                I'm a passionate FullStack Developer with a strong foundation in both frontend and backend technologies. 
                My journey in software development is driven by a constant desire to learn and create efficient, 
                scalable solutions that make a real impact.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                <FaServer />
                <span>Technical Expertise</span>
              </h3>
              <p className="text-muted leading-relaxed">
                Specializing in modern web technologies, I focus on building responsive, 
                user-friendly applications with clean, maintainable code. My expertise spans 
                from creating intuitive user interfaces to developing robust backend systems.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills & Strengths */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { icon: FaBrain, label: "Problem Solving", color: "text-yellow-400", desc: "Analytical thinking and efficient solutions" },
            { icon: FaHandsHelping, label: "Team Player", color: "text-green-500", desc: "Collaborative development approach" },
            { icon: FaTools, label: "Adaptability", color: "text-blue-500", desc: "Quick to learn new technologies" },
            { icon: FaCode, label: "Clean Code", color: "text-accent", desc: "Writing maintainable, efficient code" }
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-all"
              whileHover={{ y: -5 }}
            >
              <skill.icon className={`text-4xl ${skill.color} mb-4`} />
              <h4 className="text-lg font-bold text-white mb-2">{skill.label}</h4>
              <p className="text-sm text-muted">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Facts & Hobbies */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Fun Facts */}
          <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-accent/20">
            <h3 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
              <FaStar />
              <span>Fun Facts</span>
            </h3>
            <ul className="space-y-3 text-muted">
              <li className="flex items-center gap-2">
                <span className="text-accent">→</span>
                Started coding journey at 13, building my first website
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">→</span>
                Passionate about learning new technologies and frameworks
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">→</span>
                Developed multiple personal projects for fun and learning
              </li>
            </ul>
          </div>

          {/* Hobbies */}
          <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-accent/20">
            <h3 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
              <FaTrophy />
              <span>Hobbies & Interests</span>
            </h3>
            <ul className="space-y-3 text-muted">
              <li className="flex items-center gap-2">
                <FaFutbol className="text-accent" />
                <span>Playing soccer and staying active</span>
              </li>
              <li className="flex items-center gap-2">
                <FaChess className="text-accent" />
                <span>Strategic thinking through chess</span>
              </li>
              <li className="flex items-center gap-2">
                <FaDumbbell className="text-accent" />
                <span>Fitness and personal development</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
