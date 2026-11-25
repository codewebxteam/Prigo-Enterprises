"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rajesh K.",
    city: "Noida, Sector 62",
    review:
      "Product selection was easy and the installation team explained everything clearly. Water taste improved remarkably right after setup.",
    purifier: "AquaPure 8-Stage RO",
    stars: 5,
  },
  {
    id: 2,
    name: "Ananya M.",
    city: "Bengaluru, Whitefield",
    review:
      "The purifier was installed neatly and the service experience was smooth. The technician tested the TDS before and after installation.",
    purifier: "HydroSmart RO + UV",
    stars: 5,
  },
  {
    id: 3,
    name: "Vikram S.",
    city: "Delhi NCR",
    review:
      "Good product guidance and helpful support whenever we needed assistance. Filter replacement was scheduled without any hassle.",
    purifier: "HydroFlow Dispenser",
    stars: 5,
  },
];

export default function RoCustomerReviews() {
  return (
    <section className="w-full bg-[#F5F7FA] py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
            <span>CUSTOMER EXPERIENCES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Better Water. Better Experiences.
          </h2>

          <p className="text-sm sm:text-base text-gray-600">
            Real feedback from households and offices trusting Prigo water solutions.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5-star rating & quote mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#0786B9]/20" />
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-extrabold text-[#172B3B]">{rev.name}</h4>
                  <span className="text-gray-400">{rev.city}</span>
                </div>
                <span className="text-[11px] font-bold text-[#0786B9] bg-[#0786B9]/10 px-2.5 py-1 rounded-full">
                  {rev.purifier}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

