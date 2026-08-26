"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        isMobileMenuOpen
          ? "fixed inset-0 h-screen z-50 bg-black/95 backdrop-blur-2xl flex flex-col overflow-y-auto"
          : isScrolled
          ? "sticky top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] h-[72px]"
          : "sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5 h-[72px]"
      }`}
    >
      {/* Top Header Bar */}
      <div className="w-full px-4 md:px-6 h-[72px] flex-shrink-0 flex items-center border-b border-white/5">
        <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto">
          {/* Logo */}
          <Link href="/" className="group flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="text-2xl font-impact font-bold tracking-tight text-white uppercase group-hover:text-primary transition-colors">
              Get Fit
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-inter font-medium py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex gap-4 items-center">
            <Link href="/register">
              <button className="bg-primary text-on-primary text-xs font-inter font-bold px-6 py-2.5 rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all tracking-widest cursor-pointer active:scale-95">
                REGISTER NOW
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl transition-transform duration-300">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Full-Screen Centered Mobile Menu Body */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden flex-1 w-full max-w-md mx-auto flex flex-col justify-between items-center py-8 sm:py-12 px-6"
          >
            {/* Ambient Background Glow inside menu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/[0.08] rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* Centered Navigation Links with Stagger */}
            <div className="flex flex-col items-center justify-center gap-5 sm:gap-6 my-auto w-full">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full text-center"
                  >
                    <Link
                      href={link.href}
                      className={`inline-block font-impact text-2xl sm:text-3xl uppercase tracking-wider transition-all duration-200 py-1 ${
                        isActive
                          ? "text-primary text-glow scale-105"
                          : "text-white/80 hover:text-white hover:scale-105"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Centered CTA Action Button & Location Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col items-center gap-3 mt-6 sm:mt-8 pt-4 border-t border-white/10"
            >
              <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                <button className="w-full bg-primary font-inter font-bold text-on-primary text-xs sm:text-sm py-3.5 sm:py-4 rounded-full hover:bg-white transition-all tracking-widest uppercase shadow-[0_0_25px_rgba(217,151,43,0.35)] active:scale-95 cursor-pointer">
                  REGISTER NOW
                </button>
              </Link>
              <p className="text-secondary/60 text-[11px] font-inter uppercase tracking-widest text-center mt-1">
                Get Fit Gym • CMC Michael, Addis Ababa
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
