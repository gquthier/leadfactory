import { HeroSectionTravaux } from "@/components/travaux/HeroSectionTravaux";
import { ProblemSectionTravaux } from "@/components/travaux/ProblemSectionTravaux";
import { SolutionSectionTravaux } from "@/components/travaux/SolutionSectionTravaux";
import { ProcessSectionTravaux } from "@/components/travaux/ProcessSectionTravaux";
import { OfferSectionTravaux } from "@/components/travaux/OfferSectionTravaux";
import { ComparisonSectionTravaux } from "@/components/travaux/ComparisonSectionTravaux";
import { FAQSectionTravaux } from "@/components/travaux/FAQSectionTravaux";
import { ResultsSectionTravaux } from "@/components/travaux/ResultsSectionTravaux";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Travaux() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSectionTravaux />
        <ProblemSectionTravaux />
        <SolutionSectionTravaux />
        <ProcessSectionTravaux />
        <OfferSectionTravaux />
        <ComparisonSectionTravaux />
        <FAQSectionTravaux />
        <ResultsSectionTravaux />
      </main>
      <Footer />
    </>
  );
}
