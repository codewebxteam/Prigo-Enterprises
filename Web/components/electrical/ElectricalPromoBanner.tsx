"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, Sparkles } from "lucide-react";

export default function ElectricalPromoBanner() {
  return (
    <section className="relative w-full bg-[#087FB3] py-20 sm:py-24 lg:py-28 overflow-hidden text-white border-b border-gray-100">
      {/* Background Architectural Appliance Visual */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <Image
          src="/images/card-appliances.jpg"
          alt="Modern appliances in home"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041a35] via-[#087FB3]/90 to-[#0786B9]/80 z-0 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#F47721]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-orange-300 text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F47721]" />
            <span>PRIGO HOME SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Upgrade your home. <br />
            Simplify your everyday.
          </h2>

          <p className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-xl mx-auto">
            Discover the right appliances, get expert assistance and enjoy dependable
            support from Prigo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F47721] to-[#e06616] hover:from-[#e06616] hover:to-[#cb570d] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Shop Appliances</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link
              href="#service"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent border-2 border-white/70 hover:border-white text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              <Wrench className="w-4 h-4" />
              <span>Book a Service</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

