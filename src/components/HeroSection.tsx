"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-start min-h-[calc(100vh-140px)] px-4 sm:px-6 lg:px-8 pt-1 sm:pt-2 lg:pt-3 pb-4 sm:pb-6 lg:pb-8">
      {/* Logo en arrière-plan transparent */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none opacity-[0.08] sm:opacity-[0.1] pt-8 sm:pt-12 lg:pt-16">
        <Image
          src="/logos/logo-crig.png"
          alt="CRIG Logo Background"
          width={900}
          height={900}
          className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[750px] lg:h-[750px] xl:w-[850px] xl:h-[850px] object-contain"
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full">
        {/* Badge "Plus de 50 membres" */}
        <div className="mb-2 sm:mb-3 flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 border-2 border-sky-blue rounded-full bg-white/80 backdrop-blur-sm">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-orange-400 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-white"></div>
            </div>
            <span className="text-sm sm:text-base font-medium text-gray-800 ml-2">
              Plus de 50 membres
            </span>
          </div>
        </div>

        {/* Titre principal */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-marine-blue text-center mb-4 sm:mb-5 px-4 leading-[1.1]">
          Découvrez le Club Robotique
          <br />
          de l&apos;Institut Galilée
        </h1>

        {/* Bouton "Nous rejoindre" */}
        <a
          href="/nous-rejoindre"
          className="bg-sky-blue text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg hover:bg-[#0077C7] transition-colors text-sm sm:text-base font-medium mb-4 sm:mb-5"
        >
          Nous rejoindre
        </a>

        {/* Rectangle avec vidéo */}
        <div className="w-full max-w-4xl mx-auto mb-32 sm:mb-40 lg:mb-48 xl:mb-56">
          <div className="bg-white border-4 border-marine-blue rounded-xl sm:rounded-2xl overflow-hidden aspect-video shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/video-accueil.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>

        {/* Section "Créé par les étudiants" */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-24 lg:gap-36 xl:gap-40">
            {/* Forme biscuit paquerette image 1 - fete-science */}
            <div 
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 overflow-hidden shadow-lg flex-shrink-0"
              style={{ borderRadius: '38% 62% 63% 37% / 60% 45% 55% 40%' }}
            >
              <Image
                src="/images/fete-science.jpg"
                alt="Fête de la Science"
                fill
                className="object-cover"
              />
            </div>

            {/* Texte central sur 3 lignes */}
            <div className="text-center">
              <h2 className="leading-relaxed">
                <span className="text-gray-800 block font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl whitespace-nowrap mb-1 sm:mb-2">CRÉÉ PAR</span>
                <span className="text-sky-blue font-[var(--font-cedarville-cursive)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal block mb-1 sm:mb-2">les étudiants de</span>
                <span className="text-gray-800 block font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl whitespace-nowrap">SUP GALILÉE</span>
              </h2>
            </div>

            {/* Forme organique avec lobes image 2 - cdf */}
            <div 
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 overflow-hidden shadow-lg flex-shrink-0"
              style={{ 
                borderRadius: '50% 40% 45% 55% / 45% 55% 50% 45%',
                clipPath: 'circle(45% at 30% 30%) circle(45% at 70% 30%) circle(45% at 70% 70%) circle(45% at 30% 70%)'
              }}
            >
              <Image
                src="/images/cdf.jpg"
                alt="CDF"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

