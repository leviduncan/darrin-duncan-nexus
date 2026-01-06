import { ExternalLink } from "lucide-react";
import { FaGithubAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg2.png";

const Services = () => {
    const { isVisible, elementRef } = useScrollAnimation(0.1);
    return (
        <section ref={elementRef} id="projects" className="py-24 bg-muted/20"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                opacity: 1,
            }}>
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] w-100 md:w-3/4 mx-auto">
                        <h2 className="text-4xl md:text-5xl mb-4 font-bebas">
                            Services <span className="gradient-text"></span>
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                        <p className="text-muted-foreground mt-6 text-xl md:text-2xl">
                            High-impact solutions for e-commerce and web applications
                        </p>
                        <p>Whether you need a comprehensive performance overhaul or expert development resources, I deliver measurable results that move your business forward.</p>
                    </div>
                </div>
            </div>
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                {/* Avatar & Text Content */}
                <div className="space-y-8">


                    {/* Professional Summary */}
                    <div className="space-y-6 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                        <p className="text-2xl text-muted-foreground leading-relaxed">
                            {/* <span className="text-primary font-semibold">meaningful impact</span> */}
                            I don't just write code, I solve business problems with technology. Every engagement starts with understanding your goals, identifying the real bottlenecks, and delivering solutions that create measurable value.
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="w-100 mb-8">
                    <div
                        className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards] glow" style={{ animationDelay: `200ms` }}>
                        <div className="flex flex-col space-y-3 p-6">
                            <span className="text-primary font-semibold text-lg">What makes me different: </span>
                            <ul className="text-left text-muted-foreground list-disc">
                                <li>Business-focused outcomes, not just technical deliverables</li>
                                <li>Proven track record with major e-commerce platforms</li>
                                <li>Clear communication that bridges technical and business teams</li>
                                <li>Thorough testing and quality assurance before delivery</li>
                                <li>Knowledge transfer so your team can maintain what I build</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 glass-card p-6 rounded-xl animate-fade-in opacity-0 [animation-fill-mode:forwards] relative" >
                        {/* Avatar & Text Content */}
                        <div>
                        <div className="flex flex-col space-y-3 p-6">
                            <span className="text-primary font-semibold text-lg">The Problem You're Facing</span>
                            <p>Your website is slow. Customers are abandoning carts. Your team suspects performance issues but doesn't know where to start. Every second of delay costs you revenue.</p>
                        </div>
                        <div className="flex flex-col space-y-3 p-6">
                            <span className="text-primary font-semibold text-lg">Deliverables:</span>
                            <p>A comprehensive technical audit identifying exactly what's slowing your site down, followed by a prioritized action plan with estimated impact for each fix.</p>
                        </div>
                        <div className="flex flex-col space-y-3 p-6">
                            <span className="text-primary font-semibold text-lg">What makes me different: </span>
                            <ul className="text-left text-muted-foreground list-disc">
                                <li>Deep-dive performance analysis (Core Web Vitals, Lighthouse, custom metrics)</li>
                                <li>JavaScript conflict and DOM inefficiency identification</li>
                                <li>Mobile performance assessment</li>
                                <li>Detailed report with prioritized recommendations</li>
                                <li>90-minute presentation and Q&A with your team</li>
                                <li>30-day follow-up consultation</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-left text-muted-foreground">
                                Timeline: 5-7 business days <br />Investment: Starting at $4,500
                            </p>
                            <p className="text-left text-muted-foreground">
Ideal for: E-commerce sites, high-traffic applications, or any business losing conversions to slow performance
                            </p>
                        </div>
                        {/* CTAs */}
                        <div className="mx-auto mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 group"
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Schedule a Consulatation
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                </div>
                        {/* Professional Avatar */}
                        <div className="relative order-1 md:order-2">
                            <div className="sticky top-24">
                                <div className="flex justify-center md:justify-end">
                                    <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden border-4 border-primary/50 shadow-glow-lg animate-glow-pulse group">
                                        <img
                                            src=""
                                            alt="image"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                
            </div>
        </section>
    )
}

export default Services