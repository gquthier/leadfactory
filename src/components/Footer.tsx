export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-navy text-white border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          <p className="text-lg font-medium text-white mb-6">
            Lead Factory — On vous trouve des clients. Vous, vous les gardez.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <span className="hidden sm:inline">·</span>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <span className="hidden sm:inline">·</span>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          
          <p className="text-sm text-white/40 mt-8">
            © {currentYear} Lead Factory. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
