import type { Metadata } from "next";
import PageHeading from "@/components/sections/PageHeading";
import OurStorySection from "@/components/sections/OurStorySection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import TrainersGallerySection from "@/components/sections/TrainersGallerySection";
import OurFacilitySection from "@/components/sections/OurFacilitySection";
import CommunityEventsSection from "@/components/sections/CommunityEventsSection";
import CTASection from "@/components/sections/CTASection";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the Get Fit Gym team and tour our 1,050 m² training floor and 750 m² wellness and recovery center in Addis Ababa.",
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  let coaches: any[] = [];
  try {
    coaches = await prisma.teamMember.findMany({
      where: { isActive: true, category: "MANAGEMENT" },
      orderBy: { displayOrder: "asc" },
    });
  } catch (err) {
    console.error("DB team fetch error in AboutPage:", err);
  }

  // Past community events (admin → Community), newest first
  const showcases = await prisma.communityShowcase
    .findMany({
      orderBy: { createdAt: "desc" },
      take: 6,
      select: { slug: true, title: true, eventDate: true, description: true, coverImageUrl: true },
    })
    .catch((err) => {
      console.error("DB showcase fetch error in AboutPage:", err);
      return [];
    });

  return (
    <main className="w-full relative overflow-x-clip">
      <SpotlightEffect />

      <PageHeading 
        title="About Us" 
        subtitle="A Science-Backed, Experience-Driven Holistic Health and Fitness Center established in 2011 E.C. with a 1,050 m² training area and 750 m² wellness and recovery center."
        images={[
          "/images/facilities/dsc00737.webp",
          "/images/hero/dsc00690.webp",
          "/images/hero/dsc00725.webp"
        ]}
      />
      
      <OurStorySection />
      <MissionVisionSection />
      <OurTeamSection coaches={coaches} />
      <TrainersGallerySection />
      <OurFacilitySection />
      <CommunityEventsSection showcases={showcases} />
      <CTASection />
    </main>
  );
}
