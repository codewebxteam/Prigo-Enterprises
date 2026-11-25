import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#005ea6] via-[#0284c7] to-[#0d9488] p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* Left Graphic Icon / Image */}
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border-2 border-white/50 bg-white/20">
                <Image
                  src="/images/cta-earth.jpg"
                  alt="Green Earth Plant"
                  fill
                  sizes="(max-width: 640px) 64px, 80px"
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="text-white space-y-1">
                <h3 className="text-lg sm:text-2xl font-black tracking-tight">
                  Let&apos;s Build a Greener &amp; Smarter Tomorrow Together
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-medium">
                  Get the best deals, expert service, and reliable support — only at Prigo Energy.
                </p>
              </div>
            </div>

            {/* Shop Now Button */}
            <div className="flex-shrink-0">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs sm:text-sm px-7 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
