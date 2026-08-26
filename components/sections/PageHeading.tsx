"use client";

import { motion } from "framer-motion";

interface PageHeadingProps {
  title: string;
  subtitle?: string;
  highlightWord?: string;
  images?: string[]; // Array of image URLs for the grid
}

export default function PageHeading({ title, subtitle, highlightWord, images = [] }: PageHeadingProps) {
  // If there's a highlight word, split the title and highlight it
  const renderTitle = () => {
    if (highlightWord && title.includes(highlightWord)) {
      const parts = title.split(highlightWord);
      return (
        <>
          {parts[0]}
          <span className="text-primary">{highlightWord}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="w-full px-4 sm:px-6 py-6 sm:py-8 md:py-12 min-h-[460px] sm:min-h-[520px] md:h-[calc(100vh-72px)] relative">
      <div className="max-w-[1200px] mx-auto h-full">
        <div className="w-full h-full rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden relative border border-white/5 bg-background shadow-2xl">
          
          {/* Mobile All-3-Photos Mosaic Grid (< md): 2 Upper, 1 Lower */}
          {images.length > 0 && (
            <div className="absolute inset-0 flex flex-col gap-2.5 p-2 sm:p-3 md:hidden">
              {/* Top 2 Photos - Side by Side */}
              <div className="flex-1 grid grid-cols-2 gap-2.5">
                {images[1] && (
                  <div className="relative overflow-hidden rounded-[14px] group">
                    <img
                      src={images[1]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                )}
                {images[2] && (
                  <div className="relative overflow-hidden rounded-[14px] group">
                    <img
                      src={images[2]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                )}
              </div>

              {/* Bottom Photo - Full Width */}
              <div className="relative flex-[1.2] overflow-hidden rounded-[16px] group">
                <img
                  src={images[0]}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          )}

          {/* Desktop All-3-Photos Mosaic Grid (md+) */}
          {images.length > 0 && (
            <div className="absolute inset-0 hidden md:flex gap-4 md:gap-5">
              {/* Large card - left side, spans full height */}
              <div className="relative flex-1 overflow-hidden rounded-[16px] md:rounded-[20px] group cursor-pointer">
                <img
                  src={images[0]}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              
              {/* Right side - two stacked cards */}
              <div className="flex-1 flex flex-col gap-4 md:gap-5">
                {/* Top right card */}
                {images[1] && (
                  <div className="relative flex-1 overflow-hidden rounded-[16px] md:rounded-[20px] group cursor-pointer">
                    <img
                      src={images[1]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                )}
                
                {/* Bottom right card */}
                {images[2] && (
                  <div className="relative flex-1 overflow-hidden rounded-[16px] md:rounded-[20px] group cursor-pointer">
                    <img
                      src={images[2]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Gradient Overlay - dark at bottom, transparent at top to show photos */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent pointer-events-none" />
          
          {/* Content - Bottom Left */}
          <div className="relative h-full min-h-[420px] sm:min-h-[480px] md:min-h-0 px-5 sm:px-8 md:px-12 pb-8 sm:pb-12 md:pb-16 flex flex-col justify-end pointer-events-none z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-impact text-primary leading-[1.05] tracking-tight uppercase mb-2 sm:mb-3 italic">
                {renderTitle()}
              </h1>
              {subtitle && (
                <p className="text-sm sm:text-base md:text-xl text-white/90 font-inter leading-relaxed max-w-2xl">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
