"use client";

import { useState } from "react";
import PageHeading from "@/components/sections/PageHeading";
import EventRegistrationModal from "@/components/ui/EventRegistrationModal";

export default function HealthFitnessNutritionSeminarEvent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80"
  ];

  return (
    <main className="w-full">
      <PageHeading 
        title="Health, Fitness & Nutrition Seminar" 
        subtitle="Monthly comprehensive seminars bringing together health experts, fitness professionals, and nutritionists to guide your complete wellness journey."
        images={[
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop&q=80"
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
                March 15, 2026 <span className="mx-2">•</span> 10:00 AM - 12:00 PM <span className="mx-2">•</span> <span className="text-primary">45 spots available</span>
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
              About This <span className="text-primary">Seminar</span>
            </h2>
            <p className="text-lg text-white/80 font-inter leading-relaxed mb-4">
              Our Health, Fitness & Nutrition Seminar is a comprehensive monthly event that addresses all aspects of your wellness journey. This integrated approach brings together medical professionals, certified fitness trainers, and licensed nutritionists to provide expert guidance on optimizing your health from every angle.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed mb-4">
              Each seminar features three main segments: health fundamentals led by medical doctors covering injury prevention, recovery strategies, and body mechanics; fitness optimization with our expert trainers discussing training methodologies, program design, and performance enhancement; and nutrition guidance from certified nutritionists on meal planning, supplementation, and dietary strategies for your specific goals.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed">
              These interactive sessions include Q&A opportunities, practical demonstrations, and take-home resources. Whether you're seeking to lose weight, build muscle, improve athletic performance, or simply maintain optimal health, our seminars provide the knowledge and tools you need to succeed. All members are welcome, and materials are provided in both English and Amharic.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
          Seminar <span className="text-primary">Gallery</span>
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
        eventTitle="Health, Fitness & Nutrition Seminar"
        eventDate="March 15, 2026 • 10:00 AM - 12:00 PM"
      />
    </main>
  );
}
