export default function BethlehemGirmaPage() {
  const member = {
    name: "Bethlehem Girma",
    role: "Youth Program Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&q=80",
    bio: "Dedicated to nurturing young athletes",
    fullBio: "Bethlehem is passionate about developing the next generation of athletes through age-appropriate training, character building, and positive reinforcement. Her youth programs focus on building fundamental movement skills, confidence, and a lifelong love of fitness. With specialized training in child development and sports psychology, she creates safe, fun environments where kids thrive.",
    specialties: [
      "Youth Fitness Development",
      "Movement Fundamentals",
      "Sports Psychology for Kids",
      "Character Development"
    ],
    certifications: [
      "Youth Fitness Specialist",
      "Positive Coaching Alliance Certified",
      "Child Development Associate",
      "First Aid & CPR Certified"
    ],
    experience: "12+ years",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    }
  };

  return (
    <main className="w-full min-h-screen bg-background py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 mb-16">
        <h1 className="text-5xl md:text-7xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-4 italic text-center">
          {member.name}
        </h1>
        <p className="text-xl text-white/70 font-inter text-center">
          {member.role}
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-[32px] mb-8">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover"
              />
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-surface hover:bg-primary hover:border-primary flex items-center justify-center transition-all group">
                <svg className="w-5 h-5 text-white group-hover:text-on-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-surface hover:bg-primary hover:border-primary flex items-center justify-center transition-all group">
                <svg className="w-5 h-5 text-white group-hover:text-on-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-surface hover:bg-primary hover:border-primary flex items-center justify-center transition-all group">
                <svg className="w-5 h-5 text-white group-hover:text-on-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <p className="text-xs text-white/50 font-inter uppercase tracking-wider mb-2">Experience</p>
              <p className="text-2xl text-primary font-impact uppercase">{member.experience}</p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-impact text-white uppercase tracking-tight mb-4">
                About <span className="text-primary">{member.name.split(' ')[0]}</span>
              </h2>
              <p className="text-lg text-white/80 font-inter leading-relaxed">
                {member.fullBio}
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-impact text-white uppercase tracking-tight mb-6">
                <span className="text-primary">Specialties</span>
              </h2>
              <div className="space-y-3">
                {member.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-white/80 font-inter text-base">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-impact text-white uppercase tracking-tight mb-6">
                Certifications & <span className="text-primary">Credentials</span>
              </h2>
              <div className="space-y-3">
                {member.certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <span className="text-white/80 font-inter text-base">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
