"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const programs = [
  {
    name: "Level-Based Group Fitness (14 Activities)",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80",
    gradient: "from-indigo-50 to-purple-50",
  },
  {
    name: "Sports Science Strength & Power",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    gradient: "from-blue-50 to-cyan-50",
  },
  {
    name: "Medical & Health-Tailored Training",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80",
    gradient: "from-orange-50 to-amber-50",
  },
  {
    name: "Combat Sports & Martial Arts",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop&q=80",
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    name: "Senior Circuit & Body Toning",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
    gradient: "from-pink-50 to-rose-50",
  },
];

export default function ProgramsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 my-16 sm:my-28 md:my-40">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left Info Column */}
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <ScrollReveal direction="left" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight mb-4 sm:mb-6 uppercase">
              Science-Backed Programs
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary font-inter leading-relaxed max-w-xl mx-auto lg:mx-0">
              From level-based group classes across 14 dynamic activities to personalized medical fitness tracking, our sports science methodology empowers your transformation safely and effectively.
            </p>
          </ScrollReveal>
        </div>

        {/* Mobile & Tablet Bento Grid (< lg) */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:hidden w-full">
          {/* Card 1 - Featured Full Width */}
          <ScrollReveal direction="up" delay={0.15} className="col-span-2">
            <div className="relative rounded-[22px] border border-white/10 hover:border-primary/40 h-[190px] sm:h-[220px] overflow-hidden group cursor-pointer bg-surface transition-all duration-300 shine-hover shadow-lg">
              <img
                src={programs[0].image}
                alt={programs[0].name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h4 className="font-impact text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                  {programs[0].name}
                </h4>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 & 3 - Side by Side Pair */}
          {programs.slice(1, 3).map((program, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={0.2 + index * 0.08}
              className="col-span-1"
            >
              <div className="relative rounded-[18px] border border-white/10 hover:border-primary/40 h-[160px] sm:h-[180px] overflow-hidden group cursor-pointer bg-surface transition-all duration-300 shine-hover shadow-md">
                <img
                  src={program.image}
                  alt={program.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <span className="font-impact text-sm sm:text-base text-white uppercase tracking-tight leading-tight block group-hover:text-primary transition-colors">
                    {program.name}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Card 4 & 5 - Side by Side Pair */}
          {programs.slice(3, 5).map((program, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={0.28 + index * 0.08}
              className="col-span-1"
            >
              <div className="relative rounded-[18px] border border-white/10 hover:border-primary/40 h-[160px] sm:h-[180px] overflow-hidden group cursor-pointer bg-surface transition-all duration-300 shine-hover shadow-md">
                <img
                  src={program.image}
                  alt={program.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <span className="font-impact text-sm sm:text-base text-white uppercase tracking-tight leading-tight block group-hover:text-primary transition-colors">
                    {program.name}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Desktop Grid (lg+) */}
        <div className="hidden lg:flex w-full lg:w-[60%] flex-col gap-6">
          {/* First Row - 2 Large Cards */}
          <div className="grid grid-cols-2 gap-6">
            {programs.slice(0, 2).map((program, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.15 + index * 0.1}
                duration={0.65}
              >
                <div
                  className="relative rounded-[24px] border border-white/10 hover:border-primary/40 h-[220px] overflow-hidden group cursor-pointer bg-surface transition-all duration-300 shine-hover shadow-lg"
                >
                  <img
                    src={program.image}
                    alt={program.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h4 className="font-impact text-xl text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                      {program.name}
                    </h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-3 gap-6">
            {programs.slice(2, 5).map((program, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.25 + index * 0.1}
                duration={0.65}
              >
                <div
                  className="relative rounded-[20px] border border-white/10 hover:border-primary/40 h-[160px] overflow-hidden group cursor-pointer bg-surface transition-all duration-300 shine-hover shadow-md"
                >
                  <img
                    src={program.image}
                    alt={program.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <span className="font-impact text-sm sm:text-base text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                      {program.name}
                    </span>
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
