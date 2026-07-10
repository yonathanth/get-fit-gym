import CTASection from "@/components/sections/CTASection";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-background py-20">
      {/* Simple Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-4 italic text-center">
          Contact Us
        </h1>
        <p className="text-lg text-white/70 font-inter text-center max-w-2xl mx-auto">
          Get in touch with our team. We're here to answer your questions, schedule a tour, or help you start your fitness journey.
        </p>
      </div>
      
      {/* Contact Information & Map */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <p className="text-lg text-white/80 font-inter leading-relaxed mb-8">
                Whether you're ready to start your membership, want to schedule a facility tour, or have questions about our programs, we're here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4 p-6 rounded-[24px] border border-white/10 bg-surface hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    location_on
                  </span>
                </div>
                <div>
                  <h3 className="font-impact text-xl text-white uppercase tracking-tight mb-2">
                    Location
                  </h3>
                  <p className="text-white/70 font-inter text-base">
                    CMC Michael, Addis Ababa<br />
                    Ethiopia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 rounded-[24px] border border-white/10 bg-surface hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    call
                  </span>
                </div>
                <div>
                  <h3 className="font-impact text-xl text-white uppercase tracking-tight mb-2">
                    Phone
                  </h3>
                  <p className="text-white/70 font-inter text-base">
                    <a href="tel:+251900000000" className="hover:text-primary transition-colors">
                      +251 900 000 000
                    </a>
                    <br />
                    <a href="tel:+251911111111" className="hover:text-primary transition-colors">
                      +251 911 111 111
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 rounded-[24px] border border-white/10 bg-surface hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    mail
                  </span>
                </div>
                <div>
                  <h3 className="font-impact text-xl text-white uppercase tracking-tight mb-2">
                    Email
                  </h3>
                  <p className="text-white/70 font-inter text-base">
                    <a href="mailto:info@getfitgym.com" className="hover:text-primary transition-colors">
                      info@getfitgym.com
                    </a>
                    <br />
                    <a href="mailto:membership@getfitgym.com" className="hover:text-primary transition-colors">
                      membership@getfitgym.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-6 rounded-[24px] border border-white/10 bg-surface hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    schedule
                  </span>
                </div>
                <div>
                  <h3 className="font-impact text-xl text-white uppercase tracking-tight mb-2">
                    Opening Hours
                  </h3>
                  <p className="text-white/70 font-inter text-base">
                    Monday - Friday: 5:00 AM - 10:00 PM<br />
                    Saturday: 6:00 AM - 9:00 PM<br />
                    Sunday: 7:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Google Map */}
          <div className="relative rounded-[24px] md:rounded-[32px] border border-white/10 overflow-hidden h-[500px] lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5587636447195!2d38.7577!3d9.0320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnNTUuMiJOIDM4wrA0NSczMy4xIkU!5e0!3m2!1sen!2set!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Get Fit Gym Location - CMC Michael, Addis Ababa"
              className="transition-transform duration-500 hover:scale-105"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8">
            Follow <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-white/80 font-inter leading-relaxed mb-12 max-w-2xl mx-auto">
            Stay connected and follow our journey. Get daily motivation, workout tips, success stories, and updates on events and programs.
          </p>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary transition-all hover:scale-110"
              aria-label="TikTok"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
