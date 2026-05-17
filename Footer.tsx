import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">Prin</span>Tek © {new Date().getFullYear()}
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Built with <Heart size={12} className="text-primary" /> by Princess Asiedua Annor
        </p>
        <div className="flex items-center gap-4">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
