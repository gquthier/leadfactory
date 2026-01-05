// Backup of full carousel version (kept on request to "save for later")
// This file is not used in the app. To restore, replace OfferSection.tsx content with this.

import { useState } from "react";
import { ArrowRight, Check, Star, Trophy, Zap, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const offers = [
  {
    id: "outbound",
    title: "OFFRE OUTBOUND",
    price: "1 500",
    period: "PAR MOIS",
    badge: null,
    description: "Prospection automatisée • Infrastructure complète",
    items: [
      "Mise en place d'infrastructures avec 18 adresses mail et 6 noms de domaine",
      "10 000 contacts qualifiés ciblés",
      "Séquence sur mesure LinkedIn et cold email",
      "Base de données ultra qualifiée",
      "Envoi des leads automatiquement",
      "Infrastructures qui vous appartiennent réellement",
      "Suivi quotidien des campagnes",
    ],
    ctaText: "DÉMARRER MAINTENANT",
    ctaLink: "https://calendly.com/contact-leadfactory/30min",
    color: "#8B5CF6",
  },
  {
    id: "test",
    title: "TESTEZ-NOUS",
    price: "690",
    period: "LE PREMIER MOIS",
    badge: null,
    description: "Sans engagement • Résultats garantis",
    items: [
      "5 vidéos publicitaires créées par IA",
      "5 visuels publicitaires sur-mesure",
      "Un site web dédié, optimisé pour convertir",
      "Votre compte publicitaire créé et configuré",
      "Vos publicités lancées sur les bonnes audiences",
      "Suivi et optimisation pendant 30 jours",
    ],
    ctaText: "PARLER À UN EXPERT",
    ctaLink: "https://calendly.com/contact-leadfactory/30min",
    color: "#3B82F6",
  },
  {
    id: "media-buying",
    title: "MEDIA BUYING",
    price: "1 500",
    period: "PAR MOIS",
    badge: "TEST POSSIBLE",
    description: "Créatifs illimités • Performance max",
    items: [
      "Créatifs publicitaires illimités",
      "Production corrélée au budget investi",
      "5 vidéos publicitaires par semaine",
      "10 visuels publicitaires par semaine",
      "Site web dédié optimisé",
      "Campagnes Meta et Google Ads",
      "Optimisation quotidienne des performances",
      "Reporting hebdomadaire détaillé",
    ],
    ctaText: "TESTER D'ABORD À 690€",
    ctaLink: "#offre",
    color: "#EC4899",
  },
];

export const OfferSectionCarouselBackup = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
  };

  const getOfferIndex = (offset: number) => {
    const index = (currentIndex + offset + offers.length) % offers.length;
    return index;
  };

  return (
    <section id="offre" className="py-24 lg:py-32 bg-[#FFFDF5] border-b-3 border-black">
      <div className="w-full mx-auto px-0 lg:px-0">
        <div className="text-center mb-16">
          <h2 className="responsive-headline mb-8">
            NOS{" "}
            <span className="italic text-[#3B82F6] transform skew-x-12 inline-block">OFFRES.</span>
            <br />
            <span className="text-2xl lg:text-4xl">CHOISISSEZ CELLE QUI VOUS CONVIENT.</span>
          </h2>
          <div className="pill-container inline-block bg-[#3B82F6]">
            <p className="text-xl font-bold text-white">⚡ Tout est inclus • Sans surprise • Sans engagement</p>
          </div>
        </div>

        <div className="relative w-full mx-auto overflow-hidden">
          <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black text-white border-3 border-black p-3 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all" aria-label="Offre précédente">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black text-white border-3 border-black p-3 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all" aria-label="Offre suivante">
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative flex items-center justify-center py-8">
            <div className="flex gap-8 md:gap-12 lg:gap-16 transition-transform duration-500 ease-in-out" style={{ width: '300%', transform: 'translateX(-100%)' }}>
              <div className="flex-shrink-0 w-full flex justify-center opacity-70 blur-[1px] scale-95 transition-all duration-500">
                {renderCard(offers[getOfferIndex(-1)], false)}
              </div>
              <div className="flex-shrink-0 w-full flex justify-center opacity-100 scale-100 transition-all duration-500">
                {renderCard(offers[currentIndex], true)}
              </div>
              <div className="flex-shrink-0 w-full flex justify-center opacity-70 blur-[1px] scale-95 transition-all duration-500">
                {renderCard(offers[getOfferIndex(1)], false)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function renderCard(offer: typeof offers[0], isActive: boolean) {
  return (
    <div className={`w-full md:max-w-6xl px-2 sm:px-4 lg:px-6 ${isActive ? '' : 'pointer-events-none'}`}>
      <div className="bg-white border-3 border-black p-6 md:p-8 lg:p-10 relative shadow-[16px_16px_0px_0px_#000000] overflow-hidden" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 12px)'}}>
        <div className="absolute top-4 left-4 w-12 h-12 bg-[#FDE047] border-3 border-black flex items-center justify-center">
          <Star className="w-6 h-6 text-black" />
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 bg-[#FFC4EB] border-3 border-black flex items-center justify-center">
          <Trophy className="w-6 h-6 text-black" />
        </div>
        {offer.badge && (
          <div className="absolute top-16 right-4 rotate-12">
            <div className="bg-[#FDE047] border-3 border-black px-3 py-1 shadow-[4px_4px_0px_0px_#000000]">
              <div className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-black" />
                <span className="text-xs font-black uppercase tracking-wider">{offer.badge}</span>
              </div>
            </div>
          </div>
        )}
        <div className="text-center mb-8 pt-12">
          <div className="flex justify-center mb-2 -rotate-2">
            <span className="inline-block bg:white border-3 border-black px-3 py-1 font-black uppercase tracking-wider text-[10px]">{offer.period}</span>
          </div>
          <div className="inline-block border-3 border-black px-8 py-3 shadow-[4px_4px_0px_0px_#000000]" style={{ backgroundColor: offer.color }}>
            <span className="text-lg font-black uppercase tracking-wider text-white">{offer.title}</span>
          </div>
          <div className="mt-6">
            <span className="text-8xl lg:text-9xl font-black text-black">{offer.price}</span>
            <span className="text-4xl font-black">€</span>
          </div>
          <p className="text-base font-bold text-black mt-2">{offer.description}</p>
        </div>
        <div className="border-t-4 border-dashed border-black my-8"></div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {offer.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 brutalist-card bg-white p-4">
              <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: offer.color }}>
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold text-black uppercase tracking-wide leading-tight">{item}</span>
            </div>
          ))}
        </div>
        <div className="border-t-4 border-dashed border-black my-8"></div>
        <div className="text-center">
          <a href={offer.ctaLink} target={offer.ctaLink.startsWith("http") ? "_blank" : undefined} rel={offer.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined} className="bg-black text-white border-3 border-black px-6 py-3 font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-base mb-4 mx-auto inline-flex items-center justify-center">
            {offer.ctaText}
            <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
          </a>
          <div className="flex items-center justify-center gap-4 text-lg font-bold">
            <Zap className="w-6 h-6 text-[#FDE047]" />
            <span>DÉMARRAGE RAPIDE</span>
            <Zap className="w-6 h-6 text-[#FDE047]" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 w-8 h-8 bg-black border-2 border-black transform rotate-45"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-black border-2 border-black transform rotate-45"></div>
      </div>
    </div>
  );
}

export default OfferSectionCarouselBackup;
