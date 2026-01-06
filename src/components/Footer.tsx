import { Github, Linkedin, Mail } from "lucide-react";
import Rez from "@/assets/DarrinDuncanResume.pdf";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright & Location */}
          <div className="text-muted-foreground text-sm text-center md:text-left">
            <p>© {currentYear} Darrin Duncan. All rights reserved.</p>
            <p className="mt-1">Serving clients remotely from Pennsylvania</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/darrinduncan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/leviduncan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:darrin@darrinduncan.com"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Resume Link */}
          <div className="text-sm">
            <a
              href={Rez}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
