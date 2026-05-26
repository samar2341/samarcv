import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

import fashionImg from '@/assets/project-fashion.jpg';
import discordImg from '@/assets/project-discord.jpg';
import todoImg from '@/assets/project-todo.jpg';

const projects = [
  {
    title: 'Ayursutra',
    description: 'Health-tech product concept with AI-assisted guidance, structured user journeys, and a clean full-stack foundation.',
    tags: ['Node.js', 'MongoDB', 'AI Integration', 'React', 'GraphQL'],
    image: fashionImg,
    liveLink: '#',
    githubLink: 'https://github.com/samar2341',
    featured: true,
  },
  {
    title: 'MindYourCode',
    description: 'Developer learning platform shaped around interactive challenges, real-time feedback, and a focused practice loop.',
    tags: ['Node.js', 'Docker', 'WebSocket', 'React', 'Python'],
    image: discordImg,
    liveLink: '#',
    githubLink: 'https://github.com/samar2341',
    featured: true,
  },
  {
    title: 'STEP Platform',
    description: 'Education platform architecture with real-time flows, role-aware features, and a backend built for scale.',
    tags: ['Express.js', 'PostgreSQL', 'WebSocket', 'React', 'REST API'],
    image: todoImg,
    liveLink: '#',
    githubLink: 'https://github.com/samar2341',
    featured: false,
  },
  {
    title: 'Vantage Fashion',
    description: 'Minimal fashion storefront with smooth browsing, crisp visuals, and conversion-focused product sections.',
    tags: ['React', 'Tailwind CSS', 'Animations', 'JavaScript'],
    image: discordImg,
    liveLink: 'https://vantagefashion.vercel.app',
    githubLink: '#',
    featured: false,
  },
  {
    title: 'WrapTask',
    description: 'Fast task manager with local persistence, simple controls, and a distraction-free daily workflow.',
    tags: ['React', 'Tailwind', 'Local Storage', 'JavaScript'],
    image: todoImg,
    liveLink: 'https://wraptask.vercel.app',
    githubLink: '#',
    featured: false,
  },
];

export const Projects = () => {
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

    const section = document.getElementById('projects')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background py-28">
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Projects with
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-sky-300 bg-clip-text text-transparent">
                proof of taste
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
              A sharper mix of products, platforms, and experiments that show backend thinking,
              AI curiosity, and minimal UI discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card
                key={index}
                className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="relative overflow-hidden aspect-video bg-primary/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">Featured build</span>
                  </div>

                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.liveLink !== '#' && (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                        asChild
                      >
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </a>
                      </Button>
                    )}
                    {project.githubLink !== '#' && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/5"
                        asChild
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-foreground">More builds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <Card
                  key={index}
                  className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card"
                >
                  <div className="relative overflow-hidden aspect-video bg-primary/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      {project.liveLink !== '#' && (
                        <Button
                          size="sm"
                          className="h-8 px-3 text-xs bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
                          asChild
                        >
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Live
                          </a>
                        </Button>
                      )}
                      {project.githubLink !== '#' && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 px-3 text-xs border-primary/30 hover:border-primary hover:bg-primary/5 flex-1"
                          asChild
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Code2 className="mr-1 h-3 w-3" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
