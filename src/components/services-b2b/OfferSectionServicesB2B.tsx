import { ArrowRight, Check, Star, Trophy, Zap } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";

const offerings = [
  "5 vidéos publicitaires créées par intelligence artificielle",
  "Vidéos qui mettent en avant vos services",
  "5 visuels publicitaires sur-mesure",
  "Images conçues pour attirer votre cible B2B",
  "Un site web dédié, optimisé pour convertir",
  "Une page qui filtre les curieux et attire les vrais projets",
];

export const OfferSectionServicesB2B = () => {
  return (
    <section id="offre" className="py-24 lg:py-32 bg-[#FFFDF5] border-b-3 border-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="responsive-headline mb-8">
            TESTEZ UN{" "}
            <span className="italic text-[#3B82F6] transform skew-x-12 inline-block">MOIS</span>{" "}
            POUR 690€
            <br />
            <span className="text-2xl lg:text-4xl">VOICI CE QUE VOUS OBTENEZ :</span>
          </h2>
          <div className="pill-container inline-block bg-[#3B82F6]">
            <p className="text-xl font-bold text-white">⚡ Tout est inclus • Sans surprise • Sans engagement</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-3 border-black p-8 relative shadow-[16px_16px_0px_0px_#000000] overflow-hidden" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 12px)'}}>
            <div className="absolute top-4 left-4 w-12 h-12 bg-[#FDE047] border-3 border-black flex items-center justify-center">
              <Star className="w-6 h-6 text-black" />
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-[#FFC4EB] border-3 border-black flex items-center justify-center">
              <Trophy className="w-6 h-6 text-black" />
            </div>
            <div className="text-center mb-8 pt-12">
              <div className="inline-block bg-[#3B82F6] border-3 border-black px-8 py-3 shadow-[4px_4px_0px_0px_#000000]">
                <span className="text-lg font-black uppercase tracking-wider text-white">TESTEZ NOUS</span>
              </div>
              <div className="mt-6">
                <span className="text-8xl lg:text-9xl font-black text-black">690</span>
                <span className="text-4xl font-black">€</span>
                <div className="mt-1 text-xs font-black uppercase tracking-wider">LE PREMIER MOIS</div>
              </div>
            </div>
            <div className="border-t-4 border-dashed border-black my-8"></div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {offerings.map((item, index) => (
                <div key={index} className="flex items-start gap-3 brutalist-card bg-white p-4">
                  <div className="w-8 h-8 bg-[#3B82F6] border-2 border-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-black uppercase tracking-wide leading-tight">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t-4 border-dashed border-black my-8"></div>
            <div className="text-center">
              <div className="flex justify-center mb-4 -rotate-2">
                <CountdownTimer />
              </div>
              <button className="bg-black text-white border-3 border-black px-6 py-3 font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-base mb-4 mx-auto flex items-center justify-center">
                JE VEUX TESTER MAINTENANT
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
              </button>
              <div className="flex items-center justify-center gap-4 text-lg font-bold">
                <Zap className="w-6 h-6 text-[#FDE047]" />
                <span>DÉMARRAGE EN 48H</span>
                <Zap className="w-6 h-6 text-[#FDE047]" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-black border-2 border-black transform rotate-45"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-black border-2 border-black transform rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};