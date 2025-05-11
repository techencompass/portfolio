"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-accent mb-5 text-sm sm:text-base"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4"
        >
          Srikanth Achar K.
        </motion.h1>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-muted-foreground mb-8"
        >
          I enable innovation through technology leadership.
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground max-w-xl text-base sm:text-lg mb-12 leading-relaxed"
        >
          I'm a technology leader specializing in driving innovation and scaling high-performing software teams. Currently, I focus on delivering accessible, human-centered products while aligning engineering excellence with business strategy.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="#work">
            <button className="main-button">
              Check out my work!
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}