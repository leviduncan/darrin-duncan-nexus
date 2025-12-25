import { 
  Quote
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function Testimonial() {
    const { isVisible, elementRef } = useScrollAnimation(0.1);

  return (
            <section
            ref={elementRef}
            id="testimonial"
            className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
        >
            {/* Tech Grid Background */}
            <div className="absolute inset-0 tech-grid opacity-20" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                        <h2 className="text-4xl md:text-5xl mb-4 font-bebas">
                            Testimonial - <span className="gradient-text">Featured Quote</span>
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    {/* Testimonials */}
                    <div className="w-100 lg:w-3/4 m-auto">
                        <div className="glass-card p-8 rounded-xl hover:scale-105 hover:shadow-glow-md transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards] group glow" style={{ animationDelay: `500ms` }}
                        >
                            {/* Category Header */}
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <div className={`w-20 h-20 rounded-lg bg-transparent flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <Quote className="w-20 h-20 opacity-30" />
                                </div>
                                <p className="text-xl">"Darrin is a highly talented JavaScript developer whose depth of knowledge and skill is evident in every project he undertakes. His debugging skills are particularly noteworthy. Darrin approaches problem-solving with precision and persistence, often identifying and resolving issues that others might overlook."</p>
                                <div className="flex flex-col pt-5">
                                    <h3 className="text-2xl text-foreground font-bebas text-primary">Christoph DeMaskey</h3>
                                <p className="text-muted-foreground
                                ">Director of Software Engineering, Boscov's Department Store</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default Testimonial