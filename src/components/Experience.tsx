import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1);
  const experiences = [
    {
      company: "Boscov's Department Store",
      role: "Sr. Front-End Performance & Technical Audit Consultant",
      period: "May 2025 - Present",
      location: "Reading, PA",
      highlight: "Site speed optimization, JavaScript conflict resolution, checkout redesign",
      side: "left",
    },
    {
      company: "Nutrisystem, Inc",
      role: "Senior Front-End Developer",
      period: "Dec 2018 - Feb 2025",
      location: "Fort Washington, PA",
      highlight: "30% boost in engagement, 85% user retention, 12,000+ users",
      side: "right",
    },
    {
      company: "Gateway Ticketing Systems",
      role: "Front-End Developer",
      period: "Apr 2018 - Dec 2018",
      location: "Boyertown, PA",
      highlight: "30% increase in engagement, 95% customer satisfaction",
      side: "left",
    },
    {
      company: "Dynalene, Inc",
      role: "Web Developer",
      period: "May 2017 - Apr 2018",
      location: "Whitehall, PA",
      highlight: "40% increase in organic traffic, 25% boost in engagement",
      side: "right",
    },
    {
      company: "Vanguard",
      role: "Senior Digital Media Producer",
      period: "Jun 2011 - Oct 2013",
      location: "Valley Forge, PA",
      highlight: "Led digital media production for enterprise-level financial services",
      side: "left",
    },
    {
      company: "Federal Reserve Bank of New York",
      role: "UI Designer/Front End Developer",
      period: "Jan 1998 - Apr 2006",
      location: "New York, NY",
      highlight: "Pioneered UI design and front-end development for critical financial systems",
      side: "right",
    },
  ];

  return (
    <section 
      ref={elementRef}
      id="experience" 
      className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            <h2 className="text-4xl md:text-5xl mb-4 font-bebas">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 text-xl md:text-2xl">
              A journey of innovation and excellence in front-end development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 md:pl-0">
            {/* Center Line */}
            <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-secondary" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in opacity-0 [animation-fill-mode:forwards] ${
                    exp.side === "left" ? "md:w-[47%] md:mr-auto" : "md:w-[47%] md:ml-auto"
                  }`}
                  style={{ animationDelay: `${(index * 150) + 400}ms` }}
                >

                  {/* Content Card */}
                  <div className={`glass-card p-6 rounded-xl hover:scale-105 hover:shadow-glow-md transition-all duration-300 group ml-4 ${
                    exp.side === "left" ? "md:mr-8 md:ml-0" : "md:ml-8"
                  }`}>
                    {/* Company & Role */}
                    <div className="space-y-2 mb-4">
                      <h3 className="text-2xl text-foreground group-hover:text-primary transition-colors font-bebas">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.role}</span>
                      </div>
                    </div>

                    {/* Period & Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Highlight Badge */}
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 text-sm">
                      {exp.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
