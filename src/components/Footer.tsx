import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-primary/10 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Samar
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Full-stack developer and content creator crafting clean web products,
              useful content, and AI-ready workflows.
            </p>
            <div className="pt-2">
              <p className="text-xs text-primary font-semibold">Building modern digital systems.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Navigation
            </h4>
            <div className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Connect
            </h4>

            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: 'https://linkedin.com/in/samar2341', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:samardotexe@gmail.com', label: 'Email' },
                { Icon: Github, href: 'https://github.com/samar2341', label: 'GitHub' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-primary/10 hover:border-primary/30 bg-card/50 hover:bg-card transition-all duration-300 group"
                  aria-label={item.label}
                >
                  <item.Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 my-8" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span>
            © {currentYear} Samar. All rights reserved.
          </span>
          <span>
            Designed &amp; built with React &amp; Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
};
