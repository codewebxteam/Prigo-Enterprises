"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";

export default function ElectricalCtaBanner() {
  return (
    <section className="relative w-full bg-[#172B3B] py-20 sm:py-24 lg:py-28 overflow-hidden text-white">
      {/* Background Subtle Modern Home Interior */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity">
        <Image
          src="/images/card-appliances.jpg"
          alt="Modern home interior with appliances"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#172B3B] via-[#172B3B]/95 to-[#0786B9]/40 z-0 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#0786B9]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-[#F47721]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-orange-400 text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F47721]" />
            <span>PRIGO APPLIANCES &amp; SERVICE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold tracking-tight leading-tight">
            Let&apos;s make your home a little better.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
            Find the appliances you need and the support you can count on.
            Experience hassle-free delivery, expert installation and prompt after-sales care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F47721] to-[#e06616] hover:from-[#e06616] hover:to-[#cb570d] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent border-2 border-[#0786B9] hover:bg-[#0786B9]/15 text-[#0786B9] hover:text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-colors duration-200"
            >
              <PhoneCall className="w-4 h-4 text-[#F47721]" />
              <span>Talk to Our Team</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0786B9]" />
              100% Genuine Brand Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0786B9]" />
              Doorstep Delivery &amp; Setup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0786B9]" />
              Quick Support &amp; AMC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

