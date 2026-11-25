"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How quickly can a technician visit my location?",
    answer:
      "For standard requests, a technician can be booked for same-day or next-day morning/afternoon slots. For emergency breakdowns (such as complete water purifier failure, electrical tripping, or AC breakdown in peak summer), our priority dispatch team aims to reach within 2 to 4 hours in covered cities.",
  },
  {
    question: "Are replacement spare parts covered under warranty?",
    answer:
      "Yes. All authentic spare parts, RO membranes, AC capacitors, compressor components, and solar cables installed by Prigo technicians come with an official manufacturer warranty, typically ranging from 6 months to 1 year, backed by your digital tax invoice.",
  },
  {
    question: "Can Prigo service products not purchased from Prigo?",
    answer:
      "Yes! Our technicians are multi-brand certified. Whether your solar installation, RO purifier, or air conditioner was purchased from another retail store or online marketplace, our team can handle maintenance, diagnosis, and repairs seamlessly.",
  },
  {
    question: "What is included in the 90-day service warranty?",
    answer:
      "Our 90-day post-service warranty covers the exact issue and workmanship addressed during the visit. If the same problem reoccurs within 90 days, a technician will revisit, re-inspect, and resolve it with zero additional service charge.",
  },
  {
    question: "How do Annual Maintenance Contracts (AMC) work?",
    answer:
      "An AMC gives you hassle-free, scheduled maintenance throughout the year. You receive automated reminder notifications before quarterly preventive health check visits, unlimited free breakdown calls, free labor on diagnostics, and discounted rates on genuine replacement consumables.",
  },
  {
    question: "What are the service inspection charges?",
    answer:
      "Inspection fees start at ₹299 (which covers technician visit, doorstep diagnosis, and safety testing). If you approve the repair estimate and proceed with the service during the same visit, the ₹299 inspection fee is completely waived off from your final bill.",
  },
];

export default function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#F47721]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Common Questions About Our Services
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Everything you need to know about doorstep visits, rates, AMC protection,
            and our 90-day guarantee.
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
                        : "bg-gray-100 text-gray-600 shadow-xs"
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

