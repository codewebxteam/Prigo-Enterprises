import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesVerticalCards from "@/components/services/ServicesVerticalCards";
import ServiceBookingCalculator from "@/components/services/ServiceBookingCalculator";
import ServiceAmcPlans from "@/components/services/ServiceAmcPlans";
import ServiceProcessTimeline from "@/components/services/ServiceProcessTimeline";
import WhyChoosePrigoService from "@/components/services/WhyChoosePrigoService";
import ServicesFaq from "@/components/services/ServicesFaq";
import ServicesCtaBanner from "@/components/services/ServicesCtaBanner";

export const metadata: Metadata = {
  title: "Professional Installation, Repair & AMC Services | Prigo Energy",
  description:
    "Expert turnkey installation, doorstep repair, and Annual Maintenance Contracts (AMC) for rooftop solar systems, RO water purifiers, air conditioners, and home appliances across India.",
  keywords: [
    "Prigo services",
    "Solar panel installation service",
    "RO repair and filter replacement",
    "AC repair and jet service",
    "Appliance AMC plans",
    "Home electrical services India",
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172B3B] antialiased">
      {/* Reused Global Navigation Header with active Services indicator */}
      <Header />

      {/* Main Services Experience */}
      <main className="flex-grow">
        {/* 1. Services Hero Section */}
        <ServicesHero />

        {/* 2. Core Service Wings across Solar, RO & Electrical */}
        <ServicesVerticalCards />

        {/* 3. 3-Step Interactive Booking Engine */}
        <ServiceBookingCalculator />

        {/* 4. Annual Maintenance Contracts (AMC Plans) */}
        <ServiceAmcPlans />

        {/* 5. 4-Step Transparent Service Workflow */}
        <ServiceProcessTimeline />

        {/* 6. Why Choose Prigo Service Team */}
        <WhyChoosePrigoService />

        {/* 7. Frequently Asked Questions (Accordion) */}
        <ServicesFaq />

        {/* 8. Final Conversion CTA Banner */}
        <ServicesCtaBanner />
      </main>

      {/* Reused Global Footer */}
      <Footer />
    </div>
  );
}

