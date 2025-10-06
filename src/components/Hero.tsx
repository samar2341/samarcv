import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Code2, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cyan Glow */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Accent Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Icon Badge */}
          <div className="flex justify-center mb-6 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 animate-glow-pulse"></div>
              <div className="relative bg-secondary border-2 border-primary p-4 rounded-full">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                Samar
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary animate-glow-pulse" />
              <p className="text-xl md:text-3xl text-primary font-semibold tracking-wide">
                your another programmer
              </p>
              <Sparkles className="w-5 h-5 text-primary animate-glow-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Experienced fellow in the domain of{' '}
              <span className="text-primary font-semibold">Content Creation</span>
              {' '}and field of{' '}
              <span className="text-primary font-semibold">Tech</span>
              {' '}mostly in solutions!
            </p>
            <p className="text-base md:text-xl text-muted-foreground mt-4 font-light">
              Enthusiastic about creating and conquering while consistently growing!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-primary text-background hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all duration-300 font-semibold text-lg px-8"
              asChild
            >
              <a href="mailto:samardotexe@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 font-semibold text-lg px-8"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {['AI', 'Web Dev', 'Content', 'Open Source'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary border border-primary/30 rounded-full text-sm text-foreground hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 shadow-[0_0_15px_rgba(0,255,255,0.5)]">
          <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};
