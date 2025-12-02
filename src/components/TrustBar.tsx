const clients = [
  "Fairglow",
  "Streamrunners",
  "Bigpicturh",
  "Penelope",
  "Access Energies",
  "Microdoing",
  "DigitalUnicorn",
  "Efidem",
];

export const TrustBar = () => {
  return (
    <section className="py-12 border-b border-primary bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-8">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">
            Ils nous font confiance
          </p>
          <div className="h-px bg-primary flex-1" />
        </div>
        
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 mt-8">
          {clients.map((client) => (
            <span
              key={client}
              className="text-sm font-bold text-muted-foreground/50 hover:text-foreground transition-colors duration-100 cursor-default uppercase tracking-wider"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
