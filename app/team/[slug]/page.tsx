import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightEffect from "@/components/ui/SpotlightEffect";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface TeamProfile {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  imageUrl: string;
  specializations: string[];
  certifications: string[];
  experienceYears: number;
  experienceText: string;
  email?: string;
  phone?: string;
}

const STATIC_TEAM: Record<string, TeamProfile> = {
  "abeyet-naqachew": {
    id: "coach-abeyet",
    slug: "abeyet-naqachew",
    name: "Abeyet Naqachew",
    role: "Senior Coach & Combat Sports Specialist",
    bio: "Abeyet brings over two decades of hands-on coaching leadership and athletic management to our training floor.",
    fullBio: "Abeyet brings over two decades of hands-on coaching leadership and athletic management to our training floor. Holding a Bachelor’s Degree in Public Management alongside advanced certifications in Cardiovascular, Functional Training, and Sports Rehabilitation, he bridges operational leadership with practical physical development. He has founded and led premier weightlifting clubs and holds a prestigious 6th Dan Black Belt in Wushu.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
    specializations: ["Functional Movement", "Cardiovascular Conditioning", "Weightlifting Program Design", "Combat Sports", "Athlete Recovery"],
    certifications: ["Bachelor's in Public Management", "Cardiovascular Conditioning Certified", "Functional Training Specialist", "Sports Rehabilitation Certified", "6th Dan Black Belt in Wushu"],
    experienceYears: 20,
    experienceText: "20+ Years",
    email: "getfitt26@gmail.com",
    phone: "0911-415-862"
  },
  "tewodros-bogale": {
    id: "coach-tewodros",
    slug: "tewodros-bogale",
    name: "Tewodros Bogale",
    role: "Exercise Physiologist & Head Gym Instructor",
    bio: "Tewodros combines rigorous academic science with more than 13 years of practical coaching experience in top-tier commercial fitness environments.",
    fullBio: "Tewodros combines rigorous academic science with more than 13 years of practical coaching experience in top-tier commercial fitness environments. Holding a B.Sc. in Sport Science and an M.Sc. in Exercise Physiology, he specializes in translating complex physiological principles into safe, scalable, and highly effective workout routines for diverse populations.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80",
    specializations: ["Exercise Physiology", "Structural Strength Conditioning", "Personalized Workout Programming", "Body Composition Transformation"],
    certifications: ["B.Sc. in Sport Science", "M.Sc. in Exercise Physiology", "10+ Years Activ8 Gym Head Coach", "3 Years Tesfa Gym Specialist"],
    experienceYears: 13,
    experienceText: "13+ Years",
    email: "getfitt26@gmail.com",
    phone: "0992 222 224"
  },
  "teshome-abate": {
    id: "coach-teshome",
    slug: "teshome-abate",
    name: "Teshome Abate",
    role: "Master Athletics Coach & Martial Arts Specialist",
    bio: "Teshome is a highly distinguished fitness expert with dual Master’s degrees in Exercise Physiology and Athletics Coaching.",
    fullBio: "Teshome is a highly distinguished fitness expert with dual Master’s degrees in Exercise Physiology and Athletics Coaching, complemented by over 22 years of elite martial arts club management. His extensive career spans high-level corporate wellness programs at international institutions (ILRI, ECA) and specialized athletic performance coaching.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
    specializations: ["Advanced Athletics Coaching", "Martial Arts Mastery", "Corporate & Institutional Wellness", "Physiological Performance Tracking"],
    certifications: ["Master's in Exercise Physiology", "Master's in Athletics Coaching", "7th Dan Black Belt in Wushu", "10+ Years Fitness Instructor at ILRI", "2 Years Fitness Instructor at ECA"],
    experienceYears: 22,
    experienceText: "22+ Years",
    email: "getfitt26@gmail.com",
    phone: "0911-415-862"
  },
  "gebreal-tessema-admas": {
    id: "coach-gebreal",
    slug: "gebreal-tessema-admas",
    name: "Gebreal Tessema Admas",
    role: "Operational Manager & Medical Fitness Coach",
    bio: "Gebreal bridges organizational leadership with targeted medical exercise programming with 11 years of coaching experience.",
    fullBio: "Gebreal bridges organizational leadership with targeted medical exercise programming. Holding a B.Ed. in Health & Physical Education and an M.A. in Educational Leadership and Management, he brings 11 years of experience in program development, process improvement, and holistic health instruction.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop&q=80",
    specializations: ["Medical Fitness Coaching", "Training Program Development", "Operational Management", "Structured Exercise Design", "Nutrition Strategies"],
    certifications: ["B.Ed. in Health & Physical Education", "M.A. in Educational Leadership & Management", "Operational Manager at Get Fit Gym", "Medical Fitness Coach at Redat Medical Plaza"],
    experienceYears: 11,
    experienceText: "11+ Years",
    email: "getfitt26@gmail.com",
    phone: "0992 222 224"
  },
  "dr-tobel-daniel-tessema": {
    id: "coach-dr-tobel",
    slug: "dr-tobel-daniel-tessema",
    name: "Dr. Tobel Daniel Tessema",
    role: "Medical Doctor & Community Nutrition Specialist",
    bio: "Dr. Tobel combines clinical medical knowledge with specialized nutritional science to drive health promotion and long-term wellness.",
    fullBio: "Dr. Tobel combines clinical medical knowledge with specialized nutritional science to drive health promotion and long-term wellness. Holding a Doctor of Medicine from the University of Gondar and pursuing an M.Sc. in Community Nutrition and Dietetics at Addis Ababa University, he applies medical insights to lifestyle and dietary optimization.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=800&fit=crop&q=80",
    specializations: ["Community Nutrition", "Health Promotion", "Clinical Dietary Strategies", "Youth Health Habits", "Preventive Wellness"],
    certifications: ["Doctor of Medicine (M.D.) - University of Gondar", "M.Sc. Candidate in Community Nutrition & Dietetics (AAU)", "Clinical Experience at Washington Medical Center", "Avante Specialty Clinic Practice"],
    experienceYears: 6,
    experienceText: "Medical Doctor",
    email: "getfitt26@gmail.com",
    phone: "0911-415-862"
  }
};

