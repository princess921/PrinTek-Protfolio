import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Eye,
  Sparkles,
  ExternalLink,
  Youtube,
  Instagram,
  Music,
  Play,
  X,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

const stats = [
  { icon: Users, label: "Growing Audience", value: "PrinTek Community" },
  { icon: Eye, label: "Content Reach", value: "Multi-Platform" },
  { icon: TrendingUp, label: "Consistency", value: "Weekly Uploads" },
];

const contentPieces = [
  {
    title: "Tech Tutorials",
    desc: "Breaking down complex concepts into digestible content",
    platform: "YouTube",
    platformIcon: Youtube,
    link: "",
    color: "primary" as const,
    audioUrl: "", // Add podcast/audio URL here
    videoUrl: "", // Add video URL here
  },
  {
    title: "Dev Vlogs",
    desc: "Behind-the-scenes of building real projects",
    platform: "YouTube",
    platformIcon: Youtube,
    link: "",
    color: "accent" as const,
    audioUrl: "",
    videoUrl: "",
  },
  {
    title: "Industry Insights",
    desc: "Sharing perspectives on tech trends and career growth",
    platform: "Instagram",
    platformIcon: Instagram,
    link: "",
    color: "primary" as const,
    audioUrl: "",
    videoUrl: "",
  },
  {
    title: "Code Reviews",
    desc: "Live debugging and code walkthrough sessions",
    platform: "YouTube",
    platformIcon: Youtube,
    link: "",
    color: "accent" as const,
    audioUrl: "",
    videoUrl: "",
  },
];

const ContentSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="content" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">
              {"// 03. Content Creator"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              The <span className="gradient-text">PrinTek</span> Brand
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Making tech accessible, engaging, and beautifully presented across
              platforms.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} scale>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-6 text-center"
              >
                <stat.icon className="text-primary mx-auto mb-3" size={24} />
                <p className="font-semibold text-sm">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {contentPieces.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card p-6 hover:border-primary/40 hover:shadow-[0_8px_40px_hsl(var(--glow-primary)/0.12)] transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-grow">
                    <Sparkles className={`text-${item.color} mt-1`} size={20} />
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <item.platformIcon
                          size={14}
                          className="text-muted-foreground"
                        />
                        <span className="text-xs text-muted-foreground font-mono">
                          {item.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 ml-3"
                    >
                      <ExternalLink
                        size={16}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      />
                    </a>
                  )}
                </div>

                {/* Video Player */}
                {item.videoUrl && (
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedVideo(item.videoUrl)}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors mb-3"
                    >
                      <Play size={14} className="text-primary" />
                      <span className="text-xs font-mono text-primary">
                        Watch Video
                      </span>
                    </motion.button>
                  </div>
                )}

                {/* Audio Player */}
                {item.audioUrl && (
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Music size={14} className="text-primary" />
                      <span className="text-xs font-mono text-muted-foreground">
                        Audio Available
                      </span>
                    </div>
                    <audio controls className="w-full h-8">
                      <source src={item.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-background rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-background rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
              <div className="aspect-video">
                {selectedVideo.includes("youtube.com") ||
                selectedVideo.includes("youtu.be") ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedVideo
                      .replace("watch?v=", "embed/")
                      .replace("youtu.be/", "youtube.com/embed/")}
                    title="Video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video controls className="w-full h-full bg-black">
                    <source src={selectedVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
