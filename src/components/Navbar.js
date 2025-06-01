"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCode, FaBars, FaTimes, FaRocket } from "react-icons/fa";

const MotionNav = motion.nav;
const MotionDiv = motion.div;
const MotionLink = motion.a;
const MotionUl = motion.ul;
const MotionLi = motion.li;
const MotionButton = motion.button;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items
  const menuItems = [
    { name: "Projects", href: "/projects", icon: "💻" },
    { name: "Experience", href: "/#journey", icon: "📈" },
    { name: "Skills", href: "/#skills", icon: "⚡" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <MotionNav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-card/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Left Section */}
          <MotionDiv
            className="flex items-center z-50"
            variants={itemVariants}
          >
            <Link href="/" className="flex items-center gap-2">
              <MotionDiv
                className="bg-gradient-to-r from-accent to-secondary p-2 rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-xl md:text-2xl font-bold text-white">AG</span>
              </MotionDiv>
            </Link>
          </MotionDiv>

          {/* Desktop Menu - Center Section */}
          <MotionUl
            className="hidden md:flex items-center justify-center gap-8"
            variants={containerVariants}
          >
            {menuItems.map((item) => (
              <MotionLi
                key={item.name}
                variants={itemVariants}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent/10 transition-all"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </MotionLi>
            ))}
          </MotionUl>

          {/* CTA and Mobile Menu Button - Right Section */}
          <MotionDiv
            className="flex items-center gap-4 z-50"
            variants={itemVariants}
          >
            <MotionButton
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-accent to-secondary text-white font-semibold shadow-lg"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => window.location.href = "/#contact"}
            >
              <FaRocket className="text-lg" />
              <span>Hire Me</span>
            </MotionButton>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-all focus:outline-none focus:ring-2 focus:ring-accent/20 relative z-50"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <FaTimes className="text-2xl text-accent hover:text-white transition-colors" />
              ) : (
                <FaBars className="text-2xl text-accent hover:text-white transition-colors" />
              )}
            </button>
          </MotionDiv>
        </div>

        {/* Mobile Menu */}
        <MotionDiv
          className={`md:hidden fixed inset-0 bg-card/80 backdrop-blur-md z-40 transition-all duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          initial={false}
          animate={{ opacity: menuOpen ? 1 : 0 }}
        >
          <div className="container bg-card p-4 mx-auto px-4 pt-20">
            <MotionUl
              className="space-y-4 "
              variants={containerVariants}
            >
              {menuItems.map((item) => (
                <MotionLi
                  key={item.name}
                  variants={itemVariants}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 transition-all text-lg bg-card/50 backdrop-blur-sm"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </MotionLi>
              ))}
              <MotionLi variants={itemVariants} className="w-full mt-6">
                <MotionButton
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-secondary text-white font-semibold shadow-lg"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => {
                    setMenuOpen(false);
                    window.location.href = "/#contact";
                  }}
                >
                  <FaRocket className="text-lg" />
                  <span>Hire Me</span>
                </MotionButton>
              </MotionLi>
            </MotionUl>
          </div>
        </MotionDiv>
      </div>
    </MotionNav>
  );
}
