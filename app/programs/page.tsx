import PageHeading from "@/components/sections/PageHeading";
import CTASection from "@/components/sections/CTASection";

export default function ProgramsPage() {
  return (
    <main className="w-full">
      <PageHeading 
        title="Programs" 
        subtitle="Discover our comprehensive range of fitness programs designed to help you achieve your goals, from youth development to elite strength training."
        images={[
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop&q=80"
        ]}
      />
      
      {/* Membership Plans Section - To be built */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-16">
          Membership <span className="text-primary">Plans</span>
        </h2>
        {/* Plans content will go here */}
      </section>

      {/* Classes Section - To be built */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-16">
          Our <span className="text-primary">Classes</span>
        </h2>
        {/* Classes content will go here */}
      </section>

      <CTASection />
    </main>
  );
}
