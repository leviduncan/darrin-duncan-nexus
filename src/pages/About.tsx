import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import avatar from "@/assets/darrin2.jpg";

const About = () => {
  const howIWork = [
    "Diagnose before prescribing",
    "Prioritize by business impact",
    "Implement with documentation",
    "Validate with data",
    "Prevent regressions with guardrails",
    "Handoff with knowledge transfer",
  ];

  const optimizeFor = [
    "Stability",
    "Performance", 
    "Maintainability",
    "Delivery Confidence",
  ];

  const coreStrengths = [
    "Frontend Architecture",
    "Performance Optimization",
    "Core Web Vitals",
    "Checkout Stability",
    "Incident Triage",
    "Accessibility",
  ];

  return (
    <section className="py-24 pt-32 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bebas text-foreground mb-4">
              About
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Front-End Architecture & Performance Consultant
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Avatar */}
            <div className="md:col-span-1">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img
                  src={avatar}
                  alt="Darrin Duncan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Story */}
            <div className="md:col-span-2 space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  I've been solving problems on the web since 1998, starting as a UI Designer at the Federal Reserve Bank of New York. Over 15+ years, I've focused on what matters most: building frontend systems that are fast, stable, and maintainable, especially for e-commerce and high-traffic applications where performance directly impacts revenue.
                </p><br />
                <p className="text-muted-foreground leading-relaxed">
                  Today, I work with CTOs, VP Engineering, and technical leaders who need someone to diagnose what's actually slowing their site down, stabilize their checkout funnels, and build guardrails that prevent future regressions. I translate between code and business value, because "refactoring the DOM" means nothing to stakeholders, but "improved checkout stability" absolutely does.
                </p>
              </div>
            </div>
          </div>

          {/* How I Work */}
          <div className="glass-card p-8 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">How I Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {howIWork.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I Optimize For */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass-card p-8 rounded-lg">
              <h2 className="text-xl font-semibold text-foreground mb-6">What I Optimize For</h2>
              <div className="flex flex-wrap gap-3">
                {optimizeFor.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-md text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <h2 className="text-xl font-semibold text-foreground mb-6">Core Strengths</h2>
              <div className="flex flex-wrap gap-3">
                {coreStrengths.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Ready to discuss your frontend challenges?
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
              asChild
            >
              <Link to="/contact">
                Request an Audit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
