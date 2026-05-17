import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Save submissions locally in `localStorage` so the project is fully local.
      const submission = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        created_at: new Date().toISOString(),
      };

      const existing = JSON.parse(localStorage.getItem("contact_submissions") || "[]");
      existing.push(submission);
      localStorage.setItem("contact_submissions", JSON.stringify(existing));

      toast.success("Message saved locally! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">{"// 04. Get In Touch"}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind, need a voice-over, or want to collaborate? I'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <ScrollReveal direction="left" className="md:col-span-2 space-y-6">
            <motion.div whileHover={{ x: 4 }} className="glass-card p-5 flex items-start gap-4">
              <Mail className="text-primary mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-sm mb-1">Email</h4>
                <p className="text-xs text-muted-foreground">hello@printek.dev</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ x: 4 }} className="glass-card p-5 flex items-start gap-4">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-sm mb-1">Location</h4>
                <p className="text-xs text-muted-foreground">Ghana, West Africa</p>
              </div>
            </motion.div>

            <div className="glass-card p-4 font-mono text-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-accent/60" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> printek --status
              </p>
              <p className="text-terminal-green mt-1">→ Open for opportunities ✓</p>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right" className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm font-mono focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm font-mono focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                  required
                  maxLength={255}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm font-mono focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                  maxLength={1000}
                />
              </div>
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.4)] transition-all duration-300 disabled:opacity-50"
              >
                {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {submitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
