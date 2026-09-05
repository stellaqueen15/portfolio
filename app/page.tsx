import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
  return (
      <main className="relative h-screen overflow-hidden bg-[linear-gradient(180deg,#FFCC5E_0%,#ffb347_45%,#FF892F_100%)]">
        <Navbar />

        <HeroSection />
      </main>
  );
}