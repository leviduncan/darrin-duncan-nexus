import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a modern e-commerce platform with React and TypeScript, increasing conversion rates by 30%",
      tags: ["React", "TypeScript", "Tailwind", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      title: "AI-Powered Dashboard",
      description: "Developed an intelligent analytics dashboard leveraging AI for predictive insights and data visualization",
      tags: ["React", "AI/ML", "D3.js", "Node.js"],
      link: "#",
      github: "#",
    },
    {
      title: "SaaS Application",
      description: "Created a scalable SaaS platform serving 12,000+ active users with 95% uptime",
      tags: ["React", "Next.js", "PostgreSQL", "AWS"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Showcasing impactful projects that demonstrate expertise in modern web development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 hover:shadow-glow-md transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-4">
                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                        View
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
