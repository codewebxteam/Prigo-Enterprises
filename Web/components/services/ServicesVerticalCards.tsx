"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Droplets,
  Wrench,
  Search,
  Sparkles,
  Calendar,
  Layers,
  Thermometer,
  ShieldAlert,
  ArrowRight,
  Headphones,
} from "lucide-react";

interface ServiceCardItem {
  id: string;
  step: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonHref: string;
  pills: { name: string; icon: React.ComponentType<{ className?: string }> }[];
}

const serviceCards: ServiceCardItem[] = [
  {
    id: "solar",
    step: "01 / SOLAR SERVICES",
    title: "Power your future. We'll take care of it.",
    description:
      "From rooftop solar installation to system inspections and ongoing maintenance, get reliable support for your solar energy system.",
    image: "/images/service-solar.jpg",
    buttonText: "Explore Solar Services",
    buttonHref: "/solar",
    pills: [
      { name: "Solar Installation", icon: Sun },
      { name: "System Inspection", icon: Search },
      { name: "Solar Repair", icon: Wrench },
      { name: "Panel Cleaning", icon: Sparkles },
      { name: "Solar AMC", icon: Calendar },
    ],
  },
  {
    id: "ro",
    step: "02 / RO & WATER SERVICES",
    title: "Pure water. Reliable care.",
    description:
      "Installation, filter replacement, water purifier servicing and periodic maintenance for your domestic and commercial water purification systems.",
    image: "/images/service-ro.jpg",
    buttonText: "Explore RO Services",
    buttonHref: "/ro",
    pills: [
      { name: "RO Installation", icon: Droplets },
      { name: "Filter Replacement", icon: Layers },
      { name: "Water Quality Check", icon: Search },
      { name: "RO Repair", icon: Wrench },
      { name: "Periodic Maintenance", icon: Calendar },
    ],
  },
  {
    id: "appliances",
    step: "03 / ELECTRICAL & APPLIANCE SERVICES",
    title: "Your appliances. Always at their best.",
    description:
      "Expert installation, troubleshooting, repair and maintenance for your everyday electrical appliances and home electronics.",
    image: "/images/service-appliance.jpg",
    buttonText: "Explore Appliance Services",
    buttonHref: "/electrical",
    pills: [
      { name: "AC Installation & Repair", icon: Thermometer },
      { name: "Refrigerator Service", icon: Layers },
      { name: "Washing Machine Repair", icon: Wrench },
      { name: "Cooler Maintenance", icon: Sparkles },
      { name: "Electrical Repairs", icon: ShieldAlert },
    ],
  },
];

export default function ServicesVerticalCards() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
            <span>THREE DEDICATED SERVICE WINGS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Comprehensive Care Across Every Vertical.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Whether powering your rooftop with solar, ensuring pure drinking water,
            or fixing critical appliances, Prigo certified technicians are always ready.
          </p>
        </div>

        {/* 3 Main Service Cards Grid (Matching reference screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo Area */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
                <div className="space-y-3">
                  <span className="text-[11px] font-black text-[#F47721] uppercase tracking-wider block">
                    {card.step}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#172B3B] group-hover:text-[#0786B9] transition-colors leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* 5 Service Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {card.pills.map((pill, idx) => {
                      const Icon = pill.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 bg-[#F4F7FA] border border-gray-200/70 text-[#172B3B] text-[11px] font-semibold px-2.5 py-1 rounded-full group-hover:border-[#0786B9]/30 transition-colors"
                        >
                          <Icon className="w-3 h-3 text-[#0786B9]" />
                          <span>{pill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={card.buttonHref}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0786B9] hover:bg-[#087FB3] text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors shadow-xs"
                  >
                    <span>{card.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner (Matching reference) */}
        <div className="bg-gradient-to-r from-blue-50/60 via-white to-orange-50/40 rounded-2xl p-6 sm:p-7 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0786B9] flex-shrink-0">
              <Headphones className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#172B3B]">
                Need help with a product or installation?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Tell us what you need. Our team will help you find the right solution.
              </p>
            </div>
          </div>

          <Link
            href="#book"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F47721] to-[#e06616] hover:from-[#e06616] hover:to-[#cb570d] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md shadow-orange-500/20 whitespace-nowrap flex-shrink-0 transition-transform transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Service →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

