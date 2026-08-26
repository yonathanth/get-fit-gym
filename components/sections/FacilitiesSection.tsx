"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const consultations = [
  {
    name: "Medical Doctor Consultation",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  },
  {
    name: "Exercise Physiology Assessment",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  },
  {
    name: "Nutritionist Consultation & Juice Bar",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-20 sm:mb-28 md:mb-40">
      <div className="flex flex-col lg:flex-row-reverse gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Info Column */}
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <ScrollReveal direction="right" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight mb-4 sm:mb-6 uppercase">
              World-Class Expert Support
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary font-inter leading-relaxed max-w-xl mx-auto lg:mx-0">
              Access comprehensive health and fitness guidance from our team of qualified professionals, including medical doctors, exercise physiologists, and clinical nutritionists.
            </p>
          </ScrollReveal>
        </div>

        {/* Mobile & Tablet Bento Grid (< lg) */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:hidden w-full">
          {/* Card 1 - Featured Full Width */}
          <ScrollReveal direction="up" delay={0.15} className="col-span-2">
            <div className="relative rounded-[22px] border border-white/10 hover:border-primary/40 h-[190px] sm:h-[230px] overflow-hidden group cursor-pointer transition-all duration-300 shine-hover shadow-lg">
              <img
                src={consultations[0].image}
                alt={consultations[0].name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                <h4 className="font-impact text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {consultations[0].name}
                </h4>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 & 3 - Side by Side Pair */}
          {consultations.slice(1, 3).map((consultation, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={0.25 + index * 0.08}
              className="col-span-1"
            >
              <div
                className="relative rounded-[18px] border border-white/10 hover:border-primary/40 h-[160px] sm:h-[180px] overflow-hidden group cursor-pointer transition-all duration-300 shine-hover shadow-md"
              >
                <img
                  src={consultation.image}
                  alt={consultation.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h4 className="font-impact text-sm sm:text-base text-white uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {consultation.name}
                  </h4>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Desktop Media Cards Layout (lg+) */}
        <div className="hidden lg:flex w-full lg:w-[60%] gap-6">
          {/* First Card - Larger */}
          <div className="flex-1">
            <ScrollReveal direction="up" delay={0.15}>
              <div className="relative rounded-[24px] border border-white/10 hover:border-primary/40 h-[400px] overflow-hidden group cursor-pointer transition-all duration-300 shine-hover shadow-lg">
                <img
                  src={consultations[0].image}
                  alt={consultations[0].name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <h4 className="font-impact text-2xl text-white uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {consultations[0].name}
                  </h4>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Second Column - Two Stacked Cards */}
          <div className="flex-1 flex flex-col gap-6">
            {consultations.slice(1, 3).map((consultation, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.25 + index * 0.1}
              >
                <div
                  className="relative rounded-[24px] border border-white/10 hover:border-primary/40 h-[192px] overflow-hidden group cursor-pointer transition-all duration-300 shine-hover shadow-md"
                >
                  <img
                    src={consultation.image}
                    alt={consultation.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h4 className="font-impact text-lg text-white uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                      {consultation.name}
                    </h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
