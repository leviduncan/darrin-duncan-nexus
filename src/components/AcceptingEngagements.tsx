import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AcceptingEngagements = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bebas text-foreground">
            Accepting Limited Engagements
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently accepting a limited number of performance and architecture consulting engagements for e-commerce and high-traffic applications.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6"
            asChild
          >
            <Link to="/contact">
              Book an Audit Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AcceptingEngagements;
