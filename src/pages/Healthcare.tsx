import { HeroSectionHealthcare } from "@/components/healthcare/HeroSectionHealthcare";
import { ProblemSectionHealthcare } from "@/components/healthcare/ProblemSectionHealthcare";
import { SolutionSectionHealthcare } from "@/components/healthcare/SolutionSectionHealthcare";
import { ProcessSectionHealthcare } from "@/components/healthcare/ProcessSectionHealthcare";
import { OfferSectionHealthcare } from "@/components/healthcare/OfferSectionHealthcare";
import { ComparisonSectionHealthcare } from "@/components/healthcare/ComparisonSectionHealthcare";
import { FAQSectionHealthcare } from "@/components/healthcare/FAQSectionHealthcare";
import { ResultsSectionHealthcare } from "@/components/healthcare/ResultsSectionHealthcare";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Healthcare() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSectionHealthcare />
        <ProblemSectionHealthcare />
        <SolutionSectionHealthcare />
        <ProcessSectionHealthcare />
        <OfferSectionHealthcare />
        <ComparisonSectionHealthcare />
        <FAQSectionHealthcare />
        <ResultsSectionHealthcare />
      </main>
      <Footer />
    </>
  );
}
