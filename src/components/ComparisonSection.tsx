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
    <section className="py-24 lg:py-32 bg-background relative border-b border-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Pourquoi nous
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mt-4 leading-tight">
            On n'est pas comme
            <br />
            <span className="text-muted-foreground">les autres.</span>
          </h2>
        </div>

        <div className="border-2 border-primary">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-primary">
            <div className="p-4 lg:p-6 border-r border-primary">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Les autres</span>
            </div>
            <div className="p-4 lg:p-6 bg-amber">
              <span className="text-xs font-bold text-black uppercase tracking-widest">Lead Factory</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div key={index} className={`grid grid-cols-2 ${index < comparisons.length - 1 ? 'border-b border-primary' : ''}`}>
              <div className="p-4 lg:p-6 border-r border-primary">
                <span className="text-sm text-muted-foreground">{item.others}</span>
              </div>
              <div className="p-4 lg:p-6">
                <span className="text-sm text-foreground font-bold">{item.us}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
