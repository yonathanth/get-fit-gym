"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface ProgramItem {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  schedule: string;
  capacity?: number;
  instructor: string;
  intensity?: string;
  price?: string | null;
  features?: string[];
}

interface ClassesSectionProps {
  programs?: ProgramItem[];
}

export default function ClassesSection({ programs = [] }: ClassesSectionProps) {
  // Programs come only from the admin; with none active, the section is hidden.
  const displayPrograms = programs ?? [];
  if (displayPrograms.length === 0) return null;

  return (
    <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-impact uppercase tracking-tight leading-[1.02] text-[clamp(2.1rem,5.2vw,4rem)] text-balance mb-3">
            <span className="text-fade">Group </span><span className="text-shimmer">Classes</span>
          </h2>
          <p className="text-sm sm:text-base text-white/65 font-inter leading-relaxed text-pretty">
            14 different activities across 3 time-slots (Morning, Mid-Day, Evening) led by sports science specialists.
          </p>
        </div>
      </ScrollReveal>

      {/* Redesigned Clean Class Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {displayPrograms.map((item, index) => (
          <ScrollReveal
            key={item.id}
            direction="up"
            delay={0.1 + (index % 3) * 0.08}
            className="h-full"
          >
            <div className="group h-full rounded-[24px] sm:rounded-[28px] border border-white/10 hover:border-primary/40 bg-[#121212] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shine-hover">
              
              {/* Clean Class Image Banner */}
              <div className="relative h-[210px] sm:h-[230px] w-full overflow-hidden bg-black/40">
                <img
                  src={item.imageUrl || "/images/others/dsc00723.webp"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              </div>

              {/* Class Content Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs font-inter text-primary mb-2 font-medium">
                    <span>{item.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-impact text-white leading-[1.1] uppercase tracking-wide group-hover:text-primary transition-colors mb-3">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 font-inter leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>

                  {/* Metadata Badges */}
                  <div className="space-y-2 text-xs font-inter text-white/75 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base">
                        schedule
                      </span>
                      <span>{item.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base">
                        person
                      </span>
                      <span>Coach: {item.instructor}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <Link
                  href="/register"
                  className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-primary-hover text-black font-inter font-bold text-xs uppercase tracking-wider transition-all duration-200 block text-center shadow-md cursor-pointer"
                >
                  Join This Class
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
