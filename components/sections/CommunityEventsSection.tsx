"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface ShowcaseCardItem {
  slug: string;
  title: string;
  eventDate: string;
  description: string;
  coverImageUrl: string;
}

/** Past community events, managed in the admin under Community. */
export default function CommunityEventsSection({ showcases = [] }: { showcases?: ShowcaseCardItem[] }) {
  if (showcases.length === 0) return null;

  return (
    <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="font-impact uppercase tracking-tight leading-[1.02] text-[clamp(2.1rem,5.2vw,4rem)] text-balance mb-8 sm:mb-12 text-center">
            <span className="text-fade">Community & </span><span className="text-shimmer">Events</span>
          </h2>
      </ScrollReveal>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {showcases.map((event, index) => (
          <ScrollReveal
            key={event.slug}
            direction="up"
            delay={0.15 + index * 0.1}
          >
            <Link
              href={`/showcase/${event.slug}`}
              className="group relative overflow-hidden rounded-[22px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 hover:border-primary/40 bg-surface h-[380px] sm:h-[420px] md:h-[450px] block shine-hover shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={event.coverImageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>

              {/* Hover Blur Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary font-impact text-xl sm:text-2xl uppercase tracking-tight">
                  SEE MORE
                </span>
              </div>

              {/* Content pinned at bottom */}
              <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end pointer-events-none z-10">
                <span className="text-xs font-inter font-semibold text-primary/90 mb-1 block">
                  {event.eventDate}
                </span>
                <h3 className="text-2xl sm:text-3xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-2 group-hover:text-white transition-colors">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-inter leading-relaxed line-clamp-2">
                  {event.description}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
