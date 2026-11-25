"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";

export default function SolarCtaBanner() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    billRange: "₹3,000 - ₹5,000",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowQuoteModal(false);
      setSubmitted(false);
      alert("Thank you! Our solar engineer will contact you with a customized estimate.");
    }, 1200);
  };

  return (
    <section id="quote" className="relative w-full bg-[#041a35] py-20 sm:py-24 lg:py-28 overflow-hidden text-white">
      {/* Background Solar Villa Graphic with Deep Blue Overlay */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
        <Image
          src="/images/solar-banner-bg.jpg"
          alt="Rooftop solar panels background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041a35] via-[#041a35]/90 to-[#0786B9]/40 z-0 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#F47721]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-orange-400 text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F47721]" />
            <span>START SAVING TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold tracking-tight leading-tight">
            Ready to Make the Switch to Solar?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
            Let&apos;s find the right solar solution for your home or business.
            Request a personalized feasibility assessment and quotation today.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F47721] to-[#e06616] hover:from-[#e06616] hover:to-[#cb570d] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Get a Solar Quote</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent border-2 border-white/70 hover:border-white text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Our Team</span>
            </a>
          </div>

          {/* Sub-label trust guarantee */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0786B9]" />
              Free Rooftop Feasibility Survey
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0786B9]" />
              Zero Obligation Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0786B9]" />
              MNRE Subsidies Guidance
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Quotation Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative bg-white text-[#172B3B] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100">
            <button
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-2 mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-[#172B3B]">
                Request Solar Quote
              </h3>
              <p className="text-xs text-gray-500">
                Enter your details to receive an instant savings calculation and quotation.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-[#172B3B]">Request Submitted!</h4>
                <p className="text-xs text-gray-500">
                  Our energy advisor will call you within 2 hours with your quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    City / Pin Code *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. New Delhi, 110001"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Approx. Monthly Electricity Bill
                  </label>
                  <select
                    value={formData.billRange}
                    onChange={(e) =>
                      setFormData({ ...formData, billRange: e.target.value })
                    }
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9] bg-white"
                  >
                    <option>Under ₹3,000</option>
                    <option>₹3,000 - ₹5,000</option>
                    <option>₹5,000 - ₹10,000</option>
                    <option>₹10,000 - ₹25,000</option>
                    <option>Above ₹25,000 (Commercial)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F47721] hover:bg-[#e06616] text-white font-extrabold text-sm py-3 rounded-xl transition-colors shadow-md mt-2"
                >
                  Submit &amp; Get Estimate
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

