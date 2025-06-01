import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaCode, FaTerminal, FaRocket } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <motion.section
      className="relative w-full min-h-[85vh] flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-card to-secondary text-center md:text-left overflow-hidden py-20 md:py-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Decorative Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 text-accent/10 text-2xl md:text-4xl font-mono">
          {"<code>"}
        </div>
        <div className="absolute bottom-20 md:bottom-40 right-5 md:right-10 text-accent/10 text-2xl md:text-4xl font-mono">
          {"</>"}
        </div>
        <div className="absolute top-1/2 left-1/4 text-accent/10 text-lg md:text-2xl font-mono hidden md:block">
          {"function developer() {"}
        </div>
        <div className="absolute top-1/2 left-1/4 translate-y-8 text-accent/10 text-lg md:text-2xl font-mono hidden md:block">
          {"  return portfolio;"}
        </div>
        <div className="absolute top-1/2 left-1/4 translate-y-16 text-accent/10 text-lg md:text-2xl font-mono hidden md:block">
          {"}"}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
        {/* Left Content */}
        <motion.div 
          className="flex-1 w-full md:max-w-2xl space-y-4 md:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Terminal-like Header */}
          <div className="bg-card/50 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-accent/20 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
              <span className="text-xs md:text-sm text-muted ml-2 font-mono">aleksandar@portfolio:~</span>
            </div>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-accent">&lt;</span>
              Aleksandar Gjorgev
              <span className="text-accent">/&gt;</span>
            </motion.h1>
          </div>

          {/* Typing Animation with Code-like Style */}
          <motion.div
            className="text-sm md:text-base lg:text-lg font-mono bg-card/30 p-3 md:p-4 rounded-lg border border-accent/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-xs text-muted">developer.js</span>
            </div>
            <span className="text-accent">const</span>{" "}
            <span className="text-yellow-400">developer</span>{" "}
            <span className="text-accent">=</span>{" "}
            <TypeAnimation
              sequence={[
                "FullStack Developer",
                1000,
                "Problem Solver",
                1000,
                "Code Enthusiast",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-accent inline-block"
              repeat={Infinity}
            />
            <span className="text-accent">;</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="group flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-accent to-secondary text-white rounded-lg shadow-lg hover:shadow-accent/20 transition-all text-sm md:text-base font-mono relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <FaRocket className="group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Start a Project</span>
            </motion.a>
            <motion.a
              href="/files/Aleksandar_Gjorgev_CV.pdf"
              download
              className="group flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-card/50 backdrop-blur-sm border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-all text-sm md:text-base font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode className="group-hover:rotate-12 transition-transform" />
              <span>View Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 md:gap-6 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="https://linkedin.com/in/aleksandar-gjorgev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl text-accent hover:text-blue-500 transition-all bg-card/30 p-2 rounded-lg border border-accent/20 hover:border-accent/40"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/AleksandarGjorgev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl text-accent hover:text-blue-500 transition-all bg-card/30 p-2 rounded-lg border border-accent/20 hover:border-accent/40"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Blurred Background Effect */}
          <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl transform scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-xl"></div>
          
          {/* Profile Image */}
          <div className="relative">
            <Image
              src="/images/studying.png"
              alt="Aleksandar Gjorgev"
              width={320}
              height={320}
              className="rounded-full relative z-10"
              priority
            />
          </div>

          {/* Decorative Terminal Icon */}
          <div className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-accent/20 shadow-lg">
            <FaTerminal className="text-xl md:text-2xl text-accent" />
          </div>
        </motion.div>
      </div>

      {/* Wavy Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160L120,186.7C240,213,480,267,720,266.7C960,267,1200,213,1320,186.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </motion.section>
  );
}