export default async function DynamicTeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  let member = null;
  try {
    member = await prisma.teamMember.findUnique({
      where: { slug },
    });
  } catch (err) {
    console.error("DB team fetch error, falling back to static:", err);
  }

  if (!member) {
    member = STATIC_TEAM[slug] as any;
  }

  if (!member) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-background relative overflow-x-clip py-14 sm:py-20">
      <SpotlightEffect />

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-12 sm:mb-16 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-3 italic text-center">
            {member.name}
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <p className="text-base sm:text-xl text-white/70 font-inter text-center max-w-xl mx-auto">
            {member.role}
          </p>
        </ScrollReveal>
      </div>

      {/* Profile Details */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* Left Column: Photo & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/10 shadow-2xl bg-surface aspect-square">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Socials / Contact */}
            <ScrollReveal direction="up" delay={0.25}>
              <div className="p-6 rounded-[22px] bg-surface/70 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50 font-inter uppercase tracking-wider font-semibold">Experience</span>
                  <span className="text-xl text-primary font-impact uppercase">{member.experienceText || `${member.experienceYears}+ Years`}</span>
                </div>

                {member.email && (
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-inter">
                    <span className="text-white/50">Email</span>
                    <a href={`mailto:${member.email}`} className="text-white hover:text-primary transition-colors truncate max-w-[200px]">
                      {member.email}
                    </a>
                  </div>
                )}

                {member.phone && (
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-inter">
                    <span className="text-white/50">Direct Phone</span>
                    <a href={`tel:${member.phone}`} className="text-white hover:text-primary transition-colors">
                      {member.phone}
                    </a>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio, Specialties, Certifications */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-impact text-white uppercase tracking-tight">
                  About <span className="text-primary">{member.name.split(" ")[0]}</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/80 font-inter leading-relaxed">
                  {member.fullBio || member.bio}
                </p>
              </div>
            </ScrollReveal>

            {member.specializations && member.specializations.length > 0 && (
              <ScrollReveal direction="up" delay={0.25}>
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-impact text-white uppercase tracking-tight">
                    Specialties & <span className="text-primary">Focus Areas</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {member.specializations.map((specialty: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-surface/60 border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-white/85 font-inter font-medium">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {member.certifications && member.certifications.length > 0 && (
              <ScrollReveal direction="up" delay={0.3}>
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-impact text-white uppercase tracking-tight">
                    Credentials & <span className="text-primary">Certifications</span>
                  </h3>
                  <div className="space-y-2.5">
                    {member.certifications.map((cert: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-surface/60 border border-white/5">
                        <span className="material-symbols-outlined text-primary text-base">verified</span>
                        <span className="text-xs sm:text-sm text-white/85 font-inter">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

        </div>
      </div>

      <CTASection />
    </main>
  );
}
