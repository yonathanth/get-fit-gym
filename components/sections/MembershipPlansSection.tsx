"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

type DurationOption = "1-month" | "3-months" | "6-months" | "1-year";

interface PlanItem {
  id: string;
  name: string;
  subtitle: string;
  isPopular?: boolean;
  pricing: Record<DurationOption, {
    price: string;
    period: string;
  }>;
  features: {
    included: boolean;
    text: string;
  }[];
}

interface MembershipPlansSectionProps {
  plans?: any[];
}

export default function MembershipPlansSection({ plans = [] }: MembershipPlansSectionProps) {
  const [activeTab, setActiveTab] = useState<"Any Time (Regular)" | "Happy Hour (20% Off)">("Any Time (Regular)");
  const [selectedDurations, setSelectedDurations] = useState<Record<string, DurationOption>>({
    "gym-only-regular": "1-month",
    "gym-spa-regular": "1-month",
    "couple-regular": "1-month",
    "gym-only-happy-hour": "1-month",
    "gym-spa-happy-hour": "1-month",
    "couple-happy-hour": "1-month",
  });

  // Plans come only from the admin (active plans, grouped by category).
  const regularDb = (plans ?? []).filter((p) => p.category === "REGULAR");
  const happyDb = (plans ?? []).filter((p) => p.category === "HAPPY_HOUR");
  const dynamicPlans: Record<"Any Time (Regular)" | "Happy Hour (20% Off)", PlanItem[]> = {
        "Any Time (Regular)": regularDb.map((p) => ({
          id: p.slug || p.id,
          name: p.name,
          subtitle: p.subtitle || "",
          isPopular: p.isPopular,
          pricing: {
            "1-month": { price: p.price1Month, period: "/ month" },
            "3-months": { price: p.price3Months, period: "/ 3 months" },
            "6-months": { price: p.price6Months, period: "/ 6 months" },
            "1-year": { price: p.price1Year, period: "/ year (Save 40%)" },
          },
          features: (p.features || []).map((f: string) => ({ included: true, text: f })),
        })),
        "Happy Hour (20% Off)": happyDb.map((p) => ({
          id: p.slug || p.id,
          name: p.name,
          subtitle: p.subtitle || "",
          isPopular: p.isPopular,
          pricing: {
            "1-month": { price: p.price1Month, period: "/ month" },
            "3-months": { price: p.price3Months, period: "/ 3 months" },
            "6-months": { price: p.price6Months, period: "/ 6 months" },
            "1-year": { price: p.price1Year, period: "/ year (Save 40%)" },
          },
          features: (p.features || []).map((f: string) => ({ included: true, text: f })),
        })),
  };

  const currentPlans = dynamicPlans[activeTab] ?? [];
  // No active plans at all -> hide the section entirely
  if (regularDb.length + happyDb.length === 0) return null;

  const handleDurationChange = (planId: string, duration: DurationOption) => {
    setSelectedDurations((prev) => ({
      ...prev,
      [planId]: duration,
    }));
  };

  return (
    <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-impact uppercase tracking-tight leading-[1.02] text-[clamp(2.1rem,5.2vw,4rem)] text-balance mb-3">
            <span className="text-fade">Membership </span><span className="text-shimmer">Plans</span>
          </h2>
          <p className="text-sm sm:text-base text-white/65 font-inter leading-relaxed text-pretty">
            Family & Friends Pre-Opening Discount. Flexible options for 1 Year, 6 Months, 3 Months, 1 Month, and Day Pass.
          </p>
        </div>
      </ScrollReveal>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-12 sm:mb-16">
        <div className="inline-flex bg-[#141313] border border-white/10 rounded-full p-1.5 relative shadow-lg">
          <button
            onClick={() => setActiveTab("Any Time (Regular)")}
            className={`relative z-10 px-5 sm:px-8 py-2.5 rounded-full font-inter font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              activeTab === "Any Time (Regular)"
                ? "bg-primary text-black shadow-md"
                : "text-white/70 hover:text-white"
            }`}
          >
            Regular (Any Time)
          </button>
          <button
            onClick={() => setActiveTab("Happy Hour (20% Off)")}
            className={`relative z-10 px-5 sm:px-8 py-2.5 rounded-full font-inter font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              activeTab === "Happy Hour (20% Off)"
                ? "bg-primary text-black shadow-md"
                : "text-white/70 hover:text-white"
            }`}
          >
            Happy Hour (20% Off)
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid with Centered Bottom Row */}
      <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-stretch">
        {currentPlans.length === 0 && (
          <p className="py-10 text-center font-inter text-sm text-white/50">
            No plans in this category right now. Check the other tab or contact us.
          </p>
        )}
        {currentPlans.map((plan, index) => {
          const currentDuration = selectedDurations[plan.id] || "1-month";
          const currentPricing = plan.pricing[currentDuration] || plan.pricing["1-month"];

          return (
            <ScrollReveal
              key={plan.id}
              direction="up"
              delay={0.1 + index * 0.08}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[380px] flex flex-col"
            >
              <div
                className={`h-full flex-1 rounded-[26px] sm:rounded-[30px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                  plan.isPopular
                    ? "bg-[#141313] border-2 border-primary shadow-[0_0_30px_rgba(217,151,43,0.15)] md:-translate-y-2"
                    : "bg-[#101010] border border-white/10 hover:border-white/25"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-black font-impact text-xs tracking-wider uppercase px-4 py-1 rounded-full shadow-lg font-bold">
                    Most Popular
                  </div>
                )}

                {/* Top Section */}
                <div>
                  {/* Plan Header */}
                  <h3 className="text-xl sm:text-2xl font-impact text-white tracking-wide uppercase">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-white/60 font-inter mt-1 min-h-[32px] line-clamp-2">
                    {plan.subtitle}
                  </p>

                  {/* Plan Duration Simple Dropdown Selector */}
                  <div className="mt-4 mb-3">
                    <label className="block text-[10px] font-inter uppercase font-bold text-white/50 mb-1.5 tracking-wider">
                      Select Plan Term
                    </label>
                    <div className="relative">
                      <select
                        value={currentDuration}
                        onChange={(e) => handleDurationChange(plan.id, e.target.value as DurationOption)}
                        className="w-full bg-[#181818] border border-white/15 hover:border-primary/50 text-white font-inter font-semibold text-xs sm:text-sm rounded-xl px-3.5 py-2.5 appearance-none focus:outline-none focus:border-primary transition-colors cursor-pointer"
                      >
                        <option value="1-month" className="bg-[#121212] text-white">1 Month (Monthly)</option>
                        <option value="3-months" className="bg-[#121212] text-white">3 Months</option>
                        <option value="6-months" className="bg-[#121212] text-white">6 Months</option>
                        <option value="1-year" className="bg-[#121212] text-white">1 Year (Save 40%)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none text-lg">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Price Display */}
                  <div className="flex items-baseline gap-2 mb-6 mt-3">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-impact text-white tracking-tight">
                      {currentPricing.price}
                    </span>
                    <span className="text-xs sm:text-sm text-white/60 font-inter font-medium">
                      {currentPricing.period}
                    </span>
                  </div>

                  {/* Get Started CTA Button */}
                  <Link
                    href="/register"
                    className={`w-full py-3.5 px-6 rounded-2xl font-inter font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 block text-center shadow-md cursor-pointer ${
                      plan.isPopular
                        ? "bg-primary hover:bg-primary-hover text-black font-extrabold"
                        : "bg-white/10 hover:bg-white text-white hover:text-black"
                    }`}
                  >
                    Get started
                  </Link>

                  {/* Clean Divider Line */}
                  <div className="border-t border-white/10 my-6 sm:my-7" />

                  {/* Features List Section */}
                  <div>
                    <h4 className="text-[11px] sm:text-xs font-inter font-bold uppercase tracking-wider text-white/90 mb-1">
                      FEATURES
                    </h4>
                    <p className="text-[11px] sm:text-xs text-white/50 font-inter mb-4">
                      {plan.isPopular ? "Everything in basic plus..." : "Everything included in this tier:"}
                    </p>

                    <ul className="space-y-3">
                      {plan.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className={`flex items-center gap-3 text-xs sm:text-sm font-inter leading-tight ${
                            feature.included ? "text-white/85" : "text-white/35"
                          }`}
                        >
                          {feature.included ? (
                            <div className="w-5 h-5 rounded-full bg-black border border-white/20 flex items-center justify-center flex-shrink-0 text-primary">
                              <span className="material-symbols-outlined text-[13px] font-bold">
                                check
                              </span>
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/30">
                              <span className="material-symbols-outlined text-[13px]">
                                remove
                              </span>
                            </div>
                          )}
                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
