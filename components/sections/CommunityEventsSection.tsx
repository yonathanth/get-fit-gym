"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const events = [
  {
    id: "health-fitness-nutrition-seminar",
    title: "Health, Fitness & Nutrition Seminar",
    date: "February 2026",
    description: "Our monthly seminar brought together health experts and members for comprehensive wellness guidance",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: "youth-sports-day",
    title: "Youth Sports Day",
    date: "January 2026",
    description: "Young athletes showcased their skills in competitions, games, and team activities",
    image: "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=600&h=400&fit=crop&q=80"
  },
  {
    id: "monthly-fitness-challenge",
    title: "Monthly Fitness Challenge",
    date: "December 2025",
    description: "Members competed in challenging workouts and celebrated personal achievements together",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80"
  }
];

export default function CommunityEventsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8 sm:mb-12 text-center">
          Community & <span className="text-primary">Events</span>
        </h2>
      </ScrollReveal>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {events.map((event, index) => (
          <ScrollReveal
            key={event.id}
            direction="up"
            delay={0.15 + index * 0.1}
          >
            <Link
              href={`/showcase/${event.id}`}
              className="group relative overflow-hidden rounded-[22px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 hover:border-primary/40 bg-surface h-[380px] sm:h-[420px] md:h-[450px] block shine-hover shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={event.image}
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
                  {event.date}
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
