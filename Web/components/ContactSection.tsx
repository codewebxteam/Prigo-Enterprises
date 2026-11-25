"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  User,
  LayoutGrid,
  MessageSquare,
  Send,
  ShieldCheck,
  Headphones,
  Settings,
  Home,
  CheckCircle,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert("Thank you! Your message has been sent. Our team will contact you shortly.");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      setSubmitted(false);
    }, 400);
  };

  return (
    <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/20 to-white overflow-hidden" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Main Grid: Left Info & House + Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
          {/* Left Column: Heading, Contact Info & House Photo */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Tagline */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-8 h-[2px] bg-orange-400"></span>
                <span className="text-[11px] sm:text-xs font-black tracking-widest text-orange-600 uppercase">
                  GET IN TOUCH
                </span>
                <span className="w-8 h-[2px] bg-orange-400"></span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0c2340] tracking-tight leading-[1.12] mb-3.5">
                Let&apos;s Power a <br />
                Smarter <span className="text-orange-500">Tomorrow.</span>
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-relaxed max-w-lg mb-8">
                Have a question? Need expert advice? Our team is here to help you with the right solutions for your home.
              </p>

              {/* 3 Contact Info Items */}
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-11 h-11 rounded-full bg-blue-50 group-hover:bg-[#005ea6] text-[#005ea6] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-xs">
                    <Phone className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 block uppercase tracking-wider">
                      Call Us
                    </span>
                    <a
                      href="tel:+919876543210"
                      className="text-sm sm:text-base font-black text-[#0c2340] hover:text-[#005ea6] transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-11 h-11 rounded-full bg-blue-50 group-hover:bg-[#005ea6] text-[#005ea6] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-xs">
                    <Mail className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 block uppercase tracking-wider">
                      Email Us
                    </span>
                    <a
                      href="mailto:support@prigoenergy.in"
                      className="text-sm sm:text-base font-black text-[#0c2340] hover:text-[#005ea6] transition-colors"
                    >
                      support@prigoenergy.in
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-11 h-11 rounded-full bg-blue-50 group-hover:bg-[#005ea6] text-[#005ea6] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-xs">
                    <MapPin className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 block uppercase tracking-wider">
                      Visit Our Showroom
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#0c2340]">
                      123 Energy Park, New Delhi – 110001
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Solar Villa Photo matching reference */}
            <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-100">
              <Image
                src="/images/contact-house.jpg"
                alt="Modern solar villa showroom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: "Send Us a Message" Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[28px] p-6 sm:p-9 shadow-2xl border border-gray-100/90">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0c2340] tracking-tight mb-1.5">
                  Send Us a Message
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  Fill out the form and our team will get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#005ea6] focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50/50"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone *"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#005ea6] focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* Row 2: Email */}
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#005ea6] focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50/50"
                  />
                </div>

                {/* Row 3: Select Service */}
                <div className="relative">
                  <LayoutGrid className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-[#005ea6] focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50/50 cursor-pointer appearance-none"
                  >
                    <option value="">Select Service</option>
                    <option value="solar">Solar Installation &amp; Maintenance</option>
                    <option value="ro">RO &amp; Water Purification System</option>
                    <option value="appliances">Electrical &amp; Home Appliances</option>
                    <option value="amc">Annual Maintenance Contract (AMC)</option>
                    <option value="consultation">General Consultation &amp; Inquiry</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                    ▼
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#005ea6] focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50/50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message →</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Curved Wave Accent Line */}
        <div className="w-full h-8 relative mb-4 pointer-events-none">
          <svg viewBox="0 0 1200 40" fill="none" className="w-full h-full preserve-3d">
            <path
              d="M0 25 C300 5, 800 45, 1200 15"
              stroke="#f97316"
              strokeWidth="2.5"
              fill="none"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Bottom 4 Trust Highlights matching reference UI */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {/* Badge 1 */}
          <div className="flex items-center gap-3.5 px-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#005ea6] flex items-center justify-center flex-shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-tight">
                Trusted Brand
              </h4>
              <p className="text-[11px] text-gray-500 font-medium">
                Quality you can rely on
              </p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-3.5 px-3 pt-4 sm:pt-0">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#005ea6] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Headphones className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-tight">
                Expert Support
              </h4>
              <p className="text-[11px] text-gray-500 font-medium">
                Always here to help
              </p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-3.5 px-3 pt-4 sm:pt-0">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#005ea6] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Settings className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-tight">
                Professional Service
              </h4>
              <p className="text-[11px] text-gray-500 font-medium">
                Installation, Repair &amp; Maintenance
              </p>
            </div>
          </div>

          {/* Badge 4 */}
          <div className="flex items-center gap-3.5 px-3 pt-4 sm:pt-0">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#005ea6] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Home className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-tight">
                Complete Solutions
              </h4>
              <p className="text-[11px] text-gray-500 font-medium">
                Solar | RO | Electrical | Appliances
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

