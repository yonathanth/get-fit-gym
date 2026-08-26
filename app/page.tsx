import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const events = await prisma.upcomingEvent.findMany({
    where: { status: "UPCOMING" },
    orderBy: { eventDate: "asc" },
  });

  return (
    <main className="w-full relative overflow-x-clip">
      <SpotlightEffect />
      <HeroSection />
      <ProgramsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <UpcomingEventsSection events={events} />
      <ContactSection />
      <CTASection />
    </main>
  );
}
