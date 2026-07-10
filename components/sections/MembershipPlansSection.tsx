"use client";

import { useState } from "react";
import MembershipFlipCard from "@/components/ui/MembershipFlipCard";

type Plan = {
  name: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  features: string[];
};

const membershipPlans = {
  "Kids & Teens": [
    {
      name: "General Fitness",
      description: "Build foundational fitness habits with fun, engaging exercises designed for young athletes.",
      image: "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=600&h=400&fit=crop&q=80",
      price: "1,500 ETB",
      duration: "month",
      features: [
        "3 sessions per week",
        "Age-appropriate equipment",
        "Fun group activities",
        "Progress tracking",
        "Certified youth trainers"
      ]
    },
    {
      name: "Strength Training",
      description: "Age-appropriate strength building programs to develop power and confidence.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop&q=80",
      price: "1,800 ETB",
      duration: "month",
      features: [
        "4 sessions per week",
        "Safe strength protocols",
        "Body weight exercises",
        "Form coaching",
        "Nutrition guidance"
      ]
    },
    {
      name: "Kickboxing",
      description: "High-energy martial arts training that builds discipline, coordination, and self-defense skills.",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&h=400&fit=crop&q=80",
      price: "2,000 ETB",
      duration: "month",
      features: [
        "3 sessions per week",
        "Self-defense techniques",
        "Discipline training",
        "Belt progression system",
        "Competition opportunities"
      ]
    },
    {
      name: "Gymnastics",
      description: "Develop flexibility, balance, and body control through structured gymnastics training.",
      image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?w=600&h=400&fit=crop&q=80",
      price: "2,200 ETB",
      duration: "month",
      features: [
        "3 sessions per week",
        "Professional equipment",
        "Flexibility training",
        "Balance development",
        "Performance showcases"
      ]
    },
    {
      name: "Taekwondo",
      description: "Traditional martial arts focused on discipline, respect, and powerful kicking techniques.",
      image: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=600&h=400&fit=crop&q=80",
      price: "1,800 ETB",
      duration: "month",
      features: [
        "3 sessions per week",
        "Traditional forms (Poomsae)",
        "Sparring practice",
        "Belt ranking system",
        "Values & ethics training"
      ]
    },
    {
      name: "Dance Fitness",
      description: "Fun and energetic dance classes that improve rhythm, coordination, and cardiovascular health.",
      image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=400&fit=crop&q=80",
      price: "1,500 ETB",
      duration: "month",
      features: [
        "3 sessions per week",
        "Multiple dance styles",
        "Cardio workouts",
        "Choreography training",
        "Performance opportunities"
      ]
    }
  ],
  "Adult": [
    {
      name: "Zumba Dance",
      description: "Latin-inspired dance workout that combines high-energy music with easy-to-follow moves.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80",
      price: "1,800 ETB",
      duration: "month",
      features: [
        "Unlimited classes",
        "High-energy music",
        "Calorie-burning workout",
        "Fun group atmosphere",
        "No dance experience needed"
      ]
    },
    {
      name: "Circuit Training",
      description: "Intense full-body workout rotating through different exercise stations for maximum results.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=80",
      price: "2,500 ETB",
      duration: "month",
      features: [
        "5 sessions per week",
        "Full-body conditioning",
        "Varied exercise stations",
        "High-intensity intervals",
        "Results-focused programming"
      ]
    },
    {
      name: "Metabolic Training",
      description: "High-intensity workouts designed to boost metabolism and burn fat efficiently.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80",
      price: "2,800 ETB",
      duration: "month",
      features: [
        "4 sessions per week",
        "HIIT workouts",
        "Metabolism boosting",
        "Fat burning focus",
        "Personalized intensity levels"
      ]
    },
    {
      name: "Special Weight Loss Program",
      description: "Comprehensive program combining cardio, strength, and nutrition guidance for sustainable weight loss.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop&q=80",
      price: "3,500 ETB",
      duration: "month",
      features: [
        "Unlimited access",
        "Nutrition consultation",
        "Body composition tracking",
        "Personal coaching",
        "Meal planning support"
      ]
    },
    {
      name: "Get Fit Toning",
      description: "Sculpt and tone your body with targeted exercises for definition and strength.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop&q=80",
      price: "2,200 ETB",
      duration: "month",
      features: [
        "4 sessions per week",
        "Muscle toning focus",
        "Light weights & resistance",
        "Body sculpting",
        "Definition training"
      ]
    },
    {
      name: "Outdoor Training",
      description: "Take your workout outside with fresh air, natural terrain, and functional fitness movements.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop&q=80",
      price: "2,000 ETB",
      duration: "month",
      features: [
        "3 sessions per week",
        "Fresh air workouts",
        "Natural terrain training",
        "Functional movements",
        "Small group sessions"
      ]
    }
  ]
};

export default function MembershipPlansSection() {
  const [activeTab, setActiveTab] = useState<"Kids & Teens" | "Adult">("Kids & Teens");

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
        Membership <span className="text-primary">Plans</span>
      </h2>

      {/* Tabs - Unified Card */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-surface border border-white/10 rounded-full p-1.5 relative">
          {/* Animated background slider */}
          <div
            className="absolute top-1.5 bottom-1.5 bg-primary rounded-full transition-all duration-300 ease-in-out"
            style={{
              left: activeTab === "Kids & Teens" ? "6px" : "50%",
              width: activeTab === "Kids & Teens" ? "calc(50% - 6px)" : "calc(50% - 6px)",
            }}
          />
          
          <button
            onClick={() => setActiveTab("Kids & Teens")}
            className={`relative z-10 px-8 py-2.5 rounded-full font-inter font-semibold text-sm tracking-wide transition-colors duration-300 ${
              activeTab === "Kids & Teens"
                ? "text-on-primary"
                : "text-secondary hover:text-white"
            }`}
          >
            KIDS & TEENS
          </button>
          <button
            onClick={() => setActiveTab("Adult")}
            className={`relative z-10 px-8 py-2.5 rounded-full font-inter font-semibold text-sm tracking-wide transition-colors duration-300 ${
              activeTab === "Adult"
                ? "text-on-primary"
                : "text-secondary hover:text-white"
            }`}
          >
            ADULT
          </button>
        </div>
      </div>

      {/* Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {membershipPlans[activeTab].map((plan, index) => (
          <MembershipFlipCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
}
