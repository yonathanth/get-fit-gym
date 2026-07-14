import PageHeading from "@/components/sections/PageHeading";

export default function YouthSportsDayShowcase() {
  const event = {
    title: "Youth Sports Day",
    date: "January 2026",
    location: "Full Facility",
    attendees: 60,
    description: "Young athletes showcased their skills in competitions, games, and team activities. An exciting day filled with energy, sportsmanship, and achievement.",
    highlights: [
      "Team sports competitions and relay races",
      "Individual skill challenges for different age groups",
      "Medals and prizes for all participants",
      "Professional coaching and mentorship sessions"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80"
    ],
    testimonials: [
      {
        name: "Emma Thompson",
        text: "My kids had an amazing time! They're still talking about the competitions and can't wait for the next event.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80"
      },
      {
        name: "David Martinez",
        text: "Great organization and the coaches were fantastic with the kids. Perfect mix of competition and fun!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
      }
    ]
  };

  return (
    <main className="w-full">
      <PageHeading 
        title="Youth Sports Day" 
        subtitle="Young athletes showcased their skills in competitions, games, and team activities. An exciting day filled with energy, sportsmanship, and achievement."
        images={[
          "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&q=80"
        ]}
      />

      {/* Event Info - Compact */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60 font-inter">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date}</span>
          </div>
          <span className="text-white/30">•</span>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span>{event.location}</span>
          </div>
          <span className="text-white/30">•</span>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{event.attendees} attendees</span>
          </div>
        </div>
      </section>
      
      {/* About This Event */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-6">
              About This <span className="text-primary">Event</span>
            </h2>
            <p className="text-lg text-white/80 font-inter leading-relaxed mb-4">
              Youth Sports Day was an action-packed event designed specifically for our young members, featuring a wide variety of sports activities, competitions, and team-building games. The day provided a perfect blend of friendly competition, skill development, and pure fun in a supportive environment.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed mb-4">
              Young athletes participated in team sports competitions, individual skill challenges tailored to different age groups, and relay races that tested speed and coordination. Professional coaches provided mentorship sessions, offering valuable feedback and encouragement throughout the day.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed">
              The event concluded with an awards ceremony where every participant received recognition for their efforts. Parents and families were thrilled to see their children develop confidence, sportsmanship, and a love for physical activity in such a positive and inclusive setting.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Masonry Style */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
          Event <span className="text-primary">Gallery</span>
        </h2>
        
        {/* Masonry-style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First image - spans 2 rows */}
          <div className="md:row-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px] md:h-full">
            <img
              src={event.gallery[0]}
              alt="Gallery image 1"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Second image - normal height */}
          <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={event.gallery[1]}
              alt="Gallery image 2"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Third image - spans 2 rows */}
          <div className="md:row-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px] md:h-full">
            <img
              src={event.gallery[2]}
              alt="Gallery image 3"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Fourth image - normal height */}
          <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={event.gallery[3]}
              alt="Gallery image 4"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Fifth image - normal height */}
          <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={event.gallery[4]}
              alt="Gallery image 5"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Sixth image - spans 2 columns */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={event.gallery[5]}
              alt="Gallery image 6"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
          What Attendees <span className="text-primary">Said</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {event.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-[24px] md:rounded-[32px] border border-white/10 bg-surface"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="text-white font-inter font-semibold">{testimonial.name}</p>
                  <p className="text-white/50 font-inter text-sm">Event Attendee</p>
                </div>
              </div>
              <p className="text-white/80 font-inter leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
