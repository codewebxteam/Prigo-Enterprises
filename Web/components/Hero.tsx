"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Headphones,
  Sun,
  Zap,
  Droplets,
  Phone,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* =========================================================================
          DESKTOP HERO (md:block) — Kept 100% intact from existing desktop version
          ========================================================================= */}
      <section className="hidden md:block relative w-full overflow-hidden bg-slate-50">
        {/* Hero Banner with Full Background Image */}
        <div className="relative w-full min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Prigo Solar and Smart Home Appliances"
              fill
              sizes="100vw"
              priority
              className="object-cover object-right sm:object-[80%_center] lg:object-right"
            />
            {/* Subtle soft white gradient overlay on left for high legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 sm:via-white/60 to-transparent w-full sm:w-[65%] lg:w-[52%] pointer-events-none" />
          </div>

          {/* Floating Top-Right Badge: Energy Smart Solutions */}
          <div className="hidden lg:flex absolute top-8 right-12 bg-white/95 backdrop-blur-md rounded-full px-4 py-1.5 shadow-lg border border-gray-100 items-center gap-2 text-xs font-bold text-gray-800 z-20 shadow-black/5">
            <Sun className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Energy Smart Solutions</span>
          </div>

          {/* Floating Bottom-Right Badge: Installation & Support */}
          <div className="hidden lg:flex absolute bottom-12 right-12 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-100 items-center gap-2 text-xs font-bold text-gray-800 z-20 shadow-black/5">
            <Wrench className="w-4 h-4 text-[#005ea6]" />
            <span>Installation &amp; Support</span>
          </div>

          {/* Hero Left Content Container */}
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 w-full">
            <div className="max-w-xl lg:max-w-2xl">
              {/* Tagline / Subtitle Badge */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-8 h-[2px] bg-orange-400"></span>
                <span className="text-[11px] sm:text-xs font-black tracking-widest text-orange-600 uppercase">
                  SMARTER LIVING • BETTER ENERGY
                </span>
                <span className="w-8 h-[2px] bg-orange-400"></span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#0c2340] tracking-tight leading-[1.12] mb-4">
                Powering Your Home. <br />
                <span className="text-orange-500">Simplifying</span> Your Life.
              </h1>

              {/* Subheading Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold leading-relaxed max-w-lg mb-7">
                From solar energy and water purification to everyday home appliances
                — discover reliable products and expert services, all under one roof.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-7">
                <Link
                  href="#products"
                  className="inline-flex items-center gap-2 bg-[#005ea6] hover:bg-[#004880] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-200"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#book-service"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs sm:text-sm px-6 py-3 rounded-full border border-gray-300 shadow-sm hover:shadow transition-all duration-200"
                >
                  <span>Book a Service</span>
                </Link>
              </div>

              {/* Trust Features below buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold text-gray-700 pt-1">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#005ea6]" />
                  <span>Reliable Products</span>
                </div>
                <span className="text-gray-300 font-light">|</span>
                <div className="flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-[#005ea6]" />
                  <span>Expert Installation</span>
                </div>
                <span className="text-gray-300 font-light">|</span>
                <div className="flex items-center gap-1.5">
                  <Headphones className="w-4 h-4 text-[#005ea6]" />
                  <span>After-Sales Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Category Highlight Cards for Desktop */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 -mt-6 sm:-mt-8 relative z-20 pb-4">
          <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-xl border border-gray-100/90 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Card 1: Solar Solutions */}
            <Link
              href="/solar"
              className="group flex items-center justify-between gap-3 px-2 sm:px-4 py-2 hover:opacity-95 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="relative w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0">
                  <Image
                    src="/images/cat-solar.png"
                    alt="Solar Solutions"
                    fill
                    sizes="(max-width: 768px) 80px, 96px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-xs sm:text-sm text-[#005ea6] tracking-tight uppercase group-hover:text-orange-500 transition-colors">
                    SOLAR SOLUTIONS
                  </h3>
                  <p className="text-[11px] text-gray-500 font-medium">
                    Panels • Inverters • Batteries
                  </p>
                </div>
              </div>
              <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </div>
            </Link>

            {/* Card 2: RO & Water Systems */}
            <Link
              href="/ro"
              className="group flex items-center justify-between gap-3 px-2 sm:px-4 py-2 pt-4 md:pt-2 hover:opacity-95 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                  <Image
                    src="/images/cat-ro.png"
                    alt="RO & Water Systems"
                    fill
                    sizes="(max-width: 768px) 56px, 64px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-xs sm:text-sm text-[#005ea6] tracking-tight uppercase group-hover:text-orange-500 transition-colors">
                    RO &amp; WATER SYSTEMS
                  </h3>
                  <p className="text-[11px] text-gray-500 font-medium">
                    Purifiers • Filters • Installation
                  </p>
                </div>
              </div>
              <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </div>
            </Link>

            {/* Card 3: Electrical & Home Appliances */}
            <Link
              href="/electrical"
              className="group flex items-center justify-between gap-3 px-2 sm:px-4 py-2 pt-4 md:pt-2 hover:opacity-95 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="relative w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0">
                  <Image
                    src="/images/cat-appliances.png"
                    alt="Electrical & Home Appliances"
                    fill
                    sizes="(max-width: 768px) 80px, 96px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-xs sm:text-sm text-[#005ea6] tracking-tight uppercase group-hover:text-orange-500 transition-colors">
                    ELECTRICAL &amp; HOME APPLIANCES
                  </h3>
                  <p className="text-[11px] text-gray-500 font-medium">
                    AC • Refrigerator • Washing Machine • Cooler
                  </p>
                </div>
              </div>
              <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VIEW (md:hidden) — Exact implementation of mockup screenshot
          ========================================================================= */}
      <section className="block md:hidden w-full bg-[#f8fbfe] overflow-hidden">
        {/* 1. Mobile Hero with Sunset Villa Background */}
        <div className="relative w-full min-h-[580px] sm:min-h-[640px] flex flex-col justify-between">
          {/* Background Vertical Villa Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-mobile-bg.jpg"
              alt="Prigo Solar Villa & Smart Home Appliances"
              fill
              priority
              sizes="100vw"
              className="object-cover object-bottom"
            />
            {/* Subtle soft gradient over sky to ensure pristine text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-transparent h-72 pointer-events-none" />
          </div>

          {/* Hero Top Content */}
          <div className="relative z-10 px-5 pt-5 pb-36">
            {/* Pill Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#f59e0b] text-[#2b1700] text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full shadow-xs mb-3">
              <Zap className="w-3 h-3 fill-[#2b1700]" />
              <span>SMARTER LIVING • BETTER ENERGY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[28px] leading-[1.12] font-black tracking-tight text-[#0c2340] mb-2.5">
              Powering <br />
              Your Home. <br />
              <span className="text-[#f47721]">
                Simplifying <br />
                Your Life.
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-[11.5px] leading-relaxed text-gray-700 font-semibold max-w-[250px] mb-3.5">
              Reliable solar, water purification and home appliances — all under one roof.
            </p>

            {/* Action Buttons (Compact Mobile Size) */}
            <div className="flex flex-col gap-2 w-fit">
              <Link
                href="/solar"
                className="inline-flex items-center justify-center gap-1.5 bg-[#005ea6] hover:bg-[#004880] text-white font-bold text-[11px] py-1.5 px-4 rounded-full shadow-sm shadow-blue-500/20 transition-all"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-3 h-3 stroke-[2.5]" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-1.5 bg-white/95 hover:bg-white text-gray-800 font-bold text-[11px] py-1.5 px-4 rounded-full shadow-xs border border-gray-200/90 transition-all"
              >
                <Phone className="w-3 h-3 text-gray-600 fill-gray-600" />
                <span>Book a Service</span>
              </Link>
            </div>
          </div>
          {/* Bottom patio appliances in hero-mobile-bg.jpg remain clearly visible here */}
        </div>

        {/* 2. Overlapping Trust Card (Floating over hero bottom) */}
        <div className="relative z-20 px-4 -mt-5 mb-5">
          <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-blue-50 relative overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-gray-100 text-center">
              {/* Reliable Products */}
              <div className="flex flex-col items-center justify-center px-1">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#005ea6] flex items-center justify-center mb-1">
                  <ShieldCheck className="w-4 h-4 stroke-[2.4]" />
                </div>
                <span className="text-[11px] font-black text-[#0c2340] leading-tight">Reliable</span>
                <span className="text-[10px] text-gray-500 font-semibold">Products</span>
              </div>

              {/* Expert Installation */}
              <div className="flex flex-col items-center justify-center px-1">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#005ea6] flex items-center justify-center mb-1">
                  <Headphones className="w-4 h-4 stroke-[2.4]" />
                </div>
                <span className="text-[11px] font-black text-[#0c2340] leading-tight">Expert</span>
                <span className="text-[10px] text-gray-500 font-semibold">Installation</span>
              </div>

              {/* After-Sales Support */}
              <div className="flex flex-col items-center justify-center px-1">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#005ea6] flex items-center justify-center mb-1">
                  <Wrench className="w-4 h-4 stroke-[2.4]" />
                </div>
                <span className="text-[11px] font-black text-[#0c2340] leading-tight">After-Sales</span>
                <span className="text-[10px] text-gray-500 font-semibold">Support</span>
              </div>
            </div>

            {/* Subtle blue accent bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-[#005ea6] to-sky-300" />
          </div>
        </div>

        {/* 3. Our Products Section */}
        <div className="px-4 mb-5">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-5 h-[2.5px] bg-[#f47721] rounded-full"></span>
                <h2 className="text-base font-black text-[#0c2340]">Our Products</h2>
              </div>
              <p className="text-[10px] text-gray-500 font-medium pl-6">
                Smart Solutions for a Sustainable Tomorrow
              </p>
            </div>

            <Link
              href="/solar"
              className="inline-flex items-center gap-1 bg-[#005ea6] hover:bg-[#004880] text-white text-[10.5px] font-bold px-3 py-1.5 rounded-full shadow-xs"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* 3 Category Cards Side-by-Side */}
          <div className="grid grid-cols-3 gap-2">
            {/* Card 1: Solar Solutions */}
            <Link
              href="/solar"
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all"
            >
              <div className="relative w-full h-24 bg-sky-50">
                <Image
                  src="/images/mockup-card-solar.jpg"
                  alt="Solar Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#f47721] text-white flex items-center justify-center shadow-xs">
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                </div>
              </div>
              <div className="p-2 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <Sun className="w-3 h-3 text-[#005ea6] flex-shrink-0" />
                    <h3 className="text-[10px] font-extrabold text-[#0c2340] leading-tight line-clamp-1">
                      Solar Solutions
                    </h3>
                  </div>
                  <p className="text-[8px] text-gray-400 font-medium line-clamp-1">
                    Harness the Sun
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 2: Electrical & Home Appliances */}
            <Link
              href="/electrical"
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all"
            >
              <div className="relative w-full h-24 bg-slate-50">
                <Image
                  src="/images/mockup-card-appliance.jpg"
                  alt="Electrical & Home Appliances"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#f47721] text-white flex items-center justify-center shadow-xs">
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                </div>
              </div>
              <div className="p-2 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <Zap className="w-3 h-3 text-[#005ea6] flex-shrink-0" />
                    <h3 className="text-[10px] font-extrabold text-[#0c2340] leading-tight line-clamp-1">
                      Electrical &amp; Appliances
                    </h3>
                  </div>
                  <p className="text-[8px] text-gray-400 font-medium line-clamp-1">
                    Live Smart
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 3: RO & Water Systems */}
            <Link
              href="/ro"
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all"
            >
              <div className="relative w-full h-24 bg-sky-50">
                <Image
                  src="/images/mockup-card-ro.jpg"
                  alt="RO & Water Systems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#f47721] text-white flex items-center justify-center shadow-xs">
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                </div>
              </div>
              <div className="p-2 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <Droplets className="w-3 h-3 text-[#005ea6] flex-shrink-0" />
                    <h3 className="text-[10px] font-extrabold text-[#0c2340] leading-tight line-clamp-1">
                      RO &amp; Water Systems
                    </h3>
                  </div>
                  <p className="text-[8px] text-gray-400 font-medium line-clamp-1">
                    Pure Water, Healthy Life
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* 4. Our Services Banner */}
        <div className="px-4 mb-6">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#003866] via-[#004f8f] to-[#002747] text-white p-3.5 shadow-md border-b-[3px] border-[#f47721]">
            {/* Background architectural blueprint house sketch watermark */}
            <div className="absolute right-1 top-0 bottom-0 w-32 opacity-25 pointer-events-none select-none">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-[1.5]">
                <path d="M10 50 L50 20 L90 50 L90 90 L10 90 Z" />
                <path d="M50 20 L50 90" />
                <path d="M25 50 L25 75 L45 75 L45 50 Z" />
                <path d="M55 50 L55 75 L75 75 L75 50 Z" />
                <path d="M25 32 L40 32 L40 45 L25 45 Z" />
              </svg>
            </div>

            <div className="relative z-10 flex items-center gap-3">
              {/* Technician Photo */}
              <div className="relative w-16 h-20 flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/mobile-tech.png"
                  alt="Prigo Certified Technician"
                  fill
                  className="object-contain object-bottom"
                />
              </div>

              {/* Service Banner Info & CTA */}
              <div className="flex-1 pr-2">
                <div className="flex items-center gap-1 text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-0.5">
                  <Wrench className="w-3 h-3 stroke-[2.2]" />
                  <span>Our Services</span>
                </div>
                <h3 className="text-xs font-black text-white leading-tight mb-2 max-w-[190px]">
                  Professional Installation &amp; Reliable Maintenance
                </h3>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 bg-white hover:bg-gray-100 text-[#005ea6] text-[10px] font-black px-3 py-1 rounded-full shadow-xs transition-colors"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}