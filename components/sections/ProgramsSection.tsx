"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import MediaCard from "@/components/ui/MediaCard";
import { Section, SectionHeading } from "@/components/ui/Section";

export interface ProgramCardItem {
  name: string;
  imageUrl: string;
}

/** Home-page program highlights: the first five active programs from the admin. */
export default function ProgramsSection({ programs: items = [] }: { programs?: ProgramCardItem[] }) {
  const programs = items.slice(0, 5).map((p) => ({ name: p.name, image: p.imageUrl }));
  if (programs.length === 0) return null;

  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
        {/* Info column */}
        <div className="w-full lg:w-[40%]">
          <ScrollReveal direction="left" delay={0.1}>
            <SectionHeading title="Science-Backed" accent="Programs" align="responsive" className="mb-4 sm:mb-6" />
            <p className="text-[15px] sm:text-base lg:text-lg text-secondary font-inter leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left text-pretty">
              From level-based group classes across 14 dynamic activities to personalized medical fitness tracking, our sports science methodology empowers your transformation safely and effectively.
            </p>
          </ScrollReveal>
        </div>

        {/* Mobile & tablet bento grid (< lg) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden w-full">
          <ScrollReveal direction="up" delay={0.15} className="col-span-2">
            <MediaCard
              image={programs[0].image}
              title={programs[0].name}
              className="h-[200px] sm:h-[260px] rounded-[22px]"
              titleClassName="text-xl sm:text-2xl"
            />
          </ScrollReveal>
          {programs.slice(1).map((program, index) => (
            <ScrollReveal key={program.name} direction="up" delay={0.2 + index * 0.06} className="col-span-1">
              <MediaCard
                image={program.image}
                title={program.name}
                className="h-[170px] sm:h-[210px] rounded-[18px]"
                titleClassName="text-[15px] sm:text-lg"
                captionClassName="p-4 sm:p-5"
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Desktop grid (lg+) */}
        <div className="hidden lg:flex w-full lg:w-[60%] flex-col gap-5 xl:gap-6">
          <div className="grid grid-cols-2 gap-5 xl:gap-6">
            {programs.slice(0, 2).map((program, index) => (
              <ScrollReveal key={program.name} direction="up" delay={0.15 + index * 0.1} duration={0.65}>
                <MediaCard
                  image={program.image}
                  title={program.name}
                  className="h-[230px] xl:h-[250px] rounded-[24px]"
                  titleClassName="text-xl xl:text-2xl"
                />
              </ScrollReveal>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5 xl:gap-6">
            {programs.slice(2, 5).map((program, index) => (
              <ScrollReveal key={program.name} direction="up" delay={0.25 + index * 0.1} duration={0.65}>
                <MediaCard
                  image={program.image}
                  title={program.name}
                  className="h-[170px] xl:h-[185px] rounded-[20px]"
                  titleClassName="text-base xl:text-lg"
                  captionClassName="p-5"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
