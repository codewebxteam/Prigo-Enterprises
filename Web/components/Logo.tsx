import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({
  variant = "light",
  className = "",
}: LogoProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Official Transparent Brand Logo */}
      <div
        className={`relative h-14 sm:h-18 lg:h-20 w-16 sm:w-20 lg:w-24 transition-transform duration-200 hover:scale-[1.02] ${
          variant === "dark"
            ? "bg-white/95 p-1.5 rounded-xl shadow-md border border-white/20"
            : ""
        }`}
      >
        <Image
          src="/images/logo.png"
          alt="Prigo Logo - हमारा परिवार जनता बाजार"
          fill
          sizes="(max-width: 640px) 70px, (max-width: 1024px) 85px, 100px"
          priority
          className="object-contain object-left"
        />
      </div>
    </div>
  );
}
