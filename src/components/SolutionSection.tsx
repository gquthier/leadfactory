import { Users, Target, Shield } from "lucide-react";
import teamMeetingBw from "@/assets/team-meeting-bw.jpg";

const pillars = [
  {
    icon: Target,
    title: "Des contacts 100% à vous",
    description: "Pas de partage. Pas de revente. Chaque personne intéressée est envoyée directement dans votre boîte mail.",
  },
  {
    icon: Users,
    title: "Une équipe dédiée",
    description: "On n'est pas un robot. On est une vraie équipe qui gère vos publicités, crée vos visuels, et optimise chaque jour.",
  },
  {
    icon: Shield,
    title: "Zéro engagement",
    description: "Pas de contrat d'un an. Pas de frais cachés. Vous testez un mois, vous voyez les résultats, vous décidez.",
  },
];

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 lg:py-32 bg-background relative border-b border-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Image */}
          <div className="relative border-r border-primary">
            <img 
              src={teamMeetingBw} 
              alt="Notre équipe dédiée à votre croissance" 
              className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px]"
            />
          </div>

          {/* Text */}
          <div className="p-8 lg:p-16 flex flex-col justify-center">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Notre approche
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mt-4 mb-8 leading-tight">
              On s'occupe de tout.
              <br />
              <span className="text-muted-foreground">Vous récoltez.</span>
            </h2>

            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
