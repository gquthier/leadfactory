import { HeroSectionESN } from "@/components/esn/HeroSectionESN";
import { ProblemSectionESN } from "@/components/esn/ProblemSectionESN";
import { SolutionSectionESN } from "@/components/esn/SolutionSectionESN";
import { ProcessSectionESN } from "@/components/esn/ProcessSectionESN";
import { OfferSectionESN } from "@/components/esn/OfferSectionESN";
import { ComparisonSectionESN } from "@/components/esn/ComparisonSectionESN";
import { FAQSectionESN } from "@/components/esn/FAQSectionESN";
import { ResultsSectionESN } from "@/components/esn/ResultsSectionESN";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ESN() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSectionESN />
        <ProblemSectionESN />
        <SolutionSectionESN />
        <ProcessSectionESN />
        <OfferSectionESN />
        <ComparisonSectionESN />
        <FAQSectionESN />
        <ResultsSectionESN />
      </main>
      <Footer />
    </>
  );
}