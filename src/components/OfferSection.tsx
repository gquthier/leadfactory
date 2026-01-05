import { ArrowRight, Check, Star, Trophy, Zap, Sparkles } from "lucide-react";

const offer = {
  id: "test",
  title: "TESTEZ-NOUS",
  price: "749",
  period: "LE PREMIER MOIS",
  badge: "OFFRE JANVIER 2026" as string | null,
  description: "Offre spéciale • Uniquement disponible en janvier",
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
};

export const OfferSection = () => {
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

        {/* Single Offer Card */}
        <div className="relative w-full mx-auto flex items-center justify-center py-8">
          {renderCard(offer, true)}
        </div>
      </div>
    </section>
  );
};

function renderCard(offer: typeof offer, isActive: boolean) {
  return (
    <div className={`w-full md:max-w-6xl px-2 sm:px-4 lg:px-6 ${isActive ? '' : 'pointer-events-none'}`}>
      <div className="bg-white border-3 border-black p-6 md:p-8 lg:p-10 relative shadow-[16px_16px_0px_0px_#000000] overflow-hidden" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 12px)'}}>
        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-[#FDE047] border-3 border-black flex items-center justify-center">
          <Star className="w-6 h-6 text-black" />
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 bg-[#FFC4EB] border-3 border-black flex items-center justify-center">
          <Trophy className="w-6 h-6 text-black" />
        </div>

        {/* Badge if exists */}
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

        {/* Header Section */}
        <div className="text-center mb-8 pt-12">
          <div className="flex justify-center mb-2 -rotate-2">
            <span className="inline-block bg-white border-3 border-black px-3 py-1 font-black uppercase tracking-wider text-[10px]">
              {offer.period}
            </span>
          </div>
          <div className="inline-block border-3 border-black px-8 py-3 shadow-[4px_4px_0px_0px_#000000]" style={{ backgroundColor: offer.color }}>
            <span className="text-lg font-black uppercase tracking-wider text-white">
              {offer.title}
            </span>
          </div>
          <div className="mt-6">
            <span className="text-8xl lg:text-9xl font-black text-black">{offer.price}</span>
            <span className="text-4xl font-black">€</span>
          </div>
          <p className="text-base font-bold text-black mt-2">{offer.description}</p>
        </div>

        {/* Dashed Separator */}
        <div className="border-t-4 border-dashed border-black my-8"></div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {offer.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 brutalist-card bg-white p-4">
              <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: offer.color }}>
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold text-black uppercase tracking-wide leading-tight">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Dashed Separator */}
        <div className="border-t-4 border-dashed border-black my-8"></div>

        {/* Urgency Banner */}
        <div className="mb-6 p-4 bg-[#FFC4EB] border-3 border-black shadow-[4px_4px_0px_0px_#000000]">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Sparkles className="w-5 h-5 text-black" />
            <p className="text-sm font-black uppercase tracking-wider text-black text-center">
              ⏰ Offre valable uniquement en janvier 2026 • Places limitées
            </p>
            <Sparkles className="w-5 h-5 text-black" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href={offer.ctaLink}
            target={offer.ctaLink.startsWith("http") ? "_blank" : undefined}
            rel={offer.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
            className="bg-black text-white border-3 border-black px-6 py-3 font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-base mb-4 mx-auto inline-flex items-center justify-center"
          >
            {offer.ctaText}
            <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
          </a>
          <div className="flex items-center justify-center gap-4 text-lg font-bold">
            <Zap className="w-6 h-6 text-[#FDE047]" />
            <span>DÉMARRAGE RAPIDE</span>
            <Zap className="w-6 h-6 text-[#FDE047]" />
          </div>
        </div>

        {/* Bottom corner decorations */}
        <div className="absolute bottom-4 left-4 w-8 h-8 bg-black border-2 border-black transform rotate-45"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-black border-2 border-black transform rotate-45"></div>
      </div>
    </div>
  );
}
