import Link from "next/link";

const team = [
  {
    id: "teshome-bekele",
    name: "Teshome",
    role: "Head Coach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    bio: "15+ years of elite training experience"
  },
  {
    id: "gabriel-haile",
    name: "Gabriel",
    role: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
    bio: "Specialized in athletic performance"
  },
  {
    id: "sara-bekele",
    name: "Sara",
    role: "Nutrition Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    bio: "Certified nutritionist with a passion for wellness"
  }
];

export default function OurTeamSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
        Our <span className="text-primary">Team</span>
      </h2>

      {/* Masonry-style Layout - 3 team members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <Link
            key={member.id}
            href={`/team/${member.id}`}
            className={`group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-[450px] block ${
              index === 1 ? "md:row-span-2 md:h-full" : ""
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            </div>

            <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-primary font-impact text-2xl md:text-3xl uppercase tracking-tight">
                VIEW PROFILE
              </span>
            </div>

            <div className="relative h-full p-8 flex flex-col justify-end pointer-events-none">
              <h3 className="text-2xl md:text-3xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-2">
                {member.name}
              </h3>
              <p className="text-base text-white font-inter font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-sm text-white/80 font-inter leading-relaxed">
                {member.bio}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
