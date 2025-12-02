import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ValueProposition } from "@/components/ValueProposition";
import { MachineSection } from "@/components/MachineSection";
import { ResultsSection } from "@/components/ResultsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ValueProposition />
        <MachineSection />
        <ResultsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
