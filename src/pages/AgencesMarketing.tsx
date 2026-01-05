import { HeroSectionAgencesMarketing } from "@/components/agences-marketing/HeroSectionAgencesMarketing";
import { ProblemSectionAgencesMarketing } from "@/components/agences-marketing/ProblemSectionAgencesMarketing";
import { SolutionSectionAgencesMarketing } from "@/components/agences-marketing/SolutionSectionAgencesMarketing";
import { ProcessSectionAgencesMarketing } from "@/components/agences-marketing/ProcessSectionAgencesMarketing";
import { OfferSectionAgencesMarketing } from "@/components/agences-marketing/OfferSectionAgencesMarketing";
import { ComparisonSectionAgencesMarketing } from "@/components/agences-marketing/ComparisonSectionAgencesMarketing";
import { FAQSectionAgencesMarketing } from "@/components/agences-marketing/FAQSectionAgencesMarketing";
import { ResultsSectionAgencesMarketing } from "@/components/agences-marketing/ResultsSectionAgencesMarketing";
import { Navbar } from "@/components/Navbar";
import { NewYearBanner } from "@/components/NewYearBanner";
import { Footer } from "@/components/Footer";
export default function AgencesMarketing() {
  return (
    <>
      <NewYearBanner />
      <Navbar />
      <main>
        <HeroSectionAgencesMarketing />
        <ProblemSectionAgencesMarketing />
        <SolutionSectionAgencesMarketing />
        <ProcessSectionAgencesMarketing />
        <OfferSectionAgencesMarketing />
        <ComparisonSectionAgencesMarketing />
        <FAQSectionAgencesMarketing />
        <ResultsSectionAgencesMarketing />
      </main>
      <Footer />
    </>
  );
}