"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { number: "01.", text: "About", link: "#about" },
  { number: "02.", text: "Experience", link: "#experience" },
  { number: "03.", text: "Work", link: "#work" },
  { number: "04.", text: "Contact", link: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm py-4 shadow-md" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div variants={itemVariants}>
          <Logo />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav className="hidden md:flex items-center space-x-8" variants={navVariants}>
          {navItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={item.link} className="nav-item">
                <span className="nav-number">{item.number}</span>
                <span className="nav-text">{item.text}</span>
              </Link>
            </motion.div>
          ))}
          <motion.div variants={itemVariants}>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="main-button">Resume</button>
            </Link>
          </motion.div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-card p-8 flex flex-col z-50"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-accent"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="nav-item text-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="nav-number">{item.number}</span>
                  <span className="nav-text">{item.text}</span>
                </Link>
              ))}
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="main-button mt-4" onClick={() => setMobileMenuOpen(false)}>
                  Resume
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}