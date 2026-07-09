import HeroSection from "@/components/sections/HeroSection";
import PerformanceTrackingSection from "@/components/sections/PerformanceTrackingSection";
import CoachingSection from "@/components/sections/CoachingSection";
import MembershipBenefitsSection from "@/components/sections/MembershipBenefitsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <PerformanceTrackingSection />
      <CoachingSection />
      <MembershipBenefitsSection />
      <CTASection />
    </main>
  );
}
