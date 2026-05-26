import { Card } from '@/components/ui/card';
import { BriefcaseBusiness, CalendarDays, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const experiences = [
  {
    period: 'Current',
    company: 'GaprioLabs',
    title: 'Backend Engineer',
    type: 'Current role',
    description:
      'Building backend-ready product flows, polished interfaces, and automation-friendly features for real users.',
    highlights: [
      'Developing clean, responsive product interfaces with reusable React components',
      'Improving workflows with API-first thinking and practical backend structure',
      'Shipping fast iterations, bug fixes, and production-ready interface details',
      'Keeping features minimal, readable, and easy to maintain',
    ],
    location: 'Remote',
  },
  {
    period: '2024',
    company: 'GSSoC Contributor',
    title: 'Open Source Contributor',
    type: 'Open source',
    description:
      'Contributed to open-source projects while learning real collaboration workflows and production-style review habits.',
    highlights: [
      'Submitted pull requests that improved functionality and fixed bugs',
      'Worked with issue discussions, repository standards, and collaborative development practices',
    ],
    location: 'Remote', 
  },
  {
    period: '2024',
    company: 'Web Development / Content Creation',
    title: 'Freelance Web Developer & Content Creator',
    type: 'Freelance',
    description:
      'Built responsive websites and created content that translated technical ideas into clear, useful learning material.',
    highlights: [
      'Designed and developed responsive websites with a focus on usability across devices',
      'Created tutorials, research-backed content, and web development explainers for online audiences',
    ],
    location: 'Remote',
  }
];

export const Experience = () => {
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

    const section = document.getElementById('experience')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="relative overflow-hidden py-28 bg-background">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-14">
            <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Work that shaped
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-sky-300 bg-clip-text text-transparent">
                how I build
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base text-muted-foreground">
              A compact timeline of hands-on product work, open-source collaboration,
              and content-led web development practice.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-card/80 p-6 md:p-8 shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-emerald-300 to-sky-300" />

                <div className="grid gap-8 md:grid-cols-[0.95fr_1.35fr] md:items-start">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-primary/20 bg-primary/10">
                        <BriefcaseBusiness className="h-6 w-6 text-primary" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                        <Sparkles className="h-3 w-3" />
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold">{exp.title}</h3>
                    <p className="mt-1 text-lg font-semibold text-foreground/80">{exp.company}</p>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-primary/70" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary/70" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-base leading-relaxed text-muted-foreground">{exp.description}</p>
                    <ul className="mt-6 grid gap-3">
                      {exp.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
