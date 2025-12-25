import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Darrin from "@/assets/darrin.jpg"
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CountUpNumber = ({ value }: { value: string }) => {
  const { count, elementRef } = useCountUp(value);
  return <div ref={elementRef}>{count}</div>;
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid border shadow-lg rounded-lg m-4">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/10 to-background z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20 flex flex-wrap-reverse lg:flex-nowrap gap-10">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center md:text-left space-y-3">
          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] flex justify-center lg:justify-start">
              <span className="">Darrin Duncan</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground font-bebas animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] flex justify-center lg:justify-start">
              Senior Front-End Developer & Performance Consultant
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary font-semibold max-w-3xl mx-auto md:mx-0 leading-relaxed animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] flex justify-center lg:justify-start">I help e-commerce companies turn slow websites into conversion machines.</p>
          <p className="max-w-3xl mx-auto md:mx-0 leading-relaxed animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] flex justify-center lg:justify-start">Over 15 years, I've increased conversions by 30%, cut page load times in half, and reduced bugs by 70% for major retailers—transforming technical challenges into measurable business growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" />
              Available For Hire
            </Button>
          </div>

          {/* Key Stats */}
          <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-start gap-4  py-6 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
            <div className="glass-card px-6 py-4 rounded-lg w-full md:w-1/3">
              <div className="text-left">
                <div className="text-4x1 font-bold gradient-text">Performance Optimization</div>
                <div className="text-sm text-muted-foreground flex space-x-1"><div>Cut load times </div><CountUpNumber value="50%" /></div>
                <div className="text-sm text-muted-foreground flex space-x-1"><div>Reduce bugs </div><CountUpNumber value="70%" /></div>
              </div>
            </div>

            <div className="glass-card px-6 py-4 rounded-lg w-full md:w-1/3">
              <div className="text-left">
                <div className="text-4x1 font-bold gradient-text">Modern Architecture</div>
                <div className="text-sm text-muted-foreground flex space-x-1"><div>React • TypeScript </div></div>
                <div className="text-sm text-muted-foreground flex space-x-1"><div>Legacy modernization </div></div>
              </div>
            </div>

            <div className="glass-card px-6 py-4 rounded-lg w-full md:w-1/3">
              <div className="text-left">
                <div className="text-4x1 font-bold gradient-text">Measurable Results</div>
                <div className="text-sm text-muted-foreground flex space-x-1"><CountUpNumber value="30%" /><div> higher conversions</div></div>
                <div className="text-sm text-muted-foreground flex space-x-1"><div>Proven at scale </div></div>
              </div>
            </div>


          </div>
        </div>
        <div className="flex justify-center w-full sm:w-1/2 md:w-1/3 h-full sm:h-1/2 md:h-1/3 mx-auto flex-wrap relative pb-5">
          <img className="rounded-xl transition-transform duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards] border-4 border-primary" src={Darrin} alt="Darrin Duncan Photo" />
          <div className="bg-white text-primary-foreground text-medium p-3 rounded-md absolute bottom-0 shadow-sm flex space-x-1">
            <CountUpNumber value="15" /><div> Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
