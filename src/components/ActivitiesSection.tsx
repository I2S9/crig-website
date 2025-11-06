"use client";

import Image from "next/image";

export default function ActivitiesSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-12">
          Nos activités
        </h2>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:items-start">
          {/* Carte 1: Formations Techniques */}
          <div className="group relative h-64 sm:h-72 md:h-80 rounded-3xl overflow-hidden cursor-pointer flex flex-col">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10"></div>
            <Image
              src="/images/projet.jpg"
              alt="Formations Techniques"
              fill
              className="object-cover group-hover:brightness-100 brightness-75 transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3 min-h-[3rem] sm:min-h-[3.5rem] flex items-end">
                Formations techniques
              </h3>
              <p className="text-white text-xs sm:text-sm leading-relaxed mb-1.5">
                Participe à nos ateliers encadrés par des étudiants et des enseignants pour te former sur Arduino, l&apos;impression 3D, la modélisation ou l&apos;électronique.
              </p>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                Deviens autonome sur tes projets et découvre les bases de la robotique appliquée.
              </p>
            </div>
          </div>

          {/* Carte 2: Événements et Démonstrations */}
          <div className="group relative h-64 sm:h-72 md:h-80 rounded-3xl overflow-hidden cursor-pointer flex flex-col">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10"></div>
            <Image
              src="/images/fete-science.jpg"
              alt="Événements et Démonstrations"
              fill
              className="object-cover group-hover:brightness-100 brightness-75 transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3 min-h-[3rem] sm:min-h-[3.5rem] flex items-end">
                Événements et démonstrations
              </h3>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                Nous participons à des salons, journées portes ouvertes et événements inter-écoles pour faire découvrir nos créations et inspirer de futurs membres. C&apos;est l&apos;occasion parfaite pour valoriser tes projets de robotique.
              </p>
            </div>
          </div>

          {/* Carte 3: Compétitions et Challenges */}
          <div className="group relative h-64 sm:h-72 md:h-80 rounded-3xl overflow-hidden cursor-pointer flex flex-col">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10"></div>
            <Image
              src="/images/etudiant-en-plein-match.png"
              alt="Compétitions et Challenges"
              fill
              className="object-cover group-hover:brightness-100 brightness-75 transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3 min-h-[3rem] sm:min-h-[3.5rem] flex items-end">
                Compétitions et challenges
              </h3>
              <p className="text-white text-xs sm:text-sm leading-relaxed mb-1.5">
                Rejoins une équipe pour développer un robot de A à Z et participer à des tournois étudiants ou à la Coupe de France de Robotique.
              </p>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                Un projet technique et collectif qui allie innovation, esprit d&apos;équipe et dépassement de soi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

