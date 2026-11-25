import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolarHero from "@/components/solar/SolarHero";
import SolarSolutionsCategory from "@/components/solar/SolarSolutionsCategory";
import WhyGoSolar from "@/components/solar/WhyGoSolar";
import ResidentialCommercialSolar from "@/components/solar/ResidentialCommercialSolar";
import SolarInstallationProcess from "@/components/solar/SolarInstallationProcess";
import SolarProductsShowcase from "@/components/solar/SolarProductsShowcase";
import WhyChoosePrigoSolar from "@/components/solar/WhyChoosePrigoSolar";
import SolarFaq from "@/components/solar/SolarFaq";
import SolarCtaBanner from "@/components/solar/SolarCtaBanner";

export const metadata: Metadata = {
  title: "Solar Energy Solutions | Prigo Energy - Harness the Sun",
  description:
    "Make the switch to smarter energy with Prigo's reliable rooftop solar solutions, high-efficiency solar panels, hybrid inverters, and battery storage. Professional installation and ongoing care across India.",
  keywords: [
    "Solar panels",
    "Rooftop solar India",
    "Solar inverters",
    "Solar battery storage",
    "Prigo Energy Solar",
    "Commercial solar",
    "Solar installation",
  ],
};

export default function SolarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172B3B] antialiased">
      {/* Reused Global Navigation Header */}
      <Header />

      {/* Main Solar Page Flow */}
      <main className="flex-grow">
        {/* 1. Solar Hero Section */}
        <SolarHero />

        {/* 2. Solar Solutions Category Grid */}
        <SolarSolutionsCategory />

        {/* 3. Solar Hardware Essentials Showcase (Products right below Solutions) */}
        <SolarProductsShowcase />

        {/* 4. Why Switch to Solar */}
        <WhyGoSolar />

        {/* 5. Residential & Commercial Editorial Blocks */}
        <ResidentialCommercialSolar />

        {/* 6. 4-Step Solar Installation Process */}
        <SolarInstallationProcess />

        {/* 7. Why Choose Prigo For Solar */}
        <WhyChoosePrigoSolar />

        {/* 8. Solar Questions & Answers (Accordion FAQ) */}
        <SolarFaq />

        {/* 9. Final High-Impact Solar Conversion CTA */}
        <SolarCtaBanner />
      </main>

      {/* Reused Global Footer */}
      <Footer />
    </div>
  );
}

