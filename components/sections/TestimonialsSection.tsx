export default function TestimonialsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 mb-40 flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-5">
        {/* Left Quote - Larger */}
        <div className="md:col-span-3 bg-[#E8C547]/10 rounded-2xl p-8 md:p-12 flex flex-col justify-between min-h-[400px] border border-[#E8C547]/20">
          <p className="text-3xl md:text-4xl font-impact text-white leading-tight uppercase tracking-tight">
            "Best investment in myself. The facility is world-class and the community is incredible."
          </p>
          <div className="mt-8">
            <div className="font-impact text-xl text-white uppercase tracking-tight">Henok Mehari</div>
            <div className="text-secondary font-inter text-base mt-1">Musician</div>
          </div>
        </div>

        {/* Right Quote - Smaller */}
        <div className="md:col-span-2 bg-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[400px] border border-white/10">
          <p className="text-2xl md:text-3xl font-impact text-white leading-tight uppercase tracking-tight">
            "Get Fit transformed my life completely."
          </p>
          <div className="mt-8">
            <div className="font-impact text-lg text-white uppercase tracking-tight">Meron Tadesse</div>
            <div className="text-secondary font-inter text-sm mt-1">Marketing Executive</div>
          </div>
        </div>
      </div>
    </section>
  );
}
