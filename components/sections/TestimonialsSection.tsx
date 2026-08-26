"use client";

import { useState } from "react";

export default function TestimonialsSection() {
  const [activePhoto1, setActivePhoto1] = useState<"front" | "side">("front");
  const [activePhoto2, setActivePhoto2] = useState<"front" | "side">("front");

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-20 sm:mb-28 md:mb-40">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        
        {/* Testimonial 1 - Original Gold Accent Theme */}
        <div className="bg-[#E8C547]/10 hover:bg-[#E8C547]/15 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full border border-[#E8C547]/20 hover:border-[#E8C547]/40 transition-all duration-300 shadow-lg">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-impact text-white leading-tight uppercase tracking-tight">
              &ldquo;Best investment in myself. The scientific assessment and level-based training made all the difference in my transformation.&rdquo;
            </p>
          </div>

          {/* Transformation Photo with Working Toggle & Uncropped Contain */}
          <div className="my-6 pt-5 border-t border-[#E8C547]/20">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[11px] font-inter uppercase tracking-widest text-[#E8C547] font-bold">
                Transformation View
              </span>
              <div className="flex gap-1.5 bg-black/40 p-1 rounded-xl border border-[#E8C547]/30">
                <button
                  type="button"
                  onClick={() => setActivePhoto1("front")}
                  className={`px-3 py-1 rounded-lg text-[11px] font-inter uppercase font-bold transition-all cursor-pointer ${
                    activePhoto1 === "front"
                      ? "bg-[#E8C547] text-black shadow-md font-extrabold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Front
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto1("side")}
                  className={`px-3 py-1 rounded-lg text-[11px] font-inter uppercase font-bold transition-all cursor-pointer ${
                    activePhoto1 === "side"
                      ? "bg-[#E8C547] text-black shadow-md font-extrabold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Side
                </button>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-black/30 border border-[#E8C547]/15 flex items-center justify-center p-2 min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">
              <img
                key={activePhoto1}
                src={activePhoto1 === "front" ? "/testi%20one%20front.jpg" : "/testi%20one%20side.jpg"}
                alt={`Selamawit Desta - ${activePhoto1} view transformation`}
                className="max-h-[260px] sm:max-h-[300px] md:max-h-[340px] w-auto max-w-full object-contain mx-auto transition-opacity duration-300 rounded-lg shadow-sm"
              />
            </div>
          </div>

          <div>
            <div className="font-impact text-lg sm:text-xl text-white uppercase tracking-tight">Selamawit Desta</div>
            <div className="text-[#E8C547]/80 font-inter text-xs sm:text-sm mt-0.5">Get Fit Member • Transformation</div>
          </div>
        </div>

        {/* Testimonial 2 - Original Sleek White/Dark Theme */}
        <div className="bg-white/5 hover:bg-white/[0.08] rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full border border-white/10 hover:border-white/20 transition-all duration-300 shadow-md">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-impact text-white leading-tight uppercase tracking-tight">
              &ldquo;Get Fit transformed my fitness and health completely. The coaching and nutrition tracking are unmatched.&rdquo;
            </p>
          </div>

          {/* Transformation Photo with Working Toggle & Uncropped Contain */}
          <div className="my-6 pt-5 border-t border-white/10">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[11px] font-inter uppercase tracking-widest text-primary font-bold">
                Transformation View
              </span>
              <div className="flex gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setActivePhoto2("front")}
                  className={`px-3 py-1 rounded-lg text-[11px] font-inter uppercase font-bold transition-all cursor-pointer ${
                    activePhoto2 === "front"
                      ? "bg-primary text-black shadow-md font-extrabold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Front
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto2("side")}
                  className={`px-3 py-1 rounded-lg text-[11px] font-inter uppercase font-bold transition-all cursor-pointer ${
                    activePhoto2 === "side"
                      ? "bg-primary text-black shadow-md font-extrabold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Side
                </button>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-black/30 border border-white/10 flex items-center justify-center p-2 min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">
              <img
                key={activePhoto2}
                src={activePhoto2 === "front" ? "/testi%20two%20front.jpg" : "/testi%20two%20side.jpg"}
                alt={`Meron Tadesse - ${activePhoto2} view transformation`}
                className="max-h-[260px] sm:max-h-[300px] md:max-h-[340px] w-auto max-w-full object-contain mx-auto transition-opacity duration-300 rounded-lg shadow-sm"
              />
            </div>
          </div>

          <div>
            <div className="font-impact text-lg sm:text-xl text-white uppercase tracking-tight">Meron Tadesse</div>
            <div className="text-secondary font-inter text-xs sm:text-sm mt-0.5">Get Fit Member • Body Recomposition</div>
          </div>
        </div>

      </div>
    </section>
  );
}
