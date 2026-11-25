"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Sun,
  Droplets,
  Tv,
} from "lucide-react";

export default function TestimonialsStats() {
  const [activeDot, setActiveDot] = useState(0);

  const testimonials = [
    {
      id: 1,
      category: "SOLAR INSTALLATION",
      categoryIcon: <Sun className="w-3.5 h-3.5 text-[#005ea6]" />,
      quote:
        "The entire solar installation process was smooth. The team explained everything clearly and the setup was professionally done.",
      name: "Rahul Sharma",
      role: "Residential Solar Customer",
      avatar: "/images/avatar-rahul.jpg",
      productImage: "/images/review-solar.jpg",
      productAlt: "Rooftop solar panels installation",
    },
    {
      id: 2,
      category: "RO & WATER PURIFICATION",
      categoryIcon: <Droplets className="w-3.5 h-3.5 text-[#005ea6]" />,
      quote:
        "The purifier installation was quick and professional. The team helped us choose the right system for our family's needs.",
      name: "Neha Verma",
      role: "Homeowner",
      avatar: "/images/avatar-neha.jpg",
      productImage: "/images/review-ro.jpg",
      productAlt: "Modern kitchen RO water purifier",
    },
    {
      id: 3,
      category: "ELECTRICAL & HOME APPLIANCES",
      categoryIcon: <Tv className="w-3.5 h-3.5 text-[#005ea6]" />,
      quote:
        "Getting the appliance and service support from one place made things much easier. Great experience overall.",
      name: "Amit Gupta",
      role: "Home Appliance Customer",
      avatar: "/images/avatar-amit.jpg",
      productImage: "/images/review-ac.jpg",
      productAlt: "Wall-mounted smart air conditioner",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#f7faff] via-white to-[#f4f9fd] overflow-hidden" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-3 justify-center mb-2.5">
            <span className="w-10 sm:w-12 h-[1.5px] bg-orange-400"></span>
            <span className="text-[11px] sm:text-xs font-black tracking-widest text-orange-600 uppercase">
              TRUSTED BY OUR CUSTOMERS
            </span>
            <span className="w-10 sm:w-12 h-[1.5px] bg-orange-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0c2340] tracking-tight leading-tight mb-2.5">
            Real Experiences. <span className="text-orange-500">Real Satisfaction.</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide max-w-xl mx-auto">
            We believe great products and reliable service make all the difference. Here&apos;s what our customers have to say about their experience with Prigo Energy.
          </p>
        </div>

        {/* Carousel / 3 Cards with Side Navigation Arrows */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => setActiveDot((prev) => (prev === 0 ? 2 : prev - 1))}
            className="hidden xl:flex absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center text-gray-700 hover:text-[#005ea6] hover:scale-110 transition-all z-20 cursor-pointer"
            aria-label="Previous Testimonials"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => setActiveDot((prev) => (prev === 2 ? 0 : prev + 1))}
            className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center text-gray-700 hover:text-[#005ea6] hover:scale-110 transition-all z-20 cursor-pointer"
            aria-label="Next Testimonials"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* 3 Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[26px] p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/90 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1"
              >
                {/* Top Row: Category Pill & 5 Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 bg-[#eaf4fd] text-[#005ea6] text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-full border border-blue-100/80">
                    {item.categoryIcon}
                    <span>{item.category}</span>
                  </div>

                  {/* 5 Orange Stars */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Middle: Quotation & Review text */}
                <div className="mb-6 flex-1">
                  <span className="text-3xl font-black text-[#005ea6] leading-none block font-serif mb-1 select-none">
                    &ldquo;&ldquo;
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Row: Customer Avatar & Details + Product Visual on Right */}
                <div className="flex items-end justify-between pt-4 border-t border-gray-100/80 relative">
                  {/* Customer Info */}
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-slate-100">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-black text-sm text-[#0c2340] leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-gray-400 font-semibold leading-tight">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Product Visual on the right side of card bottom */}
                  <div className="relative w-28 sm:w-32 h-16 sm:h-20 rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-slate-50 border border-gray-100">
                    <Image
                      src={item.productImage}
                      alt={item.productAlt}
                      fill
                      sizes="128px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tagline Divider */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 justify-center mb-4">
            <span className="w-12 sm:w-16 h-[1.5px] bg-orange-400"></span>
            <p className="text-xs sm:text-sm font-bold text-gray-700">
              From products to installation and after-sales support — we&apos;re here for you.
            </p>
            <span className="w-12 sm:w-16 h-[1.5px] bg-orange-400"></span>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveDot(idx)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  activeDot === idx
                    ? "w-6 bg-[#005ea6]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
