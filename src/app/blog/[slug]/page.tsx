import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogArticle({ params }: PageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Contenu de l'article - à compléter */}
          <div className="prose prose-lg max-w-none">
            {/* Le contenu de l'article sera ajouté ici */}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

