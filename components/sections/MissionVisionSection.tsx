export default function MissionVisionSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
        Mission & <span className="text-primary">Vision</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface p-8 md:p-10">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">
              flag
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-6">
            Our Mission
          </h3>
          <p className="text-base md:text-lg text-white/80 font-inter leading-relaxed">
            To empower every individual to become the strongest version of themselves through world-class training facilities, expert guidance, and a supportive community that celebrates growth, discipline, and transformation.
          </p>
        </div>

        {/* Vision Card */}
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface p-8 md:p-10">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">
              visibility
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-6">
            Our Vision
          </h3>
          <p className="text-base md:text-lg text-white/80 font-inter leading-relaxed">
            To be Ethiopia's premier fitness destination, recognized for excellence in training, innovation in health and wellness, and our commitment to building a stronger, healthier nation—one member at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
