import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import TrainingDifferenceSection from "@/components/TrainingDifference";
import WorkshopSection from "@/components/WorkshopSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <WorkshopSection />
      <TrainingDifferenceSection />
      <FAQSection/>
      <Footer />
    </main>
  );
}