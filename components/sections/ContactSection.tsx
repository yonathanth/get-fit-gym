"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-20 sm:mb-28 md:mb-40">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        
        {/* Left Column - Contact Info matching original layout */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <ScrollReveal direction="left" delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8 sm:mb-10 text-center lg:text-left">
              Visit Us <span className="text-primary">Today</span>
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-6 lg:gap-8">
              {/* Location */}
              <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-2 sm:gap-4 lg:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-lg sm:text-xl lg:text-2xl">
                    location_on
                  </span>
                </div>
                <div>
                  <h3 className="font-impact text-base sm:text-lg lg:text-xl text-white uppercase tracking-tight mb-0.5 sm:mb-1">
                    Location
                  </h3>
                  <p className="text-secondary font-inter text-[11px] sm:text-xs lg:text-sm leading-relaxed">
                    CMC Michael, Addis Ababa<br />
                    Get Fit Gym Facility
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-2 sm:gap-4 lg:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-lg sm:text-xl lg:text-2xl">
                    call
                  </span>
                </div>
                <div>
                  <h3 className="font-impact text-base sm:text-lg lg:text-xl text-white uppercase tracking-tight mb-0.5 sm:mb-1">
                    Phone
                  </h3>
                  <p className="text-secondary font-inter text-[11px] sm:text-xs lg:text-sm leading-relaxed">
                    <a href="tel:+251911415862" className="hover:text-primary transition-colors block">
                      0911-415-862
                    </a>
                    <a href="tel:+251992222224" className="hover:text-primary transition-colors block">
                      0992 222 224
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column - Google Map in Black/Dark Theme */}
        <div className="w-full lg:w-[55%]">
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative rounded-[28px] border border-white/10 hover:border-primary/40 overflow-hidden h-[300px] sm:h-[360px] lg:h-[400px] shadow-2xl bg-surface transition-all duration-300 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5587636447195!2d38.7577!3d9.0320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnNTUuMiJOIDM4wrA0NSczMy4xIkU!5e0!3m2!1sen!2set!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%) brightness(95%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Get Fit Gym Location - CMC Michael, Addis Ababa"
                className="w-full h-full opacity-85 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
