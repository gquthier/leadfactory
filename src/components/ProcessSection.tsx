import { BarChart3, Rocket, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "ON DISCUTE 15 MINUTES",
    description: "Vous nous expliquez votre activité, vos clients idéaux, vos objectifs.",
    icon: BarChart3,
  },
  {
    number: "02", 
    title: "ON CRÉE TOUT POUR VOUS",
    description: "Vidéos, visuels, site web, publicités. En quelques jours, tout est prêt.",
    icon: Rocket,
  },
  {
    number: "03",
    title: "VOUS RECEVEZ DES CONTACTS",
    description: "Les personnes intéressées arrivent dans votre boîte. Vous signez.",
    icon: Trophy,
  },
];

export const ProcessSection = () => {
  return (
    <section id="processus" className="py-24 lg:py-32 bg-[#FFFDF5] border-b-3 border-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="responsive-headline mb-8">
            3{" "}
            <span className="italic text-[#3B82F6] transform -skew-x-12 inline-block">
              ÉTAPES.
            </span>
            <br />
            <span className="text-3xl lg:text-5xl">C'EST TOUT.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="brutalist-primary-card relative"
            >
              {/* Browser Window Header */}
              <div className="browser-window-header mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                  <div className="w-3 h-3 bg-[#FDE047] rounded-full border border-black"></div>
                  <div className="w-3 h-3 bg-[#3B82F6] rounded-full border border-black"></div>
                </div>
                <div className="h-px bg-black"></div>
              </div>

              {/* Step Number */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-black text-[#4ADE80] border-3 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000000]">
                <span className="text-2xl font-black">{step.number}</span>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white border-3 border-black flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-xl font-black text-white uppercase tracking-wider">
                  {step.title}
                </h3>
                
                <p className="text-lg font-bold text-white leading-relaxed">
                  {step.description}
                </p>

                {/* Simple Graph Illustration */}
                <div className="mt-6 h-20 bg-white border-3 border-black p-4 flex items-end justify-center gap-2">
                  {[40, 60, 80, 95, 100].map((height, i) => (
                    <div 
                      key={i} 
                      className="bg-[#FFC4EB] border border-black flex-1 max-w-3"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 brutalist-card bg-[#FDE047] text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-black uppercase mb-4">
            PENDANT CE TEMPS, VOUS FAITES VOTRE MÉTIER.
          </h3>
          <p className="text-xl font-bold text-black">
            <span className="italic">Nous, on remplit votre carnet de commandes.</span> 💼✨
          </p>
        </div>
      </div>
    </section>
  );
};
