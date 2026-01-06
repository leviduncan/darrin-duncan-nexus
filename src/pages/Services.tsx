import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
    const packages = [
        {
            title: "Performance & Core Web Vitals Audit",
            timeline: "5-7 business days",
            description: "Comprehensive technical audit identifying exactly what's slowing your site down, followed by a prioritized action plan.",
            whoFor: "E-commerce sites, high-traffic applications, or any business losing conversions to slow performance. Most clients use this audit to decide exactly where to invest engineering effort next.",
            deliverables: [
                "Deep-dive performance analysis (Core Web Vitals, Lighthouse, custom metrics)",
                "JavaScript conflict and DOM inefficiency identification",
                "Mobile performance assessment",
                "Detailed report with prioritized recommendations",
                "90-minute presentation and Q&A with your team",
                "30-day follow-up consultation",
            ],
            investment: "Investment: Starting at $4,500",
            cta: "Request Audit",
        },
        {
            title: "Checkout & Funnel Stability Sprint",
            timeline: "2-4 weeks",
            description: "Focused engagement to eliminate client-side failure modes and stabilize your critical conversion paths.",
            whoFor: "E-commerce sites experiencing checkout abandonment, payment failures, or inconsistent funnel behavior. Most clients use this audit to decide exactly where to invest engineering effort next.",
            deliverables: [
                "Incident pattern analysis and error hotspot identification",
                "Client-side failure mode remediation",
                "Interaction stability improvements",
                "Regression prevention implementation",
                "Prioritized fixes with rollout plan",
                "Monitoring and alerting setup",
            ],
            investment: "Investment: Starting at $12,000",
            cta: "Discuss Your Funnel",
        },
        {
            title: "Front-End Architecture Review & Roadmap",
            timeline: "2-3 weeks",
            description: "Strategic assessment of your frontend architecture with a phased roadmap for reducing fragility and improving maintainability.",
            whoFor: "Teams struggling with tech debt, slow feature delivery, or frequent production regressions. Most clients use this audit to decide exactly where to invest engineering effort next.",
            deliverables: [
                "Comprehensive architecture map and dependency analysis",
                "Risk inventory and technical debt assessment",
                "Phased improvement roadmap",
                "Suggested coding standards and patterns",
                "CI/CD guardrail recommendations",
                "Knowledge transfer session with your team",
            ],
            investment: "Investment: Starting at $8,000",
            cta: "Schedule Review",
        },
    ];

    const whyWorkWithMe = [
        "Business-focused outcomes with technical depth",
        "Calm incident response and production experience",
        "Clear communication across technical and non-technical stakeholders",
        "Documentation and handoff so your team can maintain improvements",
    ];

    return (
        <section className="py-24 pt-32 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bebas text-foreground mb-4">
                            Consulting Services
                        </h1>
                        <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Productized consulting engagements with clear deliverables, timelines, and outcomes for e-commerce and high-traffic applications.
                        </p>
                    </div>

                    {/* Service Packages */}
                    <div className="space-y-8 mb-20">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className="glass-card p-8 rounded-lg"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <h2 className="text-2xl font-semibold text-foreground">
                                        {pkg.title}
                                    </h2>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Clock className="w-4 h-4" />
                                        <span>{pkg.timeline}</span>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6">
                                    {pkg.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-6">
                                    <div>
                                        <h3 className="text-sm font-medium text-primary mb-3">Who It's For</h3>
                                        <p className="text-sm text-muted-foreground">{pkg.whoFor}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-primary mb-3">What You Get</h3>
                                        <ul className="space-y-2">
                                            {pkg.deliverables.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border">
                                    <div className="text-lg font-semibold text-foreground">
                                        {pkg.investment}
                                    </div>
                                    <Button
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                                        asChild
                                    >
                                        <Link to="/contact">
                                            {pkg.cta}
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Why Work With Me */}
                    <div className="glass-card p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                            Why Work With Me
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {whyWorkWithMe.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-muted-foreground mb-6">
                            Not sure which engagement is right for you? Let's discuss your situation.
                        </p>
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
                            asChild
                        >
                            <Link to="/contact">
                                Book an Audit Call
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
