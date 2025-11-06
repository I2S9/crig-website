"use client";

import Image from "next/image";

const logos = [
  "/logos/logo-atout-sciences.avif",
  "/logos/logo-institut-galilee.png",
  "/logos/logo-uspn.webp",
  "/logos/logo-fablab.jpg",
  "/logos/logo-sup-galilee.png",
  "/logos/logo-coupe-france-robotique.png",
];

export default function PartnersSection() {
  const isSmallLogo = (logo: string) => {
    return (
      logo.includes("uspn") ||
      logo.includes("fablab") ||
      logo.includes("sup-galilee")
    );
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-12">
          <span>Ils nous </span>
          <span className="text-sky-blue">soutiennent</span>
        </h2>

        {/* Conteneur de défilement */}
        <div className="relative">
          {/* Masque pour l'effet de fondu */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Zone de défilement */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-8 sm:gap-12 lg:gap-16">
              {/* Première série de logos */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100 ${
                    isSmallLogo(logo)
                      ? "h-12 sm:h-16 md:h-20"
                      : "h-16 sm:h-20 md:h-24"
                  }`}
                >
                  <Image
                    src={logo}
                    alt={`Logo partenaire ${index + 1}`}
                    width={200}
                    height={100}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
              {/* Duplication pour l'effet de boucle continue */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100 ${
                    isSmallLogo(logo)
                      ? "h-12 sm:h-16 md:h-20"
                      : "h-16 sm:h-20 md:h-24"
                  }`}
                >
                  <Image
                    src={logo}
                    alt={`Logo partenaire ${index + 1}`}
                    width={200}
                    height={100}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

