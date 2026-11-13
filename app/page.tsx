import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import { prisma } from "@/lib/prisma";
import { eventDisplayDate } from "@/lib/format";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  // If the database is slow or unreachable, still render the page without events.
  const events = await prisma.upcomingEvent
    .findMany({
      where: { status: "UPCOMING" },
      orderBy: { eventDate: "asc" },
    })
    .catch((err) => {
      console.error("Failed to load upcoming events:", err);
      return [];
    });

  // Program highlights (admin → Programs): active, in display order
  const programs = await prisma.program
    .findMany({
      where: { status: "ACTIVE" },
      orderBy: { displayOrder: "asc" },
      take: 5,
      select: { name: true, imageUrl: true },
    })
    .catch((err) => {
      console.error("Failed to load programs:", err);
      return [];
    });

  return (
    <main className="w-full relative overflow-x-clip">
      <SpotlightEffect />
      <HeroSection />
      <ProgramsSection programs={programs} />
      <FacilitiesSection />
      <TestimonialsSection />
      <UpcomingEventsSection
        events={events.map((e) => ({ ...e, dateString: eventDisplayDate(e.eventDate, e.dateString) }))}
      />
      <ContactSection />
      <CTASection />
    </main>
  );
}
