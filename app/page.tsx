import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ProgramsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
