const frustrations = [
  { emoji: "❌", text: "Acheter des contacts partagés avec 10 autres artisans" },
  { emoji: "😤", text: "Rappeler des gens qui ne décrochent jamais" },
  { emoji: "⏰", text: "Perdre du temps avec des 'projets' qui n'ont pas de budget" },
  { emoji: "📉", text: "Payer des plateformes pour des contacts pourris" },
  { emoji: "💸", text: "Faire des devis gratuits pour des gens qui comparent juste les prix" }
];

export const ProblemSectionTravaux = () => {
  return (
    <section className="pt-16 pb-24 lg:pt-20 lg:pb-32 bg-[#FFFDF5] relative border-b-3 border-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="responsive-headline mb-8">
            VOUS EN AVEZ{" "}
            <span className="italic text-[#3B82F6] transform skew-x-12 inline-block">
              MARRE
            </span>{" "}
            DE...
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {frustrations.map((item, index) => (
              <div key={index} className="pill-container bg-white flex items-center gap-6">
                <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                <span className="text-xl font-bold text-black uppercase tracking-wider">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 brutalist-card bg-[#FFC4EB] text-center max-w-2xl mx-auto">
            <p className="text-3xl font-black uppercase mb-2 text-black leading-tight">
              ON CONNAÎT LA GALÈRE DES ARTISANS.
            </p>
            <p className="text-2xl font-bold text-black leading-tight">
              On a créé <span className="italic">Lead Factory</span> pour vous envoyer de vrais projets, rien qu'à vous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
