import { LandingNavbar } from "@/components/LandingNavbar";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { LandingFAQSection } from "@/components/LandingFAQSection";
import { LandingResultsSection } from "@/components/LandingResultsSection";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    // Load Tally embed script
    const loadTally = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((e) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (typeof window.Tally !== 'undefined') {
      loadTally();
    } else if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]') == null) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.onload = loadTally;
      script.onerror = loadTally;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <main>
        {/* Hero Section with Value Proposition */}
        <section className="bg-[#FFFDF5] pt-32 pb-20 px-6 lg:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              {/* Sticker Badge */}
              <div className="inline-block bg-[#FFC4EB] border-3 border-black px-6 py-2 -rotate-3 font-black uppercase text-sm tracking-wider shadow-[4px_4px_0px_0px_#000000] mb-6">
                OPÉRATEURS DE CROISSANCE
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-12">
                On vous trouve des leads qualifiés en automatique.
                <br />
                <span className="italic text-[#3B82F6] transform -skew-x-12 inline-block">
                  Vous, vous signez.
                </span>
              </h1>

              <div className="mb-12 flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
                <div className="bg-white border-3 border-black rounded-full px-4 py-2 shadow-[4px_4px_0px_0px_#000000] whitespace-nowrap">
                  <p className="text-sm font-bold">
                    🎯 Clients qualifiés exclusifs
                  </p>
                </div>
                <div className="bg-white border-3 border-black rounded-full px-4 py-2 shadow-[4px_4px_0px_0px_#000000] whitespace-nowrap">
                  <p className="text-sm font-bold">
                    ⚡ Sans engagement • Résultats 15j
                  </p>
                </div>
              </div>
            </div>

            {/* Loom Video */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="border-3 border-black shadow-[8px_8px_0px_0px_#000000]">
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  backgroundImage: 'url(https://cdn.loom.com/sessions/thumbnails/b057b6f314fe476b8aac95ef1663e05e-9d5edb72b8b97919-full-play.gif)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  <iframe
                    src="https://www.loom.com/embed/b057b6f314fe476b8aac95ef1663e05e"
                    frameBorder="0"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Stats Bubbles (without title) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="brutalist-card text-center bg-white">
                <p className="text-4xl lg:text-5xl font-black text-black mb-2">5000+</p>
                <p className="text-sm font-bold uppercase tracking-wider">LEADS GÉNÉRÉS</p>
              </div>
              <div className="brutalist-card text-center bg-[#3B82F6]">
                <p className="text-4xl lg:text-5xl font-black text-white mb-2">5M€</p>
                <p className="text-sm font-bold uppercase tracking-wider text-white">PIPELINE GÉNÉRÉ</p>
              </div>
              <div className="brutalist-card text-center bg-[#FDE047]">
                <p className="text-4xl lg:text-5xl font-black text-black mb-2">+100</p>
                <p className="text-sm font-bold uppercase tracking-wider text-black">CLIENTS ACCOMPAGNÉS</p>
              </div>
              <div className="brutalist-card text-center bg-[#58BC82]">
                <p className="text-4xl lg:text-5xl font-black text-white mb-2">4.8</p>
                <p className="text-sm font-bold uppercase tracking-wider text-white">NOTE SUR GOOGLE</p>
              </div>
            </div>

            {/* First Tally Form */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-black text-center mb-6">
                Remplissez ce formulaire pour commencer
              </h3>
              <iframe
                data-tally-src="https://tally.so/embed/VLPvNM?alignLeft=1&hideTitle=1&dynamicHeight=1&formEventsForwarding=1"
                loading="lazy"
                width="100%"
                height="1403"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Leadfactory"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Avis Clients Section */}
        <LandingResultsSection />

        {/* Vous en avez marre Section */}
        <ProblemSection />

        {/* On s'occupe de tout Section */}
        <SolutionSection />

        {/* Second Tally Form */}
        <section className="bg-white py-20 px-6 lg:px-12 border-t-3 border-black">
          <div className="container mx-auto max-w-3xl">
            <iframe
              data-tally-src="https://tally.so/embed/VLPvNM?alignLeft=1&hideTitle=1&dynamicHeight=1&formEventsForwarding=1"
              loading="lazy"
              width="100%"
              height="1403"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Leadfactory"
            ></iframe>
          </div>
        </section>

        {/* Trois étapes Section */}
        <ProcessSection />

        {/* On n'est pas comme les autres Section */}
        <ComparisonSection />

        {/* Deux expertises éprouvées Section */}
        <ExpertiseSection />

        {/* Third Tally Form */}
        <section className="bg-[#FFFDF5] py-20 px-6 lg:px-12 border-t-3 border-black">
          <div className="container mx-auto max-w-3xl">
            <iframe
              data-tally-src="https://tally.so/embed/VLPvNM?alignLeft=1&hideTitle=1&dynamicHeight=1&formEventsForwarding=1"
              loading="lazy"
              width="100%"
              height="1403"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Leadfactory"
            ></iframe>
          </div>
        </section>

        {/* Vos questions Section */}
        <LandingFAQSection />
      </main>
    </div>
  );
};

export default Landing;
