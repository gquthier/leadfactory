import { HeroSectionTourisme } from "@/components/tourisme/HeroSectionTourisme";
import { ProblemSectionTourisme } from "@/components/tourisme/ProblemSectionTourisme";
import { SolutionSectionTourisme } from "@/components/tourisme/SolutionSectionTourisme";
import { ProcessSectionTourisme } from "@/components/tourisme/ProcessSectionTourisme";
import { OfferSectionTourisme } from "@/components/tourisme/OfferSectionTourisme";
import { ComparisonSectionTourisme } from "@/components/tourisme/ComparisonSectionTourisme";
import { FAQSectionTourisme } from "@/components/tourisme/FAQSectionTourisme";
import { ResultsSectionTourisme } from "@/components/tourisme/ResultsSectionTourisme";
import { Navbar } from "@/components/Navbar";
import { NewYearBanner } from "@/components/NewYearBanner";
import { Footer } from "@/components/Footer";

export default function Tourisme() {
  return (
    <>
      <NewYearBanner />
      <Navbar />
      <main>
        <HeroSectionTourisme />
        <ProblemSectionTourisme />
        <SolutionSectionTourisme />
        <ProcessSectionTourisme />
        <OfferSectionTourisme />
        <ComparisonSectionTourisme />
        <FAQSectionTourisme />
        <ResultsSectionTourisme />
      </main>
      <Footer />
    </>
  );
}
