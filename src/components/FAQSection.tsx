import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Et si ça ne marche pas ?",
    answer: "C'est pour ça qu'on propose un test à 690€ sans engagement. Vous voyez les résultats avant de vous engager sur la durée. Si ça ne vous convient pas, vous partez. Sans justification.",
  },
  {
    question: "Les contacts sont vraiment exclusifs ?",
    answer: "Oui. Chaque personne qui remplit le formulaire est envoyée uniquement à vous. On ne revend rien à personne. C'est votre client.",
  },
  {
    question: "Je dois m'y connaître en publicité ?",
    answer: "Non. Vous n'avez rien à faire. On gère la création, la diffusion, l'optimisation. Vous, vous recevez les contacts et vous les appelez.",
  },
  {
    question: "C'est quoi le piège avec ce prix ?",
    answer: "Il n'y en a pas. 690€ pour tester un mois complet. Si vous voulez continuer après, on en discute. Si vous voulez arrêter, vous arrêtez. C'est aussi simple que ça.",
  },
  {
    question: "Combien de temps avant d'avoir des résultats ?",
    answer: "Les premières publicités tournent sous 7 jours. Les premiers contacts arrivent généralement dans les 2 semaines.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-medium text-electric uppercase tracking-widest">
            Questions fréquentes
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Vos questions. Nos réponses.
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-electric">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
