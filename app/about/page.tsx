import PageHeading from "@/components/sections/PageHeading";
import OurStorySection from "@/components/sections/OurStorySection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import OurFacilitySection from "@/components/sections/OurFacilitySection";
import CommunityEventsSection from "@/components/sections/CommunityEventsSection";
import CTASection from "@/components/sections/CTASection";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AboutPage() {
  let coaches: any[] = [];
  try {
    coaches = await prisma.teamMember.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: "asc" },
    });
  } catch (err) {
    console.error("DB team fetch error in AboutPage:", err);
  }

  return (
    <main className="w-full relative overflow-x-clip">
      <SpotlightEffect />

      <PageHeading 
        title="About Us" 
        subtitle="A Science-Backed, Experience-Driven Holistic Health and Fitness Center established in 2011 E.C. with a 1,050 m² training area and 750 m² wellness and recovery center."
        images={[
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=800&h=500&fit=crop&q=80"
        ]}
      />
      
      <OurStorySection />
      <MissionVisionSection />
      <OurTeamSection coaches={coaches} />
      <OurFacilitySection />
      <CommunityEventsSection />
      <CTASection />
    </main>
  );
}
