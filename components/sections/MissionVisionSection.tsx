"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MissionVisionSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8 sm:mb-12 text-center">
          Mission & <span className="text-primary">Vision</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Mission Card */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 hover:border-primary/40 bg-surface/70 hover:bg-surface p-6 sm:p-8 md:p-10 transition-all duration-300 shine-hover shadow-xl h-full flex flex-col items-center text-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                  flag
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/80 font-inter leading-relaxed text-center">
                To make fitness accessible through proven sports science and exercise physiology principles—replacing boring, repetitive routines with engaging, motivating, level-based training and personalized nutritional and medical tracking.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Vision Card */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 hover:border-primary/40 bg-surface/70 hover:bg-surface p-6 sm:p-8 md:p-10 transition-all duration-300 shine-hover shadow-xl h-full flex flex-col items-center text-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                  visibility
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/80 font-inter leading-relaxed text-center">
                To be a premier lifestyle center (Wellness Hub) where sports science and comfort blend to renew people&apos;s lives, health, and confidence in a scientific, safe, and enjoyable way.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
