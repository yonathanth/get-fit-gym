"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import VideoTourModal, { useTourPlaybackId } from "@/components/ui/VideoTourModal";

const EASE = [0.22, 1, 0.36, 1] as const;

const headlineWords = ["Strong", "Mind.", "Strong", "Body."];

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const MUX_PLAYBACK_ID = useTourPlaybackId();
  const reduceMotion = useReducedMotion();

  // Card sizing: match the headline width on tablet/desktop, fill the remaining
  // height, but keep the shape within sensible aspect-ratio limits.
  const areaRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const [cardSize, setCardSize] = useState<{ width: number; height: number } | null>(null);

  useLayoutEffect(() => {
    const area = areaRef.current;
    const title = titleRef.current;
    const headline = headlineRef.current;
    if (!area || !title || !headline) return;

    const measure = () => {
      const areaW = area.clientWidth;
      const gap = parseFloat(getComputedStyle(area).rowGap) || 0;
      const availH = area.clientHeight - title.offsetHeight - gap;
      let width: number;
      let height: number;
      if (window.innerWidth >= 768) {
        const textW = headline.getBoundingClientRect().width;
        // Always exactly as wide as the headline; height fills what's left of the
        // screen (aspect ratio is allowed to vary), within sane bounds.
        width = Math.min(textW, areaW);
        height = Math.min(Math.max(availH, 240), width * 0.8);
      } else {
        width = areaW;
        height = Math.min(Math.max(availH, width / 1.6), width * 0.75);
      }
      setCardSize((prev) =>
        prev && Math.abs(prev.width - width) < 1 && Math.abs(prev.height - height) < 1
          ? prev
          : { width: Math.round(width), height: Math.round(height) }
      );
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(area);
    ro.observe(title);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => ro.disconnect();
  }, []);

  const wordVariants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: "0.45em", filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, delay: 0.08 * i, ease: EASE },
    }),
  };

  return (
    <>
      <section
        className="relative isolate overflow-hidden flex flex-col px-5 sm:px-6 lg:px-8 -mt-[72px] pt-[calc(72px+1.5rem)] pb-6 sm:pt-[calc(72px+2rem)] sm:pb-8 lg:pt-[calc(72px+2.5rem)] lg:pb-10 h-[100svh] min-h-[592px] sm:min-h-[672px] lg:min-h-[712px] lg:max-h-[1072px]"
      >
        {/* Ambient background aura */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[520px] lg:w-[760px] h-[260px] sm:h-[320px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
        {/* Faint grid texture, fades out towards the edges */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]"
        />

        <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-5 sm:gap-7 lg:gap-8 h-full [container-type:size]" ref={areaRef}>
          {/* Title area */}
          <div ref={titleRef} className="flex flex-col items-center text-center gap-3 sm:gap-4 lg:pt-2">
            <h1 className="font-impact uppercase italic tracking-tight leading-[0.95] text-[clamp(2.6rem,8.5vw,5.5rem)] text-balance">
              <span className="sr-only">Strong Mind. Strong Body. Stronger Life.</span>
              <span aria-hidden className="inline" ref={headlineRef}>
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-fade pr-[0.22em] last:pr-0"
                  >
                    {word}
                  </motion.span>
                ))}{" "}
                <motion.span
                  custom={headlineWords.length}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {/* .text-shimmer pads its right edge so the slanted last glyph is not clipped */}
                  <span className="text-shimmer">Stronger Life.</span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
              className="max-w-[34rem] text-pretty font-inter text-[15px] sm:text-base md:text-lg leading-relaxed text-secondary"
            >
              A Science-Backed, Experience-Driven Holistic Health and Fitness Center.
            </motion.p>
          </div>

          {/* Hero image / video tour card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
            // CSS sizing is the pre-measurement fallback; the measured size overrides it.
            style={cardSize ? { width: cardSize.width, height: cardSize.height } : undefined}
            className="shrink-0 max-w-full aspect-[4/3] w-[min(100cqw,calc((100cqh_-_190px)*4/3))] sm:aspect-[16/10] sm:w-[min(100cqw,calc((100cqh_-_230px)*16/10))] md:aspect-video md:w-[min(100cqw,calc((100cqh_-_240px)*16/9))] lg:aspect-[21/9] lg:w-[min(100cqw,calc((100cqh_-_180px)*21/9))]"
          >
            <div className="gradient-border h-full w-full rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] p-px shadow-[0_0_40px_-20px_rgba(217,151,43,0.35)] lg:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),0_0_60px_-30px_rgba(217,151,43,0.35)]">
              <div className="group relative h-full w-full overflow-hidden rounded-[19px] sm:rounded-[27px] lg:rounded-[31px] bg-black">
                  <button
                    type="button"
                    aria-label="Play video tour"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 h-full w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                  >
                    {/* Poster: compressed cover photo (public/images/video-cover.webp) */}
                    <img
                      alt="Inside the Get Fit gym"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      src="/images/video-cover.webp"
                    />

                    {/* Cinematic overlays */}
                    <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
                    <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
                    <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.06] transition-colors duration-500" />

                    {/* Play control: gold play disc + label in one frosted pill */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex items-center gap-3 sm:gap-4 rounded-[9999px] border border-white/20 bg-black/35 backdrop-blur-xl p-1.5 pr-5 sm:pr-7 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out group-hover:border-white/35 group-hover:bg-black/45 group-hover:scale-[1.03]">
                        <span className="relative flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center">
                          {/* rounded-[9999px]: the theme redefines rounded-full as 0.75rem */}
                          <span className="absolute inset-0 rounded-[9999px] border border-primary/60 animate-play-ring" />
                          <span className="relative flex h-full w-full items-center justify-center rounded-[9999px] bg-primary text-black shadow-[0_0_30px_rgba(217,151,43,0.45)] transition-colors duration-300 group-hover:bg-white">
                            <span className="material-symbols-outlined text-[26px] sm:text-[28px] lg:text-[32px] translate-x-[1px] [font-variation-settings:'FILL'_1]">
                              play_arrow
                            </span>
                          </span>
                        </span>
                        <span className="flex flex-col text-left leading-tight">
                          <span className="font-inter text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
                            Video tour
                          </span>
                          <span className="font-inter text-sm sm:text-base font-semibold tracking-wide text-white">
                            Step inside Get Fit
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoTourModal isOpen={isPlaying} onClose={() => setIsPlaying(false)} />
    </>
  );
}
