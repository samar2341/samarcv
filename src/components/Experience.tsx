import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    period: 'Oct 2024 - Nov 2024',
    title: 'GSSoC contributor',
    points: [
      'Worked and contributed to an open-source project as a GSSoC contributor, focusing on enhancing the project\'s functionality and user experience.',
      'Collaborated with a team of developers to implement new features and fix bugs, ensuring the project met high standards of quality and performance.',
      'Gained valuable experience in version control systems, code review processes, and agile development methodologies.',
      'Developed a strong understanding of open-source community dynamics and the importance of collaboration in software development.',
    ],
  },
  {
    period: 'Jan 2024 - Present',
    title: 'Content Researcher',
    points: [
      'Created engaging and informative content across various platforms, including blogs, social media, and video channels.',
      'Developed a unique voice and style that resonated with the audience, leading to increased engagement and follower growth.',
      'Collaborated with brands and other creators to produce sponsored content and partnerships, enhancing visibility and reach.',
      'Analyzed audience feedback and metrics to continuously improve content quality and relevance.',
    ],
  },
  {
    period: 'Jan 2024 - Present',
    title: 'Web Development and Web Content Creation',
    points: [
      'Developed and maintained websites using HTML, CSS, and JavaScript, ensuring responsive design and optimal user experience.',
      'Created engaging web content, including articles, tutorials, and multimedia elements, to attract and retain visitors.',
      'Implemented SEO best practices to improve website visibility and search engine rankings.',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          work experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-primary font-medium mb-2">{exp.period}</p>
                  <h3 className="text-2xl font-bold mb-4">{exp.title}</h3>
                  <ul className="space-y-3">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
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
