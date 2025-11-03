import { Code2, Users, Zap, Award } from "lucide-react";
import avatar from "@/assets/darrin.jpg";
import { useCountUp } from "@/hooks/useCountUp";

const CountUpNumber = ({ value }: { value: string }) => {
  const { count, elementRef } = useCountUp(value);
  return <div ref={elementRef}>{count}</div>;
};

const About = () => {
  const stats = [
    { icon: Code2, value: "15+", label: "Years Experience" },
    { icon: Zap, value: "30%", label: "Conversion Boost" },
    { icon: Users, value: "12K+", label: "Users Served" },
    { icon: Award, value: "95%", label: "Success Rate" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-bebas">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar & Text Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Professional Avatar */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-glow-lg animate-glow-pulse group">
                  <img 
                    src={avatar} 
                    alt="Darrin Duncan"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Highly accomplished <span className="text-primary font-semibold">Sr. Front-End Developer</span> with 
                  15+ years of experience driving user-centric web application design and development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Proven track record of delivering significant improvements in user engagement and conversion 
                  rates through expertise in <span className="text-primary font-semibold">JavaScript, React.js, TypeScript</span> and 
                  modern front-end technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Skilled in leveraging <span className="text-primary font-semibold">AI-powered tools</span> to 
                  enhance development efficiency and innovation.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold gradient-text glow-text">
                        <CountUpNumber value={stat.value} />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
