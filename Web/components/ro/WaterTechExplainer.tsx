"use client";

import React, { useState } from "react";
import { Droplet, Filter, ShieldCheck, Zap, Sparkles, Layers, ArrowRight, Info } from "lucide-react";

interface Stage {
  id: string;
  stepNumber: string;
  phase: "PRE-FILTRATION" | "PURIFICATION" | "MINERAL ENRICHMENT";
  name: string;
  subtitle: string;
  description: string;
  poreSize: string;
  targets: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const stages: Stage[] = [
  {
    id: "sediment",
    stepNumber: "01",
    phase: "PRE-FILTRATION",
    name: "Sediment Filter",
    subtitle: "Mechanical Multi-Layer Trap",
    description:
      "Captures visible physical impurities such as dirt, sand, silt, mud, and pipe rust before water enters delicate internal filters.",
    poreSize: "5 Microns",
    targets: ["Sand & Dirt", "Mud & Silt", "Pipe Rust & Algae"],
    icon: Filter,
  },
  {
    id: "carbon",
    stepNumber: "02",
    phase: "PRE-FILTRATION",
    name: "Activated Carbon Filter",
    subtitle: "High-Adsorption Carbon Block",
    description:
      "Adsorbs hazardous chlorine, pesticides, herbicides, volatile organic compounds (VOCs), and removes unpleasant taste and odor.",
    poreSize: "Porosity Engineered",
    targets: ["Chlorine & Odor", "Pesticides & VOCs", "Chemical Residues"],
    icon: Layers,
  },
  {
    id: "ro",
    stepNumber: "03",
    phase: "PURIFICATION",
    name: "Reverse Osmosis (RO)",
    subtitle: "Semi-Permeable Membrane",
    description:
      "Under high pressure, water passes through microscopic pores, filtering out dissolved chemical salts, heavy metals, arsenic, fluorides, and lead.",
    poreSize: "0.0001 Microns",
    targets: ["Heavy Metals & Lead", "Arsenic & Fluoride", "High Dissolved Salts (TDS)"],
    icon: Droplet,
  },
  {
    id: "uv",
    stepNumber: "04",
    phase: "PURIFICATION",
    name: "UV Purification Chamber",
    subtitle: "Germicidal Ultraviolet Ray",
    description:
      "Decontaminates water using high-intensity C-band ultraviolet radiation, permanently neutralizing waterborne bacteria, viruses, and pathogens.",
    poreSize: "254 nm Wavelength",
    targets: ["Bacteria & E. coli", "Viruses & Cysts", "Microbial Pathogens"],
    icon: Zap,
  },
  {
    id: "uf",
    stepNumber: "05",
    phase: "PURIFICATION",
    name: "Ultra-Filtration (UF)",
    subtitle: "Hollow-Fiber Physical Barrier",
    description:
      "A dense hollow-fiber filtration barrier that physically blocks residual micro-impurities and cysts without needing electrical power.",
    poreSize: "0.01 Microns",
    targets: ["Suspended Micro-particles", "Residual Colloidals", "Organic Matter"],
    icon: ShieldCheck,
  },
  {
    id: "alkaline",
    stepNumber: "06",
    phase: "MINERAL ENRICHMENT",
    name: "Alkaline Mineralizer",
    subtitle: "Essential Balance Post-Filter",
    description:
      "Infuses essential calcium, magnesium, and trace natural electrolytes back into the purified water while balancing optimal pH between 7.5 and 8.5.",
    poreSize: "Mineral Infusion",
    targets: ["pH Balance (7.5-8.5)", "Natural Taste Enhancer", "Calcium & Magnesium"],
    icon: Sparkles,
  },
];

export default function WaterTechExplainer() {
  const [selectedStage, setSelectedStage] = useState<Stage>(stages[2]); // Default RO

  return (
    <section className="w-full bg-[#F5F7FA] py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
            <span>UNDERSTANDING WATER PURIFICATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Every Drop, Through a Better Process.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Different purification technologies work in different ways. Understanding
            the process helps you choose the right water purifier for your home.
          </p>
        </div>

        {/* High-Level Journey Flow Breadcrumb */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/80 shadow-xs max-w-4xl mx-auto flex items-center justify-between text-xs sm:text-sm font-extrabold text-[#172B3B] overflow-x-auto gap-3">
          <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
            <span>SOURCE WATER</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#0786B9] flex-shrink-0" />
          <div className="flex items-center gap-2 text-[#0786B9] whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0786B9]" />
            <span>PRE-FILTRATION</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#0786B9] flex-shrink-0" />
          <div className="flex items-center gap-2 text-[#087FB3] whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-[#087FB3]" />
            <span>PURIFICATION TECHNOLOGY</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#0786B9] flex-shrink-0" />
          <div className="flex items-center gap-2 text-[#F47721] whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F47721]" />
            <span>FINAL BALANCED WATER</span>
          </div>
        </div>

        {/* Interactive 6-Stage Grid / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {stages.map((stage) => {
            const IconComp = stage.icon;
            const isSelected = selectedStage.id === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelectedStage(stage)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? "bg-[#0786B9] text-white border-[#0786B9] shadow-lg shadow-[#0786B9]/25 scale-[1.02]"
                    : "bg-white text-[#172B3B] border-gray-200/90 hover:border-[#0786B9]/40 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3 w-full">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-[#0786B9]/10 text-[#0786B9]"
                    }`}
                  >
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span
                    className={`text-[10px] font-black tracking-wider ${
                      isSelected ? "text-white/80" : "text-gray-400"
                    }`}
                  >
                    {stage.stepNumber}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold leading-tight mb-1">
                    {stage.name}
                  </h4>
                  <span
                    className={`text-[10px] font-medium block truncate ${
                      isSelected ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {stage.poreSize}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/90 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="bg-[#F47721] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  STAGE {selectedStage.stepNumber}
                </span>
                <span className="text-xs font-bold text-[#0786B9] uppercase tracking-wider">
                  {selectedStage.phase}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#172B3B]">
                {selectedStage.name}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {selectedStage.description}
              </p>

              {/* Targets pills */}
              <div className="pt-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Key Impurities Eliminated:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedStage.targets.map((target, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold px-3 py-1.5 rounded-full"
                    >
                      <Sparkles className="w-3 h-3 text-[#F47721]" />
                      <span>{target}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric Highlight Box */}
            <div className="lg:col-span-4 bg-[#F5F7FA] rounded-2xl p-6 border border-gray-200/80 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#172B3B]">
                <Info className="w-4 h-4 text-[#0786B9]" />
                <span>Technical Specifications</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-gray-200/60">
                  <span className="text-gray-500">Pore Filtration Rating:</span>
                  <span className="font-extrabold text-[#172B3B]">
                    {selectedStage.poreSize}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-200/60">
                  <span className="text-gray-500">Replacement Cycle:</span>
                  <span className="font-extrabold text-[#172B3B]">
                    6 - 12 Months
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-gray-500">Technology Focus:</span>
                  <span className="font-extrabold text-[#0786B9]">
                    {selectedStage.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 italic pt-1 leading-normal">
                * Note: Not every purifier configuration uses all stages; the right setup depends on your source water TDS and local quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

