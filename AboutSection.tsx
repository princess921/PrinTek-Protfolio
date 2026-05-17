import { motion } from "framer-motion";
import { Code, Video, Mic, Zap } from "lucide-react";
import portrait from "@/assets/princess-portrait.png";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { icon: Code, label: "Fullstack Development", desc: "HTML, CSS, JavaScript, PHP, React & more" },
  { icon: Video, label: "Video Editing", desc: "High-impact marketing & tech content visuals" },
  { icon: Mic, label: "Voice-over & Speaking", desc: "Professional narration & public speaking" },
  { icon: Zap, label: "Tech Content Creation", desc: "Building the PrinTek brand across platforms" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left" blur>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden glow-border">
                <img
                  src={portrait}
                  alt="Princess Asiedua Annor"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-3 glow-border"
              >
                <p className="font-mono text-xs text-primary">{"<PrinTek />"}</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" blur>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm Princess Asiedua Annor — a "unicorn" in the tech space. I don't just write code; I present, 
              market, and package it visually and audibly. My diverse skill set is a complete package: I build the tech, 
              design the experience, and tell the story. Through my brand PrinTek, I'm on a mission to make tech 
              accessible, engaging, and beautifully presented.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <ScrollReveal key={skill.label} delay={i * 0.08} scale>
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="glass-card p-4 hover:border-primary/50 hover:shadow-[0_4px_20px_hsl(var(--glow-primary)/0.1)] transition-all duration-300 group"
                  >
                    <skill.icon className="text-primary mb-2 group-hover:drop-shadow-[0_0_8px_hsl(var(--glow-primary)/0.6)] transition-all" size={22} />
                    <h3 className="font-semibold text-sm mb-1">{skill.label}</h3>
                    <p className="text-xs text-muted-foreground">{skill.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
