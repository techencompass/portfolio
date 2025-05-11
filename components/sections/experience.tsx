"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: "Yotto Labs Pvt. LTD",
    url: "https://yottolabs.com",
    title: "Chief Technology Officer",
    range: "Jan 2025 - Present",
    responsibilities: [
      "Faced with outdated ERP tech causing maintenance overhead, led migration from Ruby on Rails v2.1.3 to the latest stable version, improving system performance by 40% and reducing tech debt by 60%",
      "Identified customer churn and revenue stagnation as key challenges; onboarded high-value B2B clients and enhanced UX, resulting in a 20% revenue increase",
      "In response to growing security incidents, implemented controls aligned with OWASP Top 10, reducing vulnerability reports by 90% and improving compliance",
      "Addressed slow and error-prone release cycles by introducing CI/CD and containerized deployment, reducing release time by 50% and improving deployment reliability",
      "Refactored and modularized codebase, improving maintainability score by 35% and reducing average bug resolution time by 25%"
    ]
  },
  {
    company: "Gigsky Inc",
    url: "https://gigsky.com",
    title: "Senior Director of Engineering",
    range: "October 2018 - Dec 2024",
    responsibilities: [
      "Led end-to-end architecture and delivery of GigSky’s enterprise-grade eSIM SaaS platform, enabling global connectivity for Fortune 500 clients",
      "Managed and mentored a 60+ member engineering team across geographies, embedding a culture of ownership and high performance",
      "Replaced high-cost third-party OCS with an in-house scalable solution, saving ~$2M annually and enabling full control over charging operations",
      "Developed and deployed an in-house Over-the-Air (OTA) server, cutting third-party dependencies and saving $120K annually",
      "Tackled legacy system complexity by migrating 30+ services to Kubernetes-based microservices, enhancing scalability and cutting maintenance effort by 40%",
      "Partnered with AT&T to launch a global-scale RSM platform, architected to support 5B+ connected devices, ensuring high availability and performance",
      "Introduced AI innovation by prototyping a LangChain-based LLM bot, demonstrating potential for internal automation and boosting team productivity"
    ]
  },
  {
    company: "Altisource Pvt. Ltd",
    url: "https://altisource.com",
    title: "Senior Architect",
    range: "October 2013 - Aug 2018",
    responsibilities: [
      "Drove \"develop to production\" transformation for three key Altisource PaaS components—IAM, Object Store, and Search Service—enhancing release efficiency and operational stability",
      "Responding to complex vendor compliance needs, architected and delivered Vendorly SaaS platform to simplify vendor oversight and meet evolving regulatory demands",
      "Promoted cross-unit adoption of platform components, ensuring consistency, reusability, and reduced duplication across teams.",
      "Led product evaluations, reviews, and surveys to support continuous improvement, technical alignment, and stakeholder satisfaction.",
      "Scaled IAM to support over 2 million active users and handled ~1 million concurrent sessions, ensuring high availability and performance.",
      "Optimized Search Service to handle up to 80,000 document operations per second, enabling lightning-fast data retrieval and indexing.",
      "Benchmarked Object Store performance at 6,000 PUT/GET operations per minute for 1MB-sized objects, demonstrating robust throughput and efficiency."
    ]
  },
  {
    company: "Eka Software Pvt. LTD",
    url: "https://eka1.com/",
    title: "Senior Engineering Manager",
    range: "Sept 2009 - Sept 2013",
    responsibilities: [
      "Faced with a fragmented and legacy trading system landscape, conceptualized and led the development of a lightweight, REST-based ETRM platform tailored for Metals, Agri, and Energy commodities, improving modularity and enabling faster feature delivery.",
      "Identified the need for consistent and scalable system interoperability; architected and implemented a lightweight integration framework using Apache Camel, standardizing external system interactions and accelerating partner onboarding.",
      "To meet diverse client requirements, led the development of over 30 custom integrations for EKA’s ETRM product, enabling seamless deployment across multiple enterprise clients and reducing integration timelines by 50%.",
      "Addressed scalability and performance bottlenecks for onboarding CBH’s ~1 million farmer network; designed a scalable onboarding strategy that streamlined data ingestion and ensured reliable access to the ETRM platform.",
      "In the face of missed deadlines and delivery inconsistencies, introduced Agile methodology and established sprint cadences, resulting in predictable delivery cycles and a measurable improvement in release quality and team velocity."
    ]
  },
  {
    company: "Samsung SDS",
    url: "https://www.samsungsds.com/",
    title: "Engineering Manager",
    range: "Sept 2007 - Sept 2007",
    responsibilities: [
      "Faced with an urgent need to scale development capacity, built and led a cross-functional team of 20 developers and QA engineers across all experience levels, delivering multiple enterprise-grade products for Samsung SDS with high quality and speed.",
      "Contributed to Samsung SDS's flagship open-source project, Anyframe, by designing and developing core modules such as IAM, IDE, Log Manager, and Monitoring, enhancing platform extensibility and developer usability across internal and external teams.",
      "In a delivery environment prone to delays and misalignment, introduced Agile methodology with tailored sprint processes and ceremonies, significantly improving team collaboration, delivery predictability, and product quality.",
    ]
  },
  {
    company: "Manhattan Associates",
    url: "https://www.manh.com/en-in",
    title: "Engineering Manager",
    range: "June 2006 - Aug 2007",
    responsibilities: [
      "Tasked with aligning fragmented product architectures, spearheaded the architecture team to design a component-based, scalable, and robust framework that enabled a unified architecture for Manhattan’s supply chain suite, improving cross-product maintainability and extensibility.",
      "Identified a gap in the product’s flexibility for client-specific implementations and created a novel Theme-and-Behavior-based customization framework, drastically reducing development effort for bespoke solutions and accelerating time-to-value for customers.",
      "Led architectural analysis to identify core functionalities suitable for abstraction, resulting in the conversion of key logic into reusable modules adopted across multiple product lines.",
      "Advocated the adoption of JSF component standards across product teams, facilitated enablement sessions, and drove widespread usage that improved UI consistency and accelerated development across the Manhattan product suite."
    ]
  },
  {
    company: "Hewlett-Packard",
    url: "https://www.hpe.com/in/en/home.html",
    title: "Architect",
    range: "June 1998 - May 2006",
    responsibilities: [
      "Engineered and maintained major features of customer-facing web application using React",
      "Proposed and implemented scalable solutions to issues identified with cloud services and applications",
      "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences",
      "Worked alongside senior engineers to develop new features and maintain code quality"
    ]
  },
  {
    company: "Tektronix Pvt. Ltd.",
    url: "https://www.tek.com/",
    title: "Senior Software Engineer",
    range: "May 1996 - May 1998",
    responsibilities: [
      "Designed and implemented an intuitive application to enable end users to configure internet-enabled printers, addressing usability gaps in remote printing environments and simplifying setup across distributed locations.",
      "Developed a custom LPT driver that intercepted local print jobs, packaged them as email attachments, and routed them to designated remote printers, enabling seamless remote printing without traditional network dependencies.",
    ]
  },
  {
    company: "Monotype Pvt. Ltd",
    url: "https://www.monotype.com/",
    title: "Software Engineer",
    range: "Jan 1995 - April 1996",
    responsibilities: [
      "Identified the lack of multilingual input support in mainstream desktop publishing tools; designed and implemented a keyboard interceptor that enabled dynamic Indian language typing in MS Word, CorelDraw, and PageMaker, significantly improving accessibility for regional language users",
    ]
  }
];

export function Experience() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <span className="section-number">02.</span> Where I've Worked
        </motion.h2>

        <div className="flex flex-col lg:flex-row">
          {/* Tab List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex overflow-x-auto lg:overflow-x-visible lg:flex-col mb-6 lg:mb-0 lg:w-48 lg:min-w-48 lg:mr-8 border-b lg:border-b-0 lg:border-l border-muted"
          >
            {experiences.map((experience, i) => (
              <button
                key={i}
                onClick={() => setActiveTabIndex(i)}
                className={`px-4 py-3 font-mono text-sm whitespace-nowrap transition-all
                  ${
                    activeTabIndex === i
                      ? "text-accent border-accent lg:border-l-2 border-b-2 lg:border-b-0 bg-accent/5"
                      : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                  }
                `}
              >
                {experience.company}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 min-h-[320px]"
          >
            <h3 className="text-xl font-medium">
              <span>{experiences[activeTabIndex].title}</span>{" "}
              <span className="text-accent">
                @ <a href={experiences[activeTabIndex].url} target="_blank" rel="noopener noreferrer" className="hover:underline">{experiences[activeTabIndex].company}</a>
              </span>
            </h3>
            
            <p className="font-mono text-sm text-muted-foreground mt-1 mb-4">
              {experiences[activeTabIndex].range}
            </p>
            
            <ul className="space-y-3">
              {experiences[activeTabIndex].responsibilities.map((responsibility, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                  className="flex text-muted-foreground"
                >
                  <span className="text-accent mr-2 mt-1 flex-shrink-0">▹</span>
                  <span>{responsibility}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}