import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import CTASection from "@/components/sections/CTASection";
import RegisterFormClient, { type TrainerOption } from "@/components/sections/RegisterFormClient";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Register",
  description: "Join Get Fit Gym in Addis Ababa: pick your plan and coach and register online in minutes.",
  alternates: { canonical: "/register" },
};

export default async function RegisterPage() {
  // Trainers come only from the admin (Team → category TRAINER, active).
  let trainers: TrainerOption[] = [];
  try {
    const dbTrainers = await prisma.teamMember.findMany({
      where: { category: "TRAINER", isActive: true },
      orderBy: { displayOrder: "asc" },
    });
    {
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
      <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="font-impact italic uppercase leading-[0.98] tracking-tight text-[clamp(2.6rem,7.5vw,5.5rem)] text-balance text-center mb-4">
            <span className="text-fade">Register </span>
            <span className="text-shimmer">Now</span>
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
