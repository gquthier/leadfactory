import { HeroSectionServicesB2B } from "@/components/services-b2b/HeroSectionServicesB2B";
import { ProblemSectionServicesB2B } from "@/components/services-b2b/ProblemSectionServicesB2B";
import { SolutionSectionServicesB2B } from "@/components/services-b2b/SolutionSectionServicesB2B";
import { ProcessSectionServicesB2B } from "@/components/services-b2b/ProcessSectionServicesB2B";
import { OfferSectionServicesB2B } from "@/components/services-b2b/OfferSectionServicesB2B";
import { ComparisonSectionServicesB2B } from "@/components/services-b2b/ComparisonSectionServicesB2B";
import { FAQSectionServicesB2B } from "@/components/services-b2b/FAQSectionServicesB2B";
import { ResultsSectionServicesB2B } from "@/components/services-b2b/ResultsSectionServicesB2B";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
export default function ServicesB2B() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSectionServicesB2B />
        <ProblemSectionServicesB2B />
        <SolutionSectionServicesB2B />
        <ProcessSectionServicesB2B />
        <OfferSectionServicesB2B />
        <ComparisonSectionServicesB2B />
        <FAQSectionServicesB2B />
        <ResultsSectionServicesB2B />
      </main>
      <Footer />
    </>
  );
}