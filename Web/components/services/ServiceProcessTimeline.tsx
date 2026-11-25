"use client";

import React from "react";
import { MousePointerClick, UserCheck, FileCheck, ShieldCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Book in 60 Seconds",
    description: "Choose your service category, pick your preferred date & time slot online or over the phone.",
    icon: MousePointerClick,
  },
  {
    step: "02",
    title: "Certified Tech Dispatch",
    description: "Trained, background-verified engineers arrive equipped with standard tools and diagnostic kits.",
    icon: UserCheck,
  },
  {
    step: "03",
    title: "Inspection & Fixed Quote",
    description: "Detailed system inspection and an upfront, transparent rate card before starting any work.",
    icon: FileCheck,
  },
  {
    step: "04",
    title: "90-Day Service Warranty",
    description: "Post-repair performance test, digital tax invoice, and 90-day warranty on all workmanship.",
    icon: ShieldCheck,
  },
];

export default function ServiceProcessTimeline() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            From Booking to Peace of Mind.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            A seamless, transparent service workflow built around your convenience.
          </p>
        </div>

        {/* 4-Step Horizontal Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#0786B9]/20 via-[#F47721]/30 to-[#0786B9]/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {steps.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Icon & Number Badge */}
                  <div className="relative mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-gray-100 group-hover:border-[#0786B9] shadow-md group-hover:shadow-lg flex items-center justify-center transition-all duration-300 text-[#0786B9] group-hover:text-[#F47721]">
                      <IconComp className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="absolute -top-2.5 -right-2.5 bg-[#F47721] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                      {item.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 max-w-[240px]">
                    <span className="text-[11px] font-bold text-[#0786B9] uppercase tracking-wider block">
                      STEP {item.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#172B3B]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.description}
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

