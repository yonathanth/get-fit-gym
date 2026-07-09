"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#programs", label: "Programs" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-white/5 w-full sticky top-0 z-50 px-4 md:px-6 h-[72px]">
      <div className="flex justify-between items-center w-full h-full max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-white font-impact uppercase">
          Get Fit
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium  transition-colors duration-200 ${
                link.active
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="bg-primary text-on-primary text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-white transition-all tracking-widest">
            REGISTER NOW
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-white/5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-base font-normal tracking-normal transition-colors duration-200 ${
                  link.active
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-primary font-semibold text-on-primary text-xs font-medium px-6 py-2.5 rounded-full hover:bg-white transition-all tracking-widest w-full">
              REGISTER NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
