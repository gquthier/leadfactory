import { HeroSectionConsultants } from "@/components/consultants/HeroSectionConsultants";
import { ProblemSectionConsultants } from "@/components/consultants/ProblemSectionConsultants";
import { SolutionSectionConsultants } from "@/components/consultants/SolutionSectionConsultants";
import { ProcessSectionConsultants } from "@/components/consultants/ProcessSectionConsultants";
import { OfferSectionConsultants } from "@/components/consultants/OfferSectionConsultants";
import { ComparisonSectionConsultants } from "@/components/consultants/ComparisonSectionConsultants";
import { FAQSectionConsultants } from "@/components/consultants/FAQSectionConsultants";
import { ResultsSectionConsultants } from "@/components/consultants/ResultsSectionConsultants";
import { Navbar } from "@/components/Navbar";
import { NewYearBanner } from "@/components/NewYearBanner";
import { Footer } from "@/components/Footer";
export default function Consultants() {
  return (
    <>
      <NewYearBanner />
      <Navbar />
      <main>
        <HeroSectionConsultants />
        <ProblemSectionConsultants />
        <SolutionSectionConsultants />
        <ProcessSectionConsultants />
        <OfferSectionConsultants />
        <ComparisonSectionConsultants />
        <FAQSectionConsultants />
        <ResultsSectionConsultants />
      </main>
      <Footer />
    </>
  );
}