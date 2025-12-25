import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import WhatIDoBest from "@/components/WhatIDoBest";
import TrustedBy from "@/components/TrustedBy";
import Testimonial from "@/components/Testimonial"
import CurrentlyAvailable from "@/components/CurrentlyAvailable";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <WhatIDoBest />
        <Featured />
        <TrustedBy />
        <Testimonial />
        <CurrentlyAvailable />
      </main>
    </div>
  );
};

export default Index;
