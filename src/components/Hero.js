import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      className="relative w-full h-[70vh] flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-card to-secondary text-center md:text-left overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Profile Picture on the Right */}
      <div className="w-48 h-48 md:w-64 md:h-64 md:order-last md:mr-8 ml-14 mb-6 md:mb-0">
        <Image
          src="/images/studying.png" // Replace with actual profile picture path
          alt="Profile Picture"
          width={256}
          height={256}
        />
      </div>

      <div className="flex flex-col items-center md:items-start">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-transparent pb-2 bg-clip-text bg-gradient-to-r from-accent to-red-300 mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hi, I&apos;m Aleksandar Gjorgev
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TypeAnimation
            sequence={[
              "I'm a Frontend Developer.",
              1000, // Wait 1 second
              "I'm a Backend Enthusiast.",
              1000, // Wait 1 second
              "I solve problems with code.",
              1000, // Wait 1 second
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.25em", display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="px-6 py-2 bg-accent text-white rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            Hire Me
          </a>
          <a
            href="/files/Aleksandar_Gjorgev_CV.pdf" // Replace with the actual CV path
            download
            className="px-6 py-2 bg-transparent border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-all"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="https://linkedin.com/in/aleksandar-gjorgev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-accent hover:text-blue-500 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AleksandarGjorgev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-accent hover:text-blue-500 transition-all"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>

      {/* Wavy Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[150px]"
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
