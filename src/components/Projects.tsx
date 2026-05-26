import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code2, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

import fashionImg from '@/assets/project-fashion.jpg';
import discordImg from '@/assets/project-discord.jpg';
import todoImg from '@/assets/project-todo.jpg';

const projects = [
  {
    title: 'SEORA AI',
    description: 'AI-powered automation platform for enterprises with workflow management and integration systems.',
    tags: ['Python', 'FastAPI', 'AI/ML', 'PostgreSQL', 'React'],
    image: fashionImg,
    liveLink: '#',
    githubLink: 'https://github.com/samar2341',
    featured: true,
  },
  {
    title: 'Ayursutra',
    description: 'Full-stack application with advanced backend systems and AI integration for health tech.',
    tags: ['Node.js', 'MongoDB', 'AI Integration', 'React', 'GraphQL'],
    image: discordImg,
    liveLink: '#',
    githubLink: 'https://github.com/samar2341',
    featured: true,
  },
  {
    title: 'STEP Platform',
    description: 'Comprehensive educational platform with scalable backend and real-time features.',
    tags: ['Express.js', 'PostgreSQL', 'WebSocket', 'React', 'REST API'],
    image: todoImg,
    liveLink: '#',
    githubLink: 'https://github.com/samar2341',
    featured: false,
  },
  {
    title: 'MindYourCode',
    description: 'Code learning platform with interactive challenges and real-time execution environment.',
    tags: ['Node.js', 'Docker', 'WebSocket', 'React', 'Python'],
    image: fashionImg,
    liveLink: '#',
    githubLink: 'https://github.com/samar2341',
    featured: false,
  },
  {
    title: 'Vantage Fashion',
    description: 'Modern e-commerce fashion platform with smooth animations and clean UI.',
    tags: ['React', 'Tailwind CSS', 'Animations', 'JavaScript'],
    image: discordImg,
    liveLink: 'https://vantagefashion.vercel.app',
    githubLink: '#',
    featured: false,
  },
  {
    title: 'WrapTask',
    description: 'Lightweight task management app with local storage and intuitive interface.',
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
    <section id="projects" className="py-32 bg-gradient-to-b from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Work I'm
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                proud of
              </span>
            </h2>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card
                key={index}
                className="group relative h-full overflow-hidden bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 backdrop-blur-sm"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-video bg-primary/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-4">
                  {/* Badge */}
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">Featured</span>
                  </div>

                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
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
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <Card
                  key={index}
                  className="group relative h-full overflow-hidden bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video bg-primary/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary/80 border border-primary/20"
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

                    {/* Buttons */}
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