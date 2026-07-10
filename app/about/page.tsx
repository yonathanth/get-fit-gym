import PageHeading from "@/components/sections/PageHeading";
import OurStorySection from "@/components/sections/OurStorySection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import OurFacilitySection from "@/components/sections/OurFacilitySection";
import CommunityEventsSection from "@/components/sections/CommunityEventsSection";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage() {
  return (
    <main className="w-full">
      <PageHeading 
        title="About Us" 
        subtitle="Experience a sanctuary of peak performance where strength meets mindset. We provide world-class facilities and expert guidance to help you become the strongest version of yourself."
        images={[
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=800&h=500&fit=crop&q=80"
        ]}
      />
      
      <OurStorySection />
      <MissionVisionSection />
      <OurTeamSection />
      <OurFacilitySection />
      <CommunityEventsSection />
      <CTASection />
    </main>
  );
}
