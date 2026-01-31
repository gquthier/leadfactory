import { BookOpen, Sparkles } from 'lucide-react';

export const BlogHero = () => {
  return (
    <section className="bg-[#FFFDF5] border-b-3 border-black py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FDE047] border-3 border-black px-4 py-2 mb-8 shadow-[4px_4px_0px_0px_#000000]">
            <Sparkles className="w-5 h-5" />
            <span className="font-black uppercase text-sm tracking-wider">
              Ressources & Insights
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
            Le Blog{' '}
            <span className="bg-[#3B82F6] text-white px-4 inline-block border-3 border-black">
              LeadFactory
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Conseils, stratégies et insights pour générer plus de leads qualifiés
            et développer votre business.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white border-3 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#58BC82]">
              <BookOpen className="w-5 h-5 text-[#3B82F6]" />
              <span className="font-bold">Articles SEO optimisés</span>
            </div>
            <div className="flex items-center gap-2 bg-white border-3 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#FFC4EB]">
              <Sparkles className="w-5 h-5 text-[#3B82F6]" />
              <span className="font-bold">Générés par ASIO AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
