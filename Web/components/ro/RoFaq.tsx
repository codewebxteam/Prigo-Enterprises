"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do I choose the right RO water purifier?",
    answer:
      "Choosing the right purifier starts with testing your input water TDS (Total Dissolved Solids) and knowing your water source. If TDS is above 300-500 ppm or from a borewell/tanker, a multi-stage RO with TDS controller is recommended. For treated municipal water with low TDS (<200 ppm), UV or UF systems provide safe drinking water while preserving natural minerals.",
  },
  {
    question: "What is the difference between RO, UV and UF purification?",
    answer:
      "RO (Reverse Osmosis) uses a microscopic semi-permeable membrane (0.0001 micron) to filter out dissolved chemical salts, heavy metals, and arsenic. UV (Ultraviolet) uses UV-C rays to neutralize living bacteria and viruses without removing dissolved solids. UF (Ultrafiltration) uses physical hollow-fiber filters (0.01 micron) that block physical microbes without electricity.",
  },
  {
    question: "Does water TDS matter when choosing a purifier?",
    answer:
      "Yes, TDS is a primary deciding factor. TDS indicates the total dissolved salts and minerals in parts per million (ppm). Purifiers equipped with intelligent TDS controllers or mineralizers ensure that essential minerals like calcium and magnesium remain in healthy proportion rather than stripping water completely.",
  },
  {
    question: "How often should RO filters be replaced?",
    answer:
      "Pre-sediment and carbon filters typically require replacement every 6 to 9 months depending on sediment load. The core RO membrane usually lasts 18 to 24 months with regular pre-filter servicing. Smart LED indicators on our purifiers also alert you when it is time for a cartridge swap.",
  },
  {
    question: "Does Prigo provide installation?",
    answer:
      "Yes. Every Prigo water purifier includes professional doorstep installation by verified technicians. Our team handles wall-mounting, leak-proof inlet/outlet connections, TDS calibration, and a post-install water check.",
  },
  {
    question: "Can I book RO repair or maintenance?",
    answer:
      "Absolutely. You can easily book on-demand repair, routine periodic maintenance, or AMC service directly through our website or by calling our customer care number (+91 98765 43210).",
  },
  {
    question: "Do you sell replacement filters and cartridges?",
    answer:
      "Yes, we supply genuine, food-grade OEM replacement kits including spun sediment filters, activated carbon blocks, post-carbon taste enhancers, UV lamps, and authentic RO membranes compatible with all major purifier configurations.",
  },
];

export default function RoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#F47721]" />
            <span>EXPERT ANSWERS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Questions About Water Purifiers?
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Clear, honest answers to help you select, operate and maintain your
            home water purification system.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F5F7FA] rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-100/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-extrabold text-[#172B3B] pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#0786B9] text-white rotate-180"
                        : "bg-white text-gray-600 shadow-xs"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 animate-fadeIn bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

