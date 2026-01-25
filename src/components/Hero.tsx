import { Button } from '@/components/ui/button'
import { Mail, FileText, ArrowRight } from 'lucide-react'

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background px-6 overflow-hidden"
    >
      {/* Background subtle lines */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="max-w-5xl text-center space-y-8">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Samarr
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          Full-Stack Developer & Creative Technologist
        </p>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
          I build digital experiences that are clean, purposeful, and
          user-focused — blending technology, creativity, and real-world
          problem solving.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-6"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            size="lg"
            className="rounded-full px-6"
            asChild
          >
            <a href="mailto:samardotexe@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-6"
            asChild
          >
            <a href="/samarcv.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </a>
          </Button>
        </div>

        {/* Scroll hint */}
        <p className="pt-10 text-sm text-muted-foreground">
          Scroll to explore
        </p>
      </div>
    </section>
  )
}
