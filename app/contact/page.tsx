"use client";

import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightEffect from "@/components/ui/SpotlightEffect";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-background relative overflow-x-clip pt-12 sm:pt-16 md:pt-20">
      <SpotlightEffect />

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-3 sm:mb-4 italic text-center">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-secondary font-inter text-center max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team. We&apos;re here to answer your questions, schedule a tour, or help you start your fitness journey.
          </p>
        </ScrollReveal>
      </div>

      {/* Contact Information & Map */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          {/* Left - Contact Info */}
          <div className="space-y-6 sm:space-y-8 flex flex-col justify-center">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-3 sm:mb-4">
                  Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-secondary font-inter leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Whether you&apos;re ready to start your membership, want to schedule a facility tour, or have questions about our programs, we&apos;re here to help.
                </p>
              </div>
            </ScrollReveal>

            {/* 2-per-row Contact Cards Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Location */}
              <ScrollReveal direction="up" delay={0.2}>
                <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-[18px] sm:rounded-[22px] border border-white/10 bg-surface/70 hover:bg-surface hover:border-primary/40 transition-all duration-300 shine-hover shadow-lg group h-full justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mb-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h3 className="font-impact text-sm sm:text-base text-white uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">
                      Location
                    </h3>
                    <p className="text-secondary font-inter text-[11px] sm:text-xs leading-relaxed">
                      CMC Michael, Addis Ababa<br />
                      Ethiopia
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Phone */}
              <ScrollReveal direction="up" delay={0.25}>
                <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-[18px] sm:rounded-[22px] border border-white/10 bg-surface/70 hover:bg-surface hover:border-primary/40 transition-all duration-300 shine-hover shadow-lg group h-full justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mb-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                      call
                    </span>
                  </div>
                  <div>
                    <h3 className="font-impact text-sm sm:text-base text-white uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">
                      Phone
                    </h3>
                    <p className="text-secondary font-inter text-[11px] sm:text-xs leading-relaxed">
                      <a href="tel:+251911415862" className="hover:text-primary transition-colors block">
                        0911-415-862
                      </a>
                      <a href="tel:+251992222224" className="hover:text-primary transition-colors block">
                        0992 222 224
                      </a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Email */}
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-[18px] sm:rounded-[22px] border border-white/10 bg-surface/70 hover:bg-surface hover:border-primary/40 transition-all duration-300 shine-hover shadow-lg group h-full justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mb-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                      mail
                    </span>
                  </div>
                  <div>
                    <h3 className="font-impact text-sm sm:text-base text-white uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">
                      Email
                    </h3>
                    <p className="text-secondary font-inter text-[11px] sm:text-xs leading-relaxed truncate max-w-full">
                      <a href="mailto:getfitt26@gmail.com" className="hover:text-primary transition-colors block truncate">
                        getfitt26@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hours */}
              <ScrollReveal direction="up" delay={0.35}>
                <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-[18px] sm:rounded-[22px] border border-white/10 bg-surface/70 hover:bg-surface hover:border-primary/40 transition-all duration-300 shine-hover shadow-lg group h-full justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mb-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                      schedule
                    </span>
                  </div>
                  <div>
                    <h3 className="font-impact text-sm sm:text-base text-white uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">
                      Opening Hours
                    </h3>
                    <p className="text-secondary font-inter text-[11px] sm:text-xs leading-relaxed">
                      Mon - Sun: 5:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right - Google Map in Dark Mode */}
          <div className="w-full">
            <ScrollReveal direction="right" delay={0.2} className="h-full">
              <div className="relative rounded-[20px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 hover:border-primary/40 overflow-hidden h-[300px] sm:h-[380px] lg:h-full min-h-[300px] sm:min-h-[380px] shadow-2xl bg-surface transition-all duration-300 group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5587636447195!2d38.7577!3d9.0320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnNTUuMiJOIDM4wrA0NSczMy4xIkU!5e0!3m2!1sen!2set!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%) brightness(95%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Get Fit Gym Location - CMC Michael, Addis Ababa"
                  className="w-full h-full opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-20 border-t border-white/5">
        <div className="text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-4 sm:mb-6">
              Follow <span className="text-primary">Us</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary font-inter leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto">
              Stay connected and follow our journey. Get daily motivation, workout tips, success stories, and updates on events and programs.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex justify-center gap-4 sm:gap-6">
              <a
                href="https://www.tiktok.com/@getfit.gym?_r=1&_d=emlg250de76mf3&sec_uid=MS4wLjABAAAAvBlVwdgWlgwuZAR7zeqbrktbvzDdN_AdTyf8dzhRc5YZhlAMUVvpQgMVS28ngCI2&share_author_id=7617383060232930322&sharer_language=en&source=h5_m&u_code=f2df05jabaidcj&item_author_type=1&utm_source=whatsapp&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=862AD9C8-C905-4DF5-AC6A-089F06537298&user_id=7617383060232930322&sec_user_id=MS4wLjABAAAAvBlVwdgWlgwuZAR7zeqbrktbvzDdN_AdTyf8dzhRc5YZhlAMUVvpQgMVS28ngCI2&social_share_type=5&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/15 bg-surface/60 flex items-center justify-center text-white hover:text-primary hover:border-primary/40 hover:bg-surface transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/getfit-gym-6538333b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/15 bg-surface/60 flex items-center justify-center text-white hover:text-primary hover:border-primary/40 hover:bg-surface transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74V9.92H5.06v8.58h2.8z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/18TRbLvNPQ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/15 bg-surface/60 flex items-center justify-center text-white hover:text-primary hover:border-primary/40 hover:bg-surface transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@getfit-gym?si=Y5pWSp_Nz3bveXRo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/15 bg-surface/60 flex items-center justify-center text-white hover:text-primary hover:border-primary/40 hover:bg-surface transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
