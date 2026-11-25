"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Clock,
  Award,
} from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F4F7FA] via-white to-[#F4F7FA] pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0786B9]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F47721]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[570px] lg:min-h-[620px]">
          {/* LEFT CONTENT (approx 45% -> 5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-8 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-extrabold text-[#0786B9] uppercase tracking-widest">
                PROFESSIONAL CARE &amp; SUPPORT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-[#172B3B] tracking-tight leading-[1.14]">
              Complete solutions. <br />
              <span className="text-[#0786B9]">Expert care. </span>
              <span className="text-[#F47721]">All under one roof.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              From solar installation and RO water purification maintenance to
              everyday appliance repairs, our certified experts ensure your home runs
              smoothly with zero hassle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="#book"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F47721] to-[#e06616] hover:from-[#e06616] hover:to-[#cb570d] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Book a Service Appointment</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <Link
                href="#amc"
                className="inline-flex items-center justify-center gap-2 border border-[#0786B9] text-[#0786B9] hover:bg-[#0786B9]/5 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-colors duration-200"
              >
                <span>Explore AMC Plans</span>
              </Link>
            </div>

            {/* 4 Trust Indicators */}
            <div className="pt-4 sm:pt-6 border-t border-gray-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#172B3B] font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0786B9] flex-shrink-0" />
                <span>Certified Techs</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F47721] flex-shrink-0" />
                <span>90-Day Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#0786B9] flex-shrink-0" />
                <span>Genuine Spares</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F47721] flex-shrink-0" />
                <span>Same-Day Visit</span>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL (approx 55% -> 7 cols on lg) */}
          <div className="lg:col-span-7 relative z-10 flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white">
              <Image
                src="/images/service-solar.jpg"
                alt="Prigo certified engineers performing precision installation and maintenance"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Minimal floating badge */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-20">
                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/80">
                  <div className="w-8 h-8 rounded-xl bg-[#0786B9] flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-black text-[#172B3B] block">
                      Trusted by 10,000+ Homes
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">
                      Across Solar, RO &amp; Appliances
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

