export default function CTASection() {
  return (
    <section className="px-4 md:px-6 pb-0">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="relative w-full h-[500px] md:h-[600px] rounded-[40px] overflow-hidden flex items-center justify-center border border-white/10">
          {/* Background Image */}
          <img
            alt="Atmospheric training space"
            className="absolute inset-0 w-full h-full object-cover grayscale-[40%]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrXAelWCRzHjH7o__NggG0k4mqEJJDRO2c3ocjURYLVr9W8ho8jZnAYgY4slpkFHpoMQlUT5YTyfwbEU944ME04s6p4ySVrKFtwO5CfaXm56T3gwsIgJkqmwYn_5WTx9pTmflGIHMSi6aYWQ03GJmE0v2Ah3CrNSnsNl_wAM0xk7SBVwDqdY5aOsytIh3aP_W98njAXSQhGetLvQEPESyx-rZEOYN9BxWKWeUh2ffZwJRHKL3fEh-2"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <span className="text-sm font-black text-primary tracking-[0.4em] uppercase mb-8 font-sans">
              Take the first step
            </span>
            <h2 className="text-5xl md:text-7xl font-impact text-white leading-none uppercase tracking-tighter max-w-3xl">
              Ready to elevate your performance?
            </h2>
            <button className="mt-12 bg-primary text-on-primary text-lg font-medium px-12 py-5 rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(217,151,43,0.4)] hover:shadow-white/20 tracking-widest">
              Start Your Journey Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
