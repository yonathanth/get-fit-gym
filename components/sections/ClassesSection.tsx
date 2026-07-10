const classes = [
  {
    name: "Morning Power",
    time: "6:00 AM - 7:00 AM",
    days: "Mon, Wed, Fri",
    instructor: "Abebe Bekele",
    level: "Intermediate",
    spots: 15,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80"
  },
  {
    name: "Evening Strength",
    time: "5:30 PM - 6:30 PM",
    days: "Tue, Thu, Sat",
    instructor: "Marta Tesfaye",
    level: "Advanced",
    spots: 12,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=80"
  },
  {
    name: "Afternoon Flow",
    time: "2:00 PM - 3:00 PM",
    days: "Mon, Wed, Fri",
    instructor: "Samuel Girma",
    level: "Beginner",
    spots: 20,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop&q=80"
  },
  {
    name: "Weekend Warriors",
    time: "9:00 AM - 10:30 AM",
    days: "Sat, Sun",
    instructor: "Liya Assefa",
    level: "All Levels",
    spots: 18,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop&q=80"
  },
  {
    name: "Midday Metabolic",
    time: "12:00 PM - 1:00 PM",
    days: "Tue, Thu",
    instructor: "Daniel Haile",
    level: "Intermediate",
    spots: 14,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80"
  },
  {
    name: "Sunset Circuit",
    time: "6:30 PM - 7:30 PM",
    days: "Mon, Wed, Fri",
    instructor: "Rahel Mekonnen",
    level: "Advanced",
    spots: 10,
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop&q=80"
  }
];

export default function ClassesSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
      <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
        Our <span className="text-primary">Classes</span>
      </h2>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {classes.map((classItem, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Side */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Content Side */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-4">
                    {classItem.name}
                  </h3>

                  {/* Class Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-white/80 font-inter">{classItem.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-white/80 font-inter">{classItem.days}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm text-white/80 font-inter">{classItem.instructor}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-sm text-white/80 font-inter">{classItem.spots} spots available</span>
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <button className="w-full bg-primary text-on-primary text-sm font-inter font-bold px-6 py-3 rounded-full hover:bg-white transition-all tracking-widest">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
