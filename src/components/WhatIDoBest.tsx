import {
    Blocks,
    Zap,
    ChartNoAxesCombined
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";



function WhatIDoBest() {
    const { isVisible, elementRef } = useScrollAnimation(0.1);

    const content = [
        {
            title: "Performance Optimization",
            body: "I identify and fix the technical bottlenecks that slow your site and cost you sales. From JavaScript conflicts to checkout flow issues, I solve the problems that others overlook.",
            logo: Zap
        },
        {
            title: "Modern Development",
            body: "I build scalable, maintainable applications with React, TypeScript, and modern front-end tools—or modernize legacy codebases that are holding your team back.",
            logo: Blocks
        },
        {
            title: "Business Results",
            body: "I don't just write code. I deliver outcomes that matter: faster sites, higher engagement, more conversions, and measurable ROI.",
            logo: ChartNoAxesCombined
        },
    ]

    return (
        <section
            ref={elementRef}
            id="whatIDo"
            className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
        >
            {/* Tech Grid Background */}
            <div className="absolute inset-0 tech-grid opacity-20" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] w-100 md:w-3/4 mx-auto">
                        <h2 className="text-4xl md:text-5xl mb-4 font-bebas">
                            What I Do <span className="gradient-text">Best</span>
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            content.map((item, index) => {
                                return (
                                    <div key={index} className="glass-card p-6 rounded-xl hover:scale-105 hover:shadow-glow-md transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards] group glow" style={{ animationDelay: `${200 + (index * 200)}ms` }}>
                                        {/* Category Header */}
                                        <div className="flex flex-wrap items-center gap-3 mb-6">
                                            <div className={`w-12 h-12 rounded-lg bg-transparent flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <item.logo />
                                            </div>
                                            <h3 className="text-2xl text-foreground font-bebas text-primary">{item.title}</h3>
                                        </div>
                                        <p className="text-lg text-foreground font-medium">{item.body}</p>
                                    </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatIDoBest