import PageHeading from "@/components/sections/PageHeading";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import EventsListClient from "@/components/sections/EventsListClient";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop&q=80"
        ]}
      />
      
      {/* Upcoming Events Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
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

        <EventsListClient events={events} />
      </section>

      <CTASection />
    </main>
  );
}
