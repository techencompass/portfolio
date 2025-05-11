"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const featuredProjects = [
  {
    title: "Spotify Profile",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your preferences.",
    tags: ["React", "Express", "Spotify API", "Styled Components"],
    image: "https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "#",
    external: "#",
    featured: true
  },
  {
    title: "Course Platform",
    description: "A decoupled, maintainable e-commerce system following Clean Architecture—built with Spring Boot, Next.js, and Redis",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "#",
    external: "#",
    featured: true
  }
];

const otherProjects = [
  {
    title: "CQRS Pattern Example",
    description: "This project justifies the use of the Command Query Responsibility Segregation (CQRS) pattern ",
    tags: ["Spring Boot", "React & Nextjs", "MySQL"],
    github: "https://github.com/techencompass/cqrs_example",
    external: "#"
  },
  {
    title: "DocSense: AI-Powered Document Analyzer",
    description: "DocSense - Modular AI Pipeline with Hexagonal Architecture",
    tags: ["Node.js", "NextJS", "LLM Agent"],
    github: "https://github.com/techencompass/docsense",
    external: "#"
  },
  {
    title: "Event-Driven Order Management System (OMS)",
    description: "This Event-Driven Order Management System is designed to handle complex order lifecycles with high scalability, resiliency, and extensibility.",
    tags: ["Java 21", "MongoDB", "Docker/Kubernetes"],
    github: "https://github.com/techencompass/oms",
    external: "#"
  },
];

export function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <span className="section-number">03.</span> Some Things I've Built
        </motion.h2>

        {/* Featured Projects */}
      

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
    

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => {
              const [cardRef, cardInView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <motion.div
                  key={i}
                  ref={cardRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-card rounded-lg p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="flex justify-between items-center mb-6">
                    <FolderGit2 className="w-10 h-10 text-accent" />
                    <div className="flex items-center gap-3">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                      </Link>
                      {/* <Link href={project.external} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                      </Link> */}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
                  <div className="mt-auto">
                    <ul className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono text-muted-foreground">
                      {project.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}