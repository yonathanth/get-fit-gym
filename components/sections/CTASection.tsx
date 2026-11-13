"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoTourModal from "@/components/ui/VideoTourModal";

export default function CTASection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden w-full px-5 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 flex flex-col justify-center items-center text-center">
        {/* Ambient glow + fading grid, echoing the hero */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] sm:w-[520px] lg:w-[760px] h-[240px] lg:h-[320px] bg-primary/[0.09] rounded-full blur-[120px] lg:blur-[160px] animate-pulse-glow" />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,black,transparent)]"
        />

        <div className="w-full max-w-4xl">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-impact uppercase tracking-tight leading-[1.02] text-[clamp(2.25rem,7vw,5rem)] text-balance mb-8 sm:mb-12">
              <span className="text-fade">Become the </span>
              <span className="text-shimmer">Strongest</span>
              <br />
              <span className="text-fade">Version of Yourself.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <Link
                href="/register"
                className="group inline-flex w-full max-w-[260px] sm:w-auto items-center justify-center gap-2 rounded-[9999px] bg-gradient-to-b from-[#E6A847] to-primary px-8 py-3.5 sm:py-4 font-inter text-sm sm:text-[15px] font-semibold text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_30px_-10px_rgba(217,151,43,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_14px_36px_-10px_rgba(217,151,43,0.85)] active:translate-y-0"
              >
                Register now
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="group inline-flex w-full max-w-[260px] sm:w-auto items-center justify-center gap-2.5 rounded-[9999px] border border-white/15 bg-white/[0.03] backdrop-blur-sm pl-2 pr-7 py-2 font-inter text-sm sm:text-[15px] font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07] cursor-pointer"
              >
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-[9999px] bg-white/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-black">
                  <span className="material-symbols-outlined text-[22px] [font-variation-settings:'FILL'_1]">play_arrow</span>
                </span>
                Video tour
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <VideoTourModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </>
  );
}
