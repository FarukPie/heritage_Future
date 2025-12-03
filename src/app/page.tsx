import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechElements from "@/components/TechElements";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <TechElements />

      {/* Footer Placeholder */}
      <footer className="py-12 bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-6 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Heritage & Future. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </main>
  );
}
