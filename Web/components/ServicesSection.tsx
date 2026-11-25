"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  ShieldCheck,
  Wrench,
  Sparkles,
  Calendar,
  Droplets,
  Filter,
  CheckCircle2,
  Wind,
  Zap,
  Headphones,
  ArrowRight,
  Fan,
  Activity,
  Cpu,
} from "lucide-react";

export default function ServicesSection() {
  const serviceCards = [
    {
      step: "01 / SOLAR SERVICES",
      title: "Power your future.\nWe'll take care of it.",
      desc: "From rooftop solar installation to system inspections and ongoing maintenance, get reliable support for your solar energy system.",
      btnText: "Explore Solar Services",
      href: "#solar-services",
      image: "/images/service-solar.jpg",
      imageAlt: "Solar panel rooftop installation technicians",
      pills: [
        { label: "Solar Installation", icon: <Sun className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "System Inspection", icon: <ShieldCheck className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "Solar Repair", icon: <Wrench className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "Panel Cleaning", icon: <Sparkles className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "Solar AMC", icon: <Calendar className="w-3.5 h-3.5 text-[#005ea6]" /> },
      ],
    },
    {
      step: "02 / RO & WATER SERVICES",
      title: "Pure water.\nReliable care.",
      desc: "Installation, filter replacement, water purifier servicing and periodic maintenance for your domestic and commercial water purification systems.",
      btnText: "Explore RO Services",
      href: "#ro-services",
      image: "/images/service-ro.jpg",
      imageAlt: "RO water purifier maintenance technician",
      pills: [
        { label: "RO Installation", icon: <Droplets className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "Filter Replacement", icon: <Filter className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "Water Quality Check", icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "RO Repair", icon: <Wrench className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "Periodic Maintenance", icon: <Calendar className="w-3.5 h-3.5 text-[#005ea6]" /> },
      ],
    },
    {
      step: "03 / ELECTRICAL & APPLIANCE SERVICES",
      title: "Your appliances.\nAlways at their best.",
      desc: "Expert installation, troubleshooting, repair and maintenance for your everyday electrical appliances and home electronics.",
      btnText: "Explore Appliance Services",
      href: "#appliance-services",
      image: "/images/service-appliance.jpg",
      imageAlt: "Washing machine and home appliance repair technician",
      pills: [
        { label: "AC Installation & Repair", icon: <Wind className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "Refrigerator Service", icon: <Activity className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "Washing Machine Repair", icon: <Cpu className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "Cooler Maintenance", icon: <Fan className="w-3.5 h-3.5 text-[#005ea6]" /> },
        { label: "Electrical Repairs", icon: <Zap className="w-3.5 h-3.5 text-[#005ea6]" /> },
      ],
    },
  ];

  return (
    <section className="hidden md:block relative w-full py-14 sm:py-16 bg-white overflow-hidden" id="services">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3 justify-center mb-2">
            <span className="w-10 sm:w-12 h-[1.5px] bg-orange-400"></span>
            <span className="text-[11px] sm:text-xs font-black tracking-widest text-orange-600 uppercase">
              PROFESSIONAL CARE &amp; SUPPORT
            </span>
            <span className="w-10 sm:w-12 h-[1.5px] bg-orange-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0c2340] tracking-tight leading-tight mb-2.5">
            Complete solutions. Expert care. All under <span className="text-orange-500">one roof.</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide max-w-xl mx-auto">
            From solar installation and RO maintenance to appliance repairs, our experts are here to keep everything running smoothly.
          </p>
        </div>

        {/* 3 Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {serviceCards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[26px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Top Technician Photo Area */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Content Area */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                <div>
                  {/* Category Tag */}
                  <span className="text-orange-600 font-black text-[11px] uppercase tracking-wider block mb-2">
                    {card.step}
                  </span>

                  {/* Heading with border accent */}
                  <div className="border-l-3 border-orange-400 pl-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-black text-[#0c2340] leading-[1.25] tracking-tight whitespace-pre-line">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  {/* 5 Mini Pill Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.pills.map((pill, pIdx) => (
                      <div
                        key={pIdx}
                        className="inline-flex items-center gap-1.5 bg-[#f0f6fc] text-gray-700 text-[11px] font-bold px-3 py-1.5 rounded-full border border-blue-50"
                      >
                        {pill.icon}
                        <span>{pill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 bg-[#005ea6] hover:bg-[#004880] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <span>{card.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Support Banner matching reference UI */}
        <div className="mt-10 bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-50 text-[#005ea6] flex items-center justify-center flex-shrink-0 border border-blue-100">
              <Headphones className="w-7 h-7 stroke-[2.2]" />
            </div>
            <div className="border-l-2 border-orange-400 pl-4">
              <h4 className="font-black text-base sm:text-lg text-[#0c2340]">
                Need help with a product or installation?
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                Tell us what you need. Our team will help you find the right solution.
              </p>
            </div>
          </div>
          <Link
            href="#book-service"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Service</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
