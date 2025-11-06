import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import MissionSection from "@/components/MissionSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ActivitiesSection />
      <MissionSection />
      <ExperiencesSection />
      <PartnersSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
