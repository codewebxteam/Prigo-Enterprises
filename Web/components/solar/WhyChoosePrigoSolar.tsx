"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Users, Headphones, Wrench } from "lucide-react";

const trustPoints = [
  {
    title: "Quality Solar Products",
    description:
      "Tier-1 certified photovoltaic modules, inverters, and components built for optimal efficiency and long operating life.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Installation Team",
    description:
      "Certified engineers and trained solar professionals adhering to strict safety standards and precision mounting.",
    icon: Users,
  },
  {
    title: "Dedicated Customer Support",
    description:
      "Responsive assistance, remote monitoring support, and quick resolution for all your technical queries.",
    icon: Headphones,
  },
  {
    title: "Maintenance & AMC",
    description:
      "Comprehensive Annual Maintenance Contracts, periodic panel cleaning, and performance optimization visits.",
    icon: Wrench,
  },
];

export default function WhyChoosePrigoSolar() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Trust Points & Content */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
                <span>WHY PRIGO ENERGY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
                Your Trusted Partner in Solar.
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                At Prigo Energy, we bring together dependable products,
                professional installation and ongoing support to make your
                transition to solar simple and reliable.
              </p>
            </div>

            {/* 4 Trust Points Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="p-5 rounded-2xl bg-[#F5F7FA] border border-gray-200/80 hover:border-[#0786B9]/40 hover:bg-white hover:shadow-md transition-all duration-300 space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#0786B9]">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h3 className="text-base font-bold text-[#172B3B]">
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

          {/* RIGHT: Realistic Image of Technicians on Rooftop Panels */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/engineers.jpg"
                alt="Prigo Energy certified solar engineers inspecting rooftop solar panels"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Verified Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0786B9] flex items-center justify-center text-white flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#172B3B]">
                    Certified MNRE Standard
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    Compliant with national safety and grid-connection benchmarks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

