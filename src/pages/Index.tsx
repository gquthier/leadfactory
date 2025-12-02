import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { OfferSection } from "@/components/OfferSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FAQSection } from "@/components/FAQSection";
import { ResultsSection } from "@/components/ResultsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <OfferSection />
        <ProcessSection />
        <ComparisonSection />
        <FAQSection />
        <ResultsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
