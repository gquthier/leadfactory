import { Zap, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFDF5] border-t-3 border-black py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-16 bg-[#3B82F6] border-3 border-black rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <span className="text-4xl font-black uppercase tracking-tight text-black">
              LeadFactory
            </span>
          </div>

          {/* Main CTA */}
          <div className="brutalist-card bg-[#FFC4EB] inline-block mb-8">
            <p className="text-2xl font-black uppercase text-black">
              🚀 DÉMARRAGE EN 48H
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t-3 border-black pt-8">
            <p className="text-black font-bold text-lg">
              © {currentYear} LeadFactory. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
