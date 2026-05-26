import { Card } from '@/components/ui/card';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const experiences = [
  {
    period: 'Current',
    company: 'Gaprio Labs Private Limited',
    title: 'Backend Engineer Intern',
    description: 'Building scalable backend systems with AI integrations and RESTful APIs.',
    highlights: [
      'Designed and implemented scalable REST APIs for AI-powered features',
      'Integrated AI/ML workflows into production systems',
      'Optimized database queries and implemented caching strategies',
      'Collaborated with frontend and product teams on system architecture',
    ],
    color: 'from-primary',
  },
  {
    period: 'Oct 2024 - Nov 2024',
    company: 'Open Source',
    title: 'GSSoC Contributor',
    description: 'Contributed to open-source projects with focus on features and bug fixes.',
    highlights: [
      'Implemented new features and bug fixes',
      'Collaborated via Git, pull requests, and code reviews',
      'Participated in open-source workflow and best practices',
    ],
    color: 'from-purple-500',
  },
  {
    period: 'Jan 2024 - Present',
    title: 'Web Development & Content Creation',
    points: [
      'Built responsive websites using HTML, CSS, and JavaScript.',
      'Created technical articles and tutorials.',
      'Applied SEO best practices to improve visibility.',
    ],
  },
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
    <section id="experience" className="py-32 relative bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Where I've built
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                scalable systems
              </span>
            </h2>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`relative h-full p-6 bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm group overflow-hidden`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${exp.color} to-transparent`} />

                {/* Content */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`bg-gradient-to-br ${exp.color} to-transparent p-2 rounded-lg`}>
                          <Briefcase className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                      <p className="text-sm text-primary/80 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <ArrowRight className="h-3 w-3 text-primary/50 flex-shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
