import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t py-8 bg-card/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold heading-display text-foreground">RY.</span>
            <div className="text-sm text-muted-foreground">
              <p>Full-Stack & AI Developer</p>
              <p>📍 Karlskrona, Sweden</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/simply-Rahul8" target="_blank" rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/yaswanthrahul/" target="_blank" rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a href="mailto:yashwanthrahul5126@gmail.com"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">© 2025</span>
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="hover:bg-primary/10">
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
