"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building, Mountain, Layers, HelpCircle } from "lucide-react";

const sources = [
  {
    number: "01",
    type: "MUNICIPAL WATER",
    title: "Treated Municipal Supply",
    description:
      "Explore purification solutions suited to homes receiving treated municipal water. Often characterized by lower TDS, where active UV, UF, or balanced RO with TDS controllers deliver crisp taste.",
    image: "/images/card-ro.jpg",
    icon: Building,
    badge: "Low to Medium TDS",
  },
  {
    number: "02",
    type: "BOREWELL WATER",
    title: "Groundwater & Borewell",
    description:
      "Explore systems suitable for homes where groundwater characteristics may vary with higher mineral hardness, heavy dissolved salts (TDS > 500), requiring robust multi-stage Reverse Osmosis.",
    image: "/images/vertical-ro.jpg",
    icon: Mountain,
    badge: "High TDS & Hardness",
  },
  {
    number: "03",
    type: "MIXED WATER SOURCES",
    title: "Tanker & Variable Supply",
    description:
      "Find solutions for homes using different water sources throughout the year. Intelligent purifiers with dynamic TDS modulators adjust filtration intensity automatically.",
    image: "/images/service-ro.jpg",
    icon: Layers,
    badge: "Fluctuating TDS",
  },
];

export default function WaterSourceSelector() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
            <span>DECISION SUPPORT &amp; GUIDANCE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Different Water Sources. Different Solutions.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Choosing a purifier starts with understanding your water source and
            purification needs.
          </p>
        </div>

        {/* 3 Large Editorial Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sources.map((src) => {
            const Icon = src.icon;
            return (
              <div
                key={src.number}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#0786B9]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Area */}
                <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                  <Image
                    src={src.image}
                    alt={src.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-[#172B3B]">
                    <Icon className="w-3.5 h-3.5 text-[#0786B9]" />
                    <span>{src.type}</span>
                  </div>

                  <span className="absolute bottom-4 right-4 bg-[#0786B9] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                    {src.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between space-y-5">
                  <div className="space-y-3">
                    <span className="text-xs font-black text-[#0786B9]/50 tracking-wider">
                      OPTION {src.number}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#172B3B] group-hover:text-[#0786B9] transition-colors">
                      {src.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {src.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <Link
                      href="#products"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0786B9] group-hover:text-[#087FB3] group-hover:translate-x-1 transition-all"
                    >
                      <span>Find the Right Purifier</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Guidance Banner */}
        <div className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-7 border border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-[#0786B9] flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              <strong className="text-[#172B3B]">Unsure about your water quality?</strong>{" "}
              The right purifier configuration depends on actual water quality and Total Dissolved Solids (TDS).
              We recommend getting your water tested or scheduling a free home water quality consultation.
            </p>
          </div>

          <Link
            href="#service"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#F47721] hover:text-[#e06616] whitespace-nowrap flex-shrink-0"
          >
            <span>Book Water Test</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

