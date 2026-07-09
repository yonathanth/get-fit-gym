const benefits = [
  {
    icon: "fitness_center",
    title: "Personal Training",
    description:
      "Receive dedicated guidance from elite coaches to accelerate your strength and body composition goals.",
    featured: true,
  },
  {
    icon: "groups",
    title: "Group Classes",
    description:
      "From Power Yoga to Olympic Lifting, our high-energy classes are designed for all experience levels.",
    featured: false,
  },
  {
    icon: "self_improvement",
    title: "Recovery Suite",
    description:
      "Cold plunges, infrared saunas, and compression therapy to ensure your body repairs as hard as it works.",
    featured: false,
  },
  {
    icon: "restaurant",
    title: "Nutrition Planning",
    description:
      "Data-backed meal strategies and supplementation guidance to fuel your daily grind and long-term health.",
    featured: false,
  },
];

export default function MembershipBenefitsSection() {
  return (
    <section className="px-4 md:px-6 pt-12 pb-24">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="text-xs font-inter font-medium text-primary tracking-[0.2em] uppercase">
            Membership Benefits
          </span>
          <h2 className="text-4xl md:text-6xl font-impact text-white mt-6 leading-[1.1] tracking-tight uppercase">
            Elite programs for
            <br />
            modern performance
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col relative group">
              <div
                className={`w-full border-t-4 transition-all duration-300 ${
                  benefit.featured
                    ? "border-primary"
                    : "border-white/10 group-hover:border-primary"
                }`}
              ></div>
              <span className="material-symbols-outlined text-primary text-4xl mt-8">
                {benefit.icon}
              </span>
              <h3 className="text-2xl font-impact text-white mb-4 pt-16 tracking-tight uppercase group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-secondary font-inter leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
