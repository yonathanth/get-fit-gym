"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PlanItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  annualPrice?: string;
  isPopular?: boolean;
  features: {
    included: boolean;
    text: string;
  }[];
}

const MEMBERSHIP_PLANS: Record<"Any Time (Regular)" | "Happy Hour (20% Off)", PlanItem[]> = {
  "Any Time (Regular)": [
    {
      id: "gym-only-regular",
      name: "Gym Only",
      subtitle: "Full 1,050 m² training floor & level-based group classes",
      price: "19,500 ETB",
      period: "/ month",
      annualPrice: "1-Yr Pass: 70,200 ETB (Save 40%)",
      isPopular: false,
      features: [
        { included: true, text: "1,050 m² Life Fitness equipment access" },
        { included: true, text: "14 level-based group fitness classes" },
        { included: true, text: "Standard locker room & shower amenities" },
        { included: true, text: "Detailed initial fitness assessment" },
        { included: true, text: "Pre-opening discounts (3 Mo: 32.8k, 6 Mo: 49.1k)" },
        { included: false, text: "Full 750 m² Spa & Moroccan bath access" },
        { included: false, text: "Medical doctor & nutritionist consultation" }
      ]
    },
    {
      id: "gym-spa-regular",
      name: "Gym With Spa",
      subtitle: "All-inclusive training floor, group classes & luxury recovery center",
      price: "27,495 ETB",
      period: "/ month",
      annualPrice: "1-Yr Pass: 77,200 ETB (Save 40%)",
      isPopular: true,
      features: [
        { included: true, text: "Full 1,050 m² Life Fitness arena access" },
        { included: true, text: "Unlimited 750 m² Spa, steam & sauna" },
        { included: true, text: "Moroccan bath & massage therapy access" },
        { included: true, text: "14 level-based group fitness activities" },
        { included: true, text: "Detailed body composition scan & tracking" },
        { included: true, text: "Nutritionist & medical doctor consultation" },
        { included: true, text: "Priority executive locker & towel service" }
      ]
    },
    {
      id: "couple-regular",
      name: "Couple Package (10% Off)",
      subtitle: "Dual all-inclusive membership with 10% couples discount",
      price: "49,530 ETB",
      period: "/ month",
      annualPrice: "1-Yr Pass: 138,996 ETB (Save 40%)",
      isPopular: false,
      features: [
        { included: true, text: "2-person all-inclusive Gym & Spa pass" },
        { included: true, text: "1,050 m² training area + 750 m² wellness center" },
        { included: true, text: "Unlimited steam, sauna & Moroccan bath" },
        { included: true, text: "14 level-based group classes for both" },
        { included: true, text: "Dual body composition & health evaluations" },
        { included: true, text: "Personalized nutrition strategies" },
        { included: true, text: "Restaurant & beauty salon discounts" }
      ]
    }
  ],
  "Happy Hour (20% Off)": [
    {
      id: "gym-only-happy-hour",
      name: "Gym Only (Happy Hour)",
      subtitle: "Off-peak training floor access with 20% discount",
      price: "15,600 ETB",
      period: "/ month",
      annualPrice: "1-Yr Pass: 56,160 ETB (Save 40%)",
      isPopular: false,
      features: [
        { included: true, text: "Off-peak 1,050 m² Life Fitness area access" },
        { included: true, text: "14 level-based group fitness classes" },
        { included: true, text: "Standard locker room & shower amenities" },
        { included: true, text: "Baseline fitness level assessment" },
        { included: true, text: "Pre-opening savings (3 Mo: 26.2k, 6 Mo: 39.3k)" },
        { included: false, text: "Spa & Moroccan bath access" },
        { included: false, text: "Medical doctor consultation" }
      ]
    },
    {
      id: "gym-spa-happy-hour",
      name: "Gym With Spa (Happy Hour)",
      subtitle: "Off-peak Gym & Spa luxury recovery with 20% savings",
      price: "22,000 ETB",
      period: "/ month",
      annualPrice: "1-Yr Pass: 61,776 ETB (Save 40%)",
      isPopular: true,
      features: [
        { included: true, text: "Off-peak 1,050 m² Life Fitness arena access" },
        { included: true, text: "750 m² Spa, steam, sauna & Moroccan bath" },
        { included: true, text: "Detailed body composition & health tracking" },
        { included: true, text: "14 level-based group classes" },
        { included: true, text: "Nutritionist consultation session" },
        { included: true, text: "Priority executive locker & shower access" },
        { included: true, text: "Pre-opening rates (3 Mo: 30.9k, 6 Mo: 43.6k)" }
      ]
    },
    {
      id: "couple-happy-hour",
      name: "Couple Happy Hour",
      subtitle: "Off-peak dual Gym & Spa package with combined discounts",
      price: "39,624 ETB",
      period: "/ month",
      annualPrice: "1-Yr Pass: 111,192 ETB (Save 40%)",
      isPopular: false,
      features: [
        { included: true, text: "2-person off-peak Gym & Spa all-inclusive" },
        { included: true, text: "Unlimited steam, sauna & Moroccan bath" },
        { included: true, text: "Dual body composition assessments" },
        { included: true, text: "14 level-based group classes for both" },
        { included: true, text: "Nutrition consultation & dietary review" },
        { included: true, text: "Restaurant & beauty salon discounts" },
        { included: true, text: "Pre-opening rates (3 Mo: 55.9k, 6 Mo: 78.6k)" }
      ]
    }
  ]
};

export default function MembershipPlansSection() {
  const [activeTab, setActiveTab] = useState<"Any Time (Regular)" | "Happy Hour (20% Off)">("Any Time (Regular)");

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-3">
            Membership <span className="text-primary">Plans</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/70 font-inter">
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

      {/* Pricing Cards Grid - Matching Clean High-Contrast Modern Screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {MEMBERSHIP_PLANS[activeTab].map((plan, index) => (
          <ScrollReveal
            key={plan.id}
            direction="up"
            delay={0.1 + index * 0.08}
            className="h-full"
          >
            <div
              className={`h-full rounded-[26px] sm:rounded-[30px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
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

                {/* Price Display */}
                <div className="mt-5 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-impact text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs sm:text-sm text-white/60 font-inter font-medium">
                      {plan.period}
                    </span>
                  </div>
                  {plan.annualPrice && (
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-inter text-primary font-semibold">
                      <span className="material-symbols-outlined text-[13px]">savings</span>
                      <span>{plan.annualPrice}</span>
                    </div>
                  )}
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
        ))}
      </div>
    </section>
  );
}
