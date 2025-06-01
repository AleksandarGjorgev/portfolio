"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaHeart, FaCode, FaMapMarkerAlt } from "react-icons/fa";

const MotionFooter = motion.footer;
const MotionDiv = motion.div;
const MotionSpan = motion.span;
const MotionLi = motion.li;
const MotionA = motion.a;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <MotionFooter 
      className="bg-gradient-to-b from-card to-background py-12 text-muted"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About Section */}
          <MotionDiv variants={itemVariants} className="space-y-4">
            <Link href="/" className="inline-block">
              <MotionSpan 
                className="text-6xl font-bold bg-gradient-to-r from-accent to-secondary text-transparent bg-clip-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                AG
              </MotionSpan>
            </Link>
            <p className="text-sm leading-relaxed">
              Passionate software developer focused on creating elegant solutions and delivering exceptional user experiences.
            </p>
          </MotionDiv>

          {/* Quick Links Section */}
          <MotionDiv variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-accent to-secondary text-transparent bg-clip-text">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#journey" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <MotionLi 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <FaCode className="text-xs" />
                    {link.name}
                  </a>
                </MotionLi>
              ))}
            </ul>
          </MotionDiv>

          {/* Contact Section */}
          <MotionDiv variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-accent to-secondary text-transparent bg-clip-text">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <MotionLi 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3"
              >
                <FaEnvelope className="text-accent" />
                <a 
                  href="mailto:gjorgevaleks@gmail.com" 
                  className="hover:text-accent transition-colors"
                >
                  gjorgevaleks@gmail.com
                </a>
              </MotionLi>
              <MotionLi 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3"
              >
                <FaMapMarkerAlt className="text-accent" />
                <span>1000 Ljubljana, Slovenia</span>
              </MotionLi>
            </ul>
          </MotionDiv>

          {/* Social Media Section */}
          <MotionDiv variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-accent to-secondary text-transparent bg-clip-text">
              Connect With Me
            </h4>
            <div className="space-y-3">
              <MotionA
                href="https://linkedin.com/in/aleksandar-gjorgev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin className="text-accent" />
                LinkedIn
              </MotionA>
              <MotionA
                href="https://github.com/AleksandarGjorgev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGithub className="text-accent" />
                GitHub
              </MotionA>
            </div>
          </MotionDiv>
        </div>

        {/* Copyright Section */}
        <MotionDiv 
          className="border-t border-muted/20 pt-8 text-center space-y-4"
          variants={itemVariants}
        >
          <p className="text-sm">
            © {currentYear} Aleksandar Gjorgev. All Rights Reserved.
          </p>
          <p className="text-sm flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> using
            <span className="text-accent">Next.js</span> and
            <span className="text-accent">Tailwind CSS</span>
          </p>
        </MotionDiv>
      </div>
    </MotionFooter>
  );
}