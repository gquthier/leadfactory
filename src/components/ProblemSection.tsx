import { X } from "lucide-react";

const frustrations = [
  "Payer pour des contacts qui ne répondent jamais",
  "Recevoir des \"leads\" partagés avec 10 concurrents",
  "Perdre du temps avec des gens pas sérieux",
  "Gérer vous-même des pubs qui ne marchent pas",
  "Payer des agences hors de prix sans voir de résultats",
];

export const ProblemSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-medium text-electric uppercase tracking-widest">
            Le problème
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-12">
            Vous en avez marre de...
          </h2>

          <div className="space-y-4 mb-12">
            {frustrations.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-destructive/5 border border-destructive/20 rounded-lg text-left"
              >
                <X className="h-5 w-5 text-destructive flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground">
            On connaît. On a créé <span className="text-foreground font-semibold">Lead Factory</span> exactement pour ça.
          </p>
        </div>
      </div>
    </section>
  );
};
