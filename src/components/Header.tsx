"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logos/logo-crig.png"
            alt="CRIG Logo"
            width={80}
            height={80}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            priority
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
          <Link
            href="/a-propos"
            className="text-gray-800 hover:text-marine-blue transition-colors text-sm lg:text-base"
          >
            A propos
          </Link>
          <Link
            href="/nous-rejoindre"
            className="text-gray-800 hover:text-marine-blue transition-colors text-sm lg:text-base"
          >
            Nous rejoindre
          </Link>
          <Link
            href="/blog"
            className="text-gray-800 hover:text-marine-blue transition-colors text-sm lg:text-base"
          >
            Blog
          </Link>
          <Link
            href="/evenements"
            className="text-gray-800 hover:text-marine-blue transition-colors text-sm lg:text-base"
          >
            Évènements
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-marine-blue transition-colors text-sm lg:text-base"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Connexion Button */}
        <Link
          href="/connexion"
          className="hidden md:block bg-sky-blue text-white px-4 py-2 rounded-lg hover:bg-[#0077C7] transition-colors text-sm sm:text-base whitespace-nowrap flex-shrink-0"
        >
          Connexion
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href="/a-propos"
              className="text-gray-800 hover:text-marine-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              A propos
            </Link>
            <Link
              href="/nous-rejoindre"
              className="text-gray-800 hover:text-marine-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nous rejoindre
            </Link>
            <Link
              href="/blog"
              className="text-gray-800 hover:text-marine-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/evenements"
              className="text-gray-800 hover:text-marine-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Évènements
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-marine-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/connexion"
              className="bg-sky-blue text-white px-4 py-2 rounded-lg hover:bg-[#0077C7] transition-colors text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Connexion
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
