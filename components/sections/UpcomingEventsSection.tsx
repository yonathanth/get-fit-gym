import Link from "next/link";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  spots: number;
}

const upcomingEvents: Event[] = [
  {
    id: "health-fitness-nutrition-seminar",
    title: "Health, Fitness & Nutrition Seminar",
    date: "March 15, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Main Studio",
    description: "Comprehensive seminar on optimizing your health",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80",
    spots: 45
  },
  {
    id: "youth-sports-day",
    title: "Youth Sports Day",
    date: "March 22, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "Full Facility",
    description: "Special events for our young athletes",
    image: "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=600&h=400&fit=crop&q=80",
    spots: 60
  },
  {
    id: "monthly-fitness-challenge",
    title: "Monthly Fitness Challenge",
    date: "April 5, 2026",
    time: "7:00 AM - 9:00 AM",
    location: "Training Floor",
    description: "Compete with fellow members in fun challenges",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80",
    spots: 30
  }
];

export default function UpcomingEventsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-24">
      <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
        Upcoming <span className="text-primary">Events</span>
      </h2>

      {/* Masonry-style Layout - Same sizing as Community Events */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First card - spans 2 rows (taller) */}
        <Link
          href={`/events/${upcomingEvents[0].id}`}
          className="md:row-span-2 group block"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 hover:border-primary/30 transition-all h-[450px] md:h-full">
            {/* Background Image */}
            <img
              src={upcomingEvents[0].image}
              alt={upcomingEvents[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-2">
                {upcomingEvents[0].title}
              </h3>

              <p className="text-sm text-white/80 font-inter mb-4">
                {upcomingEvents[0].description}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs text-white/90 font-inter font-semibold">{upcomingEvents[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-white/90 font-inter font-semibold">{upcomingEvents[0].time}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/70 font-inter mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{upcomingEvents[0].location}</span>
                </div>
                <span className="text-primary font-bold">{upcomingEvents[0].spots} spots left</span>
              </div>

              <button className="w-full bg-white/10 hover:bg-primary text-white hover:text-on-primary backdrop-blur-sm border border-white/20 hover:border-primary text-sm font-inter font-bold px-6 py-3 rounded-full transition-all">
                LEARN MORE
              </button>
            </div>
          </div>
        </Link>

        {/* Second card - normal height */}
        <Link
          href={`/events/${upcomingEvents[1].id}`}
          className="group block"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 hover:border-primary/30 transition-all h-[450px]">
            <img
              src={upcomingEvents[1].image}
              alt={upcomingEvents[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-2">
                {upcomingEvents[1].title}
              </h3>

              <p className="text-sm text-white/80 font-inter mb-4">
                {upcomingEvents[1].description}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs text-white/90 font-inter font-semibold">{upcomingEvents[1].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-white/90 font-inter font-semibold">{upcomingEvents[1].time}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/70 font-inter mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{upcomingEvents[1].location}</span>
                </div>
                <span className="text-primary font-bold">{upcomingEvents[1].spots} spots left</span>
              </div>

              <button className="w-full bg-white/10 hover:bg-primary text-white hover:text-on-primary backdrop-blur-sm border border-white/20 hover:border-primary text-sm font-inter font-bold px-6 py-3 rounded-full transition-all">
                LEARN MORE
              </button>
            </div>
          </div>
        </Link>

        {/* Third card - spans 2 rows (taller) */}
        <Link
          href={`/events/${upcomingEvents[2].id}`}
          className="md:row-span-2 group block"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 hover:border-primary/30 transition-all h-[450px] md:h-full">
            <img
              src={upcomingEvents[2].image}
              alt={upcomingEvents[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-2">
                {upcomingEvents[2].title}
              </h3>

              <p className="text-sm text-white/80 font-inter mb-4">
                {upcomingEvents[2].description}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs text-white/90 font-inter font-semibold">{upcomingEvents[2].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-white/90 font-inter font-semibold">{upcomingEvents[2].time}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/70 font-inter mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{upcomingEvents[2].location}</span>
                </div>
                <span className="text-primary font-bold">{upcomingEvents[2].spots} spots left</span>
              </div>

              <button className="w-full bg-white/10 hover:bg-primary text-white hover:text-on-primary backdrop-blur-sm border border-white/20 hover:border-primary text-sm font-inter font-bold px-6 py-3 rounded-full transition-all">
                LEARN MORE
              </button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
