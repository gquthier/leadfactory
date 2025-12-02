const comparisons = [
  {
    others: "Leads partagés avec vos concurrents",
    us: "Contacts 100% exclusifs",
  },
  {
    others: "Engagement 6 ou 12 mois",
    us: "Aucun engagement",
  },
  {
    others: "Frais cachés et options payantes",
    us: "Un prix, tout inclus",
  },
  {
    others: "Plateforme automatique",
    us: "Une vraie équipe dédiée",
  },
  {
    others: "Leads froids à rappeler",
    us: "Contacts qui veulent être contactés",
  },
];

export const ComparisonSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFDF5] relative border-b-3 border-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="responsive-headline mb-8">
            ON N'EST PAS{" "}
            <span className="italic text-[#3B82F6] transform -skew-x-12 inline-block">
              COMME
            </span>
            <br />
            <span className="text-2xl lg:text-4xl">LES AUTRES.</span>
          </h2>
          <div className="pill-container inline-block bg-[#FDE047]">
            <p className="text-xl font-bold">
              ⚖️ Comparaison avec la concurrence
            </p>
          </div>
        </div>

        <div className="bg-white border-3 border-black p-8 relative shadow-[16px_16px_0px_0px_#000000] max-w-5xl mx-auto overflow-hidden" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 12px)'}}>
          {/* Header */}
          <div className="grid grid-cols-2 mb-8 gap-8">
            <div className="text-center flex flex-col justify-end">
              <div className="w-16 h-16 bg-red-500 border-3 border-black mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">❌</span>
              </div>
              <h3 className="text-2xl font-black text-red-700 uppercase">LES AUTRES</h3>
            </div>
            <div className="text-center flex flex-col justify-end">
              <div className="w-16 h-16 bg-[#3B82F6] border-3 border-black mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-2xl font-black text-[#3B82F6] uppercase">LEAD FACTORY</h3>
            </div>
          </div>

          {/* Dashed Separator */}
          <div className="border-t-4 border-dashed border-black mb-8"></div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="brutalist-card bg-red-50 border-red-500 p-4">
                  <p className="text-lg font-bold text-red-700 text-center">{item.others}</p>
                </div>
                <div className="brutalist-card bg-[#3B82F6] p-4">
                  <p className="text-lg font-bold text-white text-center">{item.us}</p>
                </div>
              </div>
              {index < comparisons.length - 1 && (
                <div className="border-t-2 border-dashed border-gray-300 my-4"></div>
              )}
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="border-t-4 border-dashed border-black mt-8 pt-8 text-center">
            <div className="brutalist-card bg-[#FDE047] inline-block">
              <p className="text-2xl font-black">
                LA DIFFÉRENCE EST ÉVIDENTE 🏆
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
