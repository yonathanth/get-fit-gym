"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { useSettings } from "@/components/SettingsProvider";
import { telHref } from "@/lib/settings-shared";

function InfoItem({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="group flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3 lg:gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5 lg:border-transparent lg:bg-transparent lg:p-0 transition-colors">
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-[14px] border border-primary/25 bg-gradient-to-b from-primary/20 to-primary/5 shadow-[0_0_24px_-8px_rgba(217,151,43,0.5)]">
        <span className="material-symbols-outlined text-[22px] text-primary">{icon}</span>
      </div>
      <div>
        <h3 className="font-impact text-lg sm:text-xl text-white uppercase tracking-tight leading-none mb-1.5">{title}</h3>
        <div className="font-inter text-xs sm:text-sm leading-relaxed text-secondary">{children}</div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const settings = useSettings();
  const phones = [settings.phone_primary, settings.phone_secondary].filter(Boolean);

  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* Contact info */}
        <div className="w-full lg:w-[42%]">
          <ScrollReveal direction="left" delay={0.1}>
            <SectionHeading title="Visit Us" accent="Today" align="responsive" className="mb-8 sm:mb-10" />

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-8">
              <InfoItem icon="location_on" title="Location">
                {settings.location_address}
              </InfoItem>
              <InfoItem icon="call" title="Phone">
                {phones.map((phone) => (
                  <a key={phone} href={telHref(phone)} className="block transition-colors hover:text-primary">
                    {phone}
                  </a>
                ))}
              </InfoItem>
            </div>
          </ScrollReveal>
        </div>

        {/* Map */}
        <div className="w-full lg:w-[58%]">
          <ScrollReveal direction="right" delay={0.2}>
            <div className="gradient-border rounded-[28px] p-px shadow-[0_30px_70px_-30px_rgba(0,0,0,0.95)]">
              <div className="group relative h-[300px] sm:h-[380px] lg:h-[440px] overflow-hidden rounded-[27px] bg-surface">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9561.670162080582!2d38.833645149030126!3d9.024009230029863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b003ab50f1d%3A0x66f8f679ae063ad1!2sGET%20FIT%20GYM!5e1!3m2!1sen!2set!4v1794572490655!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%) brightness(95%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Get Fit Gym Location - CMC Michael, Addis Ababa"
                  className="h-full w-full opacity-85 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
