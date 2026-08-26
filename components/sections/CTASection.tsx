"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoTourModal from "@/components/ui/VideoTourModal";

export default function CTASection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden min-h-[380px] sm:min-h-[440px] md:h-[500px] py-12 sm:py-16 md:py-20 px-4 sm:px-6 flex flex-col justify-center items-center text-center">
        {/* Soft Ambient Glow seamlessly blended */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <div className="w-[300px] sm:w-[500px] md:w-[700px] h-[240px] md:h-[300px] bg-primary/[0.08] rounded-full blur-[120px] md:blur-[180px] animate-pulse-glow" />
        </div>

        <div className="max-w-2xl relative z-10 w-full px-2">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-impact text-[32px] sm:text-[48px] md:text-[76px] leading-[1.1] tracking-tight font-normal text-white mb-8 sm:mb-12 uppercase">
              <div>Become the <span className="text-primary text-glow">Strongest</span></div>
              <div>Version of Yourself.</div>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full">
              <Link href="/register">
                <button className="w-[220px] sm:w-auto bg-primary text-on-primary px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-inter text-sm sm:text-base font-bold hover:bg-white transition-colors duration-200 cursor-pointer shadow-lg">
                  Register Now
                </button>
              </Link>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-[220px] sm:w-auto bg-transparent border border-white/15 hover:border-primary text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-inter text-sm sm:text-base hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              >
                Video Tour
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Tour Modal */}
      <VideoTourModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
}
