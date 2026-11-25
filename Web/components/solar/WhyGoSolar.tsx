"use client";

import React from "react";
import Image from "next/image";
import { TrendingDown, Award, Shield, SunMedium } from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Reduced Electricity Bills",
    description:
      "Generate your own electricity and reduce reliance on grid power.",
    icon: TrendingDown,
  },
  {
    number: "02",
    title: "Long-Term Value",
    description:
      "Invest in a solution designed to deliver value over the years.",
    icon: Award,
  },
  {
    number: "03",
    title: "Energy Independence",
    description:
      "Make your home less dependent on conventional power supply.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Cleaner Energy",
    description:
      "Use renewable sunlight to power your everyday life.",
    icon: SunMedium,
  },
];

export default function WhyGoSolar() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Large Architectural Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="/images/solar-sunset.jpg"
                alt="Architectural photo of rooftop solar panels under natural sunlight"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172B3B]/40 via-transparent to-transparent pointer-events-none" />

              {/* Minimal floating statistic tag */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-white/80">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                  Solar Efficiency
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#172B3B]">
                  Up to 80%{" "}
                  <span className="text-xs font-semibold text-[#0786B9]">
                    Bill Reduction
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Benefits Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
                <span>WHY SWITCH TO SOLAR?</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
                A Smarter Way to Power Everyday Life.
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Solar energy helps you make better use of natural energy while
                giving you greater control over your electricity consumption.
              </p>
            </div>

            {/* 4 Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-2">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={benefit.number}
                    className="p-5 rounded-2xl bg-[#F5F7FA] border border-gray-200/70 hover:border-[#0786B9]/40 hover:bg-white hover:shadow-md transition-all duration-300 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#0786B9]">
                        <IconComponent className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-xs font-black text-[#0786B9]/40 tracking-wider">
                        {benefit.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#172B3B] mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

