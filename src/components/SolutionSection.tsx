import { Users, Target, Shield } from "lucide-react";
import corporateTeam from "@/assets/corporate-team.jpg";

const pillars = [
  {
    icon: Target,
    title: "Des contacts 100% à vous",
    description: "Pas de partage. Pas de revente. Chaque personne intéressée est envoyée directement dans votre boîte mail. C'est votre client, point.",
  },
  {
    icon: Users,
    title: "Une équipe dédiée à votre croissance",
    description: "On n'est pas un robot. On n'est pas une plateforme. On est une vraie équipe qui gère vos publicités, crée vos visuels, et optimise chaque jour.",
  },
  {
    icon: Shield,
    title: "Zéro engagement, zéro risque",
    description: "Pas de contrat d'un an. Pas de frais cachés. Vous testez un mois, vous voyez les résultats, vous décidez.",
  },
];

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={corporateTeam} 
              alt="Notre équipe dédiée à votre croissance" 
              className="w-full h-[300px] lg:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
          </div>

          {/* Text */}
          <div>
            <span className="text-xs font-medium text-electric uppercase tracking-widest">
              Notre approche
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              On s'occupe de tout.
              <br />
              <span className="text-muted-foreground">Vous récoltez les résultats.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Une vraie équipe de professionnels dédiée à votre réussite. 
              Pas d'algorithme froid, pas de plateforme automatisée.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-lg bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors">
                <pillar.icon className="h-7 w-7 text-electric" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
