"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-start min-h-[calc(100vh-140px)] px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 lg:pt-6 pb-4 sm:pb-6 lg:pb-8">
      {/* Logo en arrière-plan transparent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08] sm:opacity-[0.1] translate-y-8 sm:translate-y-12">
        <Image
          src="/logos/logo-crig.png"
          alt="CRIG Logo Background"
          width={700}
          height={700}
          className="w-[350px] h-[350px] sm:w-[425px] sm:h-[425px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[675px] xl:h-[675px] object-contain"
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
        <div className="w-full max-w-4xl mx-auto">
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
      </div>
    </section>
  );
}

