"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
  FaDocker,
} from "react-icons/fa";

export default function ExperiencePage() {
  const education = [
    {
      title: "College Diploma (Ongoing)",
      institution: "Sofizo d.o.o, Ljubljana",
      duration: "October 2023 - Present",
      xp: 150,
      description: "Focused on advanced programming and cloud computing.",
      technologies: ["Python", "JavaScript", "Cloud Computing", "Database Management"],
    },
    {
      title: "High School Diploma",
      institution: "SŠTS Šiška, Ljubljana",
      duration: "September 2020 - July 2024",
      xp: 100,
      description: "Learned the basics of programming and web development.",
      technologies: ["HTML", "CSS", "PHP", "JavaScript"],
    },
  ];

  const projects = [
    {
      title: "Self-Service POS System",
      xp: 300,
      description: "Developed a POS system using Python, Flask, and Flutter.",
      link: "https://github.com/example-pos-system",
      technologies: ["Python", "Flask", "Flutter", "Docker"],
    },
    {
      title: "Car Booking Platform",
      xp: 200,
      description: "Enhanced user experience for a Laravel-based booking platform.",
      link: "https://github.com/example-car-booking",
      technologies: ["Laravel", "PHP", "JavaScript", "Docker"],
    },
  ];

  const totalXP =
    education.reduce((sum, edu) => sum + edu.xp, 0) +
    projects.reduce((sum, project) => sum + project.xp, 0);
  const level = Math.floor(totalXP / 100);
  const xpProgress = totalXP % 100;

  return (
    <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
          Your Adventure
        </h1>
      </motion.div>

      {/* XP Progress */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-4xl font-semibold">Level {level}</h2>
        </motion.div>
        <p className="text-lg mt-2">
          Total XP: <span className="text-green-400 font-bold">{totalXP}</span>
        </p>
        <div className="relative mt-4 h-6 bg-gray-600 rounded-full overflow-hidden shadow-lg">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${xpProgress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute h-full bg-green-500"
          />
        </div>
        <p className="text-sm mt-2 text-gray-300">Progress to next level: {xpProgress}%</p>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded-lg bg-gradient-to-r from-indigo-800 to-purple-700 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-yellow-300">{edu.title}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.duration}</p>
              <p className="text-base mt-4">{edu.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 text-yellow-400">
                {edu.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-yellow-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-green-400 mt-2">XP Earned: {edu.xp}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded-lg bg-gradient-to-r from-blue-800 to-green-700 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-pink-300">{project.title}</h3>
              <p className="text-base mt-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 text-blue-200">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-green-400 mt-2">XP Earned: {project.xp}</p>
              <Link
                href={project.link}
                className="block mt-4 text-white bg-pink-500 px-4 py-2 rounded-lg text-center shadow-md hover:bg-pink-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
