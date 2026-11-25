"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCard {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  badge?: string;
}

const categories: CategoryCard[] = [
  {
    id: "ro",
    title: "RO Water Purifiers",
    description:
      "Reliable purification systems designed for everyday drinking water needs.",
    ctaText: "Explore RO Purifiers",
    ctaHref: "#products",
    imageSrc: "/images/card-ro.jpg",
    badge: "Most Popular",
  },
  {
    id: "uv-uf",
    title: "UV & UF Purifiers",
    description:
      "Explore water purification technologies designed for different water sources and requirements.",
    ctaText: "Explore UV & UF",
    ctaHref: "#products",
    imageSrc: "/images/vertical-ro.jpg",
  },
  {
    id: "dispensers",
    title: "Water Dispensers",
    description:
      "Convenient drinking water solutions for homes, workplaces and shared spaces.",
    ctaText: "Explore Water Dispensers",
    ctaHref: "#products",
    imageSrc: "/images/review-ro.jpg",
  },
  {
    id: "accessories",
    title: "Filters & Accessories",
    description:
      "Explore replacement filters and essential components to maintain your water purifier.",
    ctaText: "Explore Accessories",
    ctaHref: "#products",
    imageSrc: "/images/service-ro.jpg",
  },
];

export default function RoWaterSolutions() {
  return (
    <section id="solutions" className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
            <span>OUR WATER SOLUTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Find the Right Water Solution for Your Home.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            From everyday drinking water to complete purification systems, explore
            solutions designed around your needs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {categories.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-[#0786B9]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Image Area */}
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

