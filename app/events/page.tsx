import PageHeading from "@/components/sections/PageHeading";
import Link from "next/link";

const upcomingEvents = [
  {
    id: "health-fitness-nutrition-seminar",
    title: "Health, Fitness & Nutrition Seminar",
    date: "March 15, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Main Studio",
    description: "Comprehensive seminar on optimizing your health through fitness and nutrition guidance",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80",
    spots: 45
  },
  {
    id: "youth-sports-day",
    title: "Youth Sports Day",
    date: "March 22, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "Full Facility",
    description: "Special events for our young athletes featuring games, competitions, and awards",
    image: "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=600&h=400&fit=crop&q=80",
    spots: 60
  },
  {
    id: "monthly-fitness-challenge",
    title: "Monthly Fitness Challenge",
    date: "April 5, 2026",
    time: "7:00 AM - 9:00 AM",
    location: "Training Floor",
    description: "Compete with fellow members in fun, challenging workouts and win prizes",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80",
    spots: 30
  }
];

export default function EventsPage() {
  return (
    <main className="w-full">
      <PageHeading 
        title="Upcoming Events" 
        subtitle="Join our community events, workshops, and competitions. Connect with fellow members and elevate your fitness journey."
        images={[
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1599447332490-d839c2a3f337?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop&q=80"
        ]}
      />
      
      {/* Upcoming Events List */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
          Upcoming <span className="text-primary">Events</span>
        </h2>

        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <Link
              key={index}
              href={`/events/${event.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row">
                  {/* Image Side */}
                  <div className="relative w-full md:w-2/5 h-64 md:h-80 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Date Badge */}
                    <div className="absolute top-6 left-6 bg-primary text-on-primary px-6 py-3 rounded-full">
                      <p className="text-xs font-inter font-bold uppercase tracking-wider">
                        {event.date}
                      </p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-4">
                        {event.title}
                      </h3>

                      <p className="text-base md:text-lg text-white/80 font-inter leading-relaxed mb-6">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-white/70 font-inter">{event.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm text-white/70 font-inter">{event.location}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="text-sm text-white/70 font-inter">{event.spots} spots left</span>
                        </div>
                      </div>
                    </div>

                    {/* View Details Arrow */}
                    <div className="flex items-center gap-2 text-primary font-inter font-semibold text-sm mt-6 group-hover:gap-3 transition-all">
                      <span>VIEW DETAILS</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
