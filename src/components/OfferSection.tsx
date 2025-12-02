import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Image, Globe, Settings, Target, TrendingUp, Check } from "lucide-react";

const offerings = [
  {
    icon: Video,
    title: "5 vidéos publicitaires créées par intelligence artificielle",
    description: "Des vidéos pro qui captent l'attention, prêtes à diffuser.",
  },
  {
    icon: Image,
    title: "5 visuels publicitaires sur-mesure",
    description: "Images conçues pour donner envie de cliquer.",
  },
  {
    icon: Globe,
    title: "Un site web dédié, optimisé pour convertir",
    description: "Une page qui transforme les visiteurs en contacts qualifiés.",
  },
  {
    icon: Settings,
    title: "Votre compte publicitaire créé et configuré",
    description: "Tout est prêt. Vous n'avez rien à faire.",
  },
  {
    icon: Target,
    title: "Vos publicités lancées sur les bonnes audiences",
    description: "On cible les personnes qui correspondent vraiment à vos clients idéaux.",
  },
  {
    icon: TrendingUp,
    title: "Suivi et optimisation pendant 30 jours",
    description: "On ajuste en temps réel pour maximiser vos résultats.",
  },
];

export const OfferSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-medium text-electric uppercase tracking-widest">
            L'offre
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Testez un mois pour 690€
          </h2>
          <p className="text-xl text-muted-foreground">
            Voici ce que vous obtenez :
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-lg flex gap-4 group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric/20 transition-colors">
                <item.icon className="h-5 w-5 text-electric" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-foreground font-medium mb-8">
            Tout ça pour 690€. Sans surprise. Sans engagement.
          </p>
          <Button variant="electric" size="xl">
            Parler à un expert
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
