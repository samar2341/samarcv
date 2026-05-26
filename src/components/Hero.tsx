import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github, ArrowRight, FileText } from 'lucide-react'
import { useEffect, useState } from 'react'

const subtitles = [
  "Full Stack Developer",
  "Content Creator",
  "AI Workflow Builder",
  "Creative Researcher"
]

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const [currentSubtitle, setCurrentSubtitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background px-6 overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className={`max-w-4xl w-full text-center space-y-8 transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Small badge */}
        <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm shadow-[0_0_40px_hsl(180,100%,50%,0.12)] transform transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-medium text-primary">Full-stack development, content, and AI curiosity</span>
        </div>

        {/* Main Name */}
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              Samar
            </span>
          </h1>
        </div>

        {/* Animated Subtitle */}
        <div className={`h-16 flex items-center justify-center transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="relative w-full">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium h-8 flex items-center justify-center">
              <span className={`transition-all duration-500 inline-block ${currentSubtitle === 0 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                {subtitles[0]}
              </span>
              <span className={`transition-all duration-500 inline-block ${currentSubtitle === 1 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                {subtitles[1]}
              </span>
              <span className={`transition-all duration-500 inline-block ${currentSubtitle === 2 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                {subtitles[2]}
              </span>
              <span className={`transition-all duration-500 inline-block ${currentSubtitle === 3 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                {subtitles[3]}
              </span>
            </p>
          </div>
        </div>

        {/* Description */}
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            I build dynamic web applications, create useful content, and keep learning across
            full-stack development, AI, research, and visual storytelling.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 pt-6 transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <Button
            size="lg"
            className="rounded-full px-8 bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            asChild
          >
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          {[
            { href: 'mailto:samardotexe@gmail.com', label: 'Email', Icon: Mail },
            { href: '/samarcv.pdf', label: 'Resume', Icon: FileText },
          ].map(({ href, label, Icon }) => (
            <Button
              key={label}
              size="lg"
              variant="outline"
              className="rounded-full px-7 border-primary/30 hover:border-primary hover:bg-primary/5"
              asChild
            >
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </a>
            </Button>
          ))}
        </div>

        {/* Scroll hint */}
        <div className={`pt-10 transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
          <div className="flex justify-center">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
