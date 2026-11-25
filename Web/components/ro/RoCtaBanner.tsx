"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";

export default function RoCtaBanner() {
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowConsultModal(false);
      setSubmitted(false);
      alert("Thank you! Our water specialist will reach out to you within 2 hours.");
    }, 1200);
  };

  return (
    <section className="relative w-full bg-[#041a35] py-20 sm:py-24 lg:py-28 overflow-hidden text-white">
      {/* Background Graphic with Deep Blue Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <Image
          src="/images/card-ro.jpg"
          alt="RO water purifier background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041a35] via-[#041a35]/90 to-[#0786B9]/40 z-0 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#0786B9]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-[#F47721]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F47721]" />
            <span>YOUR WATER, YOUR WAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold tracking-tight leading-tight">
            Let&apos;s Find the Right Water Solution.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
            Whether you need a new purifier, installation or maintenance, our
            team is here to help you get clean, refreshing drinking water.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F47721] to-[#e06616] hover:from-[#e06616] hover:to-[#cb570d] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Explore RO Products</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <button
              type="button"
              onClick={() => setShowConsultModal(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent border-2 border-white/70 hover:border-white text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              <span>Book a Service</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0786B9]" />
              Free Water Quality TDS Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0786B9]" />
              Doorstep Delivery &amp; Demo
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0786B9]" />
              Genuine Spare Parts Assurance
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Consultation / Service Modal */}
      {showConsultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative bg-white text-[#172B3B] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100">
            <button
              onClick={() => setShowConsultModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-2 mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-[#172B3B]">
                Water Solution Assistance
              </h3>
              <p className="text-xs text-gray-500">
                Tell us your requirement to connect with a Prigo water expert.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-[#172B3B]">Request Received!</h4>
                <p className="text-xs text-gray-500">
                  Our advisor will contact you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
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
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Water Source
                  </label>
                  <select className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9] bg-white">
                    <option>Municipal Water Supply</option>
                    <option>Borewell / Ground Water</option>
                    <option>Water Tanker / Mixed Source</option>
                    <option>Unsure / Need Free TDS Check</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F47721] hover:bg-[#e06616] text-white font-extrabold text-sm py-3 rounded-xl transition-colors shadow-md mt-2 cursor-pointer"
                >
                  Submit &amp; Connect Expert
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

