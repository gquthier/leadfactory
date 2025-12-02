import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const offerings = [
  "5 vidéos publicitaires créées par intelligence artificielle",
  "5 visuels publicitaires sur-mesure",
  "Un site web dédié, optimisé pour convertir",
  "Votre compte publicitaire créé et configuré",
  "Vos publicités lancées sur les bonnes audiences",
  "Suivi et optimisation pendant 30 jours",
];

export const OfferSection = () => {
  return (
    <section id="offre" className="py-24 lg:py-32 bg-background relative border-b border-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Header */}
          <div>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              L'offre
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-foreground mt-4 mb-6 leading-tight">
              Testez un mois.
              <br />
              <span className="text-muted-foreground">Voyez les résultats.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout est inclus. Sans surprise. Sans engagement.
            </p>
          </div>

          {/* Right: Spec Sheet */}
          <div className="border-2 border-primary bg-background">
            {/* Header */}
            <div className="border-b border-primary p-6 lg:p-8">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Prix mensuel
              </span>
              <p className="text-6xl lg:text-7xl font-black text-foreground mt-2">
                690<span className="text-3xl">€</span>
              </p>
            </div>

            {/* Offerings List */}
            <div className="p-6 lg:p-8">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
                Ce qui est inclus
              </p>
              <div className="space-y-0">
                {offerings.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 py-3 border-t border-primary/30"
                  >
                    <Check className="h-5 w-5 text-amber flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-primary p-6 lg:p-8">
              <Button variant="amber" size="xl" className="w-full">
                Parler à un expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
