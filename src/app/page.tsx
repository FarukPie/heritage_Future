import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ProjectTeam from "@/components/ProjectTeam";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <ProjectTeam />


    </main>
  );
}
