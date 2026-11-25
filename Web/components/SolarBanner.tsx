"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  HardHat,
  ArrowRight,
  SunDim,
} from "lucide-react";

export default function SolarBanner() {
  return (
    <section className="hidden md:flex relative w-full overflow-hidden min-h-[520px] lg:min-h-[580px] items-center bg-[#072545]" id="solar-banner">
      {/* Background Image: Rooftop solar villa at sunset */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/solar-banner-bg.jpg"
          alt="Power your future with solar"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right sm:object-[75%_center] lg:object-right"
        />
        {/* Deep blue atmospheric gradient on the left for contrast and exact match */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031d36]/95 via-[#04325a]/85 sm:via-[#064377]/65 to-transparent w-full sm:w-[65%] lg:w-[56%] pointer-events-none" />
      </div>

      {/* Floating Top-Right Card: Smarter Energy Starts Here */}
      <div className="hidden lg:flex absolute top-10 right-14 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/40 items-center gap-4 z-20">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#005ea6] flex-shrink-0">
          <SunDim className="w-7 h-7 text-[#005ea6] stroke-[2.2]" />
        </div>
        <div className="border-l border-gray-200 pl-3">
          <h4 className="font-black text-sm text-[#0c2340]">
            Smarter Energy Starts Here
          </h4>
          <p className="text-[11px] text-gray-500 font-medium">
            Residential &amp; Commercial Solar
          </p>
        </div>
      </div>

      {/* Content Container - Aligned with the global max-w */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-16 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Top Tagline */}
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-8 h-[2px] bg-orange-400"></span>
            <span className="text-[11px] sm:text-xs font-black tracking-widest text-orange-400 uppercase">
              POWER YOUR FUTURE WITH SOLAR
            </span>
            <span className="w-8 h-[2px] bg-orange-400"></span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.12] mb-4">
            Make the switch. <br />
            Make it <span className="text-orange-500">worthwhile.</span>
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-blue-100 font-medium leading-relaxed max-w-lg mb-7">
            Discover smarter solar solutions designed to reduce electricity costs and bring long-term energy independence to your home or business.
          </p>

          {/* 3 Feature Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-bold text-white mb-8">
            {/* Feature 1 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                <Zap className="w-4 h-4 text-amber-300" />
              </div>
              <span className="leading-tight">
                Lower <br className="hidden sm:inline" /> Electricity Bills
              </span>
            </div>

            <span className="text-white/30 font-light hidden sm:inline">|</span>

            {/* Feature 2 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-cyan-300" />
              </div>
              <span className="leading-tight">
                Reliable Energy <br className="hidden sm:inline" /> Solutions
              </span>
            </div>

            <span className="text-white/30 font-light hidden sm:inline">|</span>

            {/* Feature 3 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                <HardHat className="w-4 h-4 text-amber-300" />
              </div>
              <span className="leading-tight">
                Professional <br className="hidden sm:inline" /> Installation &amp; Support
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-3.5">
            <Link
              href="#quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all duration-200"
            >
              <span>Get a Solar Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#solar"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full border-2 border-white/80 transition-all duration-200"
            >
              <span>Explore Solar Products</span>
            </Link>
          </div>

          {/* Footnote under buttons */}
          <p className="text-[11px] sm:text-xs text-blue-200/90 font-medium">
            From system selection to installation and after-sales care.
          </p>
        </div>
      </div>

      {/* Decorative subtle wave accent in bottom-left */}
      <div className="absolute bottom-0 left-0 w-48 h-8 pointer-events-none opacity-80">
        <svg viewBox="0 0 200 40" fill="none" className="w-full h-full">
          <path d="M0 40 C50 10, 150 10, 200 40 Z" fill="#0284c7" opacity="0.4" />
          <path d="M0 40 C60 20, 140 20, 200 40 Z" fill="#f97316" opacity="0.6" />
        </svg>
      </div>
    </section>
  );
}

