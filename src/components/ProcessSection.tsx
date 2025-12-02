import dataNetwork from "@/assets/data-network.jpg";

const steps = [
  {
    number: "01",
    title: "On discute 15 minutes",
    description: "Vous nous expliquez votre activité, vos clients idéaux, vos objectifs. On prend des notes.",
  },
  {
    number: "02",
    title: "On crée tout pour vous",
    description: "Vidéos, visuels, site web, publicités. En quelques jours, tout est prêt.",
  },
  {
    number: "03",
    title: "Vous recevez des contacts qualifiés",
    description: "Les personnes intéressées arrivent dans votre boîte. Vous les appelez, vous signez.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="processus" className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={dataNetwork} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-medium text-electric uppercase tracking-widest">
            Le processus
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mt-4 mb-6">
            3 étapes. C'est tout.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm"
            >
              <span className="text-6xl font-bold text-electric/20 absolute top-4 right-4">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                {step.title}
              </h3>
              <p className="text-white/70 leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-white/80 max-w-2xl mx-auto">
          Pendant ce temps, vous faites votre métier. 
          <span className="text-electric font-semibold"> Nous, on remplit votre carnet de commandes.</span>
        </p>
      </div>
    </section>
  );
};
