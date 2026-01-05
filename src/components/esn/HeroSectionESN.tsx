import { ArrowRight, TrendingUp, Zap, DollarSign } from "lucide-react";

export const HeroSectionESN = () => {
  return (
    <section className="min-h-screen bg-[#FFFDF5] pt-32 pb-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-8 items-center">
          {/* Left: Headlines & Content (75%) */}
          <div className="lg:col-span-3 text-left relative">
            {/* Sticker Badge au-dessus du headline */}
            <div className="inline-block bg-[#FFC4EB] border-3 border-black px-6 py-2 -rotate-3 font-black uppercase text-sm tracking-wider shadow-[4px_4px_0px_0px_#000000] mb-6 ml-0">
              OPÉRATEURS DE CROISSANCE
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              On vous trouve des rendez-vous avec des décideurs IT.
              <br />
              <span className="italic text-[#3B82F6] transform -skew-x-12 inline-block">
                Vous, vous signez.
              </span>
            </h1>

            <div className="mb-8 flex flex-wrap gap-2 max-w-4xl">
              <div className="bg-white border-3 border-black rounded-full px-4 py-2 shadow-[4px_4px_0px_0px_#000000] whitespace-nowrap">
                <p className="text-sm font-bold">
                  🎯 Décideurs uniquement
                </p>
              </div>
              <div className="bg-white border-3 border-black rounded-full px-4 py-2 shadow-[4px_4px_0px_0px_#000000] whitespace-nowrap">
                <p className="text-sm font-bold">
                  ⚡ Sans engagement • Résultats 15j
                </p>
              </div>
              <div className="bg-white border-3 border-black rounded-full px-4 py-2 shadow-[4px_4px_0px_0px_#000000] whitespace-nowrap">
                <p className="text-sm font-bold">
                  💰 Offre janvier : 749€
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://calendly.com/contact-leadfactory/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white border-3 border-black px-6 py-3 font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-sm flex items-center justify-center"
              >
                TESTER MAINTENANT POUR 749€
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
              </a>
              <button className="bg-[#FFC4EB] text-black border-3 border-black px-6 py-3 font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-sm whitespace-nowrap">
                VOIR LES RÉSULTATS
              </button>
            </div>
          </div>

          {/* Right: Money Machine Illustration (25%) */}
          <div className="lg:col-span-1">
            <div className="brutalist-primary-card h-[28rem] w-full flex items-center justify-center relative overflow-hidden">
              <div className="browser-window w-full h-full pt-8 p-4">
                {/* Vertical Money Machine Illustration - Icons Only */}
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                  <div className="flex flex-col items-center space-y-6">
                    <div className="w-18 h-18 bg-[#FDE047] border-3 border-black rounded-full flex items-center justify-center">
                      <TrendingUp className="w-10 h-10 text-black" />
                    </div>
                    <div className="h-10 w-1 bg-black"></div>
                    <div className="w-18 h-18 bg-[#3B82F6] border-3 border-black rounded-full flex items-center justify-center animate-pulse">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <div className="h-10 w-1 bg-black"></div>
                    <div className="w-18 h-18 bg-[#FFC4EB] border-3 border-black rounded-full flex items-center justify-center">
                      <DollarSign className="w-10 h-10 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-32 mb-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="brutalist-card text-center bg-white">
            <p className="text-4xl lg:text-5xl font-black text-black mb-2">250+</p>
            <p className="text-sm font-bold uppercase tracking-wider">RDV DÉCIDEURS IT</p>
          </div>
          <div className="brutalist-card text-center bg-[#3B82F6]">
            <p className="text-4xl lg:text-5xl font-black text-white mb-2">5M€</p>
            <p className="text-sm font-bold uppercase tracking-wider text-white">PIPELINE GÉNÉRÉ</p>
          </div>
          <div className="brutalist-card text-center bg-[#FDE047]">
            <p className="text-4xl lg:text-5xl font-black text-black mb-2">+50</p>
            <p className="text-sm font-bold uppercase tracking-wider text-black">ESN ACCOMPAGNÉES</p>
          </div>
          <div className="brutalist-card text-center bg-[#58BC82]">
            <p className="text-4xl lg:text-5xl font-black text-white mb-2">4.8</p>
            <p className="text-sm font-bold uppercase tracking-wider text-white">NOTE SUR GOOGLE</p>
          </div>
        </div>
      </div>
    </section>
  );
};