"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Shield, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic Care",
    tagline: "Essential yearly protection for a single product.",
    price: 1499,
    period: "per year",
    badge: null,
    features: [
      "2 Scheduled preventive maintenance visits",
      "Up to 2 free breakdown call-outs",
      "10% discount on genuine replacement parts",
      "Standard priority scheduling",
      "Doorstep water / electrical safety test",
    ],
    cta: "Choose Basic Care",
    highlighted: false,
  },
  {
    name: "Comprehensive Shield",
    tagline: "Total peace-of-mind coverage with zero labor fees.",
    price: 3499,
    period: "per year",
    badge: "MOST POPULAR",
    features: [
      "4 Scheduled quarterly deep-service visits",
      "Unlimited free breakdown visits",
      "100% free labor on all diagnostics & repairs",
      "Free basic consumables & filter cleanings",
      "Express 4-hour technician response",
      "15% flat discount on major spare parts",
    ],
    cta: "Get Comprehensive Shield",
    highlighted: true,
  },
  {
    name: "Complete Home Protection",
    tagline: "Multi-product cover for Solar, RO and Home Appliances.",
    price: 7999,
    period: "per year",
    badge: "BEST VALUE",
    features: [
      "Covers Solar Setup + RO Purifier + 2 Appliances",
      "6 Scheduled maintenance visits per year",
      "Unlimited breakdown emergency visits",
      "Free routine filter replacements (Sediment/Carbon)",
      "Solar panel jet wash & inverter calibration",
      "Dedicated senior technical advisor",
    ],
    cta: "Get Full Home Protection",
    highlighted: false,
  },
];

export default function ServiceAmcPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section id="amc" className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 text-[#F47721]" />
            <span>ANNUAL MAINTENANCE CONTRACTS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Hassle-Free Home Care with Prigo AMC
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Comprehensive yearly protection plans with regular scheduled visits,
            free filter cleanings, and zero labor charges.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlighted
                  ? "bg-[#041a35] text-white border-2 border-[#0786B9] shadow-2xl scale-100 md:-translate-y-2"
                  : "bg-[#F4F7FA] text-[#172B3B] border border-gray-200/80 shadow-xs hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F47721] to-amber-500 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                  {plan.badge}
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3
                    className={`text-xl font-black ${
                      plan.highlighted ? "text-white" : "text-[#172B3B]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs mt-1 ${
                      plan.highlighted ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.tagline}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-3xl sm:text-4xl font-black ${
                      plan.highlighted ? "text-white" : "text-[#172B3B]"
                    }`}
                  >
                    ₹{plan.price.toLocaleString("en-IN")}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      plan.highlighted ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    / {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-3 border-t border-gray-200/20">
                  <span
                    className={`text-xs font-extrabold uppercase tracking-wider block ${
                      plan.highlighted ? "text-cyan-300" : "text-[#0786B9]"
                    }`}
                  >
                    Plan Inclusions:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlighted
                            ? "bg-[#0786B9] text-white"
                            : "bg-emerald-100 text-emerald-600"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span
                        className={
                          plan.highlighted ? "text-gray-200" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <Link
                  href="#book"
                  className={`w-full inline-flex items-center justify-center gap-2 font-extrabold text-xs sm:text-sm py-3.5 rounded-full transition-all duration-200 cursor-pointer ${
                    plan.highlighted
                      ? "bg-[#F47721] hover:bg-[#e06616] text-white shadow-lg shadow-orange-500/25"
                      : "bg-[#0786B9] hover:bg-[#087FB3] text-white"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

