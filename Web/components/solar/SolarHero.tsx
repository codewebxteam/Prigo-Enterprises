"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Wrench, Sparkles } from "lucide-react";

export default function SolarHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F5F7FA] via-white to-[#F5F7FA] pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0786B9]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F47721]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[570px] lg:min-h-[620px]">
          {/* LEFT CONTENT (approx 48% -> 6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0786B9]/10 border border-[#0786B9]/20 text-[#0786B9] text-xs font-extrabold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
              <span>SOLAR SOLUTIONS BY PRIGO</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#172B3B] tracking-tight leading-[1.12]">
              Harness the Sun. <br />
              <span className="text-[#F47721]">Power Your Future.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Make the switch to smarter energy with Prigo&apos;s reliable solar
              solutions. Reduce electricity costs, enjoy dependable power and take
              control of your energy future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="#quote"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F47721] to-[#e06616] hover:from-[#e06616] hover:to-[#cb570d] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Get a Solar Quote</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 border border-[#0786B9] text-[#0786B9] hover:bg-[#0786B9]/5 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-colors duration-200"
              >
                <span>Explore Solar Products</span>
              </Link>
            </div>

            {/* Below Buttons: Three Compact Trust Points */}
            <div className="pt-4 sm:pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-[#172B3B] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0786B9] flex-shrink-0" />
                <span>Lower Electricity Bills</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#F47721] flex-shrink-0" />
                <span>Reliable Energy</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#0786B9] flex-shrink-0" />
                <span>Expert Installation</span>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL (approx 52% -> 6 cols on lg) */}
          <div className="lg:col-span-6 relative z-10 flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white">
              <Image
                src="/images/hero-solar-house.jpg"
                alt="Modern home with rooftop solar panels under golden sunlight"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Only ONE minimal floating badge: "Smart Solar Living" */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-20">
                <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-white/80">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#F47721] to-amber-400 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#172B3B] tracking-wide">
                    Smart Solar Living
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

