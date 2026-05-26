import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ExternalLink, Phone, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Contact = () => {
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

    const section = document.getElementById('contact')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:samardotexe@gmail.com',
      color: 'from-rose-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+919997015785',
      color: 'from-emerald-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/samar2341',
      color: 'from-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/samar2341',
      color: 'from-zinc-400',
    },
  ]

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-background via-background to-primary/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Heading */}
          <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's build
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              something great
            </span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Whether you want to collaborate, discuss an internship, or review a product idea,
            I&apos;m easy to reach by email, phone, or LinkedIn.
          </p>

          {/* Main Contact Card */}
          <div className="mb-12">
            <div className="relative p-8 md:p-12 rounded-3xl border border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-all duration-300 group">
              {/* Background gradient */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-primary to-transparent" />

              <div className="flex flex-col gap-4 items-center">
                <p className="text-sm text-muted-foreground font-medium">
                  Best way to reach me
                </p>

                <a
                  href="mailto:samardotexe@gmail.com"
                  className="inline-flex max-w-full items-center gap-3 break-all text-xl font-bold text-foreground hover:text-primary transition-colors duration-300 md:text-3xl"
                >
                  <Mail className="hidden h-7 w-7 flex-shrink-0 text-primary sm:block" />
                  samardotexe@gmail.com
                  <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <p className="text-sm text-muted-foreground">
                  Phone: <a href="tel:+919997015785" className="text-foreground hover:text-primary">+91 9997015785</a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-sm text-muted-foreground font-medium mb-6">
              Or connect with me on
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative inline-flex items-center gap-2 rounded-lg border border-primary/10 bg-card/50 px-5 py-3 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm overflow-hidden`}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${link.color} to-transparent`} />
                    
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16">
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                className="rounded-full px-8 bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-base"
                asChild
              >
                <a href="mailto:samardotexe@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send email
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary/30 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a href="/samarcv.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>
          </div>

          <p className="mt-12 text-sm text-muted-foreground">
            Available for internships, collaborations, and exciting projects.
          </p>
        </div>
      </div>
    </section>
  );
};
