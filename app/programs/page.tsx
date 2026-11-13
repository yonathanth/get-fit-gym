import type { Metadata } from "next";
import PageHeading from "@/components/sections/PageHeading";
import MembershipPlansSection from "@/components/sections/MembershipPlansSection";
import ClassesSection from "@/components/sections/ClassesSection";
import CTASection from "@/components/sections/CTASection";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Programs & Membership",
  description: "Personal training, group classes, medical fitness, nutrition coaching and membership plans at Get Fit Gym, Addis Ababa.",
  alternates: { canonical: "/programs" },
};

export default async function ProgramsPage() {
  let programs: any[] = [];
  let membershipPlans: any[] = [];

  try {
    const [fetchedPrograms, fetchedPlans] = await Promise.all([
      prisma.program.findMany({
        where: { status: "ACTIVE" },
        orderBy: { displayOrder: "asc" },
      }),
      prisma.membershipPlan.findMany({
        where: { isActive: true },
        orderBy: { displayOrder: "asc" },
      }),
    ]);
    programs = fetchedPrograms;
    membershipPlans = fetchedPlans;
  } catch (err) {
    console.error("DB fetch error in ProgramsPage:", err);
  }

  return (
    <main className="w-full">
      <PageHeading 
        title="Programs & Memberships" 
        subtitle="Explore our science-backed training programs, 14 level-based group classes across 3 time-slots, and pre-opening membership packages."
        images={[
          "/images/others/dsc00727.webp",
          "/images/hero/dsc00681.webp",
          "/images/hero/dsc00723.webp"
        ]}
      />
      
      {/* Membership Plans Section */}
      <MembershipPlansSection plans={membershipPlans} />

      {/* Classes Section with live DB records */}
      <ClassesSection programs={programs} />

      <CTASection />
    </main>
  );
}
