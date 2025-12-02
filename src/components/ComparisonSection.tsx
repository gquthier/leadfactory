import { X, Check } from "lucide-react";

const comparisons = [
  {
    others: "Leads partagés avec vos concurrents",
    us: "Contacts 100% exclusifs, rien que pour vous",
  },
  {
    others: "Engagement 6 ou 12 mois",
    us: "Aucun engagement. Vous arrêtez quand vous voulez",
  },
  {
    others: "Frais cachés et options payantes",
    us: "Un prix. Tout est inclus.",
  },
  {
    others: "Plateforme automatique sans humain",
    us: "Une vraie équipe dédiée à votre réussite",
  },
  {
    others: "Leads froids à rappeler 10 fois",
    us: "Contacts qui ont demandé à être recontactés",
  },
];

export const ComparisonSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-medium text-electric uppercase tracking-widest">
            Pourquoi nous
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            On n'est pas comme les autres.
            <br />
            <span className="text-muted-foreground">Voici pourquoi.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-4 text-center">
              <span className="text-sm font-medium text-muted-foreground">Ce que font les autres</span>
            </div>
            <div className="p-4 text-center">
              <span className="text-sm font-medium text-electric">Lead Factory</span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-3">
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <X className="h-5 w-5 text-destructive flex-shrink-0" />
                  <span className="text-sm text-foreground/70">{item.others}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-electric/5 border border-electric/20 rounded-lg">
                  <Check className="h-5 w-5 text-electric flex-shrink-0" />
                  <span className="text-sm text-foreground">{item.us}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
