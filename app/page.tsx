import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import SkillsSection from "@/app/components/skills/SkillsSection";
import AboutSection from "@/app/components/AboutSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
      <main className="relative min-h-screen overflow-hidden">
          <Navbar />

          <HeroSection />

          <ProjectsSection />

          <ExperienceSection />

          <SkillsSection />

          <AboutSection />
      </main>
  );
}