import PageHeading from "@/components/sections/PageHeading";

export default function MonthlyFitnessChallengeShowcase() {
  const event = {
    title: "Monthly Fitness Challenge",
    date: "December 2025",
    location: "Training Floor",
    attendees: 30,
    description: "Members competed in challenging workouts and celebrated personal achievements together. A test of strength, endurance, and determination.",
    highlights: [
      "Circuit-style workout combining strength and cardio",
      "Professional timing and score tracking",
      "Prizes for top performers in each category",
      "Post-workout celebration and smoothie bar"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80"
    ],
    testimonials: [
      {
        name: "Alex Rivera",
        text: "The challenge pushed me beyond my limits! Great energy and competition that motivated me to do my best.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80"
      },
      {
        name: "Jessica Lee",
        text: "Love these monthly challenges! They keep me accountable and help me track my progress in a fun way.",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&q=80"
      }
    ]
  };

  return (
    <main className="w-full">
      <PageHeading 
        title="Monthly Fitness Challenge" 
        subtitle="Members competed in challenging workouts and celebrated personal achievements together. A test of strength, endurance, and determination."
        images={[
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop&q=80"
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
            <span>{event.attendees} participants</span>
          </div>
        </div>
      </section>
      
      {/* About This Event */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-6">
              About This <span className="text-primary">Challenge</span>
            </h2>
            <p className="text-lg text-white/80 font-inter leading-relaxed mb-4">
              Our Monthly Fitness Challenge brought together members for an intense circuit-style workout that tested strength, endurance, and mental fortitude. Participants competed in timed challenges while supporting each other in a high-energy, motivating atmosphere.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed mb-4">
              The challenge featured a carefully designed circuit combining strength exercises, cardiovascular intervals, and functional movements. Professional trainers provided timing and score tracking, ensuring fair competition while offering modifications for different fitness levels.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed">
              Winners in each category received prizes and recognition, but every participant walked away with a sense of accomplishment and renewed motivation. The post-workout celebration with smoothies and socializing reinforced our strong community bonds and commitment to fitness excellence.
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
          What Participants <span className="text-primary">Said</span>
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
                  <p className="text-white/50 font-inter text-sm">Challenge Participant</p>
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
  const event = {
    title: "Monthly Fitness Challenge",
    date: "December 2025",
    location: "Training Floor",
    attendees: 30,
    description: "Members competed in challenging workouts and celebrated personal achievements together. A test of strength, endurance, and determination.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=600&fit=crop&q=80",
    highlights: [
      "Circuit-style workout combining strength and cardio",
      "Professional timing and score tracking",
      "Prizes for top performers in each category",
      "Post-workout celebration and smoothie bar"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=600&h=400&fit=crop&q=80"
    ],
    testimonials: [
      {
        name: "Alex Rivera",
        text: "The challenge pushed me beyond my limits! Great energy and competition that motivated me to do my best.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80"
      },
      {
        name: "Jessica Lee",
        text: "Love these monthly challenges! They keep me accountable and help me track my progress in a fun way.",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&q=80"
      }
    ]
  };

  return (
    <main className="w-full min-h-screen bg-background py-20">
      {/* Simple Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-4 italic text-center">
          {event.title}
        </h1>
        <p className="text-lg text-white/70 font-inter text-center max-w-2xl mx-auto mb-6">
          {event.description}
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-white/60 font-inter">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{event.attendees} participants</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 mb-20">
        <div className="relative overflow-hidden rounded-[32px] h-[400px] md:h-[500px]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Event Highlights */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 mb-20">
        <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8">
          Event <span className="text-primary">Highlights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {event.highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-[24px] border border-white/10 bg-surface"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white/80 font-inter text-base">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 mb-20">
        <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8">
          Photo <span className="text-primary">Gallery</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {event.gallery.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[24px] h-48 border border-white/10"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-8">
          What Participants <span className="text-primary">Said</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {event.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-[24px] border border-white/10 bg-surface"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="text-white font-inter font-semibold">{testimonial.name}</p>
                  <p className="text-white/50 font-inter text-sm">Challenge Participant</p>
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
