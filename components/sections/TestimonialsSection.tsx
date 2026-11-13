"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";

type View = "front" | "side";

interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  photos: Record<View, string>;
  theme: "gold" | "neutral";
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Best investment in myself. The scientific assessment and level-based training made all the difference in my transformation.",
    name: "Selamawit Desta",
    detail: "Get Fit Member · Transformation",
    photos: { front: "/testi%20one%20front.jpg", side: "/testi%20one%20side.jpg" },
    theme: "gold",
  },
  {
    quote:
      "Get Fit transformed my fitness and health completely. The coaching and nutrition tracking are unmatched.",
    name: "Meron Tadesse",
    detail: "Get Fit Member · Body Recomposition",
    photos: { front: "/testi%20two%20front.jpg", side: "/testi%20two%20side.jpg" },
    theme: "neutral",
  },
];

const themes = {
  gold: {
    card: "bg-gradient-to-b from-[#E8C547]/[0.12] to-[#E8C547]/[0.04] border-[#E8C547]/20 hover:border-[#E8C547]/40",
    accent: "text-[#E8C547]",
    divider: "border-[#E8C547]/15",
    toggle: "border-[#E8C547]/25",
    active: "bg-[#E8C547] text-black",
    frame: "border-[#E8C547]/15",
  },
  neutral: {
    card: "bg-gradient-to-b from-white/[0.06] to-white/[0.02] border-white/10 hover:border-white/20",
    accent: "text-primary",
    divider: "border-white/10",
    toggle: "border-white/10",
    active: "bg-primary text-black",
    frame: "border-white/10",
  },
};

function TestimonialCard({ t }: { t: Testimonial }) {
  const [view, setView] = useState<View>("front");
  const th = themes[t.theme];

  return (
    <div
      className={`relative h-full flex flex-col rounded-[28px] border p-6 sm:p-8 lg:p-10 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.9)] transition-colors duration-500 ${th.card}`}
    >
      {/* Oversized quote mark */}
      <span
        aria-hidden
        className={`font-impact text-[88px] sm:text-[110px] leading-[0.6] h-[44px] sm:h-[56px] block opacity-80 ${th.accent}`}
      >
        &ldquo;
      </span>

      <p className="font-impact text-white uppercase tracking-tight leading-[1.08] text-[clamp(1.35rem,2.6vw,2rem)] text-balance">
        {t.quote}
      </p>

      {/* Transformation photos */}
      <div className={`my-6 sm:my-8 pt-5 border-t ${th.divider}`}>
        <div className="flex items-center justify-between mb-3.5">
          <span className={`text-[11px] font-inter uppercase tracking-[0.2em] font-semibold ${th.accent}`}>
            Transformation
          </span>
          <div
            role="tablist"
            aria-label={`${t.name} photo view`}
            className={`relative flex rounded-[9999px] border bg-black/40 p-1 ${th.toggle}`}
          >
            {(["front", "side"] as View[]).map((v) => (
              <button
                key={v}
                type="button"
                role="tab"
                aria-selected={view === v}
                onClick={() => setView(v)}
                className={`relative z-10 px-3.5 py-1 rounded-[9999px] text-[11px] font-inter font-semibold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                  view === v ? "text-black" : "text-white/60 hover:text-white"
                }`}
              >
                {view === v && (
                  <motion.span
                    layoutId={`toggle-${t.name}`}
                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                    className={`absolute inset-0 -z-10 rounded-[9999px] ${th.active}`}
                  />
                )}
                {v}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`relative rounded-2xl overflow-hidden bg-black/30 border flex items-center justify-center p-2 h-[260px] sm:h-[320px] lg:h-[360px] ${th.frame}`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={view}
              src={t.photos[view]}
              alt={`${t.name} – ${view} view transformation`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full w-auto max-w-full object-contain rounded-xl"
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-auto">
        <div className="font-impact text-xl sm:text-2xl text-white uppercase tracking-tight leading-none">{t.name}</div>
        <div className={`font-inter text-xs sm:text-sm mt-1.5 ${t.theme === "gold" ? "text-[#E8C547]/80" : "text-secondary"}`}>
          {t.detail}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} direction="up" delay={0.1 + i * 0.1} className="h-full">
            <TestimonialCard t={t} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
