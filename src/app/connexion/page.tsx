"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Connexion() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
            Inès est en train de cook
            <br />
            <span className="text-sky-blue">(ça arrive bientôt)</span>
          </h1>
        </div>
      </section>
      <Footer />
    </main>
  );
}

