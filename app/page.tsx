"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import EventPopupModal from "@/components/ui/EventPopupModal";

export default function Home() {
  const [showEventPopup, setShowEventPopup] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup today
    const lastSeen = localStorage.getItem("eventPopupLastSeen");
    const today = new Date().toDateString();
    
    if (lastSeen !== today) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setShowEventPopup(true);
      }, 1500); // 1.5 second delay after page load
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowEventPopup(false);
    // Save to localStorage so it doesn't show again today
    localStorage.setItem("eventPopupLastSeen", new Date().toDateString());
  };

  return (
    <main className="w-full">
      <HeroSection />
      <ProgramsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <UpcomingEventsSection />
      <ContactSection />
      <CTASection />
      
      {/* Event Popup Modal */}
      {showEventPopup && <EventPopupModal onClose={handleClosePopup} />}
    </main>
  );
}
