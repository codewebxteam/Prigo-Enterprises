"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SolutionCard {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  badge?: string;
}

const solutions: SolutionCard[] = [
  {
    id: "rooftop",
    title: "Rooftop Solar Systems",
    description:
      "Complete rooftop solar systems designed around your home, energy usage and roof space.",
    ctaText: "Explore Rooftop Solar",
    ctaHref: "#residential",
    imageSrc: "/images/about-eco-house.jpg",
    badge: "Most Popular",
  },
  {
    id: "panels",
    title: "Solar Panels",
    description:
      "Reliable solar panels designed to generate efficient power for your home or business.",
    ctaText: "Explore Solar Panels",
    ctaHref: "#products",
    imageSrc: "/images/prod-solar-panel.jpg",
  },
  {
    id: "inverters",
    title: "Solar Inverters",
    description:
      "Efficient inverter solutions for converting and managing your solar energy.",
    ctaText: "Explore Inverters",
    ctaHref: "#products",
    imageSrc: "/images/prod-solar-inverter.jpg",
  },
  {
    id: "batteries",
    title: "Solar Batteries",
    description:
      "Store solar energy and use it when you need dependable power.",
    ctaText: "Explore Solar Batteries",
    ctaHref: "#products",
    imageSrc: "/images/prod-solar-battery.jpg",
  },
];

export default function SolarSolutionsCategory() {
  return (
    <section id="solutions" className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
            <span>OUR SOLAR SOLUTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Complete Solar Solutions. Built Around Your Needs.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Everything you need to generate, store and manage clean energy —
            backed by expert guidance and professional installation.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#0786B9]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Large Image Area */}
              <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {item.badge && (
                  <span className="absolute top-3 right-3 bg-[#0786B9] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#172B3B] group-hover:text-[#0786B9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Minimal Blue Arrow Button */}
                <div className="pt-2 border-t border-gray-100">
                  <Link
                    href={item.ctaHref}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0786B9] group-hover:text-[#087FB3] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

