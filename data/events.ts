export interface GymEvent {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  timeString: string;
  location: string;
  totalSpots: number;
  remainingSpots: number;
  description: string;
  paragraphs?: string[];
  headingImages?: [string, string, string];
  gallery: string[];
}

export const UPCOMING_EVENTS: Record<string, GymEvent> = {
  "youth-sports-day": {
    slug: "youth-sports-day",
    title: "Youth Sports Day",
    subtitle: "A quarterly celebration of young athletes featuring fun competitions, games, skill challenges, and awards for our next generation of champions.",
    date: "March 22, 2026",
    timeString: "9:00 AM - 3:00 PM",
    location: "Main Gymnasium Arena",
    totalSpots: 60,
    remainingSpots: 60,
    description: "Youth Sports Day transforms Get Fit Gym into a vibrant sports festival where kids and teens can showcase their skills, compete in age-appropriate challenges, and celebrate their athletic achievements.",
    paragraphs: [
      "Youth Sports Day is our quarterly celebration dedicated entirely to our young athletes. This special event transforms Get Fit Gym into a vibrant sports festival where kids and teens can showcase their skills, compete in age-appropriate challenges, and celebrate their athletic achievements.",
      "The day features multiple competition categories including gymnastics demonstrations, martial arts exhibitions, relay races, obstacle courses, and team sports. Every participant receives recognition, and outstanding performers earn medals and special awards.",
      "Beyond competition, Youth Sports Day emphasizes fun, friendship, and character development. Parents are invited to cheer on their young champions, and the atmosphere is filled with encouragement, positive energy, and community spirit."
    ],
    headingImages: [
      "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop&q=80"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80"
    ]
  },
  "health-fitness-nutrition-seminar": {
    slug: "health-fitness-nutrition-seminar",
    title: "Health, Fitness & Nutrition Seminar",
    subtitle: "A comprehensive workshop exploring the critical connections between exercise science, nutritional biochemistry, and sustainable wellness.",
    date: "February 15, 2026",
    timeString: "10:00 AM - 1:00 PM",
    location: "Main Auditorium",
    totalSpots: 45,
    remainingSpots: 45,
    description: "Join us for an enlightening seminar that bridges the gap between exercise physiology and nutritional science. Led by certified strength coaches and clinical nutritionists.",
    paragraphs: [
      "Join us for an enlightening seminar that bridges the gap between exercise physiology and nutritional science. Led by our certified strength coaches and clinical nutritionists, this event provides actionable strategies to optimize your training and nutrition.",
      "Learn how macronutrient timing impacts recovery, how to construct balanced meal plans for body composition goals, and how to fuel peak performance in and outside the gym.",
      "The seminar includes practical live meal preparation demonstrations and an open Q&A session with our medical and athletic advisory board."
    ],
    headingImages: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop&q=80"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80"
    ]
  },
  "monthly-fitness-challenge": {
    slug: "monthly-fitness-challenge",
    title: "Monthly Fitness Challenge",
    subtitle: "Test your limits in our monthly community challenge featuring specialized workout stations, leaderboards, and prizes for top performers.",
    date: "January 28, 2026",
    timeString: "8:00 AM - 12:00 PM",
    location: "Main Training Floor",
    totalSpots: 30,
    remainingSpots: 30,
    description: "The Monthly Fitness Challenge is our signature community competition designed to push boundaries in a high-energy, supportive environment.",
    paragraphs: [
      "The Monthly Fitness Challenge is our signature community competition designed to push boundaries in a high-energy, supportive environment. Test your strength, stamina, and mental fortitude against yourself and fellow members.",
      "With structured workout stations and certified judges tracking form and reps, this challenge welcomes athletes of all fitness levels with scaled and competitive divisions.",
      "Post-competition recovery lounge includes protein smoothies and celebration awards for top male, female, and team division finishers."
    ],
    headingImages: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop&q=80"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80"
    ]
  },
  "wellness-workshops": {
    slug: "wellness-workshops",
    title: "Wellness Workshops",
    subtitle: "Monthly expert-led sessions on nutrition, mental health, recovery, and holistic wellness to support your complete fitness journey.",
    date: "Monthly Sessions",
    timeString: "11:00 AM - 1:00 PM",
    location: "Studio B",
    totalSpots: 40,
    remainingSpots: 40,
    description: "Led by certified nutritionists and wellness coaches, these interactive workshops provide practical knowledge you can immediately apply to your fitness lifestyle.",
    paragraphs: [
      "Our Wellness Workshops recognize that true fitness extends beyond physical training. Each month, we host expert-led sessions covering essential aspects of health and wellness, from nutrition and meal planning to mental health strategies and recovery techniques.",
      "Led by certified nutritionists, mental health professionals, and wellness experts, these interactive workshops provide practical knowledge you can immediately apply to your fitness journey.",
      "Workshops are included with your membership and open to all fitness levels. Bring your questions, take notes, and connect with fellow members who share your commitment to comprehensive wellness."
    ],
    headingImages: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop&q=80"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80"
    ]
  }
};
