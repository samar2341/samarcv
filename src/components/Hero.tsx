import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in duration-1000">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-foreground">Samar</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium">
            your another programmer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experienced fellow in the domain of Content Creation and field of Tech mostly in solutions!
            <br />
            Enthusiastic about creating and conquering while consistently growing!
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
                Hire Me
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
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
