"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8 sm:mb-12 text-center">
          Upcoming <span className="text-primary">Events</span>
        </h2>
      </ScrollReveal>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {events.slice(0, 3).map((event, index) => (
          <ScrollReveal
            key={event.id}
            direction="up"
            delay={0.15 + index * 0.1}
            className="h-full"
          >
            <div className="group h-full rounded-[24px] sm:rounded-[28px] border border-white/10 hover:border-primary/40 bg-[#121212] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shine-hover">
              
              {/* Event Image */}
              <div className="relative h-[210px] w-full overflow-hidden bg-black/40">
                <img
                  src={event.imageUrl || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              </div>

              {/* Event Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between text-xs font-inter text-primary mb-2 font-medium">
                    <span>{event.dateString || "Upcoming"}</span>
                    <span className="text-white/50">{event.remainingSpots} spots</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-impact text-white leading-[1.1] uppercase tracking-wide group-hover:text-primary transition-colors mb-3">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 font-inter leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                </div>

                {/* Card Action */}
                <Link
                  href={`/events/${event.slug}`}
                  className="w-full py-2.5 px-5 rounded-xl bg-white/5 hover:bg-primary hover:text-black text-white/80 font-inter font-semibold text-xs uppercase tracking-wider transition-all duration-200 block text-center border border-white/10"
                >
                  View Event Details →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
