import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bookApp from "@/assets/bookTracker.png";
import agilePokerApp from "@/assets/agilePokerApp.png";
import landingPageAuditor from "@/assets/landingPageAuditor.png";
import nutrischedule from "@/assets/ns.png";
import supplychain from "@/assets/sci.png";
import RiskSnapshot from "@/components/RiskSnapshot";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Performance Optimization",
      context: "Major department store retailer with high-traffic e-commerce platform experiencing performance issues during peak shopping periods.",
      symptoms: "Slow page loads, Core Web Vitals failures, checkout abandonment spikes during sales events.",
      diagnosis: "Render-blocking third-party scripts, unoptimized JavaScript bundles, inefficient DOM updates, and missing caching strategies.",
      fixes: "Implemented code-splitting and lazy loading, optimized third-party script loading, added performance monitoring and Lighthouse CI guardrails.",
      outcome: "Passed Core Web Vitals thresholds, improved checkout completion rates, reduced page load variability during high-traffic periods.",
      image: bookApp,
    },
    {
      title: "Checkout Funnel Stability Sprint",
      context: "High-volume e-commerce site with intermittent checkout failures causing revenue loss and customer frustration.",
      symptoms: "Client-side errors during checkout, cart abandonment, inconsistent behavior across browsers.",
      diagnosis: "DOM conflicts between legacy code and modern components, race conditions in payment flow, inadequate error handling.",
      fixes: "Refactored error-prone interactions, implemented comprehensive error tracking, added fallback mechanisms and graceful degradation.",
      outcome: "Reduced client-side failures, improved funnel reliability, better error visibility for ongoing monitoring.",
      image: agilePokerApp,
    },
    {
      title: "Frontend Architecture Review",
      context: "Legacy codebase with accumulated tech debt slowing development velocity and causing production regressions.",
      symptoms: "Slow feature delivery, frequent production bugs, developer frustration, tangled dependencies.",
      diagnosis: "Circular dependencies, missing abstraction layers, inadequate testing infrastructure, no CI/CD performance gates.",
      fixes: "Conducted comprehensive architecture audit, created dependency map, established coding standards, implemented CI/CD guardrails with Lighthouse CI.",
      outcome: "Improved development velocity, reduced production incidents, clearer ownership and maintainability.",
      image: landingPageAuditor,
    },
    {
      title: "Customer Scheduling Application",
      context: "Health and nutrition company needed a customer-facing scheduling system for dietary counseling appointments.",
      symptoms: "Manual scheduling processes, high no-show rates, poor customer experience, limited visibility into appointment patterns.",
      diagnosis: "No existing self-service infrastructure, fragmented communication channels, lack of automated reminders.",
      fixes: "Built modern React-based scheduling application with automated reminders, calendar integration, and analytics dashboard.",
      outcome: "Strong user adoption and retention, reduced manual scheduling overhead, improved appointment visibility.",
      image: nutrischedule,
    },
    {
      title: "Supply Chain Dashboard",
      context: "Manufacturing company needed visibility into supply chain data to identify bottlenecks and optimize operations.",
      symptoms: "Data silos, manual reporting, delayed insights, difficulty identifying supply chain issues.",
      diagnosis: "Fragmented data sources, lack of real-time visibility, no centralized dashboard for decision-making.",
      fixes: "Built interactive dashboard with data visualization, filtering, and real-time updates using React and modern charting libraries.",
      outcome: "Actionable insights for operations teams, faster identification of supply chain issues, improved decision-making.",
      image: supplychain,
    },
  ];

  return (
    <section className="py-24 pt-32 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bebas text-foreground mb-4">
              Case Studies
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real problems solved for e-commerce and high-traffic applications. Each engagement focuses on diagnosing root causes and delivering measurable improvements.
            </p>
          </div>

          {/* Case Studies List */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="glass-card rounded-lg overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">
                    {study.title}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-primary font-medium mb-2">Context</h3>
                        <p className="text-muted-foreground">{study.context}</p>
                      </div>
                      <div>
                        <h3 className="text-primary font-medium mb-2">Symptoms</h3>
                        <p className="text-muted-foreground">{study.symptoms}</p>
                      </div>
                      <div>
                        <h3 className="text-primary font-medium mb-2">Diagnosis</h3>
                        <p className="text-muted-foreground">{study.diagnosis}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-primary font-medium mb-2">Fixes Implemented</h3>
                        <p className="text-muted-foreground">{study.fixes}</p>
                      </div>
                      <div>
                        <h3 className="text-primary font-medium mb-2">Outcome</h3>
                        <p className="text-muted-foreground">{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Risk Snapshot CTA */}
          <RiskSnapshot />

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Have a similar challenge? Let's discuss how I can help.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
              asChild
            >
              <Link to="/contact">
                Request a Performance Audit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
