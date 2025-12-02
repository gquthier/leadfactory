import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Check } from "lucide-react";

const testimonials = [
  {
    quote: "Une équipe efficace, à l'écoute des contraintes de mon métier. Une grande réactivité, une collaboration fluide. J'ai eu le sentiment d'être écouté, compris et surtout de voir des campagnes différentes et efficaces !",
    role: "Co-fondateur",
    sector: "SaaS B2B",
  },
  {
    quote: "J'hésitais beaucoup avant de travailler avec eux, mais quand je vois qu'on a 18 SQL la première semaine, rien à redire, je recommande.",
    role: "Co-founder",
    sector: "SaaS B2B early stage",
  },
  {
    quote: "Une expérience excellente. Ils savent comment construire des relations solides avec leurs clients, font preuve d'une grande attention et améliorent continuellement leur expertise.",
    role: "CEO",
    sector: "SaaS B2B",
  },
];

export const ResultsSection = () => {
  return (
    <section id="results" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-medium text-electric uppercase tracking-widest">
            Témoignages
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Ils ont testé. Ils ont signé.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg group hover:shadow-xl transition-all duration-500"
            >
              <Quote className="h-8 w-8 text-electric/30 mb-6" />
              <blockquote className="text-foreground/80 leading-relaxed mb-8">
                "{item.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-lg font-semibold text-muted-foreground">
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

        {/* Final CTA */}
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
    </section>
  );
};
