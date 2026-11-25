"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, ShieldCheck, CheckCircle2, PhoneCall, Calendar } from "lucide-react";

const services = [
  {
    number: "01",
    title: "RO Installation & Setup",
    description: "Professional purifier wall-mounting, leak-proof inlet/outlet connections, and pressure calibration.",
  },
  {
    number: "02",
    title: "Filter & Cartridge Replacement",
    description: "Replacement support for compatible filtration components, sediment traps, and genuine RO membranes.",
  },
  {
    number: "03",
    title: "Repair & Troubleshooting",
    description: "Thorough electrical and hydraulic diagnosis, booster pump servicing, and sensor error rectifications.",
  },
  {
    number: "04",
    title: "Periodic Maintenance",
    description: "Routine TDS water tests, filter sanitation, flow checks, and annual maintenance plan visits.",
  },
];

export default function RoServiceSection() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowBookingModal(false);
      setSubmitted(false);
      alert("Service request booked successfully! Our technician will call you shortly.");
    }, 1200);
  };

  return (
    <section id="service" className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Realistic Service Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/service-ro.jpg"
                alt="Professional Indian technician in blue uniform servicing wall-mounted RO water purifier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Verified Service Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0786B9] flex items-center justify-center text-white flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#172B3B]">
                      Certified RO Technicians
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Background-verified, trained on all major purifier brands
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">
                  90-Day Warranty
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Service Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
                <span>EXPERT SERVICE &amp; MAINTENANCE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
                Clean Water Needs Consistent Care.
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                From professional installation to filter replacement and routine
                maintenance, our team helps keep your water purification system
                working reliably.
              </p>
            </div>

            {/* Service List 01-04 */}
            <div className="space-y-4 pt-1">
              {services.map((svc) => (
                <div
                  key={svc.number}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F5F7FA] border border-gray-200/70 hover:border-[#0786B9]/40 hover:bg-white transition-all duration-200"
                >
                  <span className="text-xs font-black text-[#0786B9] bg-white px-2.5 py-1 rounded-lg border border-gray-200 shadow-xs flex-shrink-0">
                    {svc.number}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#172B3B] mb-0.5">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setShowBookingModal(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#0786B9] hover:bg-[#087FB3] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-[#0786B9]/25 transition-all duration-200 cursor-pointer"
              >
                <span>Book RO Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#172B3B] hover:text-[#0786B9] py-3.5 px-4 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#F47721]" />
                <span>Quick Assistance: +91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative bg-white text-[#172B3B] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-2 mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-[#172B3B]">
                Book RO Service
              </h3>
              <p className="text-xs text-gray-500">
                Schedule a certified technician visit at your preferred date and time.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-[#172B3B]">Service Booked!</h4>
                <p className="text-xs text-gray-500">
                  Our service executive will confirm your slot within 30 minutes.
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
                    placeholder="Enter your name"
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
                    Service Required
                  </label>
                  <select className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9] bg-white">
                    <option>RO Installation &amp; Setup</option>
                    <option>Filter Replacement (Kit)</option>
                    <option>Repair &amp; Troubleshooting (Low Flow/Leak)</option>
                    <option>Periodic General Maintenance &amp; TDS Check</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Address / Area *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter locality / city"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0786B9] hover:bg-[#087FB3] text-white font-extrabold text-sm py-3 rounded-xl transition-colors shadow-md mt-2 cursor-pointer"
                >
                  Confirm Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

