import { ArrowRight, FileTextIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import snapshot from "@/assets/snapshot.png";
import RiskSnapshot from "@/components/RiskSnapshot";
import Recommend from "@/assets/Darrin_Duncan_Recommendation_Letter.pdf";

const CaseStudies = () => {
  const caseStudies = [
    {
      "title": "E-Commerce Performance Stabilization for High-Traffic Retail Platform",
      "context": "Large department store retailer operating a high-traffic e-commerce platform where frontend performance issues surfaced most severely during peak promotional periods.",
      "symptoms": "Intermittent slow page loads, Core Web Vitals regressions, and elevated checkout abandonment during high-traffic sales events.",
      "diagnosis": "Identified render-blocking third-party scripts, oversized JavaScript bundles, inefficient DOM updates under load, and gaps in frontend caching and delivery strategy.",
      "fixes": "Introduced code-splitting and lazy loading, re-sequenced third-party script execution, and established performance monitoring with Lighthouse CI guardrails to prevent regressions.",
      "outcome": "Achieved sustained Core Web Vitals compliance, improved checkout completion reliability, and reduced page load variability during peak traffic periods.",
      image: snapshot,
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

          {/* Independent Validation */}
          <div className="glass-card p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Independent Validation
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="text-white text-xl">
                  <div className="flex gap-2">
                    <div>
                      &mdash;
                    </div>
                    <div>
                      Christoph DeMaskey
                      <div className="text-lg text-muted-foreground">Director of Software Engineering, Boscov's</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <div className="flex items-start gap-3 mt-4">
                {/* <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> */}
                <span className="text-white">
                  <span className="text-2xl font-bebas">“</span>
                  Darrin is a highly talented JavaScript developer whose depth of knowledge is evident in every project he undertakes. His debugging skills are particularly noteworthy, often identifying and resolving issues others might overlook.
                  <span className="text-2xl font-bebas">”</span>
                </span>
              </div>
            </div>
            <div className="text-muted-foreground hover:text-white text-sm mt-4"><a href={Recommend} target="_blank" className="flex">
              <FileTextIcon size="16" />
              <span className="px-1">View full recommendation</span>
            </a>
            </div>
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
