"use client";

import { useState } from "react";
import PageHeading from "@/components/sections/PageHeading";
import EventRegistrationModal from "@/components/ui/EventRegistrationModal";
import CTASection from "@/components/sections/CTASection";

export default function YouthSportsDayEvent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80"
  ];

  return (
    <main className="w-full">
      <PageHeading 
        title="Youth Sports Day" 
        subtitle="A quarterly celebration of young athletes featuring fun competitions, games, skill challenges, and awards for our next generation of champions."
        images={[
          "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop&q=80"
        ]}
      />

      {/* Book Now CTA - Redesigned Clean & Simple */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black/40 backdrop-blur-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-3">
                Ready to Join?
              </h3>
              <p className="text-sm text-white/60 font-inter">
                March 22, 2026 <span className="mx-2">•</span> 9:00 AM - 3:00 PM <span className="mx-2">•</span> <span className="text-primary">60 spots available</span>
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-black text-sm font-inter font-bold px-8 py-3.5 rounded-lg transition-all tracking-wider uppercase whitespace-nowrap"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
      
      {/* Event Details */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-6">
              About This <span className="text-primary">Event</span>
            </h2>
            <p className="text-lg text-white/80 font-inter leading-relaxed mb-4">
              Youth Sports Day is our quarterly celebration dedicated entirely to our young athletes. This special event transforms Get Fit Gym into a vibrant sports festival where kids and teens can showcase their skills, compete in age-appropriate challenges, and celebrate their athletic achievements.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed mb-4">
              The day features multiple competition categories including gymnastics demonstrations, martial arts exhibitions, relay races, obstacle courses, and team sports. Every participant receives recognition, and outstanding performers earn medals and special awards.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed">
              Beyond competition, Youth Sports Day emphasizes fun, friendship, and character development. Parents are invited to cheer on their young champions, and the atmosphere is filled with encouragement, positive energy, and community spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
          Event <span className="text-primary">Gallery</span>
        </h2>
        
        {/* Masonry-style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First image - spans 2 rows */}
          <div className="md:row-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px] md:h-full">
            <img
              src={galleryImages[0]}
              alt="Gallery image 1"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Second image - normal height */}
          <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={galleryImages[1]}
              alt="Gallery image 2"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Third image - spans 2 rows */}
          <div className="md:row-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px] md:h-full">
            <img
              src={galleryImages[2]}
              alt="Gallery image 3"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Fourth image - normal height */}
          <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={galleryImages[3]}
              alt="Gallery image 4"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Fifth image - normal height */}
          <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={galleryImages[4]}
              alt="Gallery image 5"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Sixth image - spans 2 columns */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={galleryImages[5]}
              alt="Gallery image 6"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <EventRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventTitle="Youth Sports Day"
        eventDate="March 22, 2026 • 9:00 AM - 3:00 PM"
      />

      <CTASection />
    </main>
  );
}
