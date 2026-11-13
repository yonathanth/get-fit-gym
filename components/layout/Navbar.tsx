"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useSettings } from "@/components/SettingsProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function isLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const settings = useSettings();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`w-full sticky top-0 z-50 h-[72px] border-b transition-[background-color,border-color,box-shadow] duration-500 ${
          isMobileMenuOpen
            ? "bg-transparent border-transparent"
            : isScrolled
            ? "bg-black/85 backdrop-blur-lg border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="w-full px-5 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex justify-between items-center gap-4 w-full max-w-[1280px] mx-auto">
            {/* Logo */}
            {/* flex-1 on both sides keeps the desktop links truly centered */}
            <div className="md:flex-1 flex">
              <Link
                href="/"
                aria-label="Get Fit home"
                className="group flex items-center rounded-[9999px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img
                  src="/logo.png"
                  alt="Get Fit"
                  width={48}
                  height={48}
                  className="h-10 w-10 sm:h-11 sm:w-11 drop-shadow-[0_0_12px_rgba(217,151,43,0.25)] transition-transform duration-500 ease-out group-hover:rotate-[-8deg] group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 lg:gap-9 items-center">
              {navLinks.map((link) => {
                const isActive = isLinkActive(pathname, link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative py-2 text-[13px] lg:text-sm font-inter font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/65 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {/* Hover: thin line draws in from the left */}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white/50 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    )}
                    {/* Active: short solid bar that slides between links */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-underline"
                        transition={{ type: "spring", stiffness: 500, damping: 38 }}
                        className="absolute bottom-0 inset-x-0 mx-auto h-[2px] w-5 rounded-full bg-primary"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex md:flex-1 justify-end gap-4 items-center">
              <Link
                href="/register"
                className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-[9999px] bg-gradient-to-b from-[#E6A847] to-primary pl-5 pr-4 py-2 font-inter text-[13px] font-semibold text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_20px_-8px_rgba(217,151,43,0.7)] transition-all duration-300 ease-out hover:-translate-y-px hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_28px_-8px_rgba(217,151,43,0.85)] active:translate-y-0 active:scale-[0.98]"
              >
                Register now
                <span className="material-symbols-outlined text-[17px] transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMobileMenuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.18, ease: EASE }}
                  className="material-symbols-outlined text-2xl"
                >
                  {isMobileMenuOpen ? "close" : "menu"}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay. Rendered outside <nav> so the nav's backdrop-filter can't trap it. */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, ease: EASE } }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE, delay: 0.12 } }}
            className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl overflow-y-auto"
          >
            {/* Ambient glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="absolute top-1/2 left-1/2 -ml-[150px] -mt-[150px] w-[300px] h-[300px] bg-primary/[0.08] rounded-[9999px] blur-[100px] pointer-events-none"
            />

            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
                exit: { transition: { staggerChildren: 0.025, staggerDirection: -1 } },
              }}
              className="relative min-h-full w-full max-w-md mx-auto flex flex-col justify-between items-center pt-[96px] pb-8 sm:pb-12 px-6"
            >
              {/* Links */}
              <div className="flex flex-col items-center justify-center gap-5 sm:gap-6 my-auto w-full">
                {navLinks.map((link) => {
                  const isActive = isLinkActive(pathname, link.href);
                  return (
                    <motion.div
                      key={link.label}
                      variants={{
                        hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: EASE } },
                        exit: { opacity: 0, y: -10, filter: "blur(4px)", transition: { duration: 0.2, ease: EASE } },
                      }}
                      className="w-full text-center"
                    >
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`relative inline-block font-impact text-2xl sm:text-3xl uppercase tracking-wider transition-colors duration-200 py-1 ${
                          isActive ? "text-primary" : "text-white/75 hover:text-white"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                        {isActive && (
                          <span className="absolute -bottom-0.5 inset-x-0 mx-auto h-[2px] w-6 rounded-full bg-primary" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA & location */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                  exit: { opacity: 0, y: 10, transition: { duration: 0.2, ease: EASE } },
                }}
                className="w-full flex flex-col items-center gap-3 mt-6 sm:mt-8 pt-4 border-t border-white/10"
              >
                <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                  <button className="w-full bg-primary font-inter font-bold text-on-primary text-xs sm:text-sm py-3.5 sm:py-4 rounded-full hover:bg-white transition-all tracking-widest uppercase shadow-[0_0_25px_rgba(217,151,43,0.35)] active:scale-95 cursor-pointer">
                    REGISTER NOW
                  </button>
                </Link>
                <p className="text-secondary/60 text-[11px] font-inter uppercase tracking-widest text-center mt-1">
                  {settings.gym_name} • {settings.location_address}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
