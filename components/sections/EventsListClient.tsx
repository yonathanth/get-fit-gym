"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import EventRegistrationModal from "@/components/ui/EventRegistrationModal";

interface DbEventItem {
  id: string;
  slug: string;
  title: string;
  dateString?: string | null;
  timeString: string;
  location: string;
  description: string;
  imageUrl: string;
  galleryUrls: string[];
  remainingSpots: number;
}

interface EventsListClientProps {
  events: DbEventItem[];
}

export default function EventsListClient({ events }: EventsListClientProps) {
  const [selectedEventModal, setSelectedEventModal] = useState<{ title: string; date: string } | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {events.map((event, index) => (
          <ScrollReveal
            key={event.slug}
            direction="up"
            delay={0.1 + (index % 3) * 0.08}
            className="h-full"
          >
            <div className="group h-full rounded-[24px] sm:rounded-[28px] border border-white/10 hover:border-primary/40 bg-[#121212] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shine-hover">
              
              {/* Clean Event Image Banner */}
              <div className="relative h-[210px] sm:h-[230px] w-full overflow-hidden bg-black/40">
                <img
                  src={event.imageUrl || event.galleryUrls[0] || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              </div>

              {/* Event Content Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-inter text-primary mb-2 font-medium">
                    <span>{event.dateString || "Upcoming"}</span>
                    <span className="text-white/50">{event.remainingSpots} spots available</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-impact text-white leading-[1.1] uppercase tracking-wide group-hover:text-primary transition-colors mb-3">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 font-inter leading-relaxed line-clamp-2 mb-4">
                    {event.description}
                  </p>

                  {/* Metadata Badges */}
                  <div className="space-y-2 text-xs font-inter text-white/75 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base">
                        schedule
                      </span>
                      <span>{event.timeString}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base">
                        location_on
                      </span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => setSelectedEventModal({ title: event.title, date: `${event.dateString || ""} • ${event.timeString}` })}
                    className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-primary-hover text-black font-inter font-bold text-xs uppercase tracking-wider transition-all duration-200 block text-center shadow-md cursor-pointer"
                  >
                    Register Now
                  </button>

                  <Link
                    href={`/events/${event.slug}`}
                    className="w-full py-2.5 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-inter font-semibold text-xs uppercase tracking-wider transition-all duration-200 block text-center border border-white/5"
                  >
                    View Event Details →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Registration Modal */}
      {selectedEventModal && (
        <EventRegistrationModal
          isOpen={true}
          onClose={() => setSelectedEventModal(null)}
          eventTitle={selectedEventModal.title}
          eventDate={selectedEventModal.date}
        />
      )}
    </>
  );
}
