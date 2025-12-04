import { Users, Shield, Zap } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Des patients pour vos spécialités",
    description: "On cible les personnes qui cherchent exactement ce que vous proposez. Pas des demandes hors sujet."
  },
  {
    icon: Shield,
    title: "Des gens sérieux qui se présentent",
    description: "On qualifie les demandes. Les patients qui prennent rendez-vous sont engagés."
  },
  {
    icon: Zap,
    title: "Zéro engagement, zéro risque",
    description: "Testez un mois. Voyez l'impact sur votre planning. Décidez ensuite."
  }
];

export const SolutionSectionHealthcare = () => {
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
            <span className="text-2xl lg:text-4xl">VOUS SOIGNEZ VOS PATIENTS.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            let bgColor = "#3B82F6";
            let textColor = "text-white";
            if (index === 0) {
              bgColor = "#FDE047";
              textColor = "text-black";
            } else if (index === 1) {
              bgColor = "#3B82F6";
              textColor = "text-white";
            } else if (index === 2) {
              bgColor = "#FFC4EB";
              textColor = "text-black";
            }

            return (
              <div key={index} className="brutalist-card bg-white text-center">
                <div
                  className={`w-16 h-16 border-3 border-black flex items-center justify-center mx-auto mb-6`}
                  style={{ backgroundColor: bgColor }}
                >
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
            CONFORME AUX RÉGLEMENTATIONS
          </h3>
          <p className="text-2xl font-bold text-white leading-tight">
            <span className="italic">Campagnes respectueuses du secteur santé.</span> 🚀
          </p>
        </div>
      </div>
    </section>
  );
};
