import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import bookApp from "@/assets/bookTracker.png";
import agilePokerApp from "@/assets/agilePokerApp.png";
import landingPageAuditor from "@/assets/landingPageAuditor.png";

const Featured = () => {
  const caseStudies = [
    {
      title: "E-Commerce Performance Optimization",
      problem: "Major retailer experiencing slow page loads and checkout abandonment on high-traffic days.",
      fix: "Implemented code-splitting, optimized third-party scripts, and added performance monitoring guardrails.",
      outcome: "Passed Core Web Vitals thresholds and improved checkout completion rates.",
      image: bookApp,
    },
    {
      title: "Checkout Funnel Stability",
      problem: "Intermittent client-side errors causing cart abandonment during peak traffic.",
      fix: "Identified DOM conflicts, refactored error-prone interactions, and added comprehensive error tracking.",
      outcome: "Reduced client-side failures and improved funnel reliability.",
      image: agilePokerApp,
    },
    {
      title: "Frontend Architecture Review",
      problem: "Legacy codebase with tangled dependencies slowing team velocity and causing regressions.",
      fix: "Conducted architecture audit, created dependency map, and implemented CI/CD guardrails.",
      outcome: "Improved development velocity and reduced production incidents.",
      image: landingPageAuditor,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bebas text-foreground mb-4">
              Featured Case Studies
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real problems solved for e-commerce and high-traffic applications
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="glass-card rounded-lg overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-primary font-medium">Problem: </span>
                      <span className="text-muted-foreground">{study.problem}</span>
                    </div>
                    <div>
                      <span className="text-primary font-medium">Fix: </span>
                      <span className="text-muted-foreground">{study.fix}</span>
                    </div>
                    <div>
                      <span className="text-primary font-medium">Outcome: </span>
                      <span className="text-muted-foreground">{study.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-muted"
              asChild
            >
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
