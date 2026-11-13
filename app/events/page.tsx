import type { Metadata } from "next";
import PageHeading from "@/components/sections/PageHeading";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import EventsListClient from "@/components/sections/EventsListClient";
import { prisma } from "@/lib/prisma";
import { eventDisplayDate } from "@/lib/format";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming community workouts, wellness seminars and fitness events at Get Fit Gym in Addis Ababa.",
  alternates: { canonical: "/events" },
};

export default async function EventsPage() {
  const events = await prisma.upcomingEvent.findMany({
    where: { status: "UPCOMING" },
    orderBy: { eventDate: "asc" },
  });

  return (
    <main className="w-full relative overflow-x-clip">
      <SpotlightEffect />

      <PageHeading 
        title="Upcoming Events" 
        subtitle="Join our community events, expert wellness seminars, and fitness challenges. Elevate your athletic journey with fellow members."
        images={[
          "/images/facilities/dsc00728.webp",
          "/images/hero/dsc00738.webp",
          "/images/hero/dsc00712.webp"
        ]}
      />
      
      {/* Upcoming Events Section */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-3">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/70 font-inter">
              Reserve your spot in advance. Space is limited for all specialized workshops and member tournaments.
            </p>
          </div>
        </ScrollReveal>

        <EventsListClient
          events={events.map((e) => ({ ...e, dateString: eventDisplayDate(e.eventDate, e.dateString) }))}
        />
      </section>

      <CTASection />
    </main>
  );
}
