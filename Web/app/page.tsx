import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusinessVerticals from "@/components/BusinessVerticals";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import SolarBanner from "@/components/SolarBanner";
import WhyPrigoEnergy from "@/components/WhyPrigoEnergy";
import TestimonialsStats from "@/components/TestimonialsStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header (TopBar + Navigation) */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero />
        <BusinessVerticals />
        <ProductsSection />
        <ServicesSection />
        <SolarBanner />
        <WhyPrigoEnergy />
        <TestimonialsStats />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
