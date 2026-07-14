import Link from "next/link";

const events = [
  {
    id: "health-fitness-nutrition-seminar",
    title: "Health, Fitness & Nutrition Seminar",
    date: "February 2026",
    description: "Our monthly seminar brought together health experts and members for comprehensive wellness guidance",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
  },
  {
    id: "youth-sports-day",
    title: "Youth Sports Day",
    date: "January 2026",
    description: "Young athletes showcased their skills in competitions, games, and team activities",
    image: "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=600&h=400&fit=crop&q=80"
  },
  {
    id: "monthly-fitness-challenge",
    title: "Monthly Fitness Challenge",
    date: "December 2025",
    description: "Members competed in challenging workouts and celebrated personal achievements together",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80"
  }
];

// Note: These are past events/community showcases, they link to /showcase/ not /events/

export default function CommunityEventsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
        Community & <span className="text-primary">Events</span>
      </h2>

      {/* Masonry-style Layout - Same as Facilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First card - spans 2 rows */}
        <Link
          href={`/showcase/${events[0].id}`}
          className="md:row-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-[450px] md:h-full block"
        >
          {/* Image */}
          <div className="absolute inset-0">
            <img
              src={events[0].image}
              alt={events[0].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>

          {/* Blur overlay and See More button - appears on hover */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-primary font-impact text-2xl md:text-3xl uppercase tracking-tight">
              SEE MORE
            </span>
          </div>

          {/* Content - always visible */}
          <div className="relative h-full p-8 flex flex-col justify-end pointer-events-none">
            <h3 className="text-2xl md:text-3xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-3">
              {events[0].title}
            </h3>
            <p className="text-sm md:text-base text-white/80 font-inter leading-relaxed">
              {events[0].description}
            </p>
          </div>
        </Link>

        {/* Second card - normal height */}
        <Link
          href={`/showcase/${events[1].id}`}
          className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-[450px] block"
        >
          <div className="absolute inset-0">
            <img
              src={events[1].image}
              alt={events[1].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>

          <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-primary font-impact text-2xl md:text-3xl uppercase tracking-tight">
              SEE MORE
            </span>
          </div>

          <div className="relative h-full p-8 flex flex-col justify-end pointer-events-none">
            <h3 className="text-2xl md:text-3xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-3">
              {events[1].title}
            </h3>
            <p className="text-sm md:text-base text-white/80 font-inter leading-relaxed">
              {events[1].description}
            </p>
          </div>
        </Link>

        {/* Third card - spans 2 rows */}
        <Link
          href={`/showcase/${events[2].id}`}
          className="md:row-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-[450px] md:h-full block"
        >
          <div className="absolute inset-0">
            <img
              src={events[2].image}
              alt={events[2].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>

          <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-primary font-impact text-2xl md:text-3xl uppercase tracking-tight">
              SEE MORE
            </span>
          </div>

          <div className="relative h-full p-8 flex flex-col justify-end pointer-events-none">
            <h3 className="text-2xl md:text-3xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-3">
              {events[2].title}
            </h3>
            <p className="text-sm md:text-base text-white/80 font-inter leading-relaxed">
              {events[2].description}
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
