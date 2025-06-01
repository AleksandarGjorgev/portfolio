"use client";
import HeroProjects from "@/components/HeroProjects";
import { faFlutter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBootstrap, FaCss3Alt, FaDocker, FaHtml5, FaJsSquare, FaLaravel, FaNodeJs, FaPhp, FaPython, FaReact, FaTools, FaWordpress, FaCode, FaTerminal, FaFolderOpen } from "react-icons/fa";
import { SiCplusplus, SiFlask, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Self-Service POS System",
    description: "Integration of Glory CI-10, payment systems, and kiosks.",
    technologies: [
      { name: "Flutter", icon: () => <FontAwesomeIcon icon={faFlutter} />, color: "bg-blue-200 text-blue-800" },
      { name: "Python", icon: FaPython, color: "bg-yellow-200 text-yellow-800" },
      { name: "Flask", icon: SiFlask, color: "bg-gray-200 text-gray-800" },
      { name: "SOAP", icon: FaTools, color: "bg-purple-200 text-purple-800" }
    ],
    imageUrl: "/projects/self-serv.png",
    videoUrl: "/projects/self-serv.mp4",
  },
  {
    title: "Yummzy AI Meal Planner",
    description: "AI-powered meal planning application with mobile app and website landing page.",
    technologies: [
      { name: "Flutter", icon: () => <FontAwesomeIcon icon={faFlutter} />, color: "bg-blue-200 text-blue-800" },
      { name: "Flask", icon: SiFlask, color: "bg-gray-200 text-gray-800" },
      { name: "PostgreSQL", icon: FaTools, color: "bg-blue-300 text-blue-900" },
      { name: "Docker", icon: FaDocker, color: "bg-blue-200 text-blue-800" },
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" }
    ],
    imageUrl: null,
    projectUrl: null,
    status: "in-progress"
  },
  {
    title: "Company Frontend Website",
    description: "Developed the frontend interface using Bootstrap and Node.js.",
    technologies: [
      { name: "Node.js", icon: FaNodeJs, color: "bg-green-200 text-green-800" },
      { name: "HTML", icon: FaHtml5, color: "bg-orange-200 text-orange-800" },
      { name: "CSS", icon: FaCss3Alt, color: "bg-blue-200 text-blue-800" },
      { name: "Bootstrap", icon: FaBootstrap, color: "bg-purple-200 text-purple-800" }
    ],
    imageUrl: "/projects/methodyca.png",
    projectUrl: "https://methodyca.com",
  },
  {
    title: "Lumen Cosmetics Salon",
    description: "Modern website for a cosmetics salon with online booking system.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" }
    ],
    imageUrl: null,
    projectUrl: null,
    status: "in-progress"
  },

  {
    title: "Car Booking Platform",
    description: "A web platform for booking vehicles.",
    technologies: [
      { name: "Laravel", icon: FaLaravel, color: "bg-red-200 text-red-800" },
      { name: "PHP", icon: FaPhp, color: "bg-indigo-200 text-indigo-800" },
      { name: "JavaScript", icon: FaJsSquare, color: "bg-yellow-200 text-yellow-800" },
      { name: "Docker", icon: FaDocker, color: "bg-blue-200 text-blue-800" }
    ],
    imageUrl: "/projects/avant2go.png",
    projectUrl: "https://avant2go.si",
  },
  {
    title: "VICO Solutions",
    description: "Professional business consulting website with modern design.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" }
    ],
    imageUrl: "/projects/vico.png",
    projectUrl: "https://www.vicosolutions.info",
  },
  {
    title: "Čistilni Servis Gjorgijevi",
    description: "Professional cleaning service website with responsive design.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" },
      { name: "React", icon: FaReact, color: "bg-blue-200 text-blue-800" }
    ],
    imageUrl: "/projects/gjorgijevi.png",
    projectUrl: "https://gjorgijevi.vercel.app",
  },
  {
    title: "Time-Tracking App",
    description: "A time-tracking application to monitor work hours.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "ASP.NET", icon: FaTools, color: "bg-blue-200 text-blue-800" },
      { name: "C#", icon: SiCplusplus, color: "bg-blue-300 text-blue-900" }
    ],
    imageUrl: "/projects/time-tracking.png",
    projectUrl: "https://time-tracking-app-beta.vercel.app",
  },

  {
    title: "Gamespot Website",
    description: "A gaming arcade website developed for Gamespot.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" }
    ],
    imageUrl: "/projects/gamespot.png",
    projectUrl: "https://gamespot.si",
  },
  {
    title: "DejaVisuals Website",
    description: "A marketing agency website in collaboration with a partner.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-teal-200 text-teal-800" }
    ],
    imageUrl: "/projects/dejavisuals.png",
    projectUrl: "https://dejavisuals.si",
  },
  {
    title: "Printec Website",
    description: "Corporate website developed for Printec using WordPress.",
    technologies: [
      { name: "WordPress", icon: FaWordpress, color: "bg-blue-200 text-blue-800" },
      { name: "PHP", icon: FaPhp, color: "bg-indigo-200 text-indigo-800" },
      { name: "CSS", icon: FaCss3Alt, color: "bg-blue-200 text-blue-800" }
    ],
    imageUrl: "/projects/printec.png",
    projectUrl: "https://printecgroup.si",
  },
];

