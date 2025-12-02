import { HeroSectionEcommerce } from "@/components/ecommerce/HeroSectionEcommerce";
import { ProblemSectionEcommerce } from "@/components/ecommerce/ProblemSectionEcommerce";
import { SolutionSectionEcommerce } from "@/components/ecommerce/SolutionSectionEcommerce";
import { ProcessSectionEcommerce } from "@/components/ecommerce/ProcessSectionEcommerce";
import { OfferSectionEcommerce } from "@/components/ecommerce/OfferSectionEcommerce";
import { ComparisonSectionEcommerce } from "@/components/ecommerce/ComparisonSectionEcommerce";
import { FAQSectionEcommerce } from "@/components/ecommerce/FAQSectionEcommerce";
import { ResultsSectionEcommerce } from "@/components/ecommerce/ResultsSectionEcommerce";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Ecommerce() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSectionEcommerce />
        <ProblemSectionEcommerce />
        <SolutionSectionEcommerce />
        <ProcessSectionEcommerce />
        <OfferSectionEcommerce />
        <ComparisonSectionEcommerce />
        <FAQSectionEcommerce />
        <ResultsSectionEcommerce />
      </main>
      <Footer />
    </>
  );
}