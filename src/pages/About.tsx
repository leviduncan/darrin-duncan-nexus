import { Code2, Users, Zap, Award } from "lucide-react";
import avatar from "@/assets/darrin2.jpg";
import ecomm2 from "@/assets/ecom_2.png"
import ecomm3 from "@/assets/ecom_4.png"
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg2.png"

const CountUpNumber = ({ value }: { value: string }) => {
    const { count, elementRef } = useCountUp(value);
    return <div ref={elementRef}>{count}</div>;
};

const About = () => {

    const { isVisible, elementRef } = useScrollAnimation(0.1);
    const stats = [
        { icon: Code2, value: "15+", label: "Years Experience" },
        { icon: Zap, value: "30%", label: "Conversion Boost" },
        { icon: Users, value: "12K+", label: "Users Served" },
        { icon: Award, value: "95%", label: "Success Rate" },
    ];

    return (
        <section
            ref={elementRef}
            id="about"
            className="py-24 bg-gradient-to-b from-background to-muted/20"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                opacity: 1,
            }}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] w-100 md:w-3/4 mx-auto">
                        <h2 className="text-4xl md:text-5xl mb-4 font-bebas">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                        <p className="text-muted-foreground mt-6 text-xl md:text-2xl">
                            Building better web experiences for 15+ years
                        </p>
                    </div>




                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 glass-card p-6 rounded-xl animate-fade-in opacity-0 [animation-fill-mode:forwards] relative" >
                        {/* Avatar & Text Content */}
                        <div className="space-y-8 order-2 md:order-1">
                            {/* Professional Summary */}
                            <div className="space-y-6 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    <span className="text-primary font-semibold">The Story</span>
                                </p>
                                <p className=" text-muted-foreground leading-relaxed">
                                    I've been solving problems on the web since 1998, when I started as a UI Designer at the Federal Reserve Bank of New York. Back then,
                                    we were still debating whether JavaScript was just a passing fad.
                                </p>
                                <p className=" text-muted-foreground leading-relaxed">
                                    Twenty-seven years later, I'm still here, and still fascinated by the challenge of building web experiences that work beautifully,
                                    perform flawlessly, and deliver real business results.
                                </p>
                            </div>
                            <div className="space-y-6 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    <span className="text-primary font-semibold">What Drives Me</span>
                                </p>
                                <p className=" text-muted-foreground leading-relaxed">
                                    I get energized by those "impossible" problems, the checkout flow that's losing 40% of customers, the codebase that's so tangled nobody
                                    wants to touch it, the performance issue that's been plaguing the team for months.
                                </p>
                                <p className=" text-muted-foreground leading-relaxed">
                                    There's something deeply satisfying about taking something that's broken or struggling and making it work better than anyone thought
                                    possible. When I can deliver a 30% increase in conversions or cut page load times in half, I know I've done more than write good code,
                                    I've moved the needle for the business.
                                </p>
                            </div>
                            {/* Professional Summary */}
                            <div className="space-y-6 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    <span className="text-primary font-semibold">The Technical Side</span>
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    My core expertise is front-end development with a specialty in performance optimization and React ecosystems.
                                    I work across the full modern JavaScript stack i.e. React, TypeScript, Node.js, but I'm equally comfortable diving into
                                    legacy jQuery or debugging complex CSS issues.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    What sets me apart isn't just technical skill. It's the ability to translate between code and business value.
                                    I understand that "refactoring the DOM" means nothing to stakeholders, but "reducing checkout abandonment by
                                    25%" absolutely does.
                                </p>
                            </div>
                        </div>
                        {/* Professional Avatar */}
                        <div className="relative order-1 md:order-2">
                            <div className="sticky top-24">
                                <div className="flex justify-center md:justify-end">
                                    <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden border-4 border-primary/50 shadow-glow-lg animate-glow-pulse group">
                                        <img
                                            src={avatar}
                                            alt="Darrin Duncan"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 glass-card p-6 rounded-xl animate-fade-in opacity-0 [animation-fill-mode:forwards] relative" >
                        {/* Avatar & Text Content */}
                        <div className="space-y-8 order-2 md:order-2">
                            {/* Professional Summary */}
                            <div className="space-y-6 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    <span className="text-primary font-semibold">Real-World Results
                                    </span>
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    At Boscov's, I improved development velocity by 50% and reduced bugs by 70% through CI/CD optimization and systematic
                                    debugging. At Nutrisystem, I built a customer scheduling app that achieved 85% retention among 12,000+ users. At
                                    Gateway Ticketing, I drove a 30% increase in customer engagement through responsive design improvements.
                                </p>

                                <p className="text-muted-foreground leading-relaxed">
                                    These aren't just numbers, they represent real people having better experiences and real businesses growing.
                                </p>
                            </div>
                            <div className="space-y-6 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    <span className="text-primary font-semibold">How I Work</span>
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    My approach combines deep technical expertise with strong collaboration. I'm the developer who:
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    <ul className="list-disc">
                                        <li>Asks "why" before diving into "how"</li>
                                        <li>Debugs with precision and persistence (not guesswork)</li>
                                        <li>Communicates clearly with both technical and non-technical teams</li>
                                        <li>Tests thoroughly before shipping</li>
                                        <li>Adapts quickly when requirements change</li>
                                    </ul>
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    According to Christoph DeMaskey, my manager at Boscov's: "Darrin approaches problem-solving with precision and
                                    persistence, often identifying and resolving issues that others might overlook. He handles changes in scope or
                                    direction with professionalism and agility, maintaining focus and delivering results."
                                </p>
                            </div>
                        </div>
                        {/* Professional Avatar */}
                        <div className="relative order-1 md:order-1">
                            <div className="sticky top-24">
                                <div className="flex justify-center md:justify-end">
                                    <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden border-4 border-primary/50 shadow-glow-lg animate-glow-pulse group">
                                        <img
                                            src={ecomm2}
                                            alt="Darrin Duncan"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 glass-card p-6 rounded-xl animate-fade-in opacity-0 [animation-fill-mode:forwards] relative" >
                        {/* Avatar & Text Content */}
                        <div className="space-y-8 order-2 md:order-1">
                            {/* Professional Summary */}
                            <div className="space-y-6 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    <span className="text-primary font-semibold">Beyond the Code</span>
                                </p>
                                <p className=" text-muted-foreground leading-relaxed">
                                    When I'm not building web applications, I'm usually exploring new AI-powered development tools (Claude, GitHub
                                    Copilot, and similar innovations are transforming how we work), contributing to open source projects, or mentoring
                                    other developers.
                                </p>
                                <p className=" text-muted-foreground leading-relaxed">
                                    I'm based in Allentown, Pennsylvania, but I work with teams around the world through remote collaboration.
                                </p>
                            </div>
                            <div className="space-y-6 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    <span className="text-primary font-semibold">The Skills That Matter</span>
                                </p>
                                <p className=" text-muted-foreground leading-relaxed">
                                    Core Expertise: React • TypeScript • JavaScript • Node.js • HTML/CSS • Performance Optimization
                                </p>
                                <p className=" text-muted-foreground leading-relaxed">
                                    Core Expertise: React • TypeScript • JavaScript • Node.js • HTML/CSS • Performance Optimization
                                </p>
                                <p className=" text-muted-foreground leading-relaxed">
                                    Tools & Frameworks: Redux • Vue.js • Sass • Bootstrap • Tailwind • Git • MongoDB • PostgreSQL
                                </p>
                                <p className=" text-muted-foreground leading-relaxed">
                                    AI-Powered Development: Claude • GitHub Copilot • ChatGPT • Prompt Engineering
                                </p>
                                <p className=" text-muted-foreground leading-relaxed">
                                    Design & UX: Figma • Adobe XD • Wireframing • UI/UX Principles • Prototyping
                                </p>
                            </div>
                            {/* Professional Summary */}
                            <div className="space-y-6 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    <span className="text-primary font-semibold">The Technical Side</span>
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    My core expertise is front-end development with a specialty in performance optimization and React ecosystems.
                                    I work across the full modern JavaScript stack i.e. React, TypeScript, Node.js, but I'm equally comfortable diving into
                                    legacy jQuery or debugging complex CSS issues.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    What sets me apart isn't just technical skill. It's the ability to translate between code and business value.
                                    I understand that "refactoring the DOM" means nothing to stakeholders, but "reducing checkout abandonment by
                                    25%" absolutely does.
                                </p>
                            </div>
                        </div>
                        {/* Professional Avatar */}
                        <div className="relative order-1 md:order-2">
                            <div className="sticky top-24">
                                <div className="flex justify-center md:justify-end">
                                    <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden border-4 border-primary/50 shadow-glow-lg animate-glow-pulse group">
                                        <img
                                            src={ecomm3}
                                            alt="Darrin Duncan"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-6 grid grid-cols-1 p-6 rounded-xl animate-fade-in opacity-0 [animation-fill-mode:forwards] relative">
                        <p>
                            Whether you're looking for a senior developer to join your team or need help solving a tough technical challenge, I'd love to hear from you.
                        </p>
                        {/* CTAs */}
                        <div className="mx-auto flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 group"
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Schedule a Call
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                <Mail className="mr-2" />
                                Send an Email
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;
