"use client";

const consultations = [
  {
    name: "Medical Doctor Consultation",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  },
  {
    name: "Fitness Expert Consultation",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  },
  {
    name: "Nutritionist Consultation",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 mb-40">
      <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div className="w-full lg:w-[40%]">
          <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight mb-6 uppercase">
            World-Class Expert Support
          </h2>
          <p className="text-lg text-secondary font-inter leading-relaxed">
            Access comprehensive health and fitness guidance from our team of certified professionals, including medical doctors, fitness experts, and nutritionists.
          </p>
        </div>

        <div className="w-full lg:w-[60%] flex gap-6">
          {/* First Card - Larger */}
          <div className="flex-1 relative rounded-[24px] border border-white/10 h-[400px] overflow-hidden group cursor-pointer">
            <img
              src={consultations[0].image}
              alt={consultations[0].name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <h4 className="font-impact text-2xl text-white uppercase tracking-tight leading-tight">
                {consultations[0].name}
              </h4>
            </div>
          </div>

          {/* Second Column - Two Stacked Cards */}
          <div className="flex-1 flex flex-col gap-6">
            {consultations.slice(1, 3).map((consultation, index) => (
              <div
                key={index}
                className="relative rounded-[24px] border border-white/10 h-[192px] overflow-hidden group cursor-pointer"
              >
                <img
                  src={consultation.image}
                  alt={consultation.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h4 className="font-impact text-lg text-white uppercase tracking-tight leading-tight">
                    {consultation.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
