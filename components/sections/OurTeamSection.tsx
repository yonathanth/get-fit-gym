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

export const DEFAULT_COACHES: CoachItem[] = [
  {
    id: "coach-teshome",
    slug: "teshome-abate",
    name: "Teshome Abate",
    role: "Master Athletics Coach & Martial Arts Specialist",
    bio: "Dual Master's in Exercise Physiology & Athletics Coaching, 7th Dan Black Belt in Wushu, and 22+ years elite athletic instruction.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80"
  },
  {
    id: "coach-gebreal",
    slug: "gebreal-tessema-admas",
    name: "Gebreal Tessema Admas",
    role: "Operational Manager & Medical Fitness Coach",
    bio: "B.Ed. in Physical Education & M.A. in Leadership with 11 years coaching experience in medical fitness and exercise programming.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop&q=80"
  },
  {
    id: "coach-abeyet",
    slug: "abeyet-naqachew",
    name: "Abeyet Naqachew",
    role: "Senior Coach & Combat Sports Specialist",
    bio: "20+ years of hands-on coaching leadership, functional movement, weightlifting program design, and 6th Dan Black Belt in Wushu.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80"
  },
  {
    id: "coach-tewodros",
    slug: "tewodros-bogale",
    name: "Tewodros Bogale",
    role: "Exercise Physiologist & Head Gym Instructor",
    bio: "M.Sc. in Exercise Physiology and B.Sc. in Sport Science with 13+ years coaching experience in top commercial fitness environments.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80"
  },
  {
    id: "coach-dr-tobel",
    slug: "dr-tobel-daniel-tessema",
    name: "Dr. Tobel Daniel Tessema",
    role: "Medical Doctor & Community Nutrition Specialist",
    bio: "Medical Doctor (M.D.) & M.Sc. candidate in Community Nutrition & Dietetics applying clinical medical insights to lifestyle wellness.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=800&fit=crop&q=80"
  }
];

interface OurTeamSectionProps {
  coaches?: CoachItem[];
}

export default function OurTeamSection({ coaches = [] }: OurTeamSectionProps) {
  const displayCoaches = coaches && coaches.length > 0 ? coaches : DEFAULT_COACHES;

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-3 text-center">
          Our <span className="text-primary">Team</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-white/70 font-inter text-center max-w-xl mx-auto mb-8 sm:mb-12">
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
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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
