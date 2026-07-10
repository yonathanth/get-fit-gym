import PageHeading from "@/components/sections/PageHeading";
import CTASection from "@/components/sections/CTASection";

export default function MonthlyFitnessChallengeEvent() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop&q=80"
  ];

  return (
    <main className="w-full">
      <PageHeading 
        title="Monthly Fitness Challenge" 
        subtitle="Join us every first Saturday for an exciting community fitness challenge. Compete, connect, and celebrate your progress with fellow members."
        images={[
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop&q=80"
        ]}
      />
      
      {/* Event Details */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-6">
              About This <span className="text-primary">Event</span>
            </h2>
            <p className="text-lg text-white/80 font-inter leading-relaxed mb-4">
              Our Monthly Fitness Challenge brings the Get Fit community together for an exhilarating day of competition, camaraderie, and personal achievement. Every first Saturday, members of all fitness levels gather to push their limits and celebrate their progress.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed mb-4">
              The challenge features rotating workout formats including HIIT circuits, strength challenges, endurance tests, and team competitions. Whether you're a seasoned athlete or just beginning your fitness journey, there's a category for everyone.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed">
              Winners receive prizes, recognition, and bragging rights. But the real victory is the supportive community atmosphere and the personal growth each participant experiences. Join us and discover what you're capable of!
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
          Event <span className="text-primary">Gallery</span>
        </h2>
        
        {/* Masonry-style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First image - spans 2 rows */}
          <div className="md:row-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px] md:h-full">
            <img
              src={galleryImages[0]}
              alt="Gallery image 1"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Second image - normal height */}
          <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={galleryImages[1]}
              alt="Gallery image 2"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Third image - spans 2 rows */}
          <div className="md:row-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px] md:h-full">
            <img
              src={galleryImages[2]}
              alt="Gallery image 3"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Fourth image - normal height */}
          <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={galleryImages[3]}
              alt="Gallery image 4"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Fifth image - normal height */}
          <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={galleryImages[4]}
              alt="Gallery image 5"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Sixth image - spans 2 columns */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]">
            <img
              src={galleryImages[5]}
              alt="Gallery image 6"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
