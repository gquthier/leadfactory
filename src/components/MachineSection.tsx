import { useEffect, useRef } from "react";

const processSteps = [
  { id: "01", label: "Data Ingestion", description: "Multi-channel data synthesis" },
  { id: "02", label: "Pattern Recognition", description: "ML-driven signal extraction" },
  { id: "03", label: "Audience Modeling", description: "Predictive persona building" },
  { id: "04", label: "Campaign Execution", description: "Automated multi-touch delivery" },
  { id: "05", label: "Optimization Loop", description: "Real-time performance tuning" },
];

export const MachineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-navy-deep overflow-hidden"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-transparent to-navy-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-transparent to-navy-deep" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-medium text-electric uppercase tracking-widest">
            The Architecture
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
            Engineered for ROI.
            <br />
            <span className="text-electric">Powered by Algorithms.</span>
          </h2>
          <p className="text-lg text-primary-foreground/60">
            A precision-engineered system that transforms your marketing spend into compounding returns.
          </p>
        </div>

        {/* Schematic Visualization */}
        <div className="relative">
          {/* Main process line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-electric/30 hidden lg:block" />

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connector dot for desktop */}
                <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-navy-deep border-2 border-electric group-hover:bg-electric transition-colors duration-300" />

                {/* Card */}
                <div className="relative p-6 border border-electric/20 rounded bg-navy-deep/80 backdrop-blur-sm group-hover:border-electric/50 transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="text-5xl font-bold text-electric/10 absolute top-4 right-4 select-none">
                    {step.id}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                      {step.label}
                    </h3>
                    <p className="text-sm text-primary-foreground/50">
                      {step.description}
                    </p>
                  </div>

                  {/* Animated corner accent */}
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-electric/30 group-hover:border-electric/60 transition-colors duration-300" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-electric/30 group-hover:border-electric/60 transition-colors duration-300" />
                </div>

                {/* Arrow for mobile/tablet */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <svg
                      className="w-6 h-6 text-electric/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 pt-12 border-t border-electric/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-electric">15ms</p>
              <p className="text-sm text-primary-foreground/50 mt-2">Decision latency</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-electric">1M+</p>
              <p className="text-sm text-primary-foreground/50 mt-2">Signals processed/sec</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-electric">99.9%</p>
              <p className="text-sm text-primary-foreground/50 mt-2">System uptime</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-electric">∞</p>
              <p className="text-sm text-primary-foreground/50 mt-2">Scalability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
