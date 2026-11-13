"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface CoachItem {
  id: string;
  slug: string;
  name: string;
  role: string;
  imageUrl?: string;
  image?: string;
  bio: string;
}

interface OurTeamSectionProps {
  coaches?: CoachItem[];
}

export default function OurTeamSection({ coaches = [] }: OurTeamSectionProps) {
  // Team members come only from the admin; with none active, the section is hidden.
  const displayCoaches = coaches ?? [];
  if (displayCoaches.length === 0) return null;

  return (
    <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="font-impact uppercase tracking-tight leading-[1.02] text-[clamp(2.1rem,5.2vw,4rem)] text-balance mb-3 text-center">
          <span className="text-fade">Our </span><span className="text-shimmer">Team</span>
        </h2>
        <p className="text-sm sm:text-base text-white/65 font-inter leading-relaxed text-pretty text-center max-w-xl mx-auto mb-8 sm:mb-12">
          From advanced exercise physiology to clinical medical fitness and elite athletic conditioning.
        </p>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {displayCoaches.map((member, index) => (
          <ScrollReveal
            key={member.id}
            direction="up"
            delay={0.15 + (index % 4) * 0.08}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[380px]"
          >
            <Link
              href={`/team/${member.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-[22px] sm:rounded-[28px] border border-white/10 bg-surface shadow-xl transition-colors duration-300 hover:border-primary/50"
            >
              <img
                src={member.imageUrl || member.image || "/logo.png"}
                alt={member.name}
                className="absolute inset-0 h-full w-full object-cover object-[center_85%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Light shade on the bottom third only, just enough to read the name */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-impact text-2xl sm:text-[28px] uppercase tracking-tight leading-none text-white transition-colors group-hover:text-primary">
                  {member.name}
                </h3>
                <p className="mt-1.5 font-inter text-xs sm:text-sm font-medium text-primary">{member.role}</p>
                <div className="mt-3 h-[2px] w-6 bg-primary transition-all duration-300 group-hover:w-12" />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
