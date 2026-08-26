import PageHeading from "@/components/sections/PageHeading";
import MembershipPlansSection from "@/components/sections/MembershipPlansSection";
import ClassesSection from "@/components/sections/ClassesSection";
import CTASection from "@/components/sections/CTASection";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop&q=80"
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