export default function PortfolioPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setCurrentVideo(null);
    setIsVideoOpen(false);
  };

  return (
    <>
      <HeroProjects />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto p-6"
      >
        <motion.section 
          className="mb-12 bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-start gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-muted ml-2 font-mono">portfolio.js</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaFolderOpen className="text-3xl text-accent" />
            <h1 className="text-3xl font-bold text-center">
              <span className="text-accent">&lt;</span>
              Project Collection
              <span className="text-accent">/&gt;</span>
            </h1>
          </div>
          <p className="text-lg text-muted mt-2 font-mono text-center">
            <span className="text-accent">//</span> A showcase of my work and the technologies I used
          </p>
        </motion.section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group bg-card/50 backdrop-blur-sm rounded-lg border border-accent/20 shadow-lg overflow-hidden hover:border-accent/40 transition-all"
            >
              <div className="relative">
                {project.imageUrl ? (
                  project.videoUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      onClick={() => openVideo(project.videoUrl)}
                    />
                  ) : (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      />
                    </a>
                  )
                ) : (
                  <div className="w-full h-64 bg-card/80 flex items-center justify-center">
                    <div className="text-center">
                      <FaTerminal className="text-4xl mb-2 text-accent mx-auto" />
                      <p className="text-white font-mono">In Progress</p>
                    </div>
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-card/90 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-2 text-accent font-mono">{project.title}</h2>
                      <p className="text-sm mb-4">{project.description}</p>
                      <div className="flex justify-center flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-2 px-3 py-1 rounded-full shadow-md ${tech.color} text-sm font-mono`}
                          >
                            <tech.icon className="text-lg" />
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm p-4 transition-opacity duration-300 group-hover:opacity-0 pointer-events-auto">
                <h2 className="text-lg font-bold text-white group-hover:text-accent transition-colors font-mono">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 px-3 py-1 rounded-full shadow-md ${tech.color} text-sm font-mono`}
                    >
                      <tech.icon className="text-lg" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </motion.div>

      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-card/95 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-accent/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-muted ml-2 font-mono">video.js</span>
            </div>
            <button
              className="absolute top-4 right-4 text-white text-4xl focus:outline-none hover:text-accent transition-colors"
              onClick={closeVideo}
            >
              &times;
            </button>
            <video
              src={currentVideo}
              controls
              autoPlay
              className="h-[70vh] mx-auto rounded-lg shadow-lg"
            ></video>
          </div>
        </motion.div>
      )}
    </>
  );
}
