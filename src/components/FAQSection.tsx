import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    answer: "Il n'y en a pas. 690€ pour tester un mois complet. Si vous voulez continuer après, on en discute. Si vous voulez arrêter, vous arrêtez.",
  },
  {
    question: "Combien de temps avant d'avoir des résultats ?",
    answer: "Les premières publicités tournent sous 7 jours. Les premiers contacts arrivent généralement dans les 2 semaines.",
  },
];

export const FAQSection = () => {
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
            <p className="text-xl font-bold">
              🤔 Toutes les réponses à vos questions
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="brutalist-card bg-white"
            >
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-black text-black uppercase tracking-wider pr-4">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 bg-[#3B82F6] border-2 border-black flex items-center justify-center flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                  <ChevronDown className="h-5 w-5 text-white" />
                </div>
              </button>
              {openIndex === index && (
                <div className="mt-6 pt-6 border-t-3 border-dashed border-black">
                  <p className="text-black font-bold leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
