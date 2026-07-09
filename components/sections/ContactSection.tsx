export default function ContactSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 mb-40">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left - Contact Info */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase">
              Visit Us <span className="text-primary">Today</span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-xl">
                  location_on
                </span>
              </div>
              <div>
                <h3 className="font-impact text-lg text-white uppercase tracking-tight mb-1">
                  Location
                </h3>
                <p className="text-secondary font-inter text-base">
                  CMC Michael, Addis Ababa<br />
                  Get Fit Gym
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-xl">
                  call
                </span>
              </div>
              <div>
                <h3 className="font-impact text-lg text-white uppercase tracking-tight mb-1">
                  Phone
                </h3>
                <p className="text-secondary font-inter text-base">
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
          </div>
        </div>

        {/* Right - Google Map */}
        <div className="w-full lg:w-[60%] relative rounded-[24px] border border-white/10 overflow-hidden h-[400px] lg:h-[500px]">
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
  );
}
