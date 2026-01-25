import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-20">
        
        {/* Top Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left – About */}
          <div className="space-y-4 text-left">
            <h3 className="text-lg font-semibold">Samar</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Full-stack developer focused on building clean, performant, and
              user-friendly web experiences. Interested in open-source,
              design systems, and scalable products.
            </p>
          </div>

          {/* Right – Contact */}
          <div className="space-y-4 md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Connect
            </h4>

            <div className="flex md:justify-start gap-4">
              <a
                href="https://github.com/samar2341"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href="https://linkedin.com/in/samar2341"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="p-4 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Samar. All rights reserved.
          </span>
          <span>
            Designed &amp; Built by Samar
          </span>
        </div>
      </div>
    </footer>
  );
};
