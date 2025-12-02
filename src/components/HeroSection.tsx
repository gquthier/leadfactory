import { Button } from "@/components/ui/button";
import { RevenueEngineVisualization } from "./RevenueEngineVisualization";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Text Content */}
          <div className="stagger-children pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <span className="w-2 h-2 bg-electric rounded-full animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Revenue Infrastructure
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Stop Buying Leads.
              <br />
              <span className="text-muted-foreground">Build Revenue Assets.</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
              We combine media buying precision with AI automation to generate 
              predictable annuities for your business. The new standard in digital capital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="electric" size="xl">
                Start Your Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                View Case Studies
              </Button>
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
