"use client";

import React from "react";
import { UserCheck, ShieldCheck, BadgePercent, Clock } from "lucide-react";

const trustPillars = [
  {
    title: "Verified & Certified Engineers",
    description: "Every Prigo technician is background-checked, trained, and certified across solar arrays, RO electronics, and refrigeration systems.",
    icon: UserCheck,
  },
  {
    title: "100% Genuine OEM Spares",
    description: "We use only authentic factory-certified replacement parts, membranes, and copper tubing with manufacturer warranties.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent & Fixed Pricing",
    description: "Clear standardized rate cards with zero hidden surprises. The initial inspection fee is waived when repairs are approved.",
    icon: BadgePercent,
  },
  {
    title: "Same-Day Doorstep Guarantee",
    description: "Fast technician dispatch with 4-hour emergency response for critical air conditioning, water purification, and solar breakdowns.",
    icon: Clock,
  },
];

export default function WhyChoosePrigoService() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#F4F7FA] rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200/90 shadow-sm space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
              <span>THE PRIGO SERVICE STANDARD</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
              Why 10,000+ Homes Trust Prigo Support
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We eliminate the stress of local unverified repairmen by delivering
              consistent, professional, corporate-backed home maintenance.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
            {trustPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="space-y-3 p-6 rounded-2xl bg-white border border-gray-200/80 hover:border-[#0786B9]/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0786B9]/10 text-[#0786B9] flex items-center justify-center">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#172B3B] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
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

