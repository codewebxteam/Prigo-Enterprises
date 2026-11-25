"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How does a rooftop solar system work?",
    answer:
      "Rooftop solar panels convert incident sunlight into Direct Current (DC) electricity. A high-efficiency solar inverter then converts this DC power into Alternating Current (AC) electricity to run your household appliances. Any surplus power generated can be fed back into the grid through net metering, earning you billing credits.",
  },
  {
    question: "Can solar reduce my electricity bill?",
    answer:
      "Yes, substantially. A properly sized rooftop solar system typically reduces your electricity bill by 60% to 80% or more, depending on your daily usage, roof orientation, and whether you choose an on-grid or hybrid system with battery backup.",
  },
  {
    question: "How do I choose the right solar capacity?",
    answer:
      "System capacity is calculated based on your average monthly units (kWh) consumed, sanction load from the electricity board, and available shadow-free rooftop area (approx. 100 sq. ft. per 1 kW). Our team conducts a complete site feasibility survey to recommend your optimal capacity.",
  },
  {
    question: "Does Prigo provide solar installation?",
    answer:
      "Yes. Prigo offers full turnkey delivery — including site survey, customized CAD layout, MNRE-compliant structural mounting, certified electrical wiring, DISCOM net metering approvals, and final grid synchronization by experienced engineers.",
  },
  {
    question: "Do solar systems require maintenance?",
    answer:
      "Solar photovoltaic systems have zero moving parts, making maintenance exceptionally low. Basic routine cleaning with clean water every 2 to 3 weeks maintains peak output. Prigo also provides comprehensive Annual Maintenance Contracts (AMC) covering health checks and wiring inspections.",
  },
  {
    question: "Can solar be installed for commercial properties?",
    answer:
      "Yes, absolutely. We design robust, scalable commercial and industrial solar setups for offices, factories, hospitals, and educational campuses, helping businesses manage high peak tariff rates and claim accelerated depreciation tax benefits.",
  },
];

export default function SolarFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#F5F7FA] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#F47721]" />
            <span>CLARITY &amp; INSIGHTS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Questions About Solar? We&apos;ve Got Answers.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Everything you need to know about switching to solar, savings,
            net metering, and professional installation.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-extrabold text-[#172B3B] pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#0786B9] text-white rotate-180"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn">
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

