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
    <section id="solution" className="py-24 lg:py-32 bg-[#FFFDF5] relative border-b-3 border-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="responsive-headline mb-8">
            ON S'OCCUPE DE{" "}
            <span className="italic text-[#3B82F6] transform -skew-x-12 inline-block">
              TOUT.
            </span>
            <br />
            <span className="text-2xl lg:text-4xl">VOUS RÉCOLTEZ.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            let bgColor = "#3B82F6"; // default blue
            let textColor = "text-white";
            
            if (index === 0) { // Contacts 100% à vous
              bgColor = "#FDE047"; // jaune
              textColor = "text-black";
            } else if (index === 1) { // Une équipe dédiée
              bgColor = "#3B82F6"; // bleu
              textColor = "text-white";
            } else if (index === 2) { // Zéro engagement
              bgColor = "#FFC4EB"; // rose
              textColor = "text-black";
            }
            
            return (
              <div key={index} className="brutalist-card bg-white text-center">
                <div className={`w-16 h-16 border-3 border-black flex items-center justify-center mx-auto mb-6`} style={{backgroundColor: bgColor}}>
                  <pillar.icon className={`h-8 w-8 ${textColor}`} />
                </div>
                <h3 className="text-lg font-black text-black mb-4 uppercase tracking-wider">
                  {pillar.title}
                </h3>
                <p className="text-black font-bold leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 brutalist-card bg-[#3B82F6] text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-black uppercase mb-2 text-white leading-tight">
            NOTRE APPROCHE : 100% TRANSPARENTE
          </h3>
          <p className="text-2xl font-bold text-white leading-tight">
            <span className="italic">Pas de partage, pas de revente, pas d'engagement.</span> 🚀
          </p>
        </div>
      </div>
    </section>
  );
};
