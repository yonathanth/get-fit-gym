"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import MediaCard from "@/components/ui/MediaCard";
import { Section, SectionHeading } from "@/components/ui/Section";

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
    <Section>
      <div className="flex flex-col lg:flex-row-reverse gap-10 sm:gap-12 lg:gap-16 items-center">
        {/* Info column */}
        <div className="w-full lg:w-[40%]">
          <ScrollReveal direction="right" delay={0.1}>
            <SectionHeading title="World-Class" accent="Expert Support" align="responsive" className="mb-4 sm:mb-6" />
            <p className="text-[15px] sm:text-base lg:text-lg text-secondary font-inter leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left text-pretty">
              Access comprehensive health and fitness guidance from our team of qualified professionals, including medical doctors, exercise physiologists, and clinical nutritionists.
            </p>
          </ScrollReveal>
        </div>

        {/* Mobile & tablet bento grid (< lg) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden w-full">
          <ScrollReveal direction="up" delay={0.15} className="col-span-2">
            <MediaCard
              image={consultations[0].image}
              title={consultations[0].name}
              className="h-[200px] sm:h-[260px] rounded-[22px]"
              titleClassName="text-xl sm:text-2xl"
            />
          </ScrollReveal>
          {consultations.slice(1).map((consultation, index) => (
            <ScrollReveal key={consultation.name} direction="up" delay={0.25 + index * 0.08} className="col-span-1">
              <MediaCard
                image={consultation.image}
                title={consultation.name}
                className="h-[170px] sm:h-[210px] rounded-[18px]"
                titleClassName="text-[15px] sm:text-lg"
                captionClassName="p-4 sm:p-5"
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Desktop layout (lg+): one tall card + two stacked */}
        <div className="hidden lg:flex w-full lg:w-[60%] gap-5 xl:gap-6">
          <div className="flex-1">
            <ScrollReveal direction="up" delay={0.15}>
              <MediaCard
                image={consultations[0].image}
                title={consultations[0].name}
                className="h-[420px] xl:h-[460px] rounded-[24px]"
                titleClassName="text-2xl xl:text-3xl"
                captionClassName="p-7 xl:p-8"
              />
            </ScrollReveal>
          </div>
          <div className="flex-1 flex flex-col gap-5 xl:gap-6">
            {consultations.slice(1).map((consultation, index) => (
              <ScrollReveal key={consultation.name} direction="up" delay={0.25 + index * 0.1}>
                <MediaCard
                  image={consultation.image}
                  title={consultation.name}
                  className="h-[200px] xl:h-[218px] rounded-[24px]"
                  titleClassName="text-lg xl:text-xl"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
