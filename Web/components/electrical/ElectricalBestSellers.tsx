"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Star,
  Heart,
  CheckCircle2,
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface ApplianceProduct {
  id: number;
  name: string;
  category: "all" | "ac" | "refrigerators" | "washing" | "coolers" | "electrical";
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

const products: ApplianceProduct[] = [
  {
    id: 1,
    name: "Premium Inverter Split AC 1.5 Ton (5-Star)",
    category: "ac",
    categoryLabel: "AIR CONDITIONERS",
    price: 34990,
    originalPrice: 42990,
    discount: "19% OFF",
    rating: 4.8,
    reviewsCount: 164,
    image: "/images/review-ac.jpg",
    tag: "5-STAR RATED",
    specs: ["100% Copper Condenser", "Dual Inverter Compressor", "PM 2.5 Air Filter"],
  },
  {
    id: 2,
    name: "Double Door Frost-Free Refrigerator 260L",
    category: "refrigerators",
    categoryLabel: "REFRIGERATORS",
    price: 28499,
    originalPrice: 32999,
    discount: "14% OFF",
    rating: 4.7,
    reviewsCount: 112,
    image: "/images/card-appliances.jpg",
    tag: "POPULAR",
    specs: ["Multi-Air Flow Cooling", "Convertible Zone", "Inverter Linear Tech"],
  },
  {
    id: 3,
    name: "Front Load Washing Machine — 8kg AI Direct Drive",
    category: "washing",
    categoryLabel: "WASHING MACHINES",
    price: 31990,
    originalPrice: 37990,
    discount: "16% OFF",
    rating: 4.8,
    reviewsCount: 145,
    image: "/images/service-appliance.jpg",
    tag: "AI DIRECT DRIVE",
    specs: ["Steam Hygiene Wash", "1400 RPM TurboSpin", "Smart Diagnosis"],
  },
  {
    id: 4,
    name: "Powerful Desert Air Cooler 70L High-Airflow",
    category: "coolers",
    categoryLabel: "AIR COOLERS",
    price: 11499,
    originalPrice: 14999,
    discount: "23% OFF",
    rating: 4.6,
    reviewsCount: 89,
    image: "/images/card-appliances.jpg",
    tag: "HIGH AIRFLOW",
    specs: ["Honeycomb Cooling Pads", "4-Way Air Deflection", "Inverter Compatible"],
  },
];

const filterTabs = [
  { id: "all", label: "All Products" },
  { id: "ac", label: "ACs" },
  { id: "refrigerators", label: "Refrigerators" },
  { id: "washing", label: "Washing Machines" },
  { id: "coolers", label: "Coolers" },
  { id: "electrical", label: "Electrical" },
];

export default function ElectricalBestSellers() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filtered =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (name: string) => {
    setToastMessage(`Added "${name}" to cart!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <section id="products" className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-gray-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#F47721]" />
              <span>CUSTOMER FAVOURITES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
              Everyday essentials. Exceptional performance.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
              Explore appliances selected for quality, convenience and dependable
              everyday use.
            </p>
          </div>

          <Link
            href="#service"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#F47721] hover:text-[#e06616] group flex-shrink-0"
          >
            <span>Book Installation &amp; Service</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 mr-2 flex-shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#0786B9] text-white shadow-md shadow-[#0786B9]/25"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filtered.length === 0 ? (
            <div className="col-span-full py-12 text-center text-gray-500 text-sm">
              Explore our full catalog by reaching out or checking all products.
            </div>
          ) : (
            filtered.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-[#0786B9]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Area - 55-60% of card visual */}
                  <div className="relative w-full aspect-[4/3] bg-gray-50/70 p-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover p-2 group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    />

                    {/* Badge */}
                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-[#0786B9] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        {product.tag}
                      </span>
                    )}

                    {/* Discount badge in orange */}
                    <span className="absolute top-3 right-12 bg-orange-50 text-[#F47721] border border-orange-200 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      {product.discount}
                    </span>

                    {/* Wishlist icon */}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Add to Wishlist"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs hover:bg-white text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Details */}
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

                      {/* Specs */}
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

                    {/* Price & Add to Cart */}
                    <div className="pt-3 border-t border-gray-100 space-y-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg sm:text-xl font-black text-[#172B3B]">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(product.name)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#0786B9] hover:bg-[#087FB3] text-white font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#172B3B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 border border-white/20 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}
    </section>
  );
}

