import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import WhatIDoBest from "@/components/WhatIDoBest";
import TrustedBy from "@/components/TrustedBy";
import Testimonial from "@/components/Testimonial";
import AcceptingEngagements from "@/components/AcceptingEngagements";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <WhatIDoBest />
        <TrustedBy />
        <Testimonial />
        <Featured />
        <AcceptingEngagements />
      </main>
    </div>
  );
};

export default Index;
