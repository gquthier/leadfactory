import { Zap } from "lucide-react";

export const LandingNavbar = () => {
  const scrollToTally = () => {
    const tallyElement = document.querySelector('[data-tally-src]');
    if (tallyElement) {
      tallyElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF5] border-b-3 border-black">
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3B82F6] border-3 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl lg:text-3xl font-black text-black uppercase tracking-tight">
              LeadFactory
            </span>
          </a>

          {/* CTA Button */}
          <button
            onClick={scrollToTally}
            className="brutalist-button text-sm"
          >
            COMMENCER
          </button>
        </div>
      </nav>
    </header>
  );
};
