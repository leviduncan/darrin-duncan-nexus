import { 
  Code2, 
  Database, 
  Palette, 
  Wrench, 
  Shield, 
  Sparkles,
  Laptop,
  Server,
  Figma,
  Github,
  Zap,
  Brain
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Laptop,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Vue.js", "Redux.js", "jQuery", "Sass"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["Node.js", "MERN Stack", "MongoDB", "RESTful APIs", "Ajax", "Fetch", "Axios"],
    },
    {
      title: "Design Tools",
      icon: Palette,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: ["Adobe XD", "Figma", "Prototyping", "Wireframing", "UI/UX Design"],
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Git", "GitHub", "Chrome DevTools", "Lighthouse", "Google Analytics", "WordPress"],
    },
    {
      title: "Standards",
      icon: Shield,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["Responsive Design", "Cross-Browser Compatibility", "Performance Optimization", "WCAG 2.1 Accessibility", "SEO"],
    },
    {
      title: "AI Tools",
      icon: Brain,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: ["Claude", "ChatGPT", "GitHub Copilot", "Google Gemini", "Lovable", "Amazon Q", "Meta AI", "Prompt Engineering"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-bebas">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Comprehensive expertise across modern web development technologies and tools
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className="glass-card p-6 rounded-xl hover:scale-105 hover:shadow-glow-md transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-bebas">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 text-sm font-medium ${category.bgColor} ${category.color} rounded-full border border-current/20 hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
