import { TrendingDown, TrendingUp, Users, Target, Clock, Zap, BarChart3, Bot, Layers } from "lucide-react";

const comparisons = [
  {
    oldWay: {
      icon: Users,
      title: "Manual Prospecting",
      description: "Hours spent on cold outreach with inconsistent results and high burnout rates.",
    },
    newWay: {
      icon: Bot,
      title: "AI-Powered Pipeline",
      description: "Algorithmic lead scoring and automated qualification that runs 24/7.",
    },
  },
  {
    oldWay: {
      icon: Target,
      title: "Spray & Pray Targeting",
      description: "Broad audience segments with low conversion rates and wasted ad spend.",
    },
    newWay: {
      icon: Layers,
      title: "Precision Micro-Targeting",
      description: "ML-driven audience synthesis that identifies your highest-value prospects.",
    },
  },
  {
    oldWay: {
      icon: Clock,
      title: "Linear Growth",
      description: "Results plateau as you scale. More budget doesn't mean more returns.",
    },
    newWay: {
      icon: BarChart3,
      title: "Compounding Returns",
      description: "Infrastructure that learns and improves. Every dollar works harder over time.",
    },
  },
];

export const ValueProposition = () => {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-medium text-electric uppercase tracking-widest">
            The Paradigm Shift
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            From Tactics to Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground">
            The difference between agencies that deliver results and those that deliver excuses.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-8 lg:space-y-12">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-[1fr,auto,1fr] gap-6 lg:gap-12 items-center"
            >
              {/* Old Way */}
              <div className="glass-card p-6 lg:p-8 rounded-lg group hover:border-destructive/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded bg-destructive/10">
                    <item.oldWay.icon className="h-6 w-6 text-destructive/60" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="h-4 w-4 text-destructive/60" />
                      <span className="text-xs font-medium text-destructive/60 uppercase tracking-wider">
                        The Old Way
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.oldWay.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.oldWay.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-16 h-px bg-gradient-to-r from-destructive/30 via-muted to-electric/50" />
                <Zap className="h-5 w-5 text-electric mx-2" />
                <div className="w-16 h-px bg-gradient-to-r from-electric/50 via-muted to-transparent" />
              </div>

              {/* New Way */}
              <div className="glass-card p-6 lg:p-8 rounded-lg border-electric/20 hover:border-electric/40 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded bg-electric/10">
                    <item.newWay.icon className="h-6 w-6 text-electric" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-electric" />
                      <span className="text-xs font-medium text-electric uppercase tracking-wider">
                        LeadFactory Standard
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.newWay.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.newWay.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
