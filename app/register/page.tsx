import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import RegisterFormClient, { type RegisterClass, type RegisterPlan } from "@/components/sections/RegisterFormClient";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Register",
  description: "Join Get Fit Gym in Addis Ababa: pick your membership and classes and register online in under a minute.",
  alternates: { canonical: "/register" },
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; period?: string }>;
}) {
  const { plan, period } = await searchParams;

  // Plans and classes come from the admin (Programs & Plans), so prices stay in sync.
  const [dbPlans, dbClasses] = await Promise.all([
    prisma.membershipPlan
      .findMany({ where: { isActive: true }, orderBy: [{ category: "asc" }, { displayOrder: "asc" }] })
      .catch((err) => {
        console.error("DB plans fetch error in RegisterPage:", err);
        return [];
      }),
    prisma.program
      .findMany({ where: { status: "ACTIVE" }, orderBy: { displayOrder: "asc" }, select: { name: true, schedule: true } })
      .catch((err) => {
        console.error("DB classes fetch error in RegisterPage:", err);
        return [];
      }),
  ]);

  const plans: RegisterPlan[] = dbPlans.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    tier: p.tier,
    subtitle: p.subtitle,
    isPopular: p.isPopular,
    prices: { "1-month": p.price1Month, "3-months": p.price3Months, "6-months": p.price6Months, "1-year": p.price1Year },
  }));
  const classes: RegisterClass[] = dbClasses;

  return (
    <main className="w-full min-h-screen bg-background relative overflow-x-clip py-14 sm:py-20">
      <SpotlightEffect />

      <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="font-impact italic uppercase leading-[0.98] tracking-tight text-[clamp(2.6rem,7.5vw,5.5rem)] text-balance text-center mb-3">
            <span className="text-fade">Register </span>
            <span className="text-shimmer">Now</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <p className="text-sm sm:text-base text-white/70 font-inter text-center max-w-xl mx-auto leading-relaxed">
            Your name, your number and your plan. That&apos;s it. We&apos;ll call you to confirm.
          </p>
        </ScrollReveal>
      </div>

      <RegisterFormClient plans={plans} classes={classes} initialPlan={plan} initialPeriod={period} />
    </main>
  );
}
