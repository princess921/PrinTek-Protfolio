import { motion } from "framer-motion";
import { Play, Mic2, Film, Volume2, ExternalLink, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

const videoProjects = [
  {
    title: "Amanchalak Marketing Campaign",
    type: "Marketing Edit",
    duration: "2:30",
    link: "",
    videoUrl: "", // Add your video URL here (YouTube, Vimeo, or direct MP4)
  },
  {
    title: "PrinTek Tech Review",
    type: "Content Video",
    duration: "5:12",
    link: "",
    videoUrl: "",
  },
  {
    title: "Product Launch Promo",
    type: "Promo Video",
    duration: "1:45",
    link: "",
    videoUrl: "",
  },
];

const voiceProjects = [
  {
    title: "30-Day Voice-Over Challenge",
    type: "Challenge Series",
    episodes: 30,
    link: "",
    audioUrl: "", // Add your audio file URL here (MP3, WAV, etc.)
  },
  {
    title: "Tech Tutorial Narration",
    type: "Educational",
    episodes: 12,
    link: "",
    audioUrl: "",
  },
  {
    title: "Brand Commercial VO",
    type: "Commercial",
    episodes: 5,
    link: "",
    audioUrl: "",
  },
];

const MediaSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  return (
    <section id="media" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">
              {"// 02. Media Studio"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Visual & <span className="gradient-text">Audio</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From high-impact video editing to professional voice-over
              artistry.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Video Reel */}
          <ScrollReveal direction="left">
            <div className="flex items-center gap-3 mb-6">
              <Film className="text-primary" size={22} />
              <h3 className="text-xl font-semibold">Video Editing</h3>
            </div>

            <div className="space-y-4">
              {videoProjects.map((project, i) => (
                <ScrollReveal
                  key={project.title}
                  delay={i * 0.08}
                  direction="left"
                >
                  <motion.div
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="glass-card p-4 hover:border-primary/40 hover:shadow-[0_4px_24px_hsl(var(--glow-primary)/0.1)] transition-all duration-300 group"
                  >
                    <div
                      className="flex items-center gap-4 mb-3 cursor-pointer"
                      onClick={() =>
                        project.videoUrl && setSelectedVideo(project.videoUrl)
                      }
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Play className="text-primary" size={18} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {project.type}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-muted-foreground">
                          {project.duration}
                        </span>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink
                              size={14}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Voice-Over */}
          <ScrollReveal direction="right">
            <div className="flex items-center gap-3 mb-6">
              <Mic2 className="text-accent" size={22} />
              <h3 className="text-xl font-semibold">Voice-Over Studio</h3>
            </div>

            <div className="space-y-4">
              {voiceProjects.map((project, i) => (
                <ScrollReveal
                  key={project.title}
                  delay={i * 0.08}
                  direction="right"
                >
                  <motion.div
                    whileHover={{ x: -8, transition: { duration: 0.2 } }}
                    className="glass-card p-4 hover:border-accent/40 hover:shadow-[0_4px_24px_hsl(var(--glow-accent)/0.1)] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors cursor-pointer"
                        onClick={() =>
                          project.audioUrl && setPlayingAudio(project.audioUrl)
                        }
                      >
                        <Volume2 className="text-accent" size={18} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-sm group-hover:text-accent transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {project.type}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-muted-foreground">
                          {project.episodes} episodes
                        </span>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink
                              size={14}
                              className="text-muted-foreground hover:text-accent transition-colors"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                    {/* Audio Player */}
                    {project.audioUrl && (
                      <div className="mt-3">
                        <audio controls className="w-full h-8">
                          <source src={project.audioUrl} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
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

export default MediaSection;
