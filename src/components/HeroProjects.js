"use client";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaProjectDiagram, FaTerminal, FaFolderOpen, FaGithub } from "react-icons/fa";

export default function HeroProjects() {
  return (
    <motion.section
      className="relative w-full min-h-[60vh] md:h-[60vh] flex flex-col justify-center items-center bg-gradient-to-br from-card to-secondary text-white text-center overflow-hidden py-20 md:py-0"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Decorative Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 text-accent/10 text-2xl md:text-4xl font-mono">
          {"<projects>"}
        </div>
        <div className="absolute bottom-20 md:bottom-40 right-5 md:right-10 text-accent/10 text-2xl md:text-4xl font-mono">
          {"</projects>"}
        </div>
        <div className="absolute top-1/2 left-1/4 text-accent/10 text-lg md:text-2xl font-mono hidden md:block">
          {"function showProjects() {"}
        </div>
        <div className="absolute top-1/2 left-1/4 translate-y-8 text-accent/10 text-lg md:text-2xl font-mono hidden md:block">
          {"  return portfolio;"}
        </div>
        <div className="absolute top-1/2 left-1/4 translate-y-16 text-accent/10 text-lg md:text-2xl font-mono hidden md:block">
          {"}"}
        </div>
      </div>

      {/* Terminal-like Container */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="bg-card/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-accent/20 shadow-xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
            <span className="text-xs md:text-sm text-muted ml-2">projects@portfolio:~</span>
          </div>

          {/* Main Content */}
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
              <FaGithub className="text-2xl md:text-3xl text-accent" />
              <h1 className="text-3xl md:text-5xl font-bold">
                <span className="text-accent">&lt;</span>
                My Projects
                <span className="text-accent">/&gt;</span>
              </h1>
            </div>

            <motion.p
              className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-muted font-mono px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-accent">//</span> A collection of innovative solutions and creative implementations
            </motion.p>

            {/* Project Stats */}
            <motion.div
              className="grid grid-cols-3 gap-2 md:gap-6 mt-6 md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-card/30 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-accent/20 hover:border-accent/40 transition-all group">
                <FaProjectDiagram className="text-xl md:text-4xl mb-1 md:mb-2 text-accent mx-auto group-hover:scale-110 transition-transform" />
                <span className="block text-xs md:text-lg font-semibold group-hover:text-accent transition-colors">Innovative Ideas</span>
                <span className="text-[10px] md:text-sm text-muted">Creative Solutions</span>
              </div>
              <div className="bg-card/30 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-accent/20 hover:border-accent/40 transition-all group">
                <FaCode className="text-xl md:text-4xl mb-1 md:mb-2 text-green-400 mx-auto group-hover:scale-110 transition-transform" />
                <span className="block text-xs md:text-lg font-semibold group-hover:text-accent transition-colors">Clean Code</span>
                <span className="text-[10px] md:text-sm text-muted">Best Practices</span>
              </div>
              <div className="bg-card/30 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-accent/20 hover:border-accent/40 transition-all group">
                <FaLaptopCode className="text-xl md:text-4xl mb-1 md:mb-2 text-blue-400 mx-auto group-hover:scale-110 transition-transform" />
                <span className="block text-xs md:text-lg font-semibold group-hover:text-accent transition-colors">Modern Tech</span>
                <span className="text-[10px] md:text-sm text-muted">Latest Stack</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Background Waves */}
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
