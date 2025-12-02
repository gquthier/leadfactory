import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import heroOfficeBw from "@/assets/hero-office-bw.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroOfficeBw} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 dark-grid" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-8">
            On vous trouve des leads qualifiés en automatique.
            <br />
            <span className="text-muted-foreground">Vous, vous signez.</span>
          </h1>

          <p className="text-xl lg:text-2xl text-primary-foreground/70 leading-relaxed max-w-2xl mb-10 font-light">
            Des clients qualifiés qui vous appartiennent. Sans engagement. 
            Gestion complète. À partir de 690€.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button variant="amber" size="xl">
              Parler à un expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Voir les résultats
            </Button>
          </div>

          {/* Reassurance */}
          <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-amber" />
              Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-amber" />
              Résultats sous 30 jours
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-amber" />
              Vos contacts vous appartiennent
            </span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 border-t border-primary-foreground/20 pt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="pr-8 lg:border-r border-primary-foreground/20">
              <p className="text-5xl lg:text-6xl font-black text-primary-foreground">2500+</p>
              <p className="text-sm text-primary-foreground/50 mt-2 uppercase tracking-wider">Réunions planifiées</p>
            </div>
            <div className="px-8 lg:border-r border-primary-foreground/20">
              <p className="text-5xl lg:text-6xl font-black text-primary-foreground">5.0M€</p>
              <p className="text-sm text-primary-foreground/50 mt-2 uppercase tracking-wider">Pipeline généré</p>
            </div>
            <div className="px-8 lg:border-r border-primary-foreground/20 mt-8 lg:mt-0">
              <p className="text-5xl lg:text-6xl font-black text-primary-foreground">+100</p>
              <p className="text-sm text-primary-foreground/50 mt-2 uppercase tracking-wider">Clients accompagnés</p>
            </div>
            <div className="pl-8 mt-8 lg:mt-0">
              <p className="text-5xl lg:text-6xl font-black text-amber">4.8</p>
              <p className="text-sm text-primary-foreground/50 mt-2 uppercase tracking-wider">Note sur Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
