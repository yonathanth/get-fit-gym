"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface ProgramItem {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  schedule: string;
  capacity?: number;
  instructor: string;
  intensity?: string;
  price?: string | null;
  features?: string[];
}

const DEFAULT_PROGRAMS: ProgramItem[] = [
  {
    id: "prog-hiit-metabolic",
    name: "HIIT & Metabolic Training",
    category: "Cardio & Fat Loss",
    description: "High-intensity metabolic conditioning and interval circuits to accelerate fat oxidation, cardiovascular health, and stamina.",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80",
    schedule: "Mon, Wed, Fri (6:00 AM & 9:30 AM)",
    instructor: "Abeyet Naqachew",
    price: "Included in Membership"
  },
  {
    id: "prog-zumba-kickboxing",
    name: "Zumba Kick Boxing",
    category: "Dance & Martial Arts",
    description: "Dynamic fusion of high-energy dance rhythms and martial arts striking combinations for full-body calorie burning and agility.",
    imageUrl: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop&q=80",
    schedule: "Tue, Wed, Fri (9:30 AM & 6:00 PM)",
    instructor: "Teshome Abate",
    price: "Included in Membership"
  },
  {
    id: "prog-aerobics-toning",
    name: "Aerobics & Body Toning",
    category: "Strength & Toning",
    description: "Rhythmic endurance exercises paired with resistance bands and light weights to tone muscles, improve posture, and boost stamina.",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
    schedule: "Thu, Fri (9:30 AM & 6:00 PM)",
    instructor: "Tewodros Bogale",
    price: "Included in Membership"
  },
  {
    id: "prog-sweat-cardio",
    name: "Circuit & Sweat Cardio",
    category: "Full Body Conditioning",
    description: "Fast-paced station-to-station circuit training utilizing Life Fitness equipment and bodyweight exercises for peak heart health.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    schedule: "Mon, Tue, Wed (6:00 AM & 6:00 PM)",
    instructor: "Gebreal Tessema Admas",
    price: "Included in Membership"
  },
  {
    id: "prog-senior-circuit",
    name: "Senior Circuit & Toning",
    category: "Health & Longevity",
    description: "Gentle, level-based functional exercises designed specifically for joint mobility, balance, bone density, and vital energy.",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80",
    schedule: "Mon, Fri (11:00 AM Morning)",
    instructor: "Gebreal Tessema Admas",
    price: "Included in Membership"
  },
  {
    id: "prog-dance-combo",
    name: "World of Dance & Traditional",
    category: "Cultural & Fitness Dance",
    description: "Exhilarating dance workout celebrating international rhythms and traditional beats for an uplifting, spirit-renewing cardio experience.",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    schedule: "Wed, Fri (6:00 PM) & Sat (12:30 PM)",
    instructor: "Tewodros Bogale",
    price: "Included in Membership"
  }
];

interface ClassesSectionProps {
  programs?: ProgramItem[];
}

export default function ClassesSection({ programs = [] }: ClassesSectionProps) {
  const displayPrograms = programs && programs.length > 0 ? programs : DEFAULT_PROGRAMS;

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-3">
            Group <span className="text-primary">Classes</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/70 font-inter">
            14 different activities across 3 time-slots (Morning, Mid-Day, Evening) led by sports science specialists.
          </p>
        </div>
      </ScrollReveal>

      {/* Redesigned Clean Class Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {displayPrograms.map((item, index) => (
          <ScrollReveal
            key={item.id}
            direction="up"
            delay={0.1 + (index % 3) * 0.08}
            className="h-full"
          >
            <div className="group h-full rounded-[24px] sm:rounded-[28px] border border-white/10 hover:border-primary/40 bg-[#121212] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shine-hover">
              
              {/* Clean Class Image Banner */}
              <div className="relative h-[210px] sm:h-[230px] w-full overflow-hidden bg-black/40">
                <img
                  src={item.imageUrl || "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              </div>

              {/* Class Content Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-inter text-primary mb-2 font-medium">
                    <span>{item.category}</span>
                    {item.price && <span className="text-white/75">{item.price}</span>}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-impact text-white leading-[1.1] uppercase tracking-wide group-hover:text-primary transition-colors mb-3">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 font-inter leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>

                  {/* Metadata Badges */}
                  <div className="space-y-2 text-xs font-inter text-white/75 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base">
                        schedule
                      </span>
                      <span>{item.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base">
                        person
                      </span>
                      <span>Coach: {item.instructor}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <Link
                  href="/register"
                  className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-primary-hover text-black font-inter font-bold text-xs uppercase tracking-wider transition-all duration-200 block text-center shadow-md cursor-pointer"
                >
                  Join This Class
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
