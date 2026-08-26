"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const facilities = [
  {
    title: "1,050 m² Life Fitness Area",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "750 m² Wellness & Spa",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Specialty Health Restaurant",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Medical Consultation Room",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Nutrition Consultation",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Beauty Salon (Men & Women)",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop&q=80"
  }
];

export default function OurFacilitySection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8 sm:mb-12 text-center">
          Our <span className="text-primary">Facility</span>
        </h2>
      </ScrollReveal>

      {/* Facilities Grid: Perfect 2-column on mobile, 3-column on desktop (3x2) with zero orphaned cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-6">
        {facilities.map((facility, index) => (
          <ScrollReveal
            key={index}
            direction="up"
            delay={0.1 + (index % 3) * 0.07}
          >
            <div className="group relative overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[28px] border border-white/10 hover:border-primary/40 bg-surface h-[180px] sm:h-[230px] md:h-[280px] cursor-pointer shine-hover shadow-lg transition-all duration-300">
              <img
                src={facility.image}
                alt={facility.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="relative h-full p-3.5 sm:p-5 md:p-6 flex flex-col justify-end items-center sm:items-start text-center sm:text-left z-10">
                <h3 className="text-sm sm:text-lg md:text-2xl font-impact text-primary leading-[1.1] tracking-tight uppercase group-hover:text-white transition-colors">
                  {facility.title}
                </h3>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
