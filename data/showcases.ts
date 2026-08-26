export interface ShowcaseTestimonial {
  name: string;
  text: string;
  image: string;
}

export interface ShowcaseEvent {
  slug: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  description: string;
  paragraphs?: string[];
  highlights: string[];
  gallery: string[];
  headingImages?: [string, string, string];
  testimonials: ShowcaseTestimonial[];
}

export const SHOWCASES: Record<string, ShowcaseEvent> = {
  "youth-sports-day": {
    slug: "youth-sports-day",
    title: "Youth Sports Day",
    date: "January 2026",
    location: "Full Facility Arena",
    attendees: 60,
    description: "Young athletes showcased their skills in competitions, games, and team activities. An exciting day filled with energy, sportsmanship, and achievement.",
    paragraphs: [
      "Youth Sports Day was an action-packed event designed specifically for our young members, featuring a wide variety of sports activities, competitions, and team-building games. The day provided a perfect blend of friendly competition, skill development, and pure fun in a supportive environment.",
      "Young athletes participated in team sports competitions, individual skill challenges tailored to different age groups, and relay races that tested speed and coordination. Professional coaches provided mentorship sessions, offering valuable feedback and encouragement throughout the day.",
      "The event concluded with an awards ceremony where every participant received recognition for their efforts. Parents and families were thrilled to see their children develop confidence, sportsmanship, and a love for physical activity in such a positive and inclusive setting."
    ],
    highlights: [
      "Team sports competitions and relay races",
      "Individual skill challenges for different age groups",
      "Medals and prizes for all participants",
      "Professional coaching and mentorship sessions"
    ],
    headingImages: [
      "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&q=80"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80"
    ],
    testimonials: [
      {
        name: "Emma Thompson",
        text: "My kids had an amazing time! They're still talking about the competitions and can't wait for the next event.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80"
      },
      {
        name: "David Martinez",
        text: "Great organization and the coaches were fantastic with the kids. Perfect mix of competition and fun!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
      }
    ]
  },
  "health-fitness-nutrition-seminar": {
    slug: "health-fitness-nutrition-seminar",
    title: "Health, Fitness & Nutrition Seminar",
    date: "February 2026",
    location: "Main Auditorium",
    attendees: 45,
    description: "Our monthly seminar brought together health experts and members for comprehensive wellness guidance. This event focused on the essential pillars of health, fitness, and nutrition.",
    paragraphs: [
      "Our Health, Fitness & Nutrition Seminar brought together medical professionals, certified fitness trainers, and licensed nutritionists to provide expert guidance on optimizing health from every angle. This integrated approach addressed all aspects of wellness in a comprehensive, accessible format.",
      "The seminar featured three main segments: health fundamentals led by medical doctors covering injury prevention and body mechanics; fitness optimization with expert trainers discussing training methodologies and performance enhancement; and nutrition guidance from certified nutritionists on meal planning and dietary strategies.",
      "Attendees participated in interactive Q&A sessions, practical demonstrations, and received take-home resources. The event successfully provided valuable knowledge and tools for weight management, muscle building, athletic performance improvement, and overall health maintenance."
    ],
    highlights: [
      "Expert presentations on fitness fundamentals",
      "Nutrition science and meal planning workshop",
      "Interactive Q&A with certified trainers",
      "Networking with health-conscious community members"
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
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        text: "The nutrition insights I learned at this seminar have transformed my meal planning approach!",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80"
      },
      {
        name: "Michael Chen",
        text: "Great speakers and valuable information. I learned so much about optimizing my workout routine.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80"
      }
    ]
  },
  "monthly-fitness-challenge": {
    slug: "monthly-fitness-challenge",
    title: "Monthly Fitness Challenge",
    date: "December 2025",
    location: "Main Training Floor",
    attendees: 30,
    description: "Members competed in challenging workouts and celebrated personal achievements together. A test of strength, endurance, and determination.",
    paragraphs: [
      "Our Monthly Fitness Challenge brought together members for an intense circuit-style workout that tested strength, endurance, and mental fortitude. Participants competed in timed challenges while supporting each other in a high-energy, motivating atmosphere.",
      "The challenge featured a carefully designed circuit combining strength exercises, cardiovascular intervals, and functional movements. Professional trainers provided timing and score tracking, ensuring fair competition while offering modifications for different fitness levels.",
      "Winners in each category received prizes and recognition, but every participant walked away with a sense of accomplishment and renewed motivation. The post-workout celebration with smoothies and socializing reinforced our strong community bonds and commitment to fitness excellence."
    ],
    highlights: [
      "Circuit-style workout combining strength and cardio",
      "Professional timing and score tracking",
      "Prizes for top performers in each category",
      "Post-workout celebration and smoothie bar"
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
    ],
    testimonials: [
      {
        name: "Alex Rivera",
        text: "The challenge pushed me beyond my limits! Great energy and competition that motivated me to do my best.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80"
      },
      {
        name: "Jessica Lee",
        text: "Love these monthly challenges! They keep me accountable and help me track my progress in a fun way.",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&q=80"
      }
    ]
  }
};
