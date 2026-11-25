"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";

interface SolarProduct {
  id: number;
  name: string;
  category: "all" | "panels" | "inverters" | "batteries" | "accessories";
  categoryLabel: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviewsCount: number;
  image: string;
  tag?: string;
  specs: string[];
}

const solarProducts: SolarProduct[] = [
  {
    id: 1,
    name: "Monocrystalline Solar Panel 550W (Mono PERC)",
    category: "panels",
    categoryLabel: "Solar Panels",
    price: 10500,
    originalPrice: 13000,
    discount: "19% OFF",
    rating: 4.9,
    reviewsCount: 142,
    image: "/images/prod-solar-panel.jpg",
    tag: "BESTSELLER",
    specs: ["550W Peak Output", "21.5% Efficiency", "25-Yr Performance Warranty"],
  },
  {
    id: 2,
    name: "Bifacial Dual-Glass Solar Panel 540W",
    category: "panels",
    categoryLabel: "Solar Panels",
    price: 11800,
    originalPrice: 14500,
    discount: "18% OFF",
    rating: 4.9,
    reviewsCount: 88,
    image: "/images/prod-solar-panel.jpg",
    tag: "HIGH GAIN",
    specs: ["Up to 30% Rear Gain", "Dual-Glass Durability", "PID Resistant"],
  },
  {
    id: 3,
    name: "Smart Hybrid Solar Inverter 5kVA / 48V",
    category: "inverters",
    categoryLabel: "Solar Inverters",
    price: 28500,
    originalPrice: 34000,
    discount: "16% OFF",
    rating: 4.8,
    reviewsCount: 98,
    image: "/images/prod-solar-inverter.jpg",
    tag: "MOST POPULAR",
    specs: ["Pure Sine Wave Output", "Dual MPPT Trackers", "WiFi App Monitoring"],
  },
  {
    id: 4,
    name: "Prigo On-Grid Three Phase Inverter 10kW",
    category: "inverters",
    categoryLabel: "Solar Inverters",
    price: 48000,
    originalPrice: 58000,
    discount: "17% OFF",
    rating: 4.9,
    reviewsCount: 64,
    image: "/images/prod-solar-inverter.jpg",
    tag: "COMMERCIAL",
    specs: ["98.6% Max Efficiency", "Three Phase 415V", "IP65 Weatherproof"],
  },
  {
    id: 5,
    name: "Solar Tubular Battery 150Ah / 12V C10",
    category: "batteries",
    categoryLabel: "Solar Batteries",
    price: 14500,
    originalPrice: 18000,
    discount: "20% OFF",
    rating: 4.9,
    reviewsCount: 110,
    image: "/images/prod-solar-battery.jpg",
    tag: "HEAVY DUTY",
    specs: ["Tall Tubular Design", "High Deep Discharge Backup", "60-Month Warranty"],
  },
  {
    id: 6,
    name: "Prigo Lithium Solar Battery 48V 100Ah (5kWh)",
    category: "batteries",
    categoryLabel: "Solar Batteries",
    price: 68000,
    originalPrice: 85000,
    discount: "20% OFF",
    rating: 5.0,
    reviewsCount: 42,
    image: "/images/prod-solar-battery.jpg",
    tag: "PREMIUM LITHIUM",
    specs: ["LiFePO4 Chemistry", "6000+ Deep Cycles", "Smart BMS Integrated"],
  },
  {
    id: 7,
    name: "VFD Solar Pump Controller 3HP / 5HP",
    category: "accessories",
    categoryLabel: "Accessories & Controllers",
    price: 8500,
    originalPrice: 11000,
    discount: "22% OFF",
    rating: 4.7,
    reviewsCount: 65,
    image: "/images/prod-vfd.jpg",
    tag: "AGRICULTURE",
    specs: ["Auto MPPT Tracking", "Dry Run Protection", "Wide Input Voltage"],
  },
  {
    id: 8,
    name: "Galvanized Solar Rooftop Mounting Structure",
    category: "accessories",
    categoryLabel: "Accessories & Controllers",
    price: 4800,
    originalPrice: 6500,
    discount: "26% OFF",
    rating: 4.8,
    reviewsCount: 84,
    image: "/images/prod-mounting.jpg",
    tag: "RUST-PROOF",
    specs: ["Hot-Dip Galvanized Iron", "150 km/h Wind Rated", "Pre-Punched Ease"],
  },
];

const categoryTabs = [
  { id: "all", label: "All Solar Products" },
  { id: "panels", label: "Solar Panels" },
  { id: "inverters", label: "Solar Inverters" },
  { id: "batteries", label: "Batteries & Storage" },
  { id: "accessories", label: "Mounting & VFD" },
];

export default function SolarProductsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? solarProducts
      : solarProducts.filter((p) => p.category === activeCategory);

  const handleAddToCart = (productName: string) => {
    setToastMessage(`Added "${productName}" to cart!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <section id="products" className="w-full bg-[#F5F7FA] py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-gray-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#F47721]" />
              <span>OFFICIAL SOLAR HARDWARE CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
              Explore Solar Essentials.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
              Tier-1 certified photovoltaic modules, smart hybrid inverters,
              deep-cycle energy storage, and structural mounting hardware built
              for Indian conditions.
            </p>
          </div>

          <Link
            href="#quote"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#F47721] hover:text-[#e06616] group flex-shrink-0"
          >
            <span>Request Custom Solar Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 mr-2 flex-shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-[#0786B9] text-white shadow-md shadow-[#0786B9]/25"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-[#0786B9]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image Area */}
              <div className="relative w-full aspect-[4/3] bg-gray-50/70 p-5 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge Tag */}
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-[#0786B9] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    {product.tag}
                  </span>
                )}

                {/* Discount Badge */}
                <span className="absolute top-3 right-3 bg-red-50 text-red-600 border border-red-200 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  {product.discount}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-bold text-[#0786B9] uppercase tracking-wider">
                      {product.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                      <span>{product.rating}</span>
                      <span className="text-gray-400 font-normal">
                        ({product.reviewsCount})
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#172B3B] group-hover:text-[#0786B9] transition-colors line-clamp-2 min-h-[44px]">
                    {product.name}
                  </h3>

                  {/* Specs Pills */}
                  <div className="space-y-1 pt-1">
                    {product.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="text-[11px] text-gray-500 flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#0786B9] flex-shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-3 border-t border-gray-100 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg sm:text-xl font-black text-[#172B3B]">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddToCart(product.name)}
                      className="inline-flex items-center justify-center gap-1.5 bg-[#0786B9] hover:bg-[#087FB3] text-white font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>

                    <Link
                      href="#quote"
                      className="inline-flex items-center justify-center gap-1 border border-gray-300 hover:border-[#F47721] text-gray-700 hover:text-[#F47721] font-bold text-xs py-2.5 rounded-xl transition-colors text-center"
                    >
                      <span>Inquire Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#172B3B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 border border-white/20 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
