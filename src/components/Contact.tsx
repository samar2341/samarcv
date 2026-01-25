import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-background via-background to-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Let’s connect
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I’m open to new ideas, collaborations, and meaningful conversations.
            If you think we can build something together, feel free to reach out.
          </p>

          {/* Contact Card */}
          <div className="mt-16 mx-auto max-w-3xl rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-10 md:p-14">
            
            <p className="text-sm text-muted-foreground mb-10">
              You can find me here
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              
              <Button
                size="lg"
                className="h-12 px-7 text-sm bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="mailto:samardotexe@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 px-7 text-sm border-border hover:border-primary hover:text-primary"
                asChild
              >
                <a
                  href="https://linkedin.com/in/samar2341"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 px-7 text-sm border-border hover:border-primary hover:text-primary"
                asChild
              >
                <a
                  href="https://github.com/samar2341"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Soft closing line */}
          <p className="mt-12 text-sm text-muted-foreground">
            Available for internships, freelance projects, and collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};
