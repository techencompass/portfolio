"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    "Microservices & Event-Driven Architecture", 
    "Kubernetes, Docker, AWS (EC2, Lambda, S3)",
    "DevOps & CI/CD Pipelines",
    "AI/ML Integrations (LangChain, LLMs)",
    "Ruby on Rails, Python, Java",
    "Agile Leadership & Digital Transformation",
    "Spring eco system",
    "SQL and No-SQL databases",
    "React & Next js",
    "Prometheus & Graphana"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <span className="section-number">01.</span> About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted-foreground mb-4 leading-relaxed">
            Hello! I’m Srikanth, a technology leader with 27+ years of experience driving innovation in SaaS, cloud-native platforms, and large-scale digital transformations. My journey began in the late 90s, architecting enterprise solutions at Hewlett-Packard, and has since evolved into leading global engineering teams, modernizing legacy systems, and delivering mission-critical products across industries like Telecom, Finance, and Supply Chain. Today, as CTO at Yottolabs, I focus on scaling high-performing engineering teams, optimizing cloud-native architectures, and leveraging AI/ML to solve real-world business challenges. My work spans:
            </p>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I’m passionate about transforming complex systems into efficient, future-proof solutions—whether modernizing ERPs, securing platforms against OWASP Top 10, or prototyping LLM-powered chatbots. Beyond execution, I thrive on aligning technology with business strategy to deliver measurable impact.
            </p>
            
         
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
            Here are key technologies and frameworks I’ve spearheaded in recent initiatives:
            </p>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {skills.map((skill, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center text-sm text-muted-foreground"
                >
                  <span className="text-accent mr-2">▹</span> {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative mx-auto w-full max-w-[250px]"
          >
            <div className="relative group">
              <div className="absolute inset-0 border-2 border-accent rounded translate-x-5 translate-y-5 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative overflow-hidden rounded bg-accent/20">
                <Image
                  src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Brittany Chiang"
                  width={250}
                  height={250}
                  className="mix-blend-multiply filter grayscale contrast-100 brightness-90 hover:filter-none transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}