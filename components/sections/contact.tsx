"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-accent text-sm mb-4"
        >
          <span className="section-number">04.</span> What's Next?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground mb-12 leading-relaxed"
        >
          Although I'm not currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="mailto:hello@brittanychiang.com">
            <button className="main-button">Say Hello</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}