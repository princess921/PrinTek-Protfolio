import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Layers,
  Database,
  Globe,
  Smartphone,
  Server,
  ShoppingCart,
  Image as ImageIcon,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const techStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "PHP",
  "Node.js",
  "Tailwind CSS",
  "MySQL",
  "MongoDB",
  "Git",
  "REST APIs",
];

const projects = [
  {
    title: "Phone Inventory & Sales System",
    description:
      "A comprehensive management system for tracking phone inventory, sales records, and customer data with real-time analytics.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    icon: Database,
    github: "",
    live: "",
    screenshots: [
      // Add your screenshots here: { url: "/path/to/screenshot.jpg", alt: "Dashboard view" }
    ],
  },
  {
    title: "PrinTek Brand Website",
    description:
      "A modern, responsive brand platform showcasing tech content, tutorials, and creative works under the PrinTek identity.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icon: Globe,
    github: "",
    live: "",
    screenshots: [
      // Add your screenshots here: { url: "/path/to/screenshot.jpg", alt: "Homepage" }
    ],
  },
  {
    title: "Digital Records Management",
    description:
      "A digital records platform developed during tenure at Grace Station Foundation for efficient data management and retrieval.",
    tech: ["PHP", "JavaScript", "MySQL"],
    icon: Layers,
    github: "",
    live: "",
    screenshots: [
      // Add your screenshots here: { url: "/path/to/screenshot.jpg", alt: "Dashboard" }
    ],
  },
];

const DeveloperSection = () => {
  return (
    <section id="developer" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">
              {"// 01. Developer Hub"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Code & <span className="gradient-text">Craft</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Building robust, scalable solutions from frontend to backend.
            </p>
          </div>
        </ScrollReveal>

        {/* Tech Stack */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.04,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 rounded-lg border border-border bg-card/50 font-mono text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.12} scale>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card p-6 hover:border-primary/40 hover:shadow-[0_8px_40px_hsl(var(--glow-primary)/0.15)] transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <project.icon className="text-primary" size={28} />
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github
                          size={16}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <ExternalLink
                          size={16}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        />
                      </a>
                    )}
                    {!project.github && !project.live && (
                      <>
                        <Github
                          size={16}
                          className="text-muted-foreground/40"
                        />
                        <ExternalLink
                          size={16}
                          className="text-muted-foreground/40"
                        />
                      </>
                    )}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Screenshots Gallery */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
                    {project.screenshots.map((screenshot, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="shrink-0 cursor-pointer"
                      >
                        <img
                          src={screenshot.url}
                          alt={screenshot.alt}
                          className="h-20 rounded border border-border hover:border-primary/50 transition-colors"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-primary/70 bg-primary/5 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
