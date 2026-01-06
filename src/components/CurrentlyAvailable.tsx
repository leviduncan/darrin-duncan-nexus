import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function CurrentlyAvailable() {
    const { isVisible, elementRef } = useScrollAnimation(0.1);
    return (
        <section
            ref={elementRef}
            id="about"
            className="py-24 bg-gradient-to-b from-background to-muted/20"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] w-100 md:w-3/4 mx-auto">
                        <h2 className="text-4xl md:text-5xl mb-4 font-bebas">
                            Currently <span className="gradient-text">Available</span>
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Avatar & Text Content */}
                        <div className="space-y-8">


                            {/* Professional Summary */}
                            <div className="space-y-6 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                                <p className="text-2xl text-muted-foreground leading-relaxed">
                                    I'm exploring opportunities where I can drive <span className="text-primary font-semibold">meaningful impact</span>, whether joining a forward-thinking team full-time or partnering with companies on high-impact optimization projects.
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="w-100 mb-8">
                            <div
                                className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards] glow"
                                style={{ animationDelay: `200ms` }}
                            >
                                <div className="flex flex-col space-y-3 p-6">
                                    <span className="text-primary font-semibold text-lg">Open to: </span>
                                    <ul className="text-left text-muted-foreground list-disc">
                                        <li>Senior Front-End Developer roles</li>
                                        <li>Technical Lead positions</li>
                                        <li>Performance consulting engagements</li>
                                        <li>Contract development work</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100">
                        <p className="text-center text-lg text-muted-foreground leading-relaxed py-6">
                            <span className="text-primary font-semibold">Location: </span>Remote preferred, open to hybrid in Lehigh Valley/Reading, PA area
                        </p>
                        
            <div className="text-center">
                <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CurrentlyAvailable