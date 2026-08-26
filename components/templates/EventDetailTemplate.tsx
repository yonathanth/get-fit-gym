"use client";

import { useState } from "react";
import PageHeading from "@/components/sections/PageHeading";
import EventRegistrationModal from "@/components/ui/EventRegistrationModal";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightEffect from "@/components/ui/SpotlightEffect";

export interface EventDetailData {
  id?: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  paragraphs?: string[];
  date?: string;
  dateString?: string | null;
  timeString: string;
  location?: string;
  remainingSpots: number;
  totalSpots?: number;
  imageUrl?: string;
  gallery?: string[];
  galleryUrls?: string[];
  headingImages?: [string, string, string];
}

interface EventDetailTemplateProps {
  event: EventDetailData;
}

export default function EventDetailTemplate({ event }: EventDetailTemplateProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryList = event.galleryUrls || event.gallery || [
    event.imageUrl || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
  ];

  const headingImages = event.headingImages || [
    galleryList[0] || event.imageUrl || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop&q=80",
    galleryList[1] || "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop&q=80",
    galleryList[2] || "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop&q=80"
  ];

  const displayDate = event.dateString || event.date || "Upcoming Event";

  return (
    <main className="w-full relative overflow-x-clip">
      <SpotlightEffect />

      <PageHeading 
        title={event.title} 
        subtitle={event.subtitle || event.description}
        images={headingImages}
      />

      {/* Book Now CTA */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] border border-white/10 bg-surface/70 backdrop-blur-sm p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="text-2xl sm:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-2">
                  Ready to Attend?
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-inter">
                  {displayDate} <span className="mx-2">•</span> {event.timeString} <span className="mx-2">•</span> <span className="text-primary font-semibold">{event.remainingSpots} spots remaining</span>
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-black text-xs sm:text-sm font-inter font-bold px-8 py-3.5 rounded-xl transition-all tracking-wider uppercase whitespace-nowrap cursor-pointer shadow-lg"
              >
                Register Now
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
      
      {/* Event Details - Centered on Mobile, Left-aligned on Desktop */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase text-center md:text-left">
              About This <span className="text-primary">Event</span>
            </h2>
          </ScrollReveal>

          {event.paragraphs && event.paragraphs.length > 0 ? (
            event.paragraphs.map((p, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.15 + idx * 0.05}>
                <p className="text-sm sm:text-base md:text-lg text-white/80 font-inter leading-relaxed text-center md:text-left">
                  {p}
                </p>
              </ScrollReveal>
            ))
          ) : (
            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-sm sm:text-base md:text-lg text-white/80 font-inter leading-relaxed text-center md:text-left">
                {event.description}
              </p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Photo Gallery - Balanced 2-col Mobile / 3-col Desktop Grid */}
      {galleryList && galleryList.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8 sm:mb-12 text-center">
              Event <span className="text-primary">Gallery</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-6">
            {galleryList.map((photo, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.1 + (index % 3) * 0.06}
              >
                <div className="group relative overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[28px] border border-white/10 hover:border-primary/40 bg-surface h-[180px] sm:h-[230px] md:h-[280px] shine-hover transition-all duration-300">
                  <img
                    src={photo}
                    alt={`Gallery photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Registration Modal */}
      <EventRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventTitle={event.title}
        eventDate={`${displayDate} • ${event.timeString}`}
      />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
