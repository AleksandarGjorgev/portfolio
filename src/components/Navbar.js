"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

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
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#journey" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled || menuOpen ? "bg-card shadow-lg" : "bg-transparent"
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
            <span className="bg-gradient-to-r from-accent to-red-300 text-transparent bg-clip-text">
              AG
            </span>
          </Link>
        </motion.div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-accent text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center font-bold gap-6 text-xl md:text-xl`}
        >
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link href={item.href} className="hover:text-accent transition">
                {item.name}
              </Link>
              {/* Underline on hover */}
              <div className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-card p-4 shadow-lg md:hidden ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 font-bold text-xl">
            {menuItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 hover:text-accent transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
