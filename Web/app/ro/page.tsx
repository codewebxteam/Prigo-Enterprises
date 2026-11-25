import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoHero from "@/components/ro/RoHero";
import RoWaterSolutions from "@/components/ro/RoWaterSolutions";
import RoProductsShowcase from "@/components/ro/RoProductsShowcase";
import WaterTechExplainer from "@/components/ro/WaterTechExplainer";
import WaterSourceSelector from "@/components/ro/WaterSourceSelector";
import RoServiceSection from "@/components/ro/RoServiceSection";
import WhyChoosePrigoWater from "@/components/ro/WhyChoosePrigoWater";
import RoServiceProcess from "@/components/ro/RoServiceProcess";
import RoCustomerReviews from "@/components/ro/RoCustomerReviews";
import RoFaq from "@/components/ro/RoFaq";
import RoCtaBanner from "@/components/ro/RoCtaBanner";

export const metadata: Metadata = {
  title: "RO & Water Purification Systems | Prigo Energy - Pure Water, Better Living",
  description:
    "Explore advanced multi-stage RO, UV, and UF water purifiers, alkaline mineralizers, and water dispensers by Prigo Energy. Professional doorstep installation, filter replacement, and maintenance across India.",
  keywords: [
    "RO water purifier",
    "Water purification India",
    "RO UV water filter",
    "Prigo Energy RO",
    "Water dispenser",
    "RO service and maintenance",
    "Alkaline water purifier",
  ],
};

export default function RoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172B3B] antialiased">
      {/* Reused Global Navigation Header with active RO indicator */}
      <Header />

      {/* Main RO Page Experience */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <RoHero />

        {/* 2. Explore Water Solutions (4 Categories) */}
        <RoWaterSolutions />

        {/* 3. Customer Favourites (Product Showcase with Cart & Details) */}
        <RoProductsShowcase />

        {/* 4. Water Technology Explainer (Interactive Purification Flow) */}
        <WaterTechExplainer />

        {/* 5. Which Water Purifier Is Right For You? (Source-Based Editorial Panels) */}
        <WaterSourceSelector />

        {/* 6. RO Installation, Repair & Maintenance (Technician & Services) */}
        <RoServiceSection />

        {/* 7. Why Choose Prigo For Water Solutions (4 Trust Points) */}
        <WhyChoosePrigoWater />

        {/* 8. RO Service Process (4-Step Workflow) */}
        <RoServiceProcess />

        {/* 9. Customer Experiences & Reviews */}
        <RoCustomerReviews />

        {/* 10. Questions About Water Purifiers? (Accordion FAQ) */}
        <RoFaq />

        {/* 11. Final Conversion CTA Banner */}
        <RoCtaBanner />
      </main>

      {/* Reused Global Footer */}
      <Footer />
    </div>
  );
}

