"use client";

import Image from "next/image";
import { useState } from "react";

type Category = "Toutes" | "Formations" | "Événements" | "Compétitions" | "Projets" | "Vie du club";

interface Experience {
  id: number;
  category: Category;
  title: string;
  description: string;
  status: "À VENIR" | "DISPONIBLE" | "PASSÉ";
  image: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    category: "Formations",
    title: "Ateliers Techniques",
    description: "Apprends à programmer des cartes Arduino, modéliser en 3D ou concevoir des circuits. Des séances animées par des élèves et professeurs passionnés.",
    status: "DISPONIBLE",
    image: "/images/projet.jpg",
  },
  {
    id: 2,
    category: "Événements",
    title: "Journées Portes Ouvertes",
    description: "Participe à nos démonstrations lors des JPO et salons des écoles pour présenter nos robots et inspirer les futurs étudiants.",
    status: "PASSÉ",
    image: "/images/fete-science.jpg",
  },
  {
    id: 3,
    category: "Compétitions",
    title: "Coupe de France de Robotique",
    description: "Rejoins une équipe pour concevoir un robot complet sur plusieurs mois et représenter notre école au niveau national.",
    status: "À VENIR",
    image: "/images/etudiant-en-plein-match.png",
  },
  {
    id: 4,
    category: "Projets",
    title: "Projets Étudiants",
    description: "Monte ton propre projet robotique : bras articulé, rover, ou robot autonome. Tu seras accompagné de membres expérimentés.",
    status: "DISPONIBLE",
    image: "/images/cdf.jpg",
  },
  {
    id: 5,
    category: "Vie du club",
    title: "Sessions Makers",
    description: "Soirées libres au local pour bricoler, tester du matériel, imprimer en 3D ou simplement échanger entre passionnés.",
    status: "DISPONIBLE",
    image: "/images/coupe-france-equipe.jpg",
  },
  {
    id: 6,
    category: "Formations",
    title: "Initiation à la Robotique",
    description: "Formation d'introduction à la programmation, l'électronique et la mécanique. Parfaite pour débuter sans prérequis.",
    status: "PASSÉ",
    image: "/images/projet.jpg",
  },
];

export default function ExperiencesSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("Toutes");

  const categories: Category[] = ["Toutes", "Formations", "Événements", "Compétitions", "Projets", "Vie du club"];

  const filteredExperiences =
    activeFilter === "Toutes"
      ? experiences
      : experiences.filter((exp) => exp.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "À VENIR":
        return "bg-sky-blue text-white";
      case "DISPONIBLE":
        return "bg-blue-600 text-white";
      case "PASSÉ":
        return "bg-marine-blue text-white";
      default:
        return "bg-gray-200 text-gray-900";
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Titre et Filtres */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            Nos expériences
          </h2>

          {/* Filtres */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`text-sm sm:text-base font-medium transition-colors pb-1 relative ${
                  activeFilter === category
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {category}
                {activeFilter === category && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredExperiences.map((experience) => (
            <div
              key={experience.id}
              className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Overlay sombre en bas */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
              
              {/* Image */}
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Tag de statut */}
              <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-semibold z-20 ${getStatusColor(experience.status)}`}>
                {experience.status}
              </div>

              {/* Contenu texte */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 min-h-[3rem] sm:min-h-[3.5rem] flex items-end">
                  {experience.title}
                </h3>
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

