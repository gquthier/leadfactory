export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h2 className="text-5xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight">
            LeadFactory
          </h2>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <p className="text-lg text-primary-foreground/70">
              On vous trouve des clients. Vous, vous les gardez.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-xs text-primary-foreground/50 uppercase tracking-wider">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </a>
              <span>·</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Confidentialité
              </a>
              <span>·</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <p className="text-xs text-primary-foreground/30 mt-8 uppercase tracking-wider">
            © {currentYear} Lead Factory. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
