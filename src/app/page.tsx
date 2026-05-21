import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <PortfolioSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
