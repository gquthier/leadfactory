import { HeroSectionSaaS } from "@/components/saas/HeroSectionSaaS";
import { ProblemSectionSaaS } from "@/components/saas/ProblemSectionSaaS";
import { SolutionSectionSaaS } from "@/components/saas/SolutionSectionSaaS";
import { ProcessSectionSaaS } from "@/components/saas/ProcessSectionSaaS";
import { OfferSectionSaaS } from "@/components/saas/OfferSectionSaaS";
import { ComparisonSectionSaaS } from "@/components/saas/ComparisonSectionSaaS";
import { FAQSectionSaaS } from "@/components/saas/FAQSectionSaaS";
import { ResultsSectionSaaS } from "@/components/saas/ResultsSectionSaaS";
import { Navbar } from "@/components/Navbar";
import { NewYearBanner } from "@/components/NewYearBanner";
import { Footer } from "@/components/Footer";
export default function SaaS() {
  return (
    <>
      <NewYearBanner />
      <Navbar />
      <main>
        <HeroSectionSaaS />
        <ProblemSectionSaaS />
        <SolutionSectionSaaS />
        <ProcessSectionSaaS />
        <OfferSectionSaaS />
        <ComparisonSectionSaaS />
        <FAQSectionSaaS />
        <ResultsSectionSaaS />
      </main>
      <Footer />
    </>
  );
}