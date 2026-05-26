import { useState, useEffect } from 'react'
import { Code2, Database, Zap, Brain, GitBranch, Package } from 'lucide-react'

const skillCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript', 'Framer Motion'],
    color: 'from-blue-500',
  },
  {
    name: 'Backend',
    icon: Zap,
    skills: ['Node.js', 'Express', 'FastAPI', 'Python', 'REST APIs', 'GraphQL'],
    color: 'from-cyan-500',
  },
  {
    name: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'Database Design'],
    color: 'from-green-500',
  },
  {
    name: 'AI/ML',
    icon: Brain,
    skills: ['LLM Integration', 'AI Workflows', 'Automation', 'ML Basics', 'Prompt Engineering'],
    color: 'from-purple-500',
  },
  {
    name: 'Tools & DevOps',
    icon: GitBranch,
    skills: ['Git/GitHub', 'Docker', 'Linux', 'AWS', 'Vercel', 'CI/CD'],
    color: 'from-orange-500',
  },
  {
    name: 'Languages',
    icon: Package,
    skills: ['JavaScript', 'TypeScript', 'Python', 'C/C++', 'SQL'],
    color: 'from-pink-500',
  },
]

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('skills')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-32 relative bg-gradient-to-b from-background via-background to-primary/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              Technical Skills
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Technologies &
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Tools I Use
              </span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer group overflow-hidden
                    ${hoveredCategory === index
                      ? 'border-primary/50 bg-primary/10 shadow-lg shadow-primary/20'
                      : 'border-primary/10 bg-card/50 hover:border-primary/30 hover:bg-card/70'
                    }`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${category.color} to-transparent`} />

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} to-transparent`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{category.name}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-2">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 transition-all duration-300 ${
                            hoveredCategory === index ? 'translate-x-1' : ''
                          }`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" style={{
                      animation: 'shimmer 2s infinite',
                    }} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 p-8 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm constantly learning and exploring new technologies, especially in the AI/ML space. 
              My focus is on building scalable, maintainable systems with clean code and thoughtful architecture.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}
