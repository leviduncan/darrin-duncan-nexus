import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const capabilities = [
    "Core Web Vitals remediation (LCP/INP/CLS)",
    "Checkout & funnel stability engineering",
    "Performance audits with prioritized roadmaps",
    "Regression prevention via Lighthouse CI & guardrails",
    "Production incident triage for high-traffic systems",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4 animate-fade-in opacity-0 [animation-delay:100ms]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas tracking-tight text-foreground">
              Front-End Architecture &<br />
              <span className="text-primary">Performance Consultant</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0 [animation-delay:200ms]">
            I help e-commerce and high-traffic teams fix slow, brittle frontend systems—improving Core Web Vitals, checkout stability, and delivery confidence.
          </p>

          {/* Capability signals */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in opacity-0 [animation-delay:300ms]">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg text-sm text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{capability}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in opacity-0 [animation-delay:400ms]">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base px-8 py-6"
              asChild
            >
              <Link to="/contact">
                Request a Performance Audit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted font-medium text-base px-8 py-6"
              asChild
            >
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
