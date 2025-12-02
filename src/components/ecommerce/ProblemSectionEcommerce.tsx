const frustrations = [
  { emoji: "❌", text: "Avoir un site magnifique mais aucun trafic qualifié" },
  { emoji: "😤", text: "Payer cher en publicité pour des visiteurs qui ne convertissent pas" },
  { emoji: "⏰", text: "Passer des heures sur Facebook Ads sans voir de résultats" },
  { emoji: "📉", text: "Voir vos concurrents exploser pendant que vous stagnez" },
  { emoji: "💸", text: "Brûler votre budget pub sans générer de ventes" },
];

export const ProblemSectionEcommerce = () => {
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
            <p className="text-3xl font-black uppercase mb-2 text-black leading-tight">ON CONNAÎT L'E-COMMERCE.</p>
            <p className="text-2xl font-bold text-black leading-tight">On a créé <span className="italic">Lead Factory</span> pour que vous vendiez plus, pas pour que vous dépensiez plus.</p>
          </div>
        </div>
      </div>
    </section>
  );
};