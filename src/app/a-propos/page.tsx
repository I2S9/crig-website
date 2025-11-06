import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function APropos() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center">
            À propos
          </h1>
          
          {/* Contenu principal : texte à gauche, image à droite */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Texte à gauche */}
            <div className="flex-1 lg:max-w-2xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Créé en 2001 par un groupe d&apos;étudiants de l&apos;Institut Galilée, le CRIG est <span className="font-bold text-sky-blue">une association regroupant des étudiants passionnés</span>. Depuis plus de vingt ans, nous rassemblons les étudiants autour de projets innovants et de formations techniques.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Le CRIG propose des formations en programmation, électronique et mécanique, et permet <span className="font-bold text-sky-blue">la réalisation de vos projets personnels</span>. Nous mettons à disposition l&apos;ensemble du matériel nécessaire : cartes Arduino, imprimantes 3D, outils de prototypage.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Que tu sois débutant ou expérimenté, le CRIG t&apos;offre <span className="font-bold text-sky-blue">un espace de création et d&apos;apprentissage pour développer tes compétences et concrétiser tes idées</span>.
                </p>
              </div>
            </div>

            {/* Image à droite dans un rectangle */}
            <div className="w-full lg:w-1/2 lg:flex-shrink-0">
              <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/image-du-local.jpeg"
                  alt="Local du CRIG"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Titre équipe */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center mt-16 sm:mt-20 lg:mt-24">
            Découvrir l&apos;équipe de l&apos;année 2025-2026
          </h2>

          {/* Grille des membres */}
          <div className="max-w-5xl mx-auto">
            {/* Première ligne : 4 membres */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
              {/* Président */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-marine-blue overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src="/images/president.png"
                    alt="Zineddine Chebbah"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base font-bold text-gray-900 text-center mb-1">
                  Président
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-900 text-center">
                  Zineddine <span className="uppercase">CHEBBAH</span>
                </p>
              </div>

              {/* Vice président */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-marine-blue overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src="/images/vice-president.png"
                    alt="Jordan Toe"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base font-bold text-gray-900 text-center mb-1">
                  Vice président
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-900 text-center">
                  Jordan <span className="uppercase">TOE</span>
                </p>
              </div>

              {/* Trésorière */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-marine-blue overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src="/images/secretaire.png"
                    alt="Mélissa CHERIFI"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base font-bold text-gray-900 text-center mb-1">
                  Trésorière
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-900 text-center">
                  Mélissa <span className="uppercase">CHERIFI</span>
                </p>
              </div>

              {/* Secrétaire */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-marine-blue overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src="/images/tresoriere.png"
                    alt="Yasmina Kader"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base font-bold text-gray-900 text-center mb-1">
                  Secrétaire
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-900 text-center">
                  Yasmina <span className="uppercase">KADER</span>
                </p>
              </div>
            </div>

            {/* Deuxième ligne : 2 membres (côte à côte) */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
              {/* Responsable communication */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-marine-blue overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src="/images/com-1.png"
                    alt="Inès Gbadamassi"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base font-bold text-gray-900 text-center mb-1">
                  Responsable communication
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-900 text-center">
                  Inès <span className="uppercase">GBADAMASSI</span>
                </p>
              </div>

              {/* Responsable communication adjoint */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-marine-blue overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src="/images/com-2.png"
                    alt="Antonio Paul-Prage"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base font-bold text-gray-900 text-center mb-1">
                  Responsable communication adjoint
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-900 text-center">
                  Antonio <span className="uppercase">PAUL-PRAGE</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

