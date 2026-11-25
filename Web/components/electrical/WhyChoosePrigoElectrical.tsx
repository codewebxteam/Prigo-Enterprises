"use client";

import React from "react";
import { ShieldCheck, Compass, Wrench, HeartHandshake } from "lucide-react";

const benefits = [
  {
    number: "01",
    tag: "BENEFIT 01",
    title: "TRUSTED PRODUCTS",
    description:
      "Carefully selected appliances and electrical products from reliable brands tested for maximum longevity and energy efficiency.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    tag: "BENEFIT 02",
    title: "EXPERT GUIDANCE",
    description:
      "Get unbiased, personalized advice to choose the perfect appliance capacity, tonnage, and star-rating for your home.",
    icon: Compass,
  },
  {
    number: "03",
    tag: "BENEFIT 03",
    title: "PROFESSIONAL INSTALLATION",
    description:
      "Reliable installation support by verified technicians for a smooth, safe and completely hassle-free setup.",
    icon: Wrench,
  },
  {
    number: "04",
    tag: "BENEFIT 04",
    title: "AFTER-SALES CARE",
    description:
      "Prompt repair, maintenance and customer service support even long after your purchase with genuine spare parts.",
    icon: HeartHandshake,
  },
];

export default function WhyChoosePrigoElectrical() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200/90 shadow-sm space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
              <span>THE PRIGO DIFFERENCE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
              Better products. Better service. Better everyday living.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Bringing together trusted appliances, convenient shopping and
              professional service support.
            </p>
          </div>

          {/* 4 Benefits Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
            {benefits.map((b) => {
              const IconComp = b.icon;
              return (
                <div
                  key={b.number}
                  className="space-y-3.5 p-6 rounded-2xl bg-[#F4F7FA] border border-gray-200/60 hover:border-[#0786B9]/40 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white shadow-xs border border-gray-200/80 flex items-center justify-center text-[#0786B9]">
                      <IconComp className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-black text-[#0786B9]/40 tracking-wider">
                      {b.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#172B3B] tracking-tight mb-1">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

