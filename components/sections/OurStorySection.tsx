export default function OurStorySection() {
  const highlights = [
    {
      title: "Expert Coaching",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    },
    {
      title: "Modern Equipment",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    },
    {
      title: "Community Support",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
        Our <span className="text-primary">Story</span>
      </h2>

      <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div className="w-full lg:w-[40%] space-y-6">
          <p className="text-lg text-white/80 font-inter leading-relaxed">
            Founded in the heart of Addis Ababa, Get Fit Gym was born from a vision to create more than just a fitness center—we built a sanctuary where strength meets mindset.
          </p>
          <p className="text-lg text-white/80 font-inter leading-relaxed">
            Our journey began with a simple belief: that every individual deserves access to world-class facilities, expert guidance, and a supportive community that empowers them to reach their full potential.
          </p>
          
        </div>

        <div className="w-full lg:w-[60%] flex gap-6">
          {/* First Card - Larger */}
          <div className="flex-1 relative rounded-[24px] md:rounded-[32px] border border-white/10 h-[400px] overflow-hidden group cursor-pointer">
            <img
              src={highlights[0].image}
              alt={highlights[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <h4 className="font-impact text-2xl text-primary uppercase tracking-tight leading-tight">
                {highlights[0].title}
              </h4>
            </div>
          </div>

          {/* Second Column - Two Stacked Cards */}
          <div className="flex-1 flex flex-col gap-6">
            {highlights.slice(1, 3).map((highlight, index) => (
              <div
                key={index}
                className="relative rounded-[24px] md:rounded-[32px] border border-white/10 h-[192px] overflow-hidden group cursor-pointer"
              >
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h4 className="font-impact text-lg text-primary uppercase tracking-tight leading-tight">
                    {highlight.title}
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
