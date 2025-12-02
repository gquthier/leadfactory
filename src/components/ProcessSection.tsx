import handsKeyboardBw from "@/assets/hands-keyboard-bw.jpg";

const steps = [
  {
    number: "01",
    title: "On discute 15 minutes",
    description: "Vous nous expliquez votre activité, vos clients idéaux, vos objectifs.",
  },
  {
    number: "02",
    title: "On crée tout pour vous",
    description: "Vidéos, visuels, site web, publicités. En quelques jours, tout est prêt.",
  },
  {
    number: "03",
    title: "Vous recevez des contacts",
    description: "Les personnes intéressées arrivent dans votre boîte. Vous signez.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="processus" className="py-24 lg:py-32 bg-primary text-primary-foreground relative border-b border-primary-foreground/20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={handsKeyboardBw} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="absolute inset-0 dark-grid" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-primary-foreground/50 uppercase tracking-widest">
            Le processus
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-primary-foreground mt-4 leading-tight">
            3 étapes.
            <br />
            <span className="text-primary-foreground/50">C'est tout.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 lg:p-10 border-t border-primary-foreground/20 ${index > 0 ? 'lg:border-l' : ''}`}
            >
              <span className="text-6xl lg:text-7xl font-black text-amber/30">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-primary-foreground mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <p className="text-xl text-primary-foreground/70 max-w-2xl">
            Pendant ce temps, vous faites votre métier. 
            <span className="text-amber font-bold"> Nous, on remplit votre carnet de commandes.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
