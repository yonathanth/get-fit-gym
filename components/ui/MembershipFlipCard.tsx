"use client";

type MembershipPlan = {
  name: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  features: string[];
};

interface MembershipFlipCardProps {
  plan: MembershipPlan;
}

export default function MembershipFlipCard({ plan }: MembershipFlipCardProps) {
  return (
    <div className="group h-[400px] [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of card */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-full">
            {/* Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={plan.image}
                alt={plan.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full p-6 md:p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-3">
                {plan.name}
              </h3>
              <p className="text-sm md:text-base text-white/80 font-inter leading-relaxed">
                {plan.description}
              </p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 bg-surface h-full p-6 md:p-8 flex flex-col justify-between">
            {/* Pricing Header */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-6">
                <span className="text-4xl md:text-5xl font-impact text-white">
                  {plan.price}
                </span>
                <span className="text-lg text-secondary font-inter">
                  /{plan.duration}
                </span>
              </div>
            </div>

            {/* Features List */}
            <div className="flex-1 space-y-3">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-white/80 font-inter leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-primary text-on-primary text-sm font-inter font-bold px-6 py-3 rounded-full hover:bg-white transition-all tracking-widest mt-6">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
