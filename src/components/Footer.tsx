"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle, Mail, MapPin, Users, Calendar, Clock, BookOpen, FileText, HelpCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white pt-6 sm:pt-8 pb-2 sm:pb-3">
      <div className="px-2 sm:px-3">
        {/* Rectangle bleu marine avec bords arrondis */}
        <div className="bg-marine-blue rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          {/* Contenu principal du footer */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8">
            {/* Colonne 1 : Logo et À propos */}
            <div className="flex-shrink-0">
              <Image
                src="/logos/logo-crig.png"
                alt="CRIG Logo"
                width={100}
                height={100}
                className="w-16 h-16 sm:w-20 sm:h-20 mb-4 object-contain"
              />
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Club Robotique de l&apos;Institut Galilée
                <br />
                <br />
                IGLab Institut Galilée
                <br />
                99 Av. Jean Baptiste Clément, 93430 Villetaneuse
              </p>
            </div>

            {/* Colonnes groupées à droite */}
            <div className="flex flex-wrap gap-6 lg:gap-8 lg:flex-nowrap ml-auto">
              {/* Colonne 2 : Le Club */}
              <div>
                <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
                  Le Club
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/a-propos"
                      className="text-white/80 hover:text-sky-blue text-xs sm:text-sm transition-colors duration-200"
                    >
                      À propos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nous-rejoindre"
                      className="text-white/80 hover:text-sky-blue text-xs sm:text-sm transition-colors duration-200"
                    >
                      Nous rejoindre
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-white/80 hover:text-sky-blue text-xs sm:text-sm transition-colors duration-200"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/evenements"
                      className="text-white/80 hover:text-sky-blue text-xs sm:text-sm transition-colors duration-200"
                    >
                      Évènements
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Colonne 3 : Activités */}
              <div>
                <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
                  Activités
                </h3>
                <ul className="space-y-2">
                  <li>
                    <span className="text-white/80 text-xs sm:text-sm">Formations</span>
                  </li>
                  <li>
                    <span className="text-white/80 text-xs sm:text-sm">Compétitions</span>
                  </li>
                  <li>
                    <span className="text-white/80 text-xs sm:text-sm">Projets étudiants</span>
                  </li>
                  <li>
                    <span className="text-white/80 text-xs sm:text-sm">Ateliers makers</span>
                  </li>
                </ul>
              </div>

              {/* Colonne 4 : Ressources */}
              <div>
                <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
                  Ressources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <span className="text-white/80 text-xs sm:text-sm">
                      Documentation
                    </span>
                  </li>
                  <li>
                    <span className="text-white/80 text-xs sm:text-sm">
                      Tutoriels
                    </span>
                  </li>
                  <li>
                    <span className="text-white/80 text-xs sm:text-sm">
                      Galerie
                    </span>
                  </li>
                  <li>
                    <span className="text-white/80 text-xs sm:text-sm">
                      FAQ
                    </span>
                  </li>
                </ul>
              </div>

              {/* Colonne 5 : Contact */}
              <div>
                <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:crig.up13@gmail.com"
                      className="flex items-center gap-2 text-white/80 hover:text-sky-blue text-xs sm:text-sm transition-colors duration-200 group"
                    >
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="break-all">crig.up13@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/le.crig"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-sky-blue text-xs sm:text-sm transition-colors duration-200 group"
                    >
                      <Instagram className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span>@le.crig</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://chat.whatsapp.com/FebffGigTjaD7AWqNx3oOi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-sky-blue text-xs sm:text-sm transition-colors duration-200 group"
                    >
                      <MessageCircle className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span>Groupe WhatsApp</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6">
            <div className="text-center">
              <p className="text-white/60 text-sm">
                © {currentYear} CRIG - Club Robotique de l&apos;Institut Galilée. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


