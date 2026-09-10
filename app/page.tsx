import Navbar from "@/app/components/layout/Navbar";
import HeroSection from "@/app/components/sections/HeroSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import AboutSection from "@/app/components/sections/AboutSection";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
  return (
      <main className="relative min-h-screen overflow-hidden">
          <Navbar />

          <HeroSection />

          <ProjectsSection />

          <ExperienceSection />

          <SkillsSection />

          <AboutSection />

          <Footer />
      </main>
  );
}