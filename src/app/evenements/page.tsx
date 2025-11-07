"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type DateFilter = "Tous" | "À venir" | "Passés";
type EventTypeFilter = "Tous" | "Compétition" | "Journée porte ouverte" | "Salon";

interface Event {
  id: number;
  category: "Formations" | "Événements" | "Compétitions" | "Projets";
  title: string;
  description: string;
  status: "À VENIR" | "DISPONIBLE" | "PASSÉ";
  image: string;
}

// Tous les événements de la page d'accueil (6 événements)
const allEvents: Event[] = [
  {
    id: 1,
    category: "Formations",
    title: "Ateliers Techniques",
    description: "Apprends à programmer, modéliser en 3D ou concevoir des circuits. Séances animées par des élèves et professeurs passionnés.",
    status: "DISPONIBLE",
    image: "/images/projet.jpg",
  },
  {
    id: 2,
    category: "Événements",
    title: "Fête de la science",
    description: "Présentation de nos projets robotiques avec démonstrations. Vulgarisation scientifique pour partager notre passion.",
    status: "PASSÉ",
    image: "/images/fete-science.jpg",
  },
  {
    id: 3,
    category: "Compétitions",
    title: "Coupe de France 2026",
    description: "Rejoins une équipe pour concevoir un robot complet sur plusieurs mois et représenter notre école au niveau national en 2026.",
    status: "À VENIR",
    image: "/images/image-cdf.jpg",
  },
  {
    id: 4,
    category: "Projets",
    title: "Projets Étudiants",
    description: "Monte ton propre projet robotique : bras articulé, rover, ou robot autonome. Tu seras accompagné de membres expérimentés.",
    status: "DISPONIBLE",
    image: "/images/projet-bras-robotise.png",
  },
  {
    id: 5,
    category: "Compétitions",
    title: "Coupe de France 2025",
    description: "Participation à la Coupe de France 2025. Notre équipe a développé un robot pour représenter l'école au niveau national.",
    status: "PASSÉ",
    image: "/images/coupe-france-equipe.jpg",
  },
  {
    id: 6,
    category: "Formations",
    title: "Formation à Arduino",
    description: "Découvre le fonctionnement des cartes Arduino et apprends à les programmer. Maîtrise les bases de l'électronique.",
    status: "À VENIR",
    image: "/images/arduino.jpg",
  },
];

export default function Evenements() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<DateFilter>("Tous");
  const [eventTypeFilter, setEventTypeFilter] = useState<EventTypeFilter>("Tous");

  const dateFilters: DateFilter[] = ["Tous", "À venir", "Passés"];
  const eventTypeFilters: EventTypeFilter[] = ["Tous", "Compétition", "Journée porte ouverte", "Salon"];

  // Filtrer les événements selon les critères
  const filteredEvents = useMemo(() => {
    let filtered = allEvents;

    // Filtre par recherche textuelle
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query)
      );
    }

    // Filtre par type d'événement
    if (eventTypeFilter !== "Tous") {
      if (eventTypeFilter === "Compétition") {
        filtered = filtered.filter((event) => event.category === "Compétitions");
      } else if (eventTypeFilter === "Journée porte ouverte" || eventTypeFilter === "Salon") {
        // Pour "Journée porte ouverte" et "Salon", on filtre par catégorie "Événements"
        filtered = filtered.filter((event) => event.category === "Événements");
      }
    }

    // Filtre par date
    if (dateFilter !== "Tous") {
      if (dateFilter === "À venir") {
        filtered = filtered.filter((event) => event.status === "À VENIR");
      } else if (dateFilter === "Passés") {
        filtered = filtered.filter((event) => event.status === "PASSÉ");
      }
    }

    return filtered;
  }, [searchQuery, dateFilter, eventTypeFilter]);

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
    <main className="min-h-screen bg-white">
      <Header />
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center">
            Évènements
          </h1>

          {/* Barre de recherche */}
          <div className="mb-4 sm:mb-6">
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <Search className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un évènement, une compétition..."
                className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-300 rounded-full focus:outline-none focus:border-sky-blue transition-colors"
              />
            </div>
          </div>

          {/* Filtres */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {/* Filtres par type d'événement */}
              {eventTypeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setEventTypeFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors ${
                    eventTypeFilter === filter
                      ? "bg-sky-blue text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
              
              {/* Filtres par date (sans "Tous") */}
              {dateFilters.filter((filter) => filter !== "Tous").map((filter) => (
                <button
                  key={filter}
                  onClick={() => setDateFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors ${
                    dateFilter === filter
                      ? "bg-sky-blue text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Grille d'événements */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Overlay sombre en bas */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                  
                  {/* Image */}
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Tag de statut */}
                  <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-semibold z-20 ${getStatusColor(event.status)}`}>
                    {event.status}
                  </div>

                  {/* Contenu texte */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col">
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 min-h-[3rem] sm:min-h-[3.5rem] flex items-end">
                      {event.title}
                    </h3>
                    <p className="text-white text-sm sm:text-base leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun événement ne correspond à vos critères de recherche.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

