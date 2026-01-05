import { Navbar } from "@/components/Navbar";
import { NewYearBanner } from "@/components/NewYearBanner";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { OfferSection } from "@/components/OfferSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { FAQSection } from "@/components/FAQSection";
import { ResultsSection } from "@/components/ResultsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewYearBanner />
      <Navbar />
      <main>
        <HeroSection />

        <ProblemSection />
        <SolutionSection />
        <OfferSection />
        <ProcessSection />
        <ComparisonSection />
        <ExpertiseSection />
        <FAQSection />
        <ResultsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
