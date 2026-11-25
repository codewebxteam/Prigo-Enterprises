"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Building2 } from "lucide-react";

export default function ResidentialCommercialSolar() {
  return (
    <section id="residential" className="w-full bg-[#F5F7FA] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
            <span>TAILORED ENERGY ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Residential &amp; Commercial Solutions
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Engineered precisely for individual villas, independent homes, factories, and commercial enterprise facilities.
          </p>
        </div>

        {/* Two Large Editorial Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Editorial Block 1 — RESIDENTIAL SOLAR */}
          <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            {/* Visual Area */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
              <Image
                src="/images/card-solar.jpg"
                alt="Modern Indian home with rooftop solar panels"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold text-[#172B3B] shadow-sm">
                <Home className="w-3.5 h-3.5 text-[#0786B9]" />
                <span>RESIDENTIAL SOLAR</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 sm:p-10 flex flex-col flex-grow justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B3B] tracking-tight group-hover:text-[#0786B9] transition-colors">
                  Solar Designed for Your Home.
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Find the right solar solution for your home based on your
                  electricity usage, available rooftop space and future needs.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="#quote"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0786B9] group-hover:text-[#087FB3] group-hover:translate-x-1 transition-all duration-200"
                >
                  <span>Explore Home Solar</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Editorial Block 2 — COMMERCIAL SOLAR */}
          <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            {/* Visual Area */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
              <Image
                src="/images/vertical-solar.jpg"
                alt="Large commercial building rooftop covered with solar panels"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold text-[#172B3B] shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-[#F47721]" />
                <span>COMMERCIAL SOLAR</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 sm:p-10 flex flex-col flex-grow justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B3B] tracking-tight group-hover:text-[#0786B9] transition-colors">
                  Power Your Business Smarter.
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Explore scalable solar solutions designed to help commercial
                  spaces manage energy consumption and operating costs.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="#quote"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0786B9] group-hover:text-[#087FB3] group-hover:translate-x-1 transition-all duration-200"
                >
                  <span>Explore Commercial Solar</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

