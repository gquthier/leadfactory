import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Check } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Gauthier est hyper agréable et super disponible. La prise en main de l'outil était facile, et je suis agréablement surpris par la réussite de la campagne.",
    role: "CEO",
    sector: "Recherche de partenariats",
  },
  {
    quote: "Une équipe de professionnels compétents et sympathiques, un service efficace. Cette coopération nous a apporté beaucoup.",
    role: "PDG",
    sector: "Communication",
  },
  {
    quote: "Excellente collaboration ! Très bonne maîtrise technique, créativité, rapidité, toujours disponible et à l'écoute. C'est un plaisir de travailler avec eux, nous les recommandons !",
    role: "PDG",
    sector: "Grande distribution",
  },
  {
    quote: "Une équipe efficace, à l'écoute des contraintes de mon métier. Une grande réactivité, une collaboration fluide. J'ai eu le sentiment d'être écouté, compris et surtout de voir des campagnes différentes et efficaces !",
    role: "Co-fondateur",
    sector: "SaaS",
  },
  {
    quote: "Une société très professionnelle, à l'écoute de nos demandes et surtout rapide dans sa qualité de travail.",
    role: "Président",
    sector: "Informatique",
  },
  {
    quote: "J'ai été pleinement satisfait de mon choix de collaborer avec eux. Leur compréhension rapide et précise de ma problématique m'a immédiatement mis en confiance.",
    role: "Fondateur",
    sector: "Agence marketing",
  },
  {
    quote: "Super équipe jeune et dynamique. Ils m'ont fait un joli travail. Je recommande.",
    role: "Directeur",
    sector: "IT cloud solution",
  },
  {
    quote: "Une expérience excellente. Ils savent comment construire des relations solides avec leurs clients, font preuve d'une grande attention et améliorent continuellement leur expertise.",
    role: "CEO",
    sector: "SaaS",
  },
  {
    quote: "J'hésitais beaucoup avant de travailler avec eux, mais quand je vois qu'on a 18 SQL la première semaine, rien à redire, je recommande.",
    role: "Co-founder",
    sector: "SaaS early stage",
  },
];

export const ResultsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="results" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="relative z-10">
        {/* Section Header */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-medium text-electric uppercase tracking-widest">
              Témoignages
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Ils ont testé. Ils ont signé.
            </h2>
          </div>
        </div>

        {/* Horizontal Scrollable Testimonials */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 px-6 lg:px-12 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg flex-shrink-0 w-[350px] md:w-[400px] snap-start hover:shadow-xl transition-all duration-500"
            >
              <Quote className="h-8 w-8 text-electric/30 mb-6" />
              <blockquote className="text-foreground/80 leading-relaxed mb-8 min-h-[120px]">
                "{item.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-electric">
                    {item.role.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.sector}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          ← Faites défiler horizontalement pour voir plus de témoignages →
        </p>

        {/* Final CTA */}
        <div className="container mx-auto px-6 lg:px-12 mt-16">
          <div className="glass-card p-8 lg:p-12 rounded-lg max-w-3xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Prêt à recevoir vos premiers contacts ?
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-electric" />
                Test complet pendant 30 jours
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-electric" />
                Vidéos, visuels, site web inclus
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-electric" />
                Contacts exclusifs et qualifiés
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-electric" />
                Aucun engagement
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-electric" />
                690€ tout compris
              </span>
            </div>

            <Button variant="electric" size="xl">
              Parler à un expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Réponse sous 24h. Premières publicités en ligne sous 7 jours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
