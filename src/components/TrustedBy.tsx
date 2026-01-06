import Gateway from "@/assets/gateway.png"
import Nutrisystem from "@/assets/nutrisystem.png"
import Boscovs from "@/assets/boscovs.png"
import Dynalene from "@/assets/dynalene.png"
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function TrustedBy() {
    // Placeholder company names - these would be replaced with actual logos
    const companies = [
        {name:"Boscovs", logo:Boscovs},
        {name:"Nutrisystem", logo:Nutrisystem},
        {name:"Gateway Ticketing", logo:Gateway},
        {name:"Dynalene", logo:Dynalene}
    ];
    const { isVisible, elementRef } = useScrollAnimation(0.1);
    return (
        <section ref={elementRef}
            id="trustedby"
            className="py-24 bg-black relative overflow-hidden glow-2">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] w-100 md:w-3/4 mx-auto">
                        <h2 className="text-4xl md:text-5xl mb-4 font-bebas">
                            Trusted <span className="gradient-text">By</span>
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="relative overflow-hidden">
                        {/* Gradient masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

                        {/* Scrolling logos */}
                        <div className="flex gap-12 animate-scroll">
                            {[...companies, ...companies].map((company, index) => (
                                <div key={index} className="flex-shrink-0 flex items-center justify-center px-6">
                                    <span className="w-60 text-white whitespace-nowrap">
                                        <img src={company.logo} alt={company.name} />
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default TrustedBy