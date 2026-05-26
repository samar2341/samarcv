import { GraduationCap, Award, FileText } from 'lucide-react'
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

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Full-stack developer
            <br />
            <span className="bg-gradient-to-r from-primary via-emerald-300 to-sky-300 bg-clip-text text-transparent">
              and content creator
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto mb-12 rounded-full" />

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Samar Ali Ansari, a full-stack developer and content creator from India,
              currently pursuing a <span className="text-foreground font-semibold">Bachelor's in Computer Applications</span> at
              <span className="text-foreground font-semibold"> Graphic Era Hill University</span>.
              I enjoy building dynamic web applications, creating useful content, and learning
              by shipping real work.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mt-8 text-left">
              <div className="p-6 rounded-md border border-primary/20 bg-primary/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <GraduationCap className="mb-4 h-6 w-6 text-primary" />
                <h3 className="text-primary font-semibold mb-3">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Graphic Era Hill University, Bachelor&apos;s in Computer Applications, 2025 - 2028.
                </p>
              </div>

              <div className="p-6 rounded-md border border-primary/20 bg-primary/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <Award className="mb-4 h-6 w-6 text-primary" />
                <h3 className="text-primary font-semibold mb-3">Certification</h3>
                <p className="text-sm text-muted-foreground">
                  Full Stack Web Development certification from Udemy.
                </p>
              </div>

              <div className="p-6 rounded-md border border-primary/20 bg-primary/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <FileText className="mb-4 h-6 w-6 text-primary" />
                <h3 className="text-primary font-semibold mb-3">Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Web development, creative writing, research, video content, and community-focused work.
                </p>
              </div>
            </div>

            <p className="mt-8">
              My resume blends development and creative work: open-source contribution, content
              research, content creation, and web development. That mix helps me build products
              that are technically sound and easy for people to understand.
            </p>
          </div>

          <p className="mt-12 text-sm text-muted-foreground/70 italic">
            Building useful products. Creating clear content. Growing with every project.
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
