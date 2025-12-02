import { Button } from "@/components/ui/button";
import { RevenueEngineVisualization } from "./RevenueEngineVisualization";
import { ArrowRight, Check } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Text Content */}
          <div className="stagger-children pt-8 lg:pt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              On vous trouve des leads qualifiés en automatique.
              <br />
              <span className="text-muted-foreground">Vous, vous signez.</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
              Des clients qualifiés qui vous appartiennent. Sans engagement. 
              Gestion complète. À partir de 690€.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button variant="electric" size="xl">
                Parler à un expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Voir les résultats clients
              </Button>
            </div>

            {/* Reassurance */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-electric" />
                Sans engagement
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-electric" />
                Résultats sous 30 jours
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-electric" />
                Vos contacts vous appartiennent
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border">
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">2500+</p>
                <p className="text-sm text-muted-foreground mt-1">Réunions planifiées</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">5.0M€</p>
                <p className="text-sm text-muted-foreground mt-1">Ajoutés au pipeline</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">+100</p>
                <p className="text-sm text-muted-foreground mt-1">Clients accompagnés</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">4.8</p>
                <p className="text-sm text-muted-foreground mt-1">Note sur Google</p>
              </div>
            </div>
          </div>

          {/* Right: 3D Visualization */}
          <div className="relative h-[400px] lg:h-[600px]">
            <RevenueEngineVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};
