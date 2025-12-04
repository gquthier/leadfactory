import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Il y a des contraintes sur la publicité médicale.",
    answer:
      "On les connaît. On crée des campagnes informatives, conformes aux règles. Pas de promesses médicales, pas de claims interdits.",
  },
  {
    question: "Mon activité se développe surtout par recommandation.",
    answer:
      "La recommandation c'est bien, mais ça ne suffit pas toujours. On vous ajoute un canal complémentaire pour remplir les créneaux vides.",
  },
  {
    question: "Les patients prennent rendez-vous mais ne viennent pas.",
    answer:
      "C'est souvent lié à la facilité de prise de RDV. Quand les gens font une vraie démarche pour vous trouver, ils viennent.",
  },
  {
    question: "Engagement ?",
    answer: "Aucun. Testez un mois à 690€ et jugez sur pièces.",
  },
];

export const FAQSectionHealthcare = () => {
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
