import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ElectricalHero from "@/components/electrical/ElectricalHero";
import ElectricalCategoryShowcase from "@/components/electrical/ElectricalCategoryShowcase";
import ElectricalBestSellers from "@/components/electrical/ElectricalBestSellers";
import ElectricalApplianceServices from "@/components/electrical/ElectricalApplianceServices";
import WhyChoosePrigoElectrical from "@/components/electrical/WhyChoosePrigoElectrical";
import ElectricalPromoBanner from "@/components/electrical/ElectricalPromoBanner";
import ElectricalFaq from "@/components/electrical/ElectricalFaq";
import ElectricalCtaBanner from "@/components/electrical/ElectricalCtaBanner";

export const metadata: Metadata = {
  title: "Electrical & Home Appliances | Prigo Energy - Smarter Living",
  description:
    "Explore energy-efficient inverter ACs, double-door refrigerators, front-load washing machines, desert air coolers, and modular electrical essentials. Professional installation, repair, and AMC services across India.",
  keywords: [
    "Home appliances India",
    "Inverter split AC",
    "Frost free refrigerator",
    "Front load washing machine",
    "Air cooler",
    "Appliance repair and installation",
    "Prigo Electrical",
  ],
};

export default function ElectricalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172B3B] antialiased">
      {/* Reused Global Navigation Header with active Electrical indicator */}
      <Header />

      {/* Main Electrical & Appliances Experience */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <ElectricalHero />

        {/* 2. Shop by Category (5 Categories) */}
        <ElectricalCategoryShowcase />

        {/* 3. Best Sellers Product Showcase (Filter Tabs & Add to Cart) */}
        <ElectricalBestSellers />

        {/* 4. Complete Appliance Services (Installation, Repair, AMC) */}
        <ElectricalApplianceServices />

        {/* 5. Why Choose Prigo (4 Benefits) */}
        <WhyChoosePrigoElectrical />

        {/* 6. Product & Service Promotional Banner */}
        <ElectricalPromoBanner />

        {/* 7. Frequently Asked Questions (Accordion) */}
        <ElectricalFaq />

        {/* 8. Final Closing CTA Section */}
        <ElectricalCtaBanner />
      </main>

      {/* Reused Global Footer */}
      <Footer />
    </div>
  );
}

