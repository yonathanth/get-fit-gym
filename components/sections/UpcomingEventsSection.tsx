"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export interface UpcomingEventHomeItem {
  id: string;
  slug: string;
  title: string;
  dateString?: string | null;
  timeString: string;
  location: string;
  description: string;
  imageUrl: string;
  remainingSpots: number;
}

interface UpcomingEventsSectionProps {
  events?: UpcomingEventHomeItem[];
}

export default function UpcomingEventsSection({ events = [] }: UpcomingEventsSectionProps) {
  if (!events || events.length === 0) return null;

  return (
    <Section>
      <ScrollReveal direction="up" delay={0.1}>
        <SectionHeading title="Upcoming" accent="Events" className="mb-10 sm:mb-14" />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
        {events.slice(0, 3).map((event, index) => (
          <ScrollReveal key={event.id} direction="up" delay={0.15 + index * 0.1} className="h-full">
            <Link
              href={`/events/${event.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#111] shadow-[0_25px_60px_-30px_rgba(0,0,0,0.9)] transition-[border-color,transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.95),0_0_40px_-20px_rgba(217,151,43,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {/* Image */}
              <div className="relative h-[200px] sm:h-[210px] w-full overflow-hidden bg-black/40">
                <img
                  src={event.imageUrl || "/images/hero/dsc00738.webp"}
                  alt={event.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/10 to-transparent" />

                {/* Date, sitting directly on the image just above the title */}
                <span className="absolute bottom-2 left-6 sm:left-7 inline-flex items-center gap-1.5 font-inter text-xs font-medium text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                  <span className="material-symbols-outlined text-[15px] text-primary">calendar_today</span>
                  {event.dateString || "Upcoming"}
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col p-6 sm:p-7 pt-4 sm:pt-5">
                <h3 className="font-impact text-[26px] sm:text-[28px] uppercase leading-[1.05] tracking-tight text-white text-balance">
                  {event.title}
                </h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-white/60 line-clamp-2">
                  {event.description}
                </p>

                <div className="mt-auto pt-6 flex items-center justify-between gap-4">
                  <span className="font-inter text-xs text-white/50">
                    <span className="font-semibold text-primary">{event.remainingSpots}</span> spots left
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-white transition-colors duration-300 group-hover:text-primary">
                    View details
                    <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
