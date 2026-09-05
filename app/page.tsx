import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import ExperienceSection from "@/app/components/ExperienceSection";

export default function Home() {
  return (
      <main className="relative min-h-screen overflow-hidden">
          <Navbar />

          <HeroSection />

          <ExperienceSection />
      </main>
  );
}