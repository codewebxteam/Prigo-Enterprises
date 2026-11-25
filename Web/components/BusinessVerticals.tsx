"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BusinessVerticals() {
  const cards = [
    {
      step: "01 / SOLAR",
      title: "Switch to smarter energy.",
      desc: "Solar panels, inverters, batteries and complete installation solutions.",
      btnText: "Explore Solar",
      href: "/solar",
      image: "/images/card-solar.jpg",
      imageAlt: "Solar panels on rooftop luxury villa",
    },
    {
      step: "02 / WATER",
      title: "Pure water. Every day.",
      desc: "Reliable water purification systems, filters and professional installation.",
      btnText: "Explore RO Systems",
      href: "/ro",
      image: "/images/card-ro.jpg",
      imageAlt: "Modern kitchen RO water purifier and fresh water",
    },
    {
      step: "03 / ELECTRICAL",
      title: "Upgrade everyday living.",
      desc: "Explore home appliances, electrical products and dependable service.",
      btnText: "Explore Appliances",
      href: "/electrical",
      image: "/images/card-appliances.jpg",
      imageAlt: "Smart home appliances - AC, refrigerator, washing machine, cooler",
    },
  ];

  return (
    <section className="hidden md:block relative w-full pt-4 sm:pt-6 pb-12 sm:pb-16 bg-gradient-to-b from-white via-[#f7faff] to-white overflow-hidden" id="solutions">
      {/* Subtle decorative house outline watermark in the background */}
      <div className="absolute top-2 right-10 w-96 h-96 opacity-[0.035] pointer-events-none select-none">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#005ea6] stroke-1">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header with tight, clean spacing */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-3 justify-center mb-2">
            <span className="w-10 sm:w-12 h-[1.5px] bg-orange-400"></span>
            <span className="text-[11px] sm:text-xs font-black tracking-widest text-orange-600 uppercase">
              COMPLETE HOME SOLUTIONS
            </span>
            <span className="w-10 sm:w-12 h-[1.5px] bg-orange-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0c2340] tracking-tight leading-tight mb-2">
            Everything your <span className="text-orange-500">home</span> needs.
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide">
            Smarter energy. Cleaner water. Better living.
          </p>
        </div>

        {/* 3 Large Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[26px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100/90 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Top Text Content Area with optimized padding */}
              <div className="p-5 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                <div>
                  {/* Badge with thin orange line */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-0.5 rounded-full bg-blue-50 text-[#005ea6] text-[11px] font-black tracking-wider uppercase border border-blue-100">
                      {card.step}
                    </span>
                    <span className="w-6 h-[1.5px] bg-orange-400"></span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#0c2340] leading-[1.25] mb-2.5 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed max-w-xs mb-5">
                    {card.desc}
                  </p>
                </div>

                {/* Button */}
                <div>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <span>{card.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Bottom Image Area */}
              <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
