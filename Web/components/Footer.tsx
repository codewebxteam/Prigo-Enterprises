"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Droplets,
  Wrench,
  Headphones,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Send,
  Zap,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing to Prigo Energy updates!");
      setEmail("");
    }
  };

  return (
    <footer className="relative w-full bg-[#041a35] text-gray-300 overflow-hidden pt-12 sm:pt-16">
      {/* Top Background Curve with Sunset Villa Graphic */}
      <div className="absolute top-0 right-0 w-full sm:w-[65%] lg:w-[48%] h-36 sm:h-44 pointer-events-none opacity-40 lg:opacity-75 z-0">
        <Image
          src="/images/footer-villa.jpg"
          alt="Sunset Solar Villa"
          fill
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-cover object-right-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041a35] via-[#041a35]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041a35] via-transparent to-transparent" />
      </div>

      {/* Top Wave Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-12 pointer-events-none z-10 overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full h-full preserve-3d"
        >
          <path
            d="M0 0 C400 30, 900 60, 1440 20"
            stroke="#f97316"
            strokeWidth="3"
            fill="none"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Logo & About (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo Lockup */}
            <div className="space-y-3">
              <Link href="/" className="inline-block">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 transition-transform duration-200 hover:scale-105">
                  <Image
                    src="/images/logo.png"
                    alt="Prigo Logo"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-contain object-left drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]"
                  />
                </div>
              </Link>

              <div className="text-[10px] sm:text-xs font-bold text-gray-300 tracking-wider uppercase">
                SOLAR • RO • ELECTRICAL
              </div>
              <div className="w-12 h-[2px] bg-orange-500"></div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm pt-1">
              Your trusted partner for Solar Solutions, RO Systems, Electrical
              Products and Home Appliances — with sales, installation, repair
              and maintenance services.
            </p>

            {/* Social Icons (Facebook, YouTube, Instagram, LinkedIn) */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#0a2f58] hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.82 0-1.606.27-1.933.64-.326.37-.367.923-.367 1.802v1.542h4.551l-.545 3.667h-4.006v7.98h-4.72z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#0a2f58] hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#0a2f58] hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#0a2f58] hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-extrabold text-sm sm:text-base mb-1">
              Quick Links
            </h4>
            <div className="w-8 h-[2px] bg-orange-500 mb-4"></div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-gray-400 group-hover:text-orange-400">&gt;</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#solutions"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-gray-400 group-hover:text-orange-400">&gt;</span>
                  <span>Our Solutions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-gray-400 group-hover:text-orange-400">&gt;</span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#why-prigo"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-gray-400 group-hover:text-orange-400">&gt;</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-gray-400 group-hover:text-orange-400">&gt;</span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-gray-400 group-hover:text-orange-400">&gt;</span>
                  <span>FAQs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-extrabold text-sm sm:text-base mb-1">
              Our Services
            </h4>
            <div className="w-8 h-[2px] bg-orange-500 mb-4"></div>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="#solar-services"
                  className="hover:text-orange-400 transition-colors flex items-start gap-2.5"
                >
                  <Sun className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Solar Installation &amp; Maintenance</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#ro-services"
                  className="hover:text-orange-400 transition-colors flex items-start gap-2.5"
                >
                  <Droplets className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>RO &amp; Water Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#appliance-services"
                  className="hover:text-orange-400 transition-colors flex items-start gap-2.5"
                >
                  <Wrench className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Electrical &amp; Appliance Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-orange-400 transition-colors flex items-start gap-2.5"
                >
                  <Headphones className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>AMC &amp; Support</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected & Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            {/* Stay Connected */}
            <div>
              <h4 className="text-white font-extrabold text-sm sm:text-base mb-1">
                Stay Connected
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                Get the latest updates, offers and energy tips.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="relative">
                <div className="bg-white rounded-full p-1 pl-3.5 flex items-center shadow-md">
                  <Mail className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none pr-2"
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs px-4 py-2 rounded-full transition-colors flex-shrink-0 cursor-pointer shadow-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Us */}
            <div className="pt-2">
              <h4 className="text-white font-extrabold text-sm sm:text-base mb-1">
                Contact Us
              </h4>
              <div className="w-8 h-[2px] bg-orange-500 mb-3"></div>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                  <a
                    href="tel:+919876543210"
                    className="hover:text-white transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                  <a
                    href="mailto:support@prigoenergy.in"
                    className="hover:text-white transition-colors"
                  >
                    support@prigoenergy.in
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>123 Energy Park, New Delhi – 110001</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          {/* Copyright & CodeWebX attribution */}
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span>© 2026 Prigo Energy. All Rights Reserved.</span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span>
              Designed by{" "}
              <a
                href="https://codewebx.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-bold transition-colors underline decoration-orange-400/40 underline-offset-2"
              >
                CodeWebX
              </a>
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Warranty Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Return Policy
            </Link>
          </div>

          {/* Made in India & Tag Badge */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium">
              <span>🇮🇳</span>
              <span>Made in India</span>
            </div>

            <div className="border border-orange-500/40 bg-orange-500/10 px-3 py-1 rounded-md flex items-center gap-1.5 text-[11px] font-bold text-orange-400">
              <Zap className="w-3 h-3 text-orange-400 fill-orange-400" />
              <span>Powering a Better Tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
