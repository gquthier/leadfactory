import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
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
    quote: "Excellente collaboration ! Très bonne maîtrise technique, créativité, rapidité, toujours disponible et à l'écoute.",
    role: "PDG",
    sector: "Grande distribution",
  },
  {
    quote: "Une équipe efficace, à l'écoute des contraintes de mon métier. Une grande réactivité, une collaboration fluide.",
    role: "Co-fondateur",
    sector: "SaaS",
  },
  {
    quote: "Une société très professionnelle, à l'écoute de nos demandes et surtout rapide dans sa qualité de travail.",
    role: "Président",
    sector: "Informatique",
  },
  {
    quote: "J'ai été pleinement satisfait. Leur compréhension rapide et précise de ma problématique m'a immédiatement mis en confiance.",
    role: "Fondateur",
    sector: "Agence marketing",
  },
  {
    quote: "Super équipe jeune et dynamique. Ils m'ont fait un joli travail. Je recommande.",
    role: "Directeur",
    sector: "IT cloud solution",
  },
  {
    quote: "Une expérience excellente. Ils savent comment construire des relations solides avec leurs clients.",
    role: "CEO",
    sector: "SaaS",
  },
  {
    quote: "J'hésitais beaucoup avant de travailler avec eux, mais quand je vois qu'on a 18 SQL la première semaine, rien à redire.",
    role: "Co-founder",
    sector: "SaaS early stage",
  },
];

export const ResultsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="results" className="py-24 lg:py-32 bg-background relative border-b border-primary">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
          Témoignages
        </span>
        <h2 className="text-4xl lg:text-6xl font-black text-foreground mt-4 leading-tight">
          Ils ont testé.
          <br />
          <span className="text-muted-foreground">Ils ont signé.</span>
        </h2>
      </div>

      {/* Horizontal Scrollable Testimonials */}
      <div 
        ref={scrollRef}
        className="flex gap-0 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border-l border-primary p-8 flex-shrink-0 w-[350px] md:w-[400px] snap-start flex flex-col justify-between min-h-[280px]"
          >
            <blockquote className="text-foreground leading-relaxed text-sm">
              "{item.quote}"
            </blockquote>
            <div className="mt-6 pt-4 border-t border-primary/30">
              <p className="font-bold text-foreground text-sm">{item.role}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.sector}</p>
            </div>
          </div>
        ))}
        <div className="border-l border-primary flex-shrink-0 w-4" />
      </div>

      <p className="text-center text-xs text-muted-foreground mt-6 uppercase tracking-wider">
        ← Défiler horizontalement →
      </p>

      {/* Final CTA */}
      <div className="container mx-auto px-6 lg:px-12 mt-20">
        <div className="border-2 border-primary p-8 lg:p-12 max-w-3xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-black text-foreground mb-6">
            Prêt à recevoir vos premiers contacts ?
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Test 30 jours",
              "Tout inclus",
              "Contacts exclusifs",
              "Aucun engagement",
              "690€ tout compris",
            ].map((item, index) => (
              <span key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-amber" />
                {item}
              </span>
            ))}
          </div>

          <Button variant="amber" size="xl">
            Parler à un expert
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4 uppercase tracking-wider">
            Réponse sous 24h. Premières pubs en ligne sous 7 jours.
          </p>
        </div>
      </div>
    </section>
  );
};
