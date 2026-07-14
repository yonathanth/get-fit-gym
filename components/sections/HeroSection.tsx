export default function HeroSection() {
  return (
    <section className="flex flex-col px-4 md:px-6 py-8 md:py-12" style={{ height: 'calc(100vh - 72px)' }}>
      <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-2 h-full">
        {/* Main Title Area */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase italic">
            Strong Mind. Strong Body.{" "}
            <span className="text-primary text-glow block sm:inline">
              Stronger Life.
            </span>
          </h1>
          <div className="max-w-3xl -mt-2">
            <p className="text-secondary leading-normal font-normal text-base md:text-lg italic">
              Experience a sanctuary of peak performance.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full flex-1 min-h-0 mt-4 md:mt-6 max-h-[400px] sm:max-h-[450px] md:max-h-none">
          <div className="w-full h-full rounded-[24px] md:rounded-[32px] overflow-hidden relative border border-white/5">
            <img
              alt="High-end gym space with a focused, powerful atmosphere."
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop&q=80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group flex flex-col items-center gap-2 md:gap-3 transition-transform hover:scale-110">
                <div className="w-20 h-10 md:w-28 md:h-14 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_40px_rgba(217,151,43,0.4)] group-hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-on-primary text-3xl md:text-4xl">
                    play_arrow
                  </span>
                </div>
                <span className="text-white font-inter font-medium tracking-wide text-xs md:text-sm drop-shadow-lg uppercase">
                  Play Tour
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
