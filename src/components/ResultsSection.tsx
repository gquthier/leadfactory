import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "LeadFactory transformed our entire revenue operation. We went from spending $500K/mo on leads to generating them internally at a fraction of the cost.",
    author: "Sarah Chen",
    role: "VP of Growth",
    company: "TechScale Inc.",
    metric: "340%",
    metricLabel: "ROI increase",
  },
  {
    quote: "The precision of their targeting is unlike anything we've experienced. Every lead that comes through is qualified and ready to buy.",
    author: "Marcus Rivera",
    role: "Chief Revenue Officer",
    company: "Enterprise Solutions",
    metric: "$4.2M",
    metricLabel: "Pipeline generated",
  },
  {
    quote: "We finally have a predictable revenue engine. No more seasonal fluctuations, no more guesswork.",
    author: "Jennifer Walsh",
    role: "CEO",
    company: "Growth Dynamics",
    metric: "12x",
    metricLabel: "Lead quality",
  },
];

export const ResultsSection = () => {
  return (
    <section id="results" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-medium text-electric uppercase tracking-widest">
            Client Results
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Revenue Infrastructure in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Real outcomes from real businesses that made the shift.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg group hover:shadow-xl transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-electric/30 mb-6" />

              {/* Quote text */}
              <blockquote className="text-foreground/80 leading-relaxed mb-8">
                "{item.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pb-6 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-lg font-semibold text-muted-foreground">
                    {item.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>

              {/* Metric */}
              <div className="pt-6">
                <p className="text-3xl font-bold text-electric">{item.metric}</p>
                <p className="text-sm text-muted-foreground">{item.metricLabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="glass-card inline-block p-8 lg:p-12 rounded-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to build your revenue infrastructure?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Get a complimentary audit of your current lead generation setup and see where the opportunities lie.
            </p>
            <Button variant="electric" size="xl">
              Schedule Your Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
