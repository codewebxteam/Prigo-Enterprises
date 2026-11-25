"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function ServiceBookingCalculator() {
  const [vertical, setVertical] = useState<"solar" | "ro" | "appliances">("appliances");
  const [serviceType, setServiceType] = useState<string>("repair");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    timeSlot: "Morning (9 AM - 12 PM)",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      alert("Booking confirmed! Our certified technician will contact you to verify your appointment.");
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        address: "",
        date: "",
        timeSlot: "Morning (9 AM - 12 PM)",
      });
    }, 1500);
  };

  const getEstimatedPrice = () => {
    if (vertical === "solar") {
      if (serviceType === "installation") return "Free Site Feasibility Survey";
      if (serviceType === "cleaning") return "₹499 (Up to 10 Panels)";
      if (serviceType === "repair") return "₹399 (Inspection & Diagnosis)";
      return "From ₹2,999 / year";
    }
    if (vertical === "ro") {
      if (serviceType === "installation") return "₹499 (Standard Wall-Mount)";
      if (serviceType === "cleaning") return "₹299 (TDS & General Check)";
      if (serviceType === "repair") return "₹299 (Inspection + Parts at MRP)";
      return "From ₹1,499 / year";
    }
    // appliances
    if (serviceType === "installation") return "₹799 (AC Standard Install)";
    if (serviceType === "cleaning") return "₹499 (AC Power Jet Clean)";
    if (serviceType === "repair") return "₹299 (Inspection Charge)";
    return "From ₹1,999 / year";
  };

  return (
    <section id="book" className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-gray-200/90 shadow-lg space-y-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0786B9]/10 text-[#0786B9] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#F47721]" />
              <span>DOORSTEP SERVICE DISPATCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B3B] tracking-tight">
              Schedule a Service in 3 Easy Steps
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Verified Prigo engineers at your doorstep at your preferred date and time.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Select Vertical */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#0786B9] uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#0786B9] text-white flex items-center justify-center text-xs">
                  1
                </span>
                <span>Select Service Domain</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {[
                  { id: "solar", title: "Solar Solutions", desc: "Rooftop panels, Inverter, AMC" },
                  { id: "ro", title: "RO & Water Systems", desc: "Purifier, Filters, TDS check" },
                  { id: "appliances", title: "Electrical & Appliances", desc: "AC, Fridge, Washing Machine" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setVertical(item.id as "solar" | "ro" | "appliances")}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      vertical === item.id
                        ? "border-[#0786B9] bg-[#0786B9]/5 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <span className="text-sm font-extrabold text-[#172B3B] block">
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-500">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Service Action */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#0786B9] uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#0786B9] text-white flex items-center justify-center text-xs">
                  2
                </span>
                <span>Choose Service Required</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: "installation", label: "Installation & Setup" },
                  { id: "cleaning", label: "Cleaning & Maintenance" },
                  { id: "repair", label: "Repair & Diagnostics" },
                  { id: "amc", label: "Annual AMC Plan" },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setServiceType(type.id)}
                    className={`p-3.5 rounded-xl border text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                      serviceType === type.id
                        ? "bg-[#0786B9] text-white border-[#0786B9] shadow-xs"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Date, Time & Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#0786B9] uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#0786B9] text-white flex items-center justify-center text-xs">
                  3
                </span>
                <span>Appointment &amp; Contact Details</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    City / Complete Address *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Sector, Landmark, City"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0786B9] bg-white"
                    >
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 3 PM)</option>
                      <option>Evening (3 PM - 7 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Estimate Box */}
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#0786B9] uppercase block">
                      Estimated Starting Fee
                    </span>
                    <span className="text-sm font-extrabold text-[#172B3B]">
                      {getEstimatedPrice()}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500">
                    * Inspection fee waived if repair is executed
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Zero cancellation charges • 90-day post-service warranty</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F47721] hover:bg-[#e06616] text-white font-extrabold text-sm px-8 py-3.5 rounded-full transition-colors cursor-pointer shadow-md"
              >
                <span>{isSubmitted ? "Confirming..." : "Confirm Doorstep Appointment"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

