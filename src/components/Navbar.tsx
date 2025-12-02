import { useState } from "react";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const navLinks = [
  { label: "SOLUTION", href: "#solution" },
  { label: "OFFRE", href: "#offre" },
  { label: "PROCESSUS", href: "#processus" },
  { label: "TÉMOIGNAGES", href: "#results" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-black hover:text-[#3B82F6] transition-colors duration-100 uppercase tracking-wider border-b-2 border-transparent hover:border-black pb-1"
              >
                {link.label}
              </a>
            ))}

            {/* Sectors dropdown only on homepage */}
            {onHome && (
              <div className="relative">
                <button
                  className="flex items-center gap-2 text-sm font-bold text-black uppercase tracking-wider border-3 border-black px-4 py-2 bg-white shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                  onClick={() => setIsSectorsOpen((v) => !v)}
                >
                  Secteurs
                  <ChevronDown className={`h-4 w-4 ${isSectorsOpen ? "rotate-180" : ""}`} />
                </button>
                {isSectorsOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white border-3 border-black shadow-[8px_8px_0px_0px_#000000] p-2 grid grid-cols-1">
                    {[
                      { label: "ESN", href: "/esn" },
                      { label: "SaaS & NTech", href: "/saas" },
                      { label: "Services B2B", href: "/services-b2b" },
                      { label: "Agences Marketing", href: "/agences-marketing" },
                      { label: "Consultants", href: "/consultants" },
                      { label: "Immobilier", href: "/immobilier" },
                      { label: "Formation", href: "/formation" },
                    ].map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-sm font-bold text-black hover:text-[#3B82F6] px-3 py-2 uppercase tracking-wider border-3 border-black bg-white mb-2 last:mb-0 shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button className="brutalist-button text-sm">
              PARLER À UN EXPERT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 border-3 border-black bg-[#FFC4EB] shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-black" />
            ) : (
              <Menu className="h-5 w-5 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t-3 border-black bg-[#FDE047]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-bold text-black hover:text-[#3B82F6] py-3 px-4 uppercase tracking-wider border-3 border-black bg-white shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="brutalist-button mt-4">
                PARLER À UN EXPERT
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
