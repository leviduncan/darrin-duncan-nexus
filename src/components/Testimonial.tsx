const Testimonial = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0 [animation-delay:200ms]">
              What engineering leaders say after working together
            </p>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light italic">
              "Darrin is a highly talented JavaScript developer whose depth of knowledge and skill is evident in every project he undertakes. His debugging skills are particularly noteworthy. Darrin approaches problem-solving with precision and persistence, often identifying and resolving issues that others might overlook."
            </p>
            <footer className="space-y-1">
              <cite className="text-lg font-semibold text-primary not-italic block">
                Christoph DeMaskey
              </cite>
              <p className="text-sm text-muted-foreground">
                Director of Software Engineering, Boscov's Department Store
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
