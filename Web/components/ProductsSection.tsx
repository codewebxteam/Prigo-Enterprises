"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: "solar" | "ro" | "appliances";
  categoryLabel: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviewsCount: number;
  image: string;
  tag?: string;
}

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"solar" | "ro" | "appliances">("solar");

  const products: Product[] = [
    // Solar Products
    {
      id: 1,
      name: "Monocrystalline Solar Panel 550W",
      category: "solar",
      categoryLabel: "Solar Solutions",
      price: 10500,
      originalPrice: 13000,
      discount: "19% OFF",
      rating: 4.9,
      reviewsCount: 142,
      image: "/images/prod-solar-panel.jpg",
      tag: "BESTSELLER",
    },
    {
      id: 2,
      name: "Smart Hybrid Solar Inverter 5kVA",
      category: "solar",
      categoryLabel: "Solar Solutions",
      price: 28500,
      originalPrice: 34000,
      discount: "16% OFF",
      rating: 4.8,
      reviewsCount: 98,
      image: "/images/prod-solar-inverter.jpg",
      tag: "POPULAR",
    },
    {
      id: 3,
      name: "Solar Tubular Battery 150Ah / 12V",
      category: "solar",
      categoryLabel: "Solar Solutions",
      price: 14500,
      originalPrice: 18000,
      discount: "20% OFF",
      rating: 4.9,
      reviewsCount: 110,
      image: "/images/prod-solar-battery.jpg",
      tag: "HEAVY DUTY",
    },
    {
      id: 4,
      name: "VFD Solar Pump Controller 3HP",
      category: "solar",
      categoryLabel: "Solar Solutions",
      price: 8500,
      originalPrice: 11000,
      discount: "22% OFF",
      rating: 4.7,
      reviewsCount: 65,
      image: "/images/prod-vfd.jpg",
    },
    {
      id: 5,
      name: "Galvanized Solar Mounting Structure",
      category: "solar",
      categoryLabel: "Solar Solutions",
      price: 4800,
      originalPrice: 6500,
      discount: "26% OFF",
      rating: 4.8,
      reviewsCount: 84,
      image: "/images/prod-mounting.jpg",
    },

    // RO Products
    {
      id: 6,
      name: "Commercial Industrial RO Plant 50 LPH",
      category: "ro",
      categoryLabel: "RO & Water Systems",
      price: 18500,
      originalPrice: 24000,
      discount: "23% OFF",
      rating: 4.9,
      reviewsCount: 76,
      image: "/images/card-ro.jpg",
      tag: "COMMERCIAL",
    },
    {
      id: 7,
      name: "Alkaline RO Water Purifier + Mineralizer",
      category: "ro",
      categoryLabel: "RO & Water Systems",
      price: 11200,
      originalPrice: 15500,
      discount: "28% OFF",
      rating: 4.8,
      reviewsCount: 135,
      image: "/images/card-ro.jpg",
      tag: "BESTSELLER",
    },
    {
      id: 8,
      name: "Active Copper + UV + UF Home Purifier",
      category: "ro",
      categoryLabel: "RO & Water Systems",
      price: 13800,
      originalPrice: 18000,
      discount: "23% OFF",
      rating: 4.9,
      reviewsCount: 89,
      image: "/images/card-ro.jpg",
    },
    {
      id: 9,
      name: "Automatic Water Softener System 1000 LPH",
      category: "ro",
      categoryLabel: "RO & Water Systems",
      price: 22000,
      originalPrice: 28000,
      discount: "21% OFF",
      rating: 4.7,
      reviewsCount: 52,
      image: "/images/card-ro.jpg",
    },

    // Electrical & Home Appliances
    {
      id: 10,
      name: "5-Star Inverter Split AC 1.5 Ton Copper",
      category: "appliances",
      categoryLabel: "Electrical & Appliances",
      price: 36500,
      originalPrice: 45000,
      discount: "19% OFF",
      rating: 4.9,
      reviewsCount: 160,
      image: "/images/card-appliances.jpg",
      tag: "5 STAR",
    },
    {
      id: 11,
      name: "Frost-Free Double Door Refrigerator 260L",
      category: "appliances",
      categoryLabel: "Electrical & Appliances",
      price: 24800,
      originalPrice: 31000,
      discount: "20% OFF",
      rating: 4.8,
      reviewsCount: 112,
      image: "/images/card-appliances.jpg",
      tag: "POPULAR",
    },
    {
      id: 12,
      name: "Front Load Fully Automatic Washing Machine 7kg",
      category: "appliances",
      categoryLabel: "Electrical & Appliances",
      price: 28900,
      originalPrice: 36000,
      discount: "20% OFF",
      rating: 4.9,
      reviewsCount: 94,
      image: "/images/card-appliances.jpg",
    },
    {
      id: 13,
      name: "Heavy Duty Desert Air Cooler 75 Litres",
      category: "appliances",
      categoryLabel: "Electrical & Appliances",
      price: 8200,
      originalPrice: 11500,
      discount: "28% OFF",
      rating: 4.7,
      reviewsCount: 78,
      image: "/images/card-appliances.jpg",
    },
    {
      id: 14,
      name: "Industrial Three Phase Induction Motor 5HP",
      category: "appliances",
      categoryLabel: "Electrical & Appliances",
      price: 16500,
      originalPrice: 22000,
      discount: "25% OFF",
      rating: 4.8,
      reviewsCount: 46,
      image: "/images/vertical-electric.jpg",
    },
  ];

  const filteredProducts = products.filter((p) => p.category === activeTab);

  return (
    <section className="hidden md:block w-full py-14 sm:py-16 bg-[#f8fbff]" id="products">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-3 justify-center mb-2">
            <span className="w-10 sm:w-12 h-[1.5px] bg-orange-400"></span>
            <span className="text-[11px] sm:text-xs font-black tracking-widest text-orange-600 uppercase">
              POPULAR PRODUCTS
            </span>
            <span className="w-10 sm:w-12 h-[1.5px] bg-orange-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0c2340] tracking-tight leading-tight mb-2">
            Explore our <span className="text-orange-500">best-selling</span> products.
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide">
            Certified quality, wholesale &amp; retail prices, backed by manufacturer warranty.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10">
          <button
            onClick={() => setActiveTab("solar")}
            className={`px-6 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "solar"
                ? "bg-[#005ea6] text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
            }`}
          >
            Solar Solutions
          </button>
          <button
            onClick={() => setActiveTab("ro")}
            className={`px-6 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "ro"
                ? "bg-[#005ea6] text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
            }`}
          >
            RO &amp; Water Systems
          </button>
          <button
            onClick={() => setActiveTab("appliances")}
            className={`px-6 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "appliances"
                ? "bg-[#005ea6] text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
            }`}
          >
            Electrical &amp; Home Appliances
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white rounded-2xl p-4 sm:p-4 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              {/* Discount / Category Badge */}
              <div className="flex items-center justify-between mb-2">
                {prod.tag ? (
                  <span className="bg-orange-500 text-white font-black text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
                    {prod.tag}
                  </span>
                ) : (
                  <span className="bg-blue-50 text-[#005ea6] font-bold text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {prod.discount}
                  </span>
                )}
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  In Stock
                </span>
              </div>

              {/* Product Image */}
              <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-3 bg-white flex items-center justify-center p-2 border border-gray-50">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-300 p-1"
                />
              </div>

              {/* Content & Details */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    {prod.categoryLabel}
                  </span>
                  <h3 className="font-extrabold text-xs sm:text-sm text-gray-900 line-clamp-2 leading-snug mb-2 group-hover:text-[#005ea6] transition-colors">
                    {prod.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold text-gray-700">
                      {prod.rating}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      ({prod.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Price & Action Button */}
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-base sm:text-lg font-black text-[#0c2340]">
                        ₹{prod.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold line-through ml-2">
                        ₹{prod.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
                      Save ₹{(prod.originalPrice - prod.price).toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => alert(`✓ ${prod.name} added to cart!`)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Banner / CTA */}
        <div className="mt-12 bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-blue-50 text-[#005ea6] flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-[#005ea6]" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm sm:text-base text-gray-900">
                Looking for customized bulk orders or wholesale installation?
              </h4>
              <p className="text-xs text-gray-500 font-medium">
                Get direct manufacturer quotation, site inspection, and expert consultancy.
              </p>
            </div>
          </div>
          <Link
            href="#quote"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#005ea6] hover:bg-[#004880] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Request Bulk Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
