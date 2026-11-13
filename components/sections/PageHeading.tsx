"use client";

import { motion, useReducedMotion } from "framer-motion";

interface PageHeadingProps {
  title: string;
  subtitle?: string;
  /** Word(s) in the title to render in gold. Defaults to the last word. */
  highlightWord?: string;
  images?: string[]; // Array of image URLs for the grid
}

const EASE = [0.22, 1, 0.36, 1] as const;

function splitTitle(title: string, highlightWord?: string): [string, string, string] {
  if (highlightWord && title.includes(highlightWord)) {
    const i = title.indexOf(highlightWord);
    return [title.slice(0, i), highlightWord, title.slice(i + highlightWord.length)];
  }
  const i = title.lastIndexOf(" ");
  return i === -1 ? ["", title, ""] : [title.slice(0, i + 1), title.slice(i + 1), ""];
}

function Photo({ src, index, className = "" }: { src: string; index: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.1 + index * 0.12, ease: EASE }}
      className={`group relative overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
      />
    </motion.div>
  );
}

export default function PageHeading({ title, subtitle, highlightWord, images = [] }: PageHeadingProps) {
  const [before, accent, after] = splitTitle(title, highlightWord);

  return (
    <section className="relative w-full px-5 sm:px-6 lg:px-8 pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pb-10 h-[calc(100svh-72px)] min-h-[480px] sm:min-h-[540px] max-h-[960px]">
      <div className="mx-auto h-full max-w-[1280px]">
        <div className="gradient-border h-full rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-px shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
          <div className="relative h-full w-full overflow-hidden rounded-[23px] sm:rounded-[27px] lg:rounded-[31px] bg-background">
            {/* Mobile mosaic (< md): two on top, one wide below */}
            {images.length > 0 && (
              <div className="absolute inset-0 flex flex-col gap-2 p-2 sm:gap-2.5 sm:p-2.5 md:hidden">
                <div className="grid flex-1 grid-cols-2 gap-2 sm:gap-2.5">
                  {images[1] && <Photo src={images[1]} index={1} className="rounded-[16px]" />}
                  {images[2] && <Photo src={images[2]} index={2} className="rounded-[16px]" />}
                </div>
                <Photo src={images[0]} index={0} className="flex-[1.2] rounded-[18px]" />
              </div>
            )}

            {/* Desktop mosaic (md+): one tall on the left, two stacked on the right */}
            {images.length > 0 && (
              <div className="absolute inset-0 hidden gap-3 p-3 md:flex lg:gap-4 lg:p-4">
                <Photo src={images[0]} index={0} className="flex-1 rounded-[20px] lg:rounded-[24px]" />
                <div className="flex flex-1 flex-col gap-3 lg:gap-4">
                  {images[1] && <Photo src={images[1]} index={1} className="flex-1 rounded-[20px] lg:rounded-[24px]" />}
                  {images[2] && <Photo src={images[2]} index={2} className="flex-1 rounded-[20px] lg:rounded-[24px]" />}
                </div>
              </div>
            )}

            {/* Readability overlays: strong at the bottom, plus a soft left-side wash for the text */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

            {/* Text, bottom-left */}
            <div className="pointer-events-none relative z-10 flex h-full flex-col justify-end px-5 pb-7 sm:px-8 sm:pb-10 lg:px-12 lg:pb-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
                className="max-w-3xl"
              >
                <h1 className="mb-3 font-impact italic uppercase leading-[0.98] tracking-tight text-[clamp(2.6rem,7.5vw,6rem)] text-balance">
                  {before && <span className="text-fade">{before}</span>}
                  {/* .text-shimmer pads its right edge so the slanted last glyph is not clipped */}
                  <span className="text-shimmer">{accent}</span>
                  {after && <span className="text-fade">{after}</span>}
                </h1>
                {subtitle && (
                  <p className="max-w-2xl font-inter text-[15px] leading-relaxed text-white/80 sm:text-base lg:text-lg text-pretty">
                    {subtitle}
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
