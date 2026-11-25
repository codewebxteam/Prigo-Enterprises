"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Star,
  Heart,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
} from "lucide-react";

interface RoProduct {
  id: number;
  name: string;
  category: "all" | "ro" | "uv" | "dispensers" | "filters";
  categoryLabel: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviewsCount: number;
  image: string;
  tag?: string;
  specs: string[];
  description: string;
}

const products: RoProduct[] = [
  {
    id: 1,
    name: "Prigo AquaPure 8-Stage RO Water Purifier",
    category: "ro",
    categoryLabel: "RO Purifiers",
    price: 12499,
    originalPrice: 16999,
    discount: "26% OFF",
    rating: 4.9,
    reviewsCount: 178,
    image: "/images/card-ro.jpg",
    tag: "BESTSELLER",
    specs: ["8-Stage Multi-Filtration", "10 Litres Storage Tank", "Smart Water Level Sensor"],
    description: "Designed for Indian households, this 8-stage RO purifier removes heavy metals and high TDS while ensuring fresh taste with copper enrichment.",
  },
  {
    id: 2,
    name: "Prigo HydroSmart RO + UV + Alkaline Purifier",
    category: "uv",
    categoryLabel: "RO + UV Purifiers",
    price: 15800,
    originalPrice: 21500,
    discount: "26% OFF",
    rating: 4.9,
    reviewsCount: 134,
    image: "/images/vertical-ro.jpg",
    tag: "ALKALINE PH+",
    specs: ["Dual UV-C Disinfection", "Active Alkaline Cartridge", "Smart LED Filter Alerts"],
    description: "Combines high-recovery RO membrane with germicidal ultraviolet chamber and post-mineral alkaline cartridge maintaining optimal 8.0 pH.",
  },
  {
    id: 3,
    name: "Prigo HydroFlow Hot & Cold Water Dispenser",
    category: "dispensers",
    categoryLabel: "Water Dispensers",
    price: 18500,
    originalPrice: 24000,
    discount: "23% OFF",
    rating: 4.8,
    reviewsCount: 92,
    image: "/images/review-ro.jpg",
    tag: "HOT & COLD",
    specs: ["Instant Hot (90°C) & Cold (10°C)", "Child-Safety Lock", "Silent Compressor Cooling"],
    description: "Freestanding premium stainless-steel water dispenser ideal for executive offices, modern kitchens, and shared corporate conference spaces.",
  },
  {
    id: 4,
    name: "Prigo Complete Filter Replacement Cartridge Kit",
    category: "filters",
    categoryLabel: "Filters & Cartridges",
    price: 2499,
    originalPrice: 3500,
    discount: "28% OFF",
    rating: 4.9,
    reviewsCount: 210,
    image: "/images/service-ro.jpg",
    tag: "GENUINE OEM",
    specs: ["Spun Polypropylene Sediment", "Pre & Post Carbon Blocks", "Food-Grade Certified"],
    description: "Original equipment replacement kit containing high-density sediment filter, granulated activated carbon, and post-carbon filter cartridges.",
  },
];

export default function RoProductsShowcase() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<RoProduct | null>(null);

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
    <section id="products" className="w-full bg-[#F5F7FA] py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-gray-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#F47721]" />
              <span>CUSTOMER FAVOURITES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
              Designed for Everyday Hydration.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
              Certified purification systems and authentic replacement cartridges
              engineered for pure, crystal-clear drinking water.
            </p>
          </div>

          <Link
            href="#service"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#F47721] hover:text-[#e06616] group flex-shrink-0"
          >
            <span>Book RO Installation &amp; Service</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {products.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-[#0786B9]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Area */}
                <div className="relative w-full aspect-[4/3] bg-gray-50/70 p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover p-2 group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  />

                  {/* Badge Tag */}
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-[#0786B9] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                      {product.tag}
                    </span>
                  )}

                  {/* Discount Badge */}
                  <span className="absolute top-3 right-12 bg-red-50 text-red-600 border border-red-200 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                    {product.discount}
                  </span>

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to Wishlist"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs hover:bg-white text-gray-500 hover:text-red-500 transition-colors"
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

                  {/* Pricing & Actions */}
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
                        type="button"
                        onClick={() => handleAddToCart(product.name)}
                        className="inline-flex items-center justify-center gap-1.5 bg-[#0786B9] hover:bg-[#087FB3] text-white font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="inline-flex items-center justify-center gap-1 border border-gray-300 hover:border-[#0786B9] text-gray-700 hover:text-[#0786B9] font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative bg-white text-[#172B3B] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 space-y-5">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
            >
              ✕
            </button>

            <div className="relative w-full aspect-[16/9] bg-gray-50 rounded-2xl overflow-hidden">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0786B9] uppercase">
                  {selectedProduct.categoryLabel}
                </span>
                <span className="text-lg font-black text-[#172B3B]">
                  ₹{selectedProduct.price.toLocaleString("en-IN")}
                </span>
              </div>
              <h3 className="text-xl font-black text-[#172B3B]">
                {selectedProduct.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                Included Features:
              </span>
              {selectedProduct.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  handleAddToCart(selectedProduct.name);
                  setSelectedProduct(null);
                }}
                className="w-full bg-[#0786B9] hover:bg-[#087FB3] text-white font-extrabold text-xs sm:text-sm py-3 rounded-xl transition-colors shadow-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

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

