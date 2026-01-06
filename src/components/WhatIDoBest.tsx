import { Zap, Shield, Layers } from "lucide-react";

const WhatIDoBest = () => {
  const services = [
    {
      icon: Zap,
      title: "Performance & CWV Remediation",
      description: "Diagnose render-blocking bottlenecks, optimize JavaScript execution and asset delivery, and pass Core Web Vitals thresholds.",
    },
    {
      icon: Shield,
      title: "Checkout & Funnel Stability",
      description: "Reduce client-side failure modes, stabilize critical user interactions, and improve conversion reliability.",
    },
    {
      icon: Layers,
      title: "Architecture & Delivery Systems",
      description: "Reduce frontend fragility and tech debt, improve maintainability and team velocity, add guardrails to prevent regressions.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bebas text-foreground mb-4">
              How I Help
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 rounded-lg card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoBest;
