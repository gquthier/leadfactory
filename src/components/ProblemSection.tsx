const frustrations = [
  "Payer pour des contacts qui ne répondent jamais",
  "Recevoir des \"leads\" partagés avec 10 concurrents",
  "Perdre du temps avec des gens pas sérieux",
  "Gérer vous-même des pubs qui ne marchent pas",
  "Payer des agences hors de prix sans voir de résultats",
];

export const ProblemSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative border-b border-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Le problème
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mt-4 mb-12 leading-tight">
            Vous en avez marre de...
          </h2>

          <div className="space-y-0">
            {frustrations.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 py-5 border-t border-primary"
              >
                <span className="text-xs font-bold text-muted-foreground w-8">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg text-foreground font-medium">{item}</span>
              </div>
            ))}
            <div className="border-t border-primary" />
          </div>

          <p className="text-xl text-muted-foreground mt-12">
            On connaît. On a créé <span className="text-foreground font-bold">Lead Factory</span> exactement pour ça.
          </p>
        </div>
      </div>
    </section>
  );
};
