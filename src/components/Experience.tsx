import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    period: 'Oct 2024 - Nov 2024',
    title: 'GSSoC Contributor',
    points: [
      'Contributed to an open-source project under GSSoC, improving functionality and user experience.',
      'Collaborated with developers to implement features and fix bugs.',
      'Worked with Git, pull requests, and code reviews.',
      'Understood open-source collaboration and workflows.',
    ],
  },
  {
    period: 'Jan 2024 - Present',
    title: 'Content Researcher',
    points: [
      'Created well-researched content for blogs, social media, and video platforms.',
      'Developed a consistent content style that increased engagement.',
      'Worked with brands and creators on sponsored content.',
      'Analyzed metrics to improve content quality.',
    ],
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
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          work experience
        </h2>

        {/* 3 Column Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="h-full p-6 bg-card border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.08)]"
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="bg-primary/10 p-2 rounded-md">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-primary text-xs font-medium mb-1">
                    {exp.period}
                  </p>

                  <h3 className="text-lg font-semibold mb-3">
                    {exp.title}
                  </h3>

                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="text-primary mr-2 text-xs">•</span>
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
    </section>
  );
};
