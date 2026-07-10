import PageHeading from "@/components/sections/PageHeading";
import CTASection from "@/components/sections/CTASection";

export default function WellnessWorkshopsEvent() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80"
  ];

  return (
    <main className="w-full">
      <PageHeading 
        title="Wellness Workshops" 
        subtitle="Monthly expert-led sessions on nutrition, mental health, recovery, and holistic wellness to support your complete fitness journey."
        images={[
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop&q=80"
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
              Our Wellness Workshops recognize that true fitness extends beyond physical training. Each month, we host expert-led sessions covering essential aspects of health and wellness, from nutrition and meal planning to mental health strategies and recovery techniques.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed mb-4">
              Led by certified nutritionists, mental health professionals, and wellness experts, these interactive workshops provide practical knowledge you can immediately apply to your fitness journey. Topics rotate monthly and include sports nutrition, stress management, sleep optimization, injury prevention, and holistic health practices.
            </p>
            <p className="text-lg text-white/80 font-inter leading-relaxed">
              Workshops are included with your membership and open to all fitness levels. Bring your questions, take notes, and connect with fellow members who share your commitment to comprehensive wellness. Your strongest self starts with complete care.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-12 text-center">
          Event <span className="text-primary">Gallery</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 h-[300px]"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
