"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#journey" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed p-2 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Animated Logo */}
        <motion.div
          className="text-accent text-3xl font-bold cursor-pointer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/">
            <span className="bg-gradient-to-r from-accent to-secondary text-transparent bg-clip-text">
              AG
            </span>
          </Link>
        </motion.div>

        {/* Menu */}
        <ul className="flex font-bold  items-center gap-6 text-2xl md:text-2xl">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link href={item.href} className="hover:text-accent ml-2 mr-2 transition">
                {item.name}
              </Link>
              {/* Underline on hover */}
              <div className="absolute bottom-[-4px] ml-2 mr-2 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
