import PageHeading from "@/components/sections/PageHeading";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage() {
  return (
    <main className="w-full">
      <PageHeading 
        title="About Us" 
        subtitle="Experience a sanctuary of peak performance where strength meets mindset. We provide world-class facilities and expert guidance to help you become the strongest version of yourself."
        images={[
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=800&h=500&fit=crop&q=80"
        ]}
      />
      
      {/* Our Story Section - To be built */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-16">
          Our <span className="text-primary">Story</span>
        </h2>
        {/* Story content will go here */}
      </section>

      {/* Our Values Section - To be built */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-16">
          Our <span className="text-primary">Values</span>
        </h2>
        {/* Values content will go here */}
      </section>

      <CTASection />
    </main>
  );
}
