const team = [
  {
    name: "Teshome Bekele",
    role: "Head Coach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    bio: "15+ years of elite training experience"
  },
  {
    name: "Gabriel Haile",
    role: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
    bio: "Specialized in athletic performance"
  },
  {
    name: "Sara Bekele",
    role: "Nutrition Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    bio: "Certified nutritionist with a passion for wellness"
  },
  {
    name: "Bethlehem Girma",
    role: "Youth Program Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    bio: "Dedicated to nurturing young athletes"
  }
];

export default function OurTeamSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
        Our <span className="text-primary">Team</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface"
          >
            {/* Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-white font-inter font-semibold mb-2">
                {member.role}
              </p>
              <p className="text-xs text-white/70 font-inter">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
