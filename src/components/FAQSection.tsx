"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Faut-il déjà avoir de l'expérience en robotique pour nous rejoindre ?",
    answer:
      "Pas du tout ! Que tu sois débutant, curieux ou déjà passionné, tu es le bienvenu. Le club propose régulièrement des formations encadrées par des étudiants ingénieurs et des professeurs pour t'apprendre la programmation, l'électronique ou la mécanique. Tu progresseras à ton rythme, en équipe, sur des projets concrets.",
  },
  {
    question: "Quels types de projets réalise le club ?",
    answer:
      "Nous travaillons sur des robots autonomes, bras articulés, véhicules motorisés, systèmes connectés, ou encore des prototypes originaux pour des compétitions. Certains projets sont libres (selon les idées des membres), d'autres suivent un thème imposé par des concours comme la Coupe de France de Robotique.",
  },
  {
    question: "Comment se déroulent les formations ?",
    answer:
      "Les formations sont organisées tout au long de l'année : Arduino, impression 3D, modélisation, programmation, électronique, etc. Elles sont animées par des membres expérimentés et parfois par des enseignants. Le but : te rendre autonome pour concevoir et réaliser tes propres projets.",
  },
  {
    question: "Participe-t-on à des compétitions ?",
    answer:
      "Oui ! Chaque année, plusieurs équipes représentent le club lors de tournois régionaux ou nationaux, comme la Coupe de France de Robotique. C'est une aventure technique et humaine incroyable, où tu apprends à travailler en équipe sur un projet ambitieux, de l'idée au robot final.",
  },
  {
    question: "Comment rejoindre le club ?",
    answer:
      "Rien de plus simple ! Tu peux t'inscrire en ligne via notre formulaire d'adhésion. Pour finaliser ton inscription, il te faudra te connecter, remplir un formulaire, signer deux documents PDF et effectuer un virement de 5€ pour la cotisation. L'inscription te donne accès aux formations, au local, au matériel et à tous les projets du club.",
  },
  {
    question: "Quel matériel est disponible au club ?",
    answer:
      "Nous disposons d'un local équipé avec imprimantes 3D, cartes Arduino, outils de prototypage, composants électroniques, et postes de travail pour la conception. Tu peux les utiliser pour les projets du club ou pour développer tes propres idées, dans la limite du matériel disponible.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center">
          <span className="text-sky-blue">FAQ</span>
        </h2>

        {/* Liste des FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-sky-blue"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-sky-blue transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Réponse */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 py-4 sm:py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

