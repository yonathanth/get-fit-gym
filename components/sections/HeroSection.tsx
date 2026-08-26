"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import VideoTourModal from "@/components/ui/VideoTourModal";

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden flex flex-col px-4 md:px-6 py-8 md:py-12" style={{ height: 'calc(100vh - 72px)' }}>
        {/* Subtle Ambient Background Aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[700px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />

        <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-2 h-full">
          {/* Main Title Area */}
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase italic"
            >
              Strong Mind. Strong Body.{" "}
              <span className="text-primary text-glow block sm:inline">
                Stronger Life.
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl -mt-2"
            >
              <p className="text-secondary leading-normal font-normal text-base md:text-lg italic font-inter">
                A Science-Backed, Experience-Driven Holistic Health and Fitness Center.
              </p>
            </motion.div>
          </div>

          {/* Hero Image / Video Trigger Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex-1 min-h-0 mt-4 md:mt-6 max-h-[400px] sm:max-h-[450px] md:max-h-none"
          >
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full h-full rounded-[24px] md:rounded-[32px] overflow-hidden relative border border-white/5 shadow-2xl bg-surface group cursor-pointer"
            >
              <img
                alt="High-end gym space with a focused, powerful atmosphere."
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsVideoModalOpen(true);
                  }}
                  className="group/btn relative flex flex-col items-center gap-2 md:gap-3 transition-transform hover:scale-110 cursor-pointer focus:outline-none"
                  aria-label="Open Video Tour"
                >
                  {/* Subtle Sonar Ripple Rings */}
                  <div className="absolute inset-0 -m-2 rounded-2xl bg-primary/25 animate-ripple pointer-events-none" />

                  <div className="w-20 h-10 md:w-28 md:h-14 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_40px_rgba(217,151,43,0.4)] group-hover/btn:bg-white group-hover/btn:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300">
                    <span className="material-symbols-outlined text-on-primary text-3xl md:text-4xl group-hover/btn:text-black transition-colors">
                      play_arrow
                    </span>
                  </div>
                  <span className="text-white font-inter font-medium tracking-wide text-xs md:text-sm drop-shadow-lg uppercase">
                    Video Tour
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Tour Lightbox Modal */}
      <VideoTourModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
}
