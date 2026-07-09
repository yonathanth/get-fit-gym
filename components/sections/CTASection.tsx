export default function CTASection() {
  return (
    <section className="h-[500px] px-4 md:px-6 border-t border-white/5 flex flex-col justify-center items-center text-center">
      <div className="max-w-2xl">
        <h2 className="font-impact text-[48px] md:text-[76px] leading-[1.1] tracking-tight font-normal text-white mb-12 uppercase">
          <div>Become the <span className="text-primary">Strongest</span></div>
          <div>Version of Yourself.</div>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-primary text-on-primary px-10 py-4 rounded font-inter text-base font-bold hover:bg-white transition-colors duration-200">
            Register Now
          </button>
          <button className="bg-transparent border border-white/10 text-white px-10 py-4 rounded font-inter text-base hover:bg-white/5 transition-colors duration-200">
            Video Tour
          </button>
        </div>
      </div>
    </section>
  );
}
