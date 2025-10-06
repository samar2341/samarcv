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
      'A animated fashion website that showcases the latest trends and styles in the fashion industry. It features a sleek design, smooth animations, and a user-friendly interface to enhance the shopping experience.',
    image: fashionImg,
    liveLink: 'https://www.vantagefashion.vercel.app/',
    githubLink: '#',
  },
  {
    title: 'Discord Bot',
    description:
      'A Discord bot that enhances server functionality with custom commands and the interactive behaviour. It provides a seamless user experience and can be easily integrated into any Discord server.',
    image: discordImg,
    githubLink: '#',
  },
  {
    title: 'WrapTask : A todo app',
    description:
      'A todo app that enhances your tasking ability and help you in your daily hectic life with a saved history of tasks without a database',
    image: todoImg,
    liveLink: 'https://www.wraptask.vercel.app/',
    githubLink: '#',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex gap-3 pt-4">
                  {project.liveLink && (
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Link
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Github
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
