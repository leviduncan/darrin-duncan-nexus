import { ExternalLink } from "lucide-react";
import { FaGithubAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
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
          <div className="text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] border">
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
           </section>
  )
}

export default Services