import { HeroSectionImmobilier } from "@/components/immobilier/HeroSectionImmobilier";
import { ProblemSectionImmobilier } from "@/components/immobilier/ProblemSectionImmobilier";
import { SolutionSectionImmobilier } from "@/components/immobilier/SolutionSectionImmobilier";
import { ProcessSectionImmobilier } from "@/components/immobilier/ProcessSectionImmobilier";
import { OfferSectionImmobilier } from "@/components/immobilier/OfferSectionImmobilier";
import { ComparisonSectionImmobilier } from "@/components/immobilier/ComparisonSectionImmobilier";
import { FAQSectionImmobilier } from "@/components/immobilier/FAQSectionImmobilier";
import { ResultsSectionImmobilier } from "@/components/immobilier/ResultsSectionImmobilier";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
export default function Immobilier() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSectionImmobilier />
        <ProblemSectionImmobilier />
        <SolutionSectionImmobilier />
        <ProcessSectionImmobilier />
        <OfferSectionImmobilier />
        <ComparisonSectionImmobilier />
        <FAQSectionImmobilier />
        <ResultsSectionImmobilier />
      </main>
      <Footer />
    </>
  );
}