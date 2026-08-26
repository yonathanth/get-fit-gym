import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import CTASection from "@/components/sections/CTASection";
import RegisterFormClient from "@/components/sections/RegisterFormClient";
import { prisma } from "@/lib/prisma";

const PLACEHOLDER_TRAINERS = [
  {
    id: "trainer-abel",
    slug: "abel-kebede",
    name: "Coach Abel Kebede",
    role: "Strength & Hypertrophy Coach",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop&q=80",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop&q=80",
    specialty: "Barbell Training, Progressive Overload, Muscle Building",
    bio: "Dedicated personal trainer focused on lifting mechanics, muscle development, and safe progressive overload.",
    fullBio: "Coach Abel provides focused one-on-one training to help you build functional strength, lean mass, and joint resilience.",
    experience: "6+ Years",
    experienceText: "6+ Years Experience",
    certifications: ["Certified Personal Trainer (CPT)", "Strength & Conditioning Specialist"],
    specializations: ["Muscle Building", "Powerlifting", "Posture Alignment"]
  },
  {
    id: "trainer-sara",
    slug: "sara-haile",
    name: "Coach Sara Haile",
    role: "Functional Fitness & Female Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    specialty: "Body Recomposition, Glute & Core Training, Mobility",
    bio: "Empowering members with balanced fitness, core strength, and sustainable training routines.",
    fullBio: "Coach Sara specializes in tailored female fitness, body recomposition, and high-energy functional workouts.",
    experience: "5+ Years",
    experienceText: "5+ Years Experience",
    certifications: ["Functional Training Coach", "Sports Nutrition Certified"],
    specializations: ["Body Recomposition", "Core Stability", "Cardio Conditioning"]
  },
  {
    id: "trainer-daniel",
    slug: "daniel-bekele",
    name: "Coach Daniel Bekele",
    role: "HIIT & Fat Loss Conditioning",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop&q=80",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop&q=80",
    specialty: "High-Intensity Intervals, Athletic Conditioning, Stamina",
    bio: "High-energy coach driving fat loss, athletic stamina, and cardiovascular endurance.",
    fullBio: "Coach Daniel combines interval circuits, athletic agility drills, and metabolic conditioning for maximum calorie burn.",
    experience: "5+ Years",
    experienceText: "5+ Years Experience",
    certifications: ["NASM Certified Personal Trainer", "HIIT & Circuit Specialist"],
    specializations: ["Fat Loss", "Agility Drills", "Cardio Capacity"]
  },
  {
    id: "trainer-bethlehem",
    slug: "bethlehem-tadesse",
    name: "Coach Bethlehem Tadesse",
    role: "Mobility & Body Toning Coach",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&q=80",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&q=80",
    specialty: "Joint Mobility, Full-Body Toning, Posture Alignment",
    bio: "Focused on posture alignment, mobility, and lean muscle definition.",
    fullBio: "Coach Bethlehem delivers structured toning workouts paired with active recovery, mobility routines, and joint health protection.",
    experience: "4+ Years",
    experienceText: "4+ Years Experience",
    certifications: ["Mobility & Movement Specialist", "Group Fitness Instructor"],
    specializations: ["Joint Mobility", "Pilates & Core", "Toning Routines"]
  }
];

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RegisterPage() {
  let trainers = PLACEHOLDER_TRAINERS;
  try {
    const dbTrainers = await prisma.teamMember.findMany({
      where: { category: "TRAINER", isActive: true },
      orderBy: { displayOrder: "asc" },
    });
    if (dbTrainers && dbTrainers.length > 0) {
      trainers = dbTrainers.map((t) => ({
        id: t.id,
        slug: t.slug,
        name: t.name,
        role: t.role,
        image: t.imageUrl,
        imageUrl: t.imageUrl,
        specialty: (t.specializations || []).join(", ") || t.role,
        bio: t.bio,
        fullBio: t.fullBio || t.bio,
        experience: `${t.experienceYears}+ Years`,
        experienceText: t.experienceText || `${t.experienceYears}+ Years Experience`,
        certifications: t.certifications || [],
        specializations: t.specializations || [],
      }));
    }
  } catch (err) {
    console.error("DB trainers fetch error in RegisterPage:", err);
  }

  return (
    <main className="w-full min-h-screen bg-background relative overflow-x-clip py-14 sm:py-20">
      <SpotlightEffect />

      {/* Header - Centered */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 mb-12 sm:mb-16 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-4 italic text-center">
            Register <span className="text-primary">Now</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <p className="text-sm sm:text-base md:text-lg text-white/70 font-inter text-center max-w-2xl mx-auto leading-relaxed">
            Start your transformation today. Complete the registration form below to join the Get Fit sanctuary.
          </p>
        </ScrollReveal>
      </div>

      <RegisterFormClient trainers={trainers} />

      {/* CTA Section */}
      <div className="mt-20">
        <CTASection />
      </div>
    </main>
  );
}
