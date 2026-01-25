import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

import fashionImg from '@/assets/project-fashion.jpg';
import discordImg from '@/assets/project-discord.jpg';
import todoImg from '@/assets/project-todo.jpg';

const projects = [
  {
    title: 'Vantage Fashion',
    description:
      'Animated fashion website showcasing modern trends with smooth transitions and a clean UI.',
    image: fashionImg,
    liveLink: 'https://www.vantagefashion.vercel.app/',
    githubLink: '#',
  },
  {
    title: 'Discord Bot',
    description:
      'A Discord bot with custom commands and interactive features to enhance server engagement.',
    image: discordImg,
    githubLink: '#',
  },
  {
    title: 'WrapTask – Todo App',
    description:
      'Lightweight todo app with task history storage, built without a database.',
    image: todoImg,
    liveLink: 'https://www.wraptask.vercel.app/',
    githubLink: '#',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          projects
        </h2>

        {/* 3 Column Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="h-full overflow-hidden bg-card border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.08)] group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-2 pt-2">
                  {project.liveLink && (
                    <Button
                      size="sm"
                      className="h-8 px-3 text-xs bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Live
                      </a>
                    </Button>
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 text-xs border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};