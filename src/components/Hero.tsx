import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-bebas">
              <span className="gradient-text glow-text">Darrin Duncan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-bebas">
              Sr. Front-End Developer
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            15+ Years Building User-Centric Web Experiences
            <br />
            <span className="text-primary font-semibold">React • TypeScript • AI-Powered Development</span>
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 py-6">
            <div className="glass-card px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold gradient-text">25%</div>
              <div className="text-sm text-muted-foreground">User Engagement ↑</div>
            </div>
            <div className="glass-card px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold gradient-text">30%</div>
              <div className="text-sm text-muted-foreground">Conversion Rates ↑</div>
            </div>
            <div className="glass-card px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold gradient-text">12K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
