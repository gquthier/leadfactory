import { Target, Users, TrendingUp, Sparkles } from "lucide-react";

const expertises = [
  {
    number: "01",
    title: "MEDIA BUYING",
    subtitle: "Campagnes Meta • Lead Generation • Performance",
    description: "Nous nous concentrons uniquement sur la conversion. Pas question de vous envoyer des leads peu qualifiés juste pour gonfler les chiffres. L'objectif : des contacts ultra-qualifiés, peu importe le coût d'acquisition, tant que la rentabilité est au rendez-vous.",
    icon: Target,
  },
  {
    number: "02",
    title: "OUTBOUND",
    subtitle: "LinkedIn • Cold Email • 3M+ messages envoyés",
    description: "Nous configurons une infrastructure de prospection complète avec des campagnes ultra-ciblées. Des bases de données de qualité qui vous appartiennent à 100%. Nous allons chercher exactement les cibles que vous visez, avec une précision chirurgicale.",
    icon: Users,
  },
  {
    number: "03",
    title: "GOOGLE ADS OPTIMISÉ",
    subtitle: "Concurrence • Performance Max • Marchés éduqués",
    description: "Campagnes Google Ads optimisées pour performer sur des marchés compétitifs et éduqués. Focus sur la rentabilité et la conversion, avec une stratégie adaptée à votre secteur et vos objectifs de croissance.",
    icon: TrendingUp,
  },
];

export const ExpertiseSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFDF5] border-b-3 border-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="responsive-headline mb-8">
            NOS{" "}
            <span className="italic text-[#3B82F6] transform -skew-x-12 inline-block">
              EXPERTISES.
            </span>
            <br />
            <span className="text-3xl lg:text-5xl">ÉPROUVÉES SUR LE TERRAIN.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {expertises.map((expertise, index) => (
            <div
              key={index}
              className="brutalist-primary-card relative"
            >
              {/* Browser Window Header */}
              <div className="browser-window-header mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                  <div className="w-3 h-3 bg-[#FDE047] rounded-full border border-black"></div>
                  <div className="w-3 h-3 bg-[#3B82F6] rounded-full border border-black"></div>
                </div>
                <div className="h-px bg-black"></div>
              </div>

              {/* Expertise Number */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-black text-[#4ADE80] border-3 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000000]">
                <span className="text-2xl font-black">{expertise.number}</span>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white border-3 border-black flex items-center justify-center">
                  <expertise.icon className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-xl font-black text-white uppercase tracking-wider">
                  {expertise.title}
                </h3>

                <p className="text-sm font-bold text-[#FDE047] uppercase tracking-wide">
                  {expertise.subtitle}
                </p>

                <p className="text-base font-bold text-white leading-relaxed">
                  {expertise.description}
                </p>

                {/* Simple Graph Illustration */}
                <div className="mt-6 h-20 bg-white border-3 border-black p-4 flex items-end justify-center gap-2">
                  {[60, 75, 85, 95, 100].map((height, i) => (
                    <div
                      key={i}
                      className="bg-[#4ADE80] border border-black flex-1 max-w-3"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 brutalist-card bg-[#FDE047] text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-black" />
            <h3 className="text-2xl font-black uppercase">
              NOUS SOMMES DES GROWTH HACKERS.
            </h3>
            <Sparkles className="w-8 h-8 text-black" />
          </div>
          <p className="text-xl font-bold text-black mb-4">
            Nous nous adaptons à vos besoins et à votre marché.
          </p>
          <p className="text-lg font-bold text-black">
            <span className="italic">Automatisation N8N • Génération d'articles SEO automatique • LinkedIn Inbound • Stratégies sur-mesure</span>
          </p>
          <p className="text-base font-bold text-black mt-4 opacity-80">
            Une expertise complète pour faire décoller votre croissance. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};
