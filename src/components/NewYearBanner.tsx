import { Sparkles, Gift } from "lucide-react";

export const NewYearBanner = () => {
  return (
    <div className="w-full bg-[#FDE047] border-b-3 border-black py-3 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Gift className="w-5 h-5 text-black animate-pulse" />
          <p className="text-sm md:text-base font-black uppercase tracking-wider text-black text-center">
            🎉 Joyeuses Fêtes ! Offre spéciale Janvier 2026 disponible
          </p>
          <Sparkles className="w-5 h-5 text-black animate-pulse" />
        </div>
      </div>
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-4 h-4 bg-black"></div>
      <div className="absolute top-0 right-0 w-4 h-4 bg-black"></div>
    </div>
  );
};
