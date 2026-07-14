"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-white/5 w-full sticky top-0 z-50 px-4 md:px-6 h-[72px]">
      <div className="flex justify-between items-center w-full h-full max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="text-2xl font-impact font-bold tracking-tight text-white uppercase">
          Get Fit
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-inter font-normal transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/register">
            <button className="bg-primary text-on-primary text-xs font-inter font-bold px-6 py-2.5 rounded-full hover:bg-white transition-all tracking-widest">
              REGISTER NOW
            </button>
          </Link>
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
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-base font-inter font-normal tracking-normal transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <button className="bg-primary font-inter font-semibold text-on-primary text-xs px-6 py-2.5 rounded-full hover:bg-white transition-all tracking-widest w-full">
              REGISTER NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
