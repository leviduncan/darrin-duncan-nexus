import { ExternalLink, Info } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1);
  const projects = [
    {
      title: "Book Tracker Dashboard",
      description: "Modern web application for tracking reading progress, managing book collections, and discovering new books",
      tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Query", "Recharts"],
      link: "https://booktracker.darrinduncan.com/",
    },
    {
      title: "Agile Poker Planning App",
      description: "Simple and intuitive online tool for teams to collaboratively estimate effort in software development tasks",
      tags: ["React", "TypeScript", "Tailwind CSS", "Socket.io", "localStorage"],
      link: "https://agilepoker.darrinduncan.com/",
    },
    {
      title: "Mindwave Binaural App",
      description: "Science-informed productivity app that helps users enter different mental states by playing binaural frequencies",
      tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
      link: "https://mindwave.darrinduncan.com/",
    },
  ];

  return (
    <section 
      ref={elementRef}
      id="projects" 
      className="py-24 bg-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-bebas">
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
                className="glass-card rounded-xl overflow-hidden hover:shadow-glow-md transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards] group border-2 border-transparent hover:border-primary/50"
                style={{ animationDelay: `${(index * 150) + 400}ms` }}
              >
                {/* Project Image Placeholder with Hover Zoom */}
                <div className="aspect-video bg-muted/20 overflow-hidden relative">
                  <img 
                    src="/placeholder.svg" 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  {/* Project Title */}
                  <h3 className="text-2xl text-foreground group-hover:text-primary transition-colors font-bebas">
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
                        View Live Site
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Info className="w-4 h-4 mr-2" />
                        Learn More
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
