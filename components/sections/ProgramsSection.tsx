"use client";

const programs = [
  {
    name: "Kids & Teens Group Fitness",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop&q=80",
    gradient: "from-indigo-50 to-purple-50",
  },
  {
    name: "General Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    gradient: "from-blue-50 to-cyan-50",
  },
  {
    name: "Strength Training",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop&q=80",
    gradient: "from-orange-50 to-amber-50",
  },
  {
    name: "Adult Group Fitness",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    name: "Zumba Dance",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80",
    gradient: "from-pink-50 to-rose-50",
  },
];

export default function ProgramsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 mb-40 mt-40">
      <div className="flex flex-col lg:flex-row gap-16 mb-12 items-center">
        <div className="w-full lg:w-[40%]">
          <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight mb-6 uppercase">
            Elite Training Programs
          </h2>
          <p className="text-lg text-secondary font-inter leading-relaxed">
            From youth development to advanced strength training, our diverse program offerings are designed to meet every fitness goal and skill level.
          </p>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          {/* First Row - 2 Large Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programs.slice(0, 2).map((program, index) => (
              <div
                key={index}
                className="relative rounded-[24px] border border-white/10 h-[220px] overflow-hidden group cursor-pointer bg-surface"
              >
                <img
                  src={program.image}
                  alt={program.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h4 className="font-impact text-xl text-white uppercase tracking-tight">
                    {program.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 Medium Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {programs.slice(2, 5).map((program, index) => (
              <div
                key={index}
                className="relative rounded-[20px] border border-white/10 h-[160px] overflow-hidden group cursor-pointer bg-surface"
              >
                <img
                  src={program.image}
                  alt={program.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <span className="font-impact text-sm text-white uppercase tracking-tight">
                    {program.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
