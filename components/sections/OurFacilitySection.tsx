const facilities = [
  {
    title: "Olympic Weight Room",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=80"
  },
  {
    title: "Cardio Zone",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80"
  },
  {
    title: "Group Studio",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80"
  },
  {
    title: "Recovery Lounge",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
  },
  {
    title: "Kids Training Area",
    image: "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=600&h=400&fit=crop&q=80"
  },
  {
    title: "Nutrition Bar",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop&q=80"
  }
];

export default function OurFacilitySection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
        Our <span className="text-primary">Facility</span>
      </h2>

      {/* Masonry-style Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Row 1: Large + Small + Small */}
        <div className="md:row-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-[300px] md:h-full cursor-pointer">
          <img
            src={facilities[0].image}
            alt={facilities[0].title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="relative h-full p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-impact text-primary leading-[1.1] tracking-tight uppercase">
              {facilities[0].title}
            </h3>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-[300px] cursor-pointer">
          <img
            src={facilities[1].image}
            alt={facilities[1].title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="relative h-full p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-impact text-primary leading-[1.1] tracking-tight uppercase">
              {facilities[1].title}
            </h3>
          </div>
        </div>

        <div className="md:row-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-[300px] md:h-full cursor-pointer">
          <img
            src={facilities[2].image}
            alt={facilities[2].title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="relative h-full p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-impact text-primary leading-[1.1] tracking-tight uppercase">
              {facilities[2].title}
            </h3>
          </div>
        </div>

        {/* Row 2: Continues */}
        <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-[300px] cursor-pointer">
          <img
            src={facilities[3].image}
            alt={facilities[3].title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="relative h-full p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-impact text-primary leading-[1.1] tracking-tight uppercase">
              {facilities[3].title}
            </h3>
          </div>
        </div>

        {/* Row 3: Two remaining - last one spans 2 columns */}
        <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-[300px] cursor-pointer">
          <img
            src={facilities[4].image}
            alt={facilities[4].title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="relative h-full p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-impact text-primary leading-[1.1] tracking-tight uppercase">
              {facilities[4].title}
            </h3>
          </div>
        </div>

        <div className="md:col-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-[300px] cursor-pointer">
          <img
            src={facilities[5].image}
            alt={facilities[5].title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="relative h-full p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-impact text-primary leading-[1.1] tracking-tight uppercase">
              {facilities[5].title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
