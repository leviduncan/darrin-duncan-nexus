import Gateway from "@/assets/gateway.png";
import Nutrisystem from "@/assets/nutrisystem.png";
import Boscovs from "@/assets/boscovs.png";
import Dynalene from "@/assets/dynalene.png";

const TrustedBy = () => {
  const companies = [
    { name: "Boscov's", logo: Boscovs },
    { name: "Nutrisystem", logo: Nutrisystem },
    { name: "Gateway Ticketing", logo: Gateway },
    { name: "Dynalene", logo: Dynalene },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Trusted By
            </p>
          </div>

          {/* Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
