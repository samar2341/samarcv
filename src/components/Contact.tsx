import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Get in touch!</h2>
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="mailto:samardotexe@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
