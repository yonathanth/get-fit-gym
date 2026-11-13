import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightEffect from "@/components/ui/SpotlightEffect";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function DynamicTeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Only active members have a public profile; deleted or hidden ones 404.
  const member = await prisma.teamMember.findUnique({
    where: { slug },
  });

  if (!member || !member.isActive) {
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
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/10 shadow-2xl bg-surface aspect-[4/5]">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_85%]"
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
