"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, ExternalLink } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, url: "https://github.com/techencompass", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/srikanth-achar-k/", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Social Links (Mobile) */}
        <div className="flex justify-center md:hidden mb-6 space-x-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Social Links (Desktop - Fixed) */}
        <div className="fixed left-6 bottom-0 hidden md:block">
          <div className="flex flex-col items-center space-y-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                  </Link>
                </motion.div>
              );
            })}
            <div className="h-24 w-0.5 bg-muted-foreground/30"></div>
          </div>
        </div>

        {/* Email (Desktop - Fixed) */}
        <div className="fixed right-6 bottom-0 hidden md:block">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* <Link 
                href="mailto:hello@brittanychiang.com"
                className="font-mono text-xs tracking-widest rotate-90 block mb-24 -mr-24 text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                hello@brittanychiang.com
              </Link> */}
            </motion.div>
            <div className="h-24 w-0.5 bg-muted-foreground/30"></div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs font-mono text-muted-foreground"
        >
          {/* <a
            href="https://github.com/bchiang7/v4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300 inline-flex items-center gap-1"
          >
            <span>Designed & Built by Brittany Chiang</span>
            <ExternalLink className="w-3 h-3" />
          </a> */}
        </motion.div>
      </div>
    </footer>
  );
}