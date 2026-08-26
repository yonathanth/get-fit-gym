"use client";

import PageHeading from "@/components/sections/PageHeading";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightEffect from "@/components/ui/SpotlightEffect";

export interface ShowcaseData {
  id?: string;
  slug: string;
  title: string;
  eventDate?: string;
  date?: string;
  location?: string;
  attendees?: number;
  description: string;
  paragraphs?: string[];
  coverImageUrl?: string;
  gallery?: string[];
  galleryUrls?: string[];
  headingImages?: [string, string, string];
  testimonials?: {
    name: string;
    text: string;
    image: string;
  }[];
}

interface ShowcaseDetailTemplateProps {
  event: ShowcaseData;
}

export default function ShowcaseDetailTemplate({ event }: ShowcaseDetailTemplateProps) {
  const galleryList = event.galleryUrls || event.gallery || [
    event.coverImageUrl || "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&q=80"
  ];

  const headingImages = event.headingImages || [
    galleryList[0] || event.coverImageUrl || "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=1000&fit=crop&q=80",
    galleryList[1] || "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop&q=80",
    galleryList[2] || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&q=80"
  ];

  const displayDate = event.eventDate || event.date || "Past Event";
  const displayLocation = event.location || "Full Facility Arena";
  const displayAttendees = event.attendees || 50;

  return (
    <main className="w-full relative overflow-x-clip">
      <SpotlightEffect />

      <PageHeading 
        title={event.title} 
        subtitle={event.description}
        images={headingImages}
      />

      {/* Event Info - Compact Centered Bar */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/70 font-inter bg-surface/40 border border-white/10 rounded-2xl py-4 px-6 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base sm:text-lg">
                calendar_today
              </span>
              <span>{displayDate}</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base sm:text-lg">
                location_on
              </span>
              <span>{displayLocation}</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base sm:text-lg">
                group
              </span>
              <span className="text-primary font-semibold">{displayAttendees} attendees</span>
            </div>
          </div>
        </ScrollReveal>
      </section>
      
      {/* About This Event - Centered on Mobile, Left-aligned on Desktop */}
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

      {/* Testimonials - Centered on Mobile, Left-aligned on Desktop */}
      {event.testimonials && event.testimonials.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8 sm:mb-12 text-center">
              What Attendees <span className="text-primary">Said</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {event.testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} direction="up" delay={0.15 + index * 0.1}>
                <div className="p-6 sm:p-8 rounded-[22px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 hover:border-primary/40 bg-surface/70 hover:bg-surface transition-all duration-300 shine-hover shadow-xl h-full flex flex-col items-center sm:items-start text-center sm:text-left justify-between">
                  <p className="text-white/80 font-inter leading-relaxed italic text-sm sm:text-base mb-6 text-center sm:text-left">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 border-t border-white/5 w-full justify-center sm:justify-start">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/40"
                    />
                    <div className="text-center sm:text-left">
                      <p className="text-white font-inter font-semibold text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-primary font-inter text-xs">Event Attendee</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
