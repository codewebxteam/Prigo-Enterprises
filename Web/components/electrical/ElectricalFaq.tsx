"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Which home appliances are available at Prigo?",
    answer:
      "Prigo offers a curated range of high-efficiency home appliances including Inverter Split Air Conditioners (1 Ton to 2 Ton, 3-Star and 5-Star), Double-Door and Single-Door Frost-Free Refrigerators, Front-Load and Top-Load Smart Washing Machines, Heavy-Duty Desert and Personal Air Coolers, as well as modular electrical switches, wiring, and safety switchgear.",
  },
  {
    question: "Do you provide installation for appliances?",
    answer:
      "Yes, absolutely. All appliances purchased from Prigo include professional doorstep installation support by certified technicians, ensuring proper electrical load balance, copper piping, wall-mounting, and plumbing connections.",
  },
  {
    question: "Can I book repair services for appliances purchased elsewhere?",
    answer:
      "Yes. Our certified appliance service team provides repair, maintenance, and diagnostics for air conditioners, refrigerators, and washing machines of all major brands, regardless of where they were originally purchased.",
  },
  {
    question: "Do you provide maintenance or AMC services?",
    answer:
      "Yes, we provide flexible Annual Maintenance Contracts (AMC) and on-demand maintenance visits. This covers periodic AC jet servicing, gas pressure checks, refrigerator coil cleaning, washing machine descaling, and seasonal cooler preparation.",
  },
  {
    question: "How can I get assistance choosing the right appliance?",
    answer:
      "Our appliance specialists are available to help you choose the right capacity based on your room size, family requirements, and power consumption goals. You can request a call back or reach our customer helpline directly at +91 98765 43210.",
  },
  {
    question: "How can I contact Prigo for service support?",
    answer:
      "You can book a service appointment directly through our online booking modal on this page, email us at support@prigoenergy.in, or call our customer support helpline at +91 98765 43210. We offer quick appointment scheduling and doorstep service across covered cities.",
  },
];

export default function ElectricalFaq() {
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
            <span>HERE TO HELP</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
            Questions? We&apos;ve got answers.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Everything you need to know about purchasing, warranty, installation
            and doorstep appliance repair.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F4F7FA] rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden transition-all duration-200"
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

