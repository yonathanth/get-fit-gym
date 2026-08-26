"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function OurStorySection() {
  const highlights = [
    {
      title: "1,050 m² Life Fitness Area",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    },
    {
      title: "750 m² Wellness & Spa",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    },
    {
      title: "Sports Science Grounded",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8 sm:mb-12 text-center">
          Our <span className="text-primary">Story</span>
        </h2>
      </ScrollReveal>

      <div className="flex flex-col lg:flex-row-reverse gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Story Text */}
        <div className="w-full lg:w-[40%] space-y-4 sm:space-y-6 text-center lg:text-left">
          <ScrollReveal direction="right" delay={0.15}>
            <p className="text-base sm:text-lg text-white/80 font-inter leading-relaxed">
              Get Fit was established in 2011 E.C. (2018/2019 G.C.) to make fitness accessible to the public based on proven sports science and exercise physiology principles, rather than traditional or informal methods.
            </p>
            <p className="text-base sm:text-lg text-white/80 font-inter leading-relaxed mt-4">
              Our founders hold a B.Sc in Sports Science, an M.Sc in Exercise Physiology, and possess over 20 years of coaching experience. We deliver engaging, motivating, and scientifically tracked training tailored to each member&apos;s unique health condition and fitness level.
            </p>
          </ScrollReveal>
        </div>

        {/* Mobile & Tablet Bento Grid (< lg) */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:hidden w-full">
          {/* Top Full-Width Card */}
          <ScrollReveal direction="up" delay={0.15} className="col-span-2">
            <div className="relative rounded-[22px] border border-white/10 hover:border-primary/40 h-[200px] sm:h-[240px] overflow-hidden group cursor-pointer transition-all duration-300 shine-hover shadow-lg">
              <img
                src={highlights[0].image}
                alt={highlights[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                <h4 className="font-impact text-xl sm:text-2xl text-primary uppercase tracking-tight leading-tight">
                  {highlights[0].title}
                </h4>
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom 2 Pair Cards */}
          {highlights.slice(1, 3).map((highlight, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={0.25 + index * 0.08}
              className="col-span-1"
            >
              <div className="relative rounded-[18px] border border-white/10 hover:border-primary/40 h-[160px] sm:h-[180px] overflow-hidden group cursor-pointer transition-all duration-300 shine-hover shadow-md">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h4 className="font-impact text-sm sm:text-base text-primary uppercase tracking-tight leading-tight">
                    {highlight.title}
                  </h4>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Desktop Media Cards (lg+) */}
        <div className="hidden lg:flex w-full lg:w-[60%] gap-6">
          {/* First Card - Larger */}
          <div className="flex-1">
            <ScrollReveal direction="up" delay={0.15}>
              <div className="relative rounded-[24px] md:rounded-[32px] border border-white/10 hover:border-primary/40 h-[400px] overflow-hidden group cursor-pointer transition-all duration-300 shine-hover shadow-lg">
                <img
                  src={highlights[0].image}
                  alt={highlights[0].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <h4 className="font-impact text-2xl text-primary uppercase tracking-tight leading-tight">
                    {highlights[0].title}
                  </h4>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Second Column - Two Stacked Cards */}
          <div className="flex-1 flex flex-col gap-6">
            {highlights.slice(1, 3).map((highlight, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.25 + index * 0.1}
              >
                <div className="relative rounded-[24px] md:rounded-[32px] border border-white/10 hover:border-primary/40 h-[192px] overflow-hidden group cursor-pointer transition-all duration-300 shine-hover shadow-md">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h4 className="font-impact text-lg text-primary uppercase tracking-tight leading-tight">
                      {highlight.title}
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
