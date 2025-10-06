import { Button } from '@/components/ui/button';
import { Mail, FileText, Code2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background px-6 text-center"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-secondary border border-primary p-3 rounded-full">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Name + Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Samar
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          Your another programmer
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate about <span className="text-primary font-semibold">Content Creation</span> and 
          <span className="text-primary font-semibold"> Technology</span>.  
          Always learning, building, and growing through real-world solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-primary text-background hover:bg-primary/90 font-semibold"
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
            className="border-primary text-primary hover:bg-primary hover:text-background font-semibold"
            asChild
          >
            <a href="../assets/samarcv.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </a>
          </Button>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {['AI', 'Web Dev', 'MERN', 'Open Source'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 border border-primary/30 rounded-full text-sm text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
