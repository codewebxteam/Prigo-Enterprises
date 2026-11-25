import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="w-full py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image with 10+ Years Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="/images/about-eco-house.jpg"
                alt="Eco-friendly Solar Powered Contemporary Home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating 10+ Years of Excellence Circular Badge */}
            <div className="absolute -bottom-6 right-6 sm:right-10 bg-white rounded-full p-4 shadow-2xl border-4 border-blue-50 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#005ea6] leading-none">
                10+
              </span>
              <span className="text-[10px] sm:text-xs font-extrabold text-gray-700 leading-tight mt-1">
                Years of Excellence
              </span>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
              About Prigo Energy
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0c2340] leading-tight">
              Innovative{" "}
              <span className="text-[#005ea6]">Energy Solutions</span> for a
              Sustainable Future
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              At Prigo Energy, we are committed to deliver high-quality solar,
              RO, and electrical solutions that empower homes, businesses, and
              communities. With a decade of experience, we bring technology,
              trust, and service together for a greener and brighter tomorrow.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm font-bold text-gray-800">
                  Eco-Friendly Solutions
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm font-bold text-gray-800">
                  Professional Installation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm font-bold text-gray-800">
                  Reliable After-Sales Service
                </span>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-2">
              <Link
                href="#learn-more"
                className="inline-flex items-center gap-2 border-2 border-[#005ea6] text-[#005ea6] hover:bg-[#005ea6] hover:text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
