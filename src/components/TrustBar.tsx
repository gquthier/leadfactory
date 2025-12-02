const partners = [
  "Accenture",
  "Deloitte",
  "McKinsey",
  "Salesforce",
  "HubSpot",
  "Adobe",
];

export const TrustBar = () => {
  return (
    <section className="py-16 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-widest mb-10">
          Trusted by industry leaders
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:gap-x-20">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-xl lg:text-2xl font-semibold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-300 cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
