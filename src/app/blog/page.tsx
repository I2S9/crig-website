"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  color: string;
  url?: string; // URL externe (si défini, redirige vers cette URL)
  slug?: string; // Slug pour les pages internes
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Le Club Robotique de l'Institut Galilée (CRIG) à la coupe de France de robotique 2025",
    date: "le 08/06/25",
    color: "bg-sky-blue", // Bleu vif
    url: "https://galilee.univ-paris13.fr/le-club-robotique-de-linstitut-galilee-crig-a-la-coupe-de-france-de-robotique-2025/",
  },
  {
    id: 2,
    title: "Qu'est-ce que l'IGLab de l'USPN ?",
    date: "le 14/01/25",
    color: "bg-marine-blue", // Bleu foncé
    url: "https://galilee.univ-paris13.fr/iglab/",
  },
  {
    id: 3,
    title: "Coupe de France de Robotique du 8 au 11 mai 2024 !",
    date: "le 15/05/24",
    color: "bg-blue-300", // Bleu clair
    url: "https://www.sup-galilee.univ-paris13.fr/index.php/2024/05/08/coupe-de-france-de-robotique-du-8-au-11-mai-2024/",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center">
            Blog
          </h1>
          
          {/* Grille des articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => {
              const cardClassName = `${post.color} rounded-xl sm:rounded-2xl p-6 sm:p-8 relative min-h-[200px] sm:min-h-[250px] flex flex-col justify-between cursor-pointer hover:opacity-90 transition-opacity block`;
              
              // Contenu de la carte (commun pour les deux types de liens)
              const cardContent = (
                <>
                  {/* Bouton icône en haut à droite */}
                  <div 
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10"
                    onClick={(e) => {
                      // Empêcher la propagation du clic pour que le bouton fonctionne indépendamment
                      e.stopPropagation();
                    }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                    </div>
                  </div>

                  {/* Contenu en bas à gauche */}
                  <div className="mt-auto">
                    <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                      {post.title}
                    </h2>
                    <p className="text-white text-sm sm:text-base opacity-90">
                      {post.date}
                    </p>
                  </div>
                </>
              );
              
              // Si URL externe, utiliser un <a>, sinon utiliser Link de Next.js
              if (post.url) {
                return (
                  <a
                    key={post.id}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClassName}
                  >
                    {cardContent}
                  </a>
                );
              }
              
              // Page interne avec Link de Next.js
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className={cardClassName}
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

