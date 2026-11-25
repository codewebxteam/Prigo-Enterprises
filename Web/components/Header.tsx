"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  User,
  ShoppingCart,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-2 sm:py-2.5 flex items-center justify-between">
        {/* Transparent Big Logo */}
        <Link href="/" className="flex items-center py-1">
          <Logo />
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-bold text-gray-700">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-[#005ea6] pb-1 border-b-2 border-[#005ea6]"
                : "hover:text-[#005ea6]"
            } relative transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/solar"
            className={`${
              pathname === "/solar"
                ? "text-[#005ea6] pb-1 border-b-2 border-[#005ea6]"
                : "hover:text-[#005ea6]"
            } relative transition-colors`}
          >
            Solar
          </Link>
          <Link
            href="/ro"
            className={`${
              pathname === "/ro"
                ? "text-[#005ea6] pb-1 border-b-2 border-[#005ea6]"
                : "hover:text-[#005ea6]"
            } relative transition-colors`}
          >
            RO Systems
          </Link>
          <Link
            href="/electrical"
            className={`${
              pathname === "/electrical"
                ? "text-[#005ea6] pb-1 border-b-2 border-[#005ea6]"
                : "hover:text-[#005ea6]"
            } relative transition-colors`}
          >
            Electrical &amp; Appliances
          </Link>
          <Link
            href="/services"
            className={`${
              pathname === "/services"
                ? "text-[#005ea6] pb-1 border-b-2 border-[#005ea6]"
                : "hover:text-[#005ea6]"
            } relative transition-colors`}
          >
            Services
          </Link>
        </nav>

        {/* Right Action Icons & CTA Button */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Search Icon */}
          <button
            className="p-1.5 text-gray-600 hover:text-[#005ea6] transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* User Icon */}
          <Link
            href="#login"
            className="p-1.5 text-gray-600 hover:text-[#005ea6] transition-colors"
            aria-label="User Account"
          >
            <User className="w-5 h-5 stroke-[2.2]" />
          </Link>

          {/* Shopping Cart with Badge */}
          <Link
            href="#cart"
            className="relative p-1.5 text-gray-600 hover:text-[#005ea6] transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5 stroke-[2.2]" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
              0
            </span>
          </Link>

          {/* Book a Service CTA Button */}
          <Link
            href="#book-service"
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 ml-1"
          >
            <span>Book a Service</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Right Action Buttons (Search & Menu) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Search Button */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="w-9 h-9 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center text-gray-700 hover:text-[#005ea6] transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center text-gray-700 hover:text-[#005ea6] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 stroke-[2.2]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[2.2]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Input Drawer */}
      {mobileSearchOpen && (
        <div className="lg:hidden px-4 py-2.5 border-t border-gray-100 bg-white/95">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search solar panels, RO purifiers, appliances..."
              className="w-full text-xs py-2 pl-9 pr-4 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#005ea6] transition-colors"
              autoFocus
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-bold py-1.5 ${
              pathname === "/" ? "text-[#005ea6]" : "text-gray-700 hover:text-[#005ea6]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/solar"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-bold py-1.5 ${
              pathname === "/solar" ? "text-[#005ea6]" : "text-gray-700 hover:text-[#005ea6]"
            }`}
          >
            Solar
          </Link>
          <Link
            href="/ro"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-bold py-1.5 ${
              pathname === "/ro" ? "text-[#005ea6]" : "text-gray-700 hover:text-[#005ea6]"
            }`}
          >
            RO Systems
          </Link>
          <Link
            href="/electrical"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-bold py-1.5 ${
              pathname === "/electrical" ? "text-[#005ea6]" : "text-gray-700 hover:text-[#005ea6]"
            }`}
          >
            Electrical &amp; Appliances
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-bold py-1.5 ${
              pathname === "/services" ? "text-[#005ea6]" : "text-gray-700 hover:text-[#005ea6]"
            }`}
          >
            Services
          </Link>
          <div className="pt-2">
            <Link
              href="#book-service"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm px-5 py-2.5 rounded-full w-full"
            >
              <span>Book a Service</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
