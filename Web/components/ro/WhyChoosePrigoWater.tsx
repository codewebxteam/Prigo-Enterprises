"use client";

import React from "react";
import { ShieldCheck, Wrench, Compass, Headphones } from "lucide-react";

const trustPoints = [
  {
    title: "QUALITY PRODUCTS",
    description: "Reliable product options selected for everyday use, tested for Indian water conditions and food-grade safety standards.",
    icon: ShieldCheck,
  },
  {
    title: "EXPERT INSTALLATION",
    description: "Professional setup and installation support by certified technicians ensuring proper pressure and zero leakage.",
    icon: Wrench,
  },
  {
    title: "CUSTOMER GUIDANCE",
    description: "Help selecting the right purifier for your specific water source, TDS levels, and household consumption needs.",
    icon: Compass,
  },
  {
    title: "AFTER-SALES SUPPORT",
    description: "Prompt maintenance, filter replacement reminders, genuine spare parts, and friendly assistance when needed.",
    icon: Headphones,
  },
];

export default function WhyChoosePrigoWater() {
  return (
    <section className="w-full bg-[#F5F7FA] py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200/90 shadow-sm space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
              <span>THE PRIGO PROMISE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
              Reliable Products. Dependable Support.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Choosing the right water solution is easier when products,
              installation and support come together in one place.
            </p>
          </div>

          {/* 4 Trust Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="space-y-3 p-5 rounded-2xl bg-[#F5F7FA] border border-gray-200/60 hover:border-[#0786B9]/40 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-white shadow-xs border border-gray-200/80 flex items-center justify-center text-[#0786B9]">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#172B3B] tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

