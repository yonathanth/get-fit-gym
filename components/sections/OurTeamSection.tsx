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

      {/* Team Cards Grid with Centered Bottom Row */}
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
              className="group relative overflow-hidden rounded-[22px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 hover:border-primary/40 bg-surface h-[380px] sm:h-[420px] md:h-[450px] block shine-hover shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={member.imageUrl || member.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary font-inter font-semibold text-sm tracking-wider uppercase border border-primary/40 px-5 py-2.5 rounded-full">
                  View Profile
                </span>
              </div>

              {/* Text Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-xl sm:text-2xl font-impact text-white tracking-tight uppercase mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-inter text-xs sm:text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-secondary font-inter text-xs line-clamp-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
