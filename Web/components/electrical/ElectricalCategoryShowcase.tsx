"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wind, Snowflake, Shirt, Fan, Zap } from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const categories: CategoryItem[] = [
  {
    id: "ac",
    name: "AIR CONDITIONERS",
    tagline: "Cool comfort, all season.",
    ctaText: "Explore ACs",
    ctaHref: "#products",
    image: "/images/review-ac.jpg",
    icon: Snowflake,
  },
  {
    id: "refrigerators",
    name: "REFRIGERATORS",
    tagline: "Freshness that lasts.",
    ctaText: "Explore Refrigerators",
    ctaHref: "#products",
    image: "/images/card-appliances.jpg",
    icon: Wind,
  },
  {
    id: "washing",
    name: "WASHING MACHINES",
    tagline: "Care made effortless.",
    ctaText: "Explore Washing Machines",
    ctaHref: "#products",
    image: "/images/service-appliance.jpg",
    icon: Shirt,
  },
  {
    id: "coolers",
    name: "AIR COOLERS",
    tagline: "A refreshing way to beat the heat.",
    ctaText: "Explore Coolers",
    ctaHref: "#products",
    image: "/images/card-appliances.jpg",
    icon: Fan,
  },
  {
    id: "electrical",
    name: "ELECTRICAL ESSENTIALS",
    tagline: "The essentials that power your home.",
    ctaText: "Explore Electricals",
    ctaHref: "#products",
    image: "/images/vertical-electric.jpg",
    icon: Zap,
  },
];

export default function ElectricalCategoryShowcase() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
            <span>EXPLORE OUR COLLECTION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Made for your home. Built for everyday comfort.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Explore reliable appliances and electrical essentials for every space.
          </p>
        </div>

        {/* 5-Category Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.id}
                className="group flex flex-col justify-between bg-[#F4F7FA] rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-[#0786B9]/40 hover:bg-white transition-all duration-300"
              >
                {/* Image Area */}
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs p-2 rounded-xl text-[#0786B9] shadow-xs">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-extrabold text-[#0786B9] uppercase tracking-wider block">
                      {cat.name}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#172B3B] leading-snug">
                      {cat.tagline}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-gray-200/60">
                    <Link
                      href={cat.ctaHref}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0786B9] group-hover:text-[#F47721] transition-colors"
                    >
                      <span>{cat.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F47721] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

