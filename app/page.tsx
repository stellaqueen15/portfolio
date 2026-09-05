import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import ProjectsSection from "@/app/components/ProjectsSection";

export default function Home() {
  return (
      <main className="relative min-h-screen overflow-hidden">
          <Navbar />

          <HeroSection />

          <ProjectsSection />

          <ExperienceSection />
      </main>
  );
}