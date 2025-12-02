import { useRef, useEffect } from "react"; import { ArrowRight, Check } from "lucide-react";
const testimonials = [
  { quote: "Gauthier est hyper agréable et super disponible. La prise en main de l'outil était facile, et je suis agréablement surpris par la réussite de la campagne.", role: "CEO", sector: "Recherche de partenariats", },
  { quote: "Une équipe de professionnels compétents et sympathiques, un service efficace. Cette coopération nous a apporté beaucoup.", role: "PDG", sector: "Communication", },
  { quote: "Excellente collaboration ! Très bonne maîtrise technique, créativité, rapidité, toujours disponible et à l'écoute.", role: "PDG", sector: "Grande distribution", },
  { quote: "Une équipe efficace, à l'écoute des contraintes de mon métier. Une grande réactivité, une collaboration fluide.", role: "Co-fondateur", sector: "SaaS", },
  { quote: "Une société très professionnelle, à l'écoute de nos demandes et surtout rapide dans sa qualité de travail.", role: "Président", sector: "Informatique", },
  { quote: "J'ai été pleinement satisfait. Leur compréhension rapide et précise de ma problématique m'a immédiatement mis en confiance.", role: "Fondateur", sector: "Agence marketing", },
  { quote: "Super équipe jeune et dynamique. Ils m'ont fait un joli travail. Je recommande.", role: "Directeur", sector: "IT cloud solution", },
  { quote: "Une expérience excellente. Ils savent comment construire des relations solides avec leurs clients.", role: "CEO", sector: "SaaS", },
  { quote: "J'hésitais beaucoup avant de travailler avec eux, mais quand je vois qu'on a 18 SQL la première semaine, rien à redire.", role: "Co-founder", sector: "SaaS early stage", },
];
export const ResultsSectionFormation = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current; if (!scrollContainer) return; let scrollAmount = 0; const scrollSpeed = 1; const cardWidth = 400; const totalCards = testimonials.length;
    const scroll = () => { scrollAmount += scrollSpeed; if (scrollAmount >= cardWidth * totalCards) { scrollAmount = 0; } scrollContainer.scrollLeft = scrollAmount; };
    const intervalId = setInterval(scroll, 50); return () => clearInterval(intervalId);
  }, []);
  return (
    <section id="results" className="py-24 lg:py-32 bg-[#FFFDF5] relative border-b-3 border-black">
      <div className="container mx-auto px-6 lg:px-12 mb-16"><div className="text-center"><h2 className="responsive-headline mb-8">ILS ONT{" "}<span className="italic text-[#3B82F6] transform -skew-x-12 inline-block">TESTÉ.</span><br /><span className="text-2xl lg:text-4xl">ILS ONT SIGNÉ.</span></h2><div className="pill-container inline-block bg-[#3B82F6]"><p className="text-xl font-bold text-white">🎯 Témoignages clients • 100% authentiques</p></div></div></div>
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-12" style={{ scrollBehavior: 'auto' }}>{[...testimonials, ...testimonials].map((item, index) => (<div key={index} className="brutalist-card bg-white flex-shrink-0 w-[350px] md:w-[400px] flex flex-col justify-between min-h-[280px]"><blockquote className="text-black font-bold leading-relaxed">"{item.quote}"</blockquote><div className="mt-6 pt-6 border-t-3 border-dashed border-black"><p className="font-black text-black text-sm uppercase tracking-wider">{item.role}</p><p className="text-xs text-black font-bold uppercase tracking-wider">{item.sector}</p></div></div>))}</div>
      <div className="text-center mt-8"><div className="pill-container inline-block bg-[#FDE047]"><p className="text-lg font-bold">← Défiler horizontalement pour voir plus →</p></div></div>
      <div className="container mx-auto px-6 lg:px-12 mt-20"><div className="bg-white border-3 border-black p-8 relative shadow-[16px_16px_0px_0px_#000000] max-w-4xl mx-auto text-center overflow-hidden" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 12px)'}}><h3 className="text-3xl font-black text-black mb-8 uppercase">PRÊT À REMPLIR VOTRE CALENDRIER DE FORMATIONS ?</h3><div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">{["Entreprises qualifiées", "Décideurs formation", "Demandes exclusives", "Aucun engagement", "690€ tout compris"].map((item, index) => (<div key={index} className="brutalist-card bg-[#3B82F6] p-3"><div className="flex items-center justify-center gap-2"><Check className="h-4 w-4 text-white" /><span className="text-sm font-bold text-white uppercase tracking-wide">{item}</span></div></div>))}</div><div className="border-t-4 border-dashed border-black my-8"></div><button className="bg-black text-white border-3 border-black px-6 py-3 font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-base flex items-center justify-center mx-auto mb-6">JE TESTE POUR 690€<ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" /></button><div className="brutalist-card bg-[#FDE047] inline-block"><p className="text-lg font-black">⚡ RÉPONSE SOUS 24H • PREMIÈRES PUBS EN LIGNE SOUS 7 JOURS</p></div></div></div>
    </section>
  );
};