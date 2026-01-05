import { HeroSectionServicesPersonne } from "@/components/services-personne/HeroSectionServicesPersonne";
import { ProblemSectionServicesPersonne } from "@/components/services-personne/ProblemSectionServicesPersonne";
import { SolutionSectionServicesPersonne } from "@/components/services-personne/SolutionSectionServicesPersonne";
import { ProcessSectionServicesPersonne } from "@/components/services-personne/ProcessSectionServicesPersonne";
import { OfferSectionServicesPersonne } from "@/components/services-personne/OfferSectionServicesPersonne";
import { ComparisonSectionServicesPersonne } from "@/components/services-personne/ComparisonSectionServicesPersonne";
import { FAQSectionServicesPersonne } from "@/components/services-personne/FAQSectionServicesPersonne";
import { ResultsSectionServicesPersonne } from "@/components/services-personne/ResultsSectionServicesPersonne";
import { Navbar } from "@/components/Navbar";
import { NewYearBanner } from "@/components/NewYearBanner";
import { Footer } from "@/components/Footer";

export default function ServicesPersonne() {
  return (
    <>
      <NewYearBanner />
      <Navbar />
      <main>
        <HeroSectionServicesPersonne />
        <ProblemSectionServicesPersonne />
        <SolutionSectionServicesPersonne />
        <ProcessSectionServicesPersonne />
        <OfferSectionServicesPersonne />
        <ComparisonSectionServicesPersonne />
        <FAQSectionServicesPersonne />
        <ResultsSectionServicesPersonne />
      </main>
      <Footer />
    </>
  );
}
