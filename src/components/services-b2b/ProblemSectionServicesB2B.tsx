const frustrations = [
  { emoji: "❌", text: "Prospecter des entreprises qui n'ont pas de budget" },
  { emoji: "😤", text: "Perdre du temps avec des prospects qui ne sont pas prêts" },
  { emoji: "⏰", text: "Faire des présentations à des gens qui ne décident rien" },
  { emoji: "📉", text: "Avoir des pipelines vides et des objectifs manqués" },
  { emoji: "💸", text: "Investir en prospection sans voir de retour" },
];

export const ProblemSectionServicesB2B = () => {
  return (
    <section className="pt-16 pb-24 lg:pt-20 lg:pb-32 bg-[#FFFDF5] relative border-b-3 border-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="responsive-headline mb-8">
            VOUS EN AVEZ{" "}
            <span className="italic text-[#3B82F6] transform skew-x-12 inline-block">MARRE</span>{" "}
            DE...
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {frustrations.map((item, index) => (
              <div key={index} className="pill-container bg-white flex items-center gap-6">
                <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                <span className="text-xl font-bold text-black uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 brutalist-card bg-[#FFC4EB] text-center max-w-2xl mx-auto">
            <p className="text-3xl font-black uppercase mb-2 text-black leading-tight">ON CONNAÎT VOS DÉFIS.</p>
            <p className="text-2xl font-bold text-black leading-tight">On a créé <span className="italic">Lead Factory</span> pour que vous passiez plus de temps à livrer qu'à prospecter.</p>
          </div>
        </div>
      </div>
    </section>
  );
};