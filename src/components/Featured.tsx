import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import snapshot from "@/assets/snapshot2.png";
import agilePokerApp from "@/assets/agilePokerApp.png";
import landingPageAuditor from "@/assets/landingPageAuditor.png";

const Featured = () => {
  const caseStudies = [
    {
      title: "E-Commerce Performance Stabilization for High-Traffic Retail Platform",
      problem: "Large department store retailer operating a high-traffic e-commerce platform where frontend performance issues surfaced most severely during peak promotional periods.",
      fix: "Introduced code-splitting and lazy loading, re-sequenced third-party script execution",
      outcome: "Achieved sustained Core Web Vitals compliance, improved checkout completion reliability, and reduced page load variability during peak traffic periods.",
      image: snapshot,
    }
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
          <div className="">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="glass-card rounded-lg overflow-hidden card-hover flex flex-row"
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
