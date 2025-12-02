import { HeroSectionFormation } from "@/components/formation/HeroSectionFormation";
import { ProblemSectionFormation } from "@/components/formation/ProblemSectionFormation";
import { SolutionSectionFormation } from "@/components/formation/SolutionSectionFormation";
import { ProcessSectionFormation } from "@/components/formation/ProcessSectionFormation";
import { OfferSectionFormation } from "@/components/formation/OfferSectionFormation";
import { ComparisonSectionFormation } from "@/components/formation/ComparisonSectionFormation";
import { FAQSectionFormation } from "@/components/formation/FAQSectionFormation";
import { ResultsSectionFormation } from "@/components/formation/ResultsSectionFormation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Formation() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSectionFormation />
        <ProblemSectionFormation />
        <SolutionSectionFormation />
        <ProcessSectionFormation />
        <OfferSectionFormation />
        <ComparisonSectionFormation />
        <FAQSectionFormation />
        <ResultsSectionFormation />
      </main>
      <Footer />
    </>
  );
}