import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "On dépend beaucoup des OTA (Booking, Airbnb).",
    answer:
      "Justement. On vous aide à créer un canal de réservation directe pour réduire cette dépendance. Moins de commissions = plus de marge.",
  },
  {
    question: "C'est très saisonnier chez nous.",
    answer:
      "Parfait. On peut cibler spécifiquement vos périodes creuses pour lisser votre activité. Vous choisissez quand activer les pubs.",
  },
  {
    question: "Les gens réservent sur Booking par habitude.",
    answer:
      "Oui, s'ils vous trouvent là-bas. Mais si on les touche avant avec une offre directe, ils réservent chez vous. Et vous gardez la marge.",
  },
  {
    question: "Engagement ?",
    answer: "Aucun. Testez un mois à 690€ et jugez sur pièces.",
  },
];

export const FAQSectionTourisme = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-[#FFFDF5] border-b-3 border-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="responsive-headline mb-8">
            VOS{" "}
            <span className="italic text-[#3B82F6] transform skew-x-12 inline-block">
              QUESTIONS.
            </span>
            <br />
            <span className="text-2xl lg:text-4xl">NOS RÉPONSES.</span>
          </h2>
          <div className="pill-container inline-block bg-[#FDE047]">
            <p className="text-xl font-bold">🤔 Toutes les réponses à vos questions</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="brutalist-card bg-white">
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-black text-black uppercase tracking-wider pr-4">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 bg-[#3B82F6] border-2 border-black flex items-center justify-center flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-5 w-5 text-white" />
                </div>
              </button>
              {openIndex === index && (
                <div className="mt-6 pt-6 border-t-3 border-dashed border-black">
                  <p className="text-black font-bold leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
