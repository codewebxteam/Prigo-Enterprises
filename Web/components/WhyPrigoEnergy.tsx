"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Diamond,
  Wrench,
  Home as HomeIcon,
  Headphones,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function WhyPrigoEnergy() {
  return (
    <section className="relative w-full py-8 sm:py-16 bg-[#f7faff] overflow-hidden" id="why-prigo">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Mobile Section Title matching mockup */}
        <div className="block md:hidden mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-[2.5px] bg-[#f47721] rounded-full"></span>
            <h2 className="text-lg font-black text-[#0c2340]">Why Choose Prigo Energy?</h2>
          </div>
          <p className="text-[11px] text-gray-500 font-semibold pl-8">
            More Value. More Trust.
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Photograph with floating badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[280px] sm:h-[480px] lg:h-[520px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-xl sm:shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="/images/why-prigo-couple.jpg"
                alt="Prigo service technician consulting smiling homeowners"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Floating Badge over image */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 sm:py-3 sm:px-5 shadow-xl sm:shadow-2xl border border-gray-100 flex items-center gap-2.5 sm:gap-3.5 z-20">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#005ea6] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.4]" />
              </div>
              <div>
                <h4 className="font-black text-xs sm:text-sm text-[#0c2340] leading-tight">
                  Your Home.
                </h4>
                <p className="font-extrabold text-xs sm:text-sm text-[#0c2340] leading-tight">
                  Our Responsibility.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & 4 Feature Cards */}
          <div className="lg:col-span-7">
            {/* Tagline (Desktop) */}
            <div className="hidden md:flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-orange-400"></span>
              <span className="text-[11px] sm:text-xs font-black tracking-widest text-orange-600 uppercase">
                WHY PRIGO ENERGY
              </span>
              <span className="w-8 h-[2px] bg-orange-400"></span>
            </div>

            {/* Main Headline (Desktop) */}
            <h2 className="hidden md:block text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0c2340] tracking-tight leading-[1.14] mb-3.5">
              Everything Your Home Needs. <br />
              One <span className="text-orange-500">Trusted Partner.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-relaxed max-w-xl mb-6 sm:mb-8">
              From smarter energy solutions to pure water and everyday appliances, we bring quality products, expert services and dependable support under one roof.
            </p>

            {/* 4 Feature Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Card 1: QUALITY PRODUCTS */}
              <div className="bg-[#edf5fc] hover:bg-[#e2eefa] rounded-2xl p-5 border border-blue-100/60 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#005ea6] flex items-center justify-center mb-3.5">
                  <Diamond className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-black text-xs sm:text-sm text-[#0c2340] uppercase tracking-wide mb-1.5">
                  QUALITY PRODUCTS
                </h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Carefully selected products from trusted brands for your everyday needs.
                </p>
              </div>

              {/* Card 2: EXPERT INSTALLATION */}
              <div className="bg-[#edf5fc] hover:bg-[#e2eefa] rounded-2xl p-5 border border-blue-100/60 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#005ea6] flex items-center justify-center mb-3.5">
                  <Wrench className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-black text-xs sm:text-sm text-[#0c2340] uppercase tracking-wide mb-1.5">
                  EXPERT INSTALLATION
                </h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Professional installation and service support to help everything work efficiently.
                </p>
              </div>

              {/* Card 3: COMPLETE HOME SOLUTIONS */}
              <div className="bg-[#edf5fc] hover:bg-[#e2eefa] rounded-2xl p-5 border border-blue-100/60 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#005ea6] flex items-center justify-center mb-3.5">
                  <HomeIcon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-black text-xs sm:text-sm text-[#0c2340] uppercase tracking-wide mb-1.5">
                  COMPLETE HOME SOLUTIONS
                </h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Solar, RO, electrical and home appliances — all in one place.
                </p>
              </div>

              {/* Card 4: RELIABLE AFTER-SALES SUPPORT */}
              <div className="bg-[#edf5fc] hover:bg-[#e2eefa] rounded-2xl p-5 border border-blue-100/60 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#005ea6] flex items-center justify-center mb-3.5">
                  <Headphones className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-black text-xs sm:text-sm text-[#0c2340] uppercase tracking-wide mb-1.5">
                  RELIABLE AFTER-SALES SUPPORT
                </h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Assistance, repairs and maintenance when you need us.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wide Banner */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-[#005ea6] via-[#004f8c] to-[#003866] rounded-2xl p-5 sm:p-6 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white flex-shrink-0 border border-white/20">
              <HomeIcon className="w-6 h-6 text-amber-300" />
            </div>
            <div className="border-l border-white/25 pl-4">
              <h4 className="font-black text-base sm:text-lg text-white">
                Your Home Deserves the Right Solutions.
              </h4>
              <p className="text-xs sm:text-sm text-blue-100 font-medium">
                Products, installation and support — all from Prigo Energy.
              </p>
            </div>
          </div>

          <Link
            href="#solutions"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm px-7 py-3 rounded-full shadow-lg transition-all duration-200"
          >
            <span>Explore Our Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

