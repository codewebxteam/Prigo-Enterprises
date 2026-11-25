import React from "react";
import Image from "next/image";
import { Zap, ShieldCheck, Headphones, IndianRupee, Handshake } from "lucide-react";

export default function WhyChooseUs() {
  const steps = [
    {
      title: "Expert Support & Installation",
      icon: <Zap className="w-5 h-5 text-[#005ea6]" />,
    },
    {
      title: "Quality Products & Services",
      icon: <ShieldCheck className="w-5 h-5 text-[#005ea6]" />,
    },
    {
      title: "24/7 Customer Support",
      icon: <Headphones className="w-5 h-5 text-[#005ea6]" />,
    },
    {
      title: "Competitive Pricing",
      icon: <IndianRupee className="w-5 h-5 text-[#005ea6]" />,
    },
    {
      title: "Trusted & Reliable Partner",
      icon: <Handshake className="w-5 h-5 text-[#005ea6]" />,
    },
  ];

  return (
    <section className="w-full py-16 bg-[#f4f8fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-[#0c2340] mb-12">
          Why Choose <span className="text-[#005ea6]">Prigo Energy?</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: 5 Connected Circles */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4 relative">
              {/* Connecting Dotted Line for desktop */}
              <div className="hidden sm:block absolute top-7 left-8 right-8 h-0.5 border-t-2 border-dashed border-blue-200 z-0" />

              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center relative z-10 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-100 shadow-sm group-hover:border-[#005ea6] group-hover:scale-110 flex items-center justify-center transition-all duration-200 mb-3">
                    {step.icon}
                  </div>
                  <h4 className="text-xs font-bold text-gray-800 leading-snug px-1">
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Engineers Image */}
          <div className="lg:col-span-4">
            <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <Image
                src="/images/engineers.jpg"
                alt="Solar Engineers Inspecting Panels with Tablet"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
