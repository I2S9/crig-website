"use client";

import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Upload } from "lucide-react";

export default function NousRejoindre() {
  const [step1Completed, setStep1Completed] = useState(false);
  const [step2Completed, setStep2Completed] = useState(false);
  const [step3Completed, setStep3Completed] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-12 sm:mb-16 text-center">
            Nous rejoindre
          </h1>

          {/* Étapes d'inscription */}
          <div className="space-y-8 sm:space-y-12 mb-0">
            {/* Étape 1 : Formulaire */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
                {/* Partie gauche : Numéro et texte explicatif */}
                <div className="flex-1 lg:max-w-5xl xl:max-w-6xl lg:-ml-20 xl:-ml-24">
                  <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex-shrink-0">
                      <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-sky-blue leading-none">1</span>
                    </div>
                    <div className="flex-1 pt-2 min-w-0">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 leading-tight">
                        Compléter le formulaire d&apos;inscription
                      </h2>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Remplissez le formulaire avec vos informations personnelles et votre motivation pour rejoindre le CRIG. 
                        Le formulaire se trouve dans la zone à droite.
                      </p>
                      {/* Case à cocher de validation */}
                      <div className="flex items-center gap-3 mt-4">
                        <input
                          type="checkbox"
                          id="step1"
                          checked={step1Completed}
                          onChange={(e) => setStep1Completed(e.target.checked)}
                          className="w-5 h-5 text-sky-blue border-gray-300 rounded focus:ring-sky-blue focus:ring-2"
                        />
                        <label htmlFor="step1" className="text-sm sm:text-base font-medium text-gray-900 cursor-pointer">
                          J&apos;ai complété le formulaire d&apos;inscription
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partie droite : Formulaire Google Forms (zone restreinte) */}
                <div className="w-full lg:w-[700px] xl:w-[800px] lg:flex-shrink-0 lg:sticky lg:top-8 lg:ml-auto">
                  <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdvtJ6yLtm9-TbAhrk_fwHfJGVkbzD3ZuVVwxgtTGKOV3-New/viewform?embedded=true"
                      width="100%"
                      height="550"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      className="w-full"
                      title="Formulaire d'inscription CRIG"
                    >
                      Chargement…
                    </iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 2 : Charte FormaLabs */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
                {/* Partie gauche : Numéro et texte explicatif */}
                <div className="flex-1 lg:max-w-5xl xl:max-w-6xl lg:-ml-20 xl:-ml-24">
                  <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex-shrink-0">
                      <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-sky-blue leading-none">2</span>
                    </div>
                    <div className="flex-1 pt-2 min-w-0">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 leading-tight">
                        Lire et signer la charte du FormaLabs
                      </h2>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Lisez attentivement la charte du FormaLabs dans la zone à droite. Téléchargez-la, complétez-la manuellement (signature manuscrite et &quot;lu et approuvé&quot;), cochez le droit à l&apos;image, puis scannez les pages concernées et déposez le fichier PDF ci-dessous.
                      </p>
                      
                      {/* Input file caché */}
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept=".pdf"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setUploadedFile(file);
                          }
                        }}
                        className="hidden"
                      />
                      
                      {/* Bouton de dépôt */}
                      <div className="mb-4">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-sky-blue hover:bg-sky-blue/90 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
                        >
                          <Upload className="w-5 h-5" />
                          <span>Déposer fichier</span>
                        </button>
                        
                        {/* Affichage du fichier uploadé */}
                        {uploadedFile && (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800 mt-3">
                            <p className="font-medium">Fichier déposé :</p>
                            <p className="truncate">{uploadedFile.name}</p>
                            <p className="text-xs mt-1">{(uploadedFile.size / 1024).toFixed(2)} KB</p>
                          </div>
                        )}
                      </div>
                      
                      {/* Case à cocher de validation */}
                      <div className="flex items-center gap-3 mt-4">
                        <input
                          type="checkbox"
                          id="step2"
                          checked={step2Completed}
                          onChange={(e) => setStep2Completed(e.target.checked)}
                          className="w-5 h-5 text-sky-blue border-gray-300 rounded focus:ring-sky-blue focus:ring-2"
                        />
                        <label htmlFor="step2" className="text-sm sm:text-base font-medium text-gray-900 cursor-pointer">
                          J&apos;ai lu et signé la charte du FormaLabs
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partie droite : PDF de la charte et signature */}
                <div className="w-full lg:w-[700px] xl:w-[800px] lg:flex-shrink-0 lg:sticky lg:top-8 lg:ml-auto space-y-6">
                  {/* PDF Viewer */}
                  <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
                    <iframe
                      src="/documents/charte-formalabs-2024-2025.pdf"
                      width="100%"
                      height="550"
                      frameBorder="0"
                      className="w-full"
                      title="Charte FormaLabs"
                    />
                  </div>
                  
                  {/* Lien de téléchargement */}
                  <div className="text-center">
                    <a 
                      href="/documents/charte-formalabs-2024-2025.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-sky-blue hover:underline"
                    >
                      Télécharger la charte originale
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 3 : Cotisation */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
                {/* Partie gauche : Numéro et texte explicatif */}
                <div className="flex-1 lg:max-w-5xl xl:max-w-6xl lg:-ml-20 xl:-ml-24">
                  <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex-shrink-0">
                      <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-sky-blue leading-none">3</span>
                    </div>
                    <div className="flex-1 pt-2 min-w-0">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 leading-tight">
                        Payer la cotisation annuelle
                      </h2>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Chaque membre doit payer <span className="font-bold text-sky-blue">5€</span> pour valider son inscription. 
                        Ces frais permettent d&apos;assurer certains coûts liés aux activités du CRIG.
                      </p>
                      
                      <div className="bg-white rounded-lg p-4 sm:p-6 mt-6 space-y-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                            Par virement bancaire :
                          </h3>
                          <div className="bg-gray-50 rounded-md p-3 sm:p-4 font-mono text-xs sm:text-sm text-gray-800 break-all">
                            IBAN : FR76-1027-8060-6200-0210-3200-196
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 mt-2">
                            N&apos;oubliez pas de joindre un justificatif de virement lors de l&apos;envoi de la charte signée.
                          </p>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-4">
                          <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                            En espèce :
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700">
                            Rendez-vous au <span className="font-semibold">C.R.I.G (Salle G-003 de l&apos;Institut Galilée)</span> 
                            {" "}auprès d&apos;un membre du bureau.
                          </p>
                        </div>
                      </div>
                      
                      {/* Case à cocher de validation */}
                      <div className="flex items-center gap-3 mt-6">
                        <input
                          type="checkbox"
                          id="step3"
                          checked={step3Completed}
                          onChange={(e) => setStep3Completed(e.target.checked)}
                          className="w-5 h-5 text-sky-blue border-gray-300 rounded focus:ring-sky-blue focus:ring-2"
                        />
                        <label htmlFor="step3" className="text-sm sm:text-base font-medium text-gray-900 cursor-pointer">
                          J&apos;ai payé la cotisation de 5€
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message final */}
            <div className="bg-sky-blue rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
              <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                Votre inscription sera validée après ces 3 étapes
              </h3>
              <p className="text-white text-sm sm:text-base">
                Une fois toutes les étapes complétées, vous recevrez une confirmation et pourrez participer aux activités du CRIG.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

