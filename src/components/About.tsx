import { useEffect, useState } from 'react'

export const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('about')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="about" 
      className="relative py-32 bg-gradient-to-b from-background via-background to-primary/5 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Eyebrow text */}
          <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            About Me
          </span>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Building scalable systems
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              with AI & automation
            </span>
          </h2>

          {/* Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto mb-12 rounded-full" />

          {/* Main description */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a backend engineer and product builder from India, currently studying at 
              <span className="text-foreground font-semibold"> Graphic Era Hill University</span>.
              I'm passionate about building scalable systems, integrating AI workflows, 
              and creating products that solve real problems.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <h3 className="text-primary font-semibold mb-3">Current Work</h3>
                <p className="text-sm text-muted-foreground">
                  Backend Engineer Intern at <span className="text-foreground font-semibold">Gaprio Labs</span>, 
                  building scalable APIs and AI integration workflows.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <h3 className="text-primary font-semibold mb-3">Building</h3>
                <p className="text-sm text-muted-foreground">
                  Co-founder of <span className="text-foreground font-semibold">SEORA LABS</span> / <span className="text-foreground font-semibold">SEORA AI</span> - 
                  AI-powered automation and product solutions.
                </p>
              </div>
            </div>

            <p className="mt-8">
              I believe in clean, maintainable code, thoughtful architecture, and solving problems 
              at scale. When I'm not coding, I'm exploring AI/ML, experimenting with backend technologies, 
              or thinking about the next big idea.
            </p>
          </div>

          {/* Soft closing line */}
          <p className="mt-12 text-sm text-muted-foreground/70 italic">
            Always learning. Always building. Always shipping.
          </p>

        </div>
      </div>
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl opacity-50" />
      </div>
    </section>
  );
};
