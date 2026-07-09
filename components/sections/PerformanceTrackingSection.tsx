"use client";

const trackingFeatures = [
  {
    title: "Set Your Goals",
    description:
      "Define hypertrophy, endurance, or functional mobility targets to align your program.",
    active: true,
  },
  {
    title: "Biometric Insights",
    description:
      "Monitor HRV, sleep quality, and metabolic rate to optimize training intensity and recovery cycles.",
    active: false,
  },
  {
    title: "Progress at Scale",
    description:
      "Leverage historical data to predict plateaus and adjust loading parameters before they happen.",
    active: false,
  },
];

export default function PerformanceTrackingSection() {
  return (
    <>
      {/* Section Header */}
      <section className="px-4 md:px-6 pt-32 pb-12">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <span className="text-xs font-black text-primary tracking-[0.3em] uppercase font-sans">
              The Platform
            </span>
            <h2 className="text-4xl md:text-6xl font-impact text-white mt-6 leading-none tracking-tighter uppercase">
              Everything you need to
              <br />
              track your evolution
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 md:px-6 pb-24">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="border-outline-variant overflow-hidden flex flex-col lg:flex-row w-full min-h-[600px] gap-12">
            {/* Left Side - Content */}
            <div className="w-full lg:w-2/5 flex flex-col justify-between py-5">
              <div className="flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      monitoring
                    </span>
                    <h2 className="text-3xl font-impact text-white tracking-wider uppercase">
                      Performance Tracking
                    </h2>
                  </div>
                  <p className="text-secondary text-base mb-12 leading-relaxed font-medium">
                    Our integrated environment surfaces biometric patterns and
                    recovery needs, offering data-driven pathways to structure
                    your training for maximum efficiency.
                  </p>
                </div>

                <div className="space-y-4 mt-auto">
                  {trackingFeatures.map((feature, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="border-t border-white/10 pt-8 pb-6 relative overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-[3px] bg-primary transition-all duration-500 group-hover:w-full ${
                            feature.active ? "w-1/3" : "w-0"
                          }`}
                        ></div>
                        <h3
                          className={`text-xl font-impact mb-3 tracking-wider transition-colors ${
                            feature.active
                              ? "text-white group-hover:text-primary"
                              : "text-secondary group-hover:text-primary"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                          <p className="text-sm text-secondary overflow-hidden leading-relaxed pr-4 font-normal">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Visual Dashboard */}
            <div className="w-full lg:w-3/5 relative flex items-center justify-center overflow-hidden group self-stretch rounded-[32px] border border-white/5">
              <img
                alt="Atmospheric training environment"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNdCD60Ml_Z-9YKIiTKC1dkWPWV9gkunp3xJKSJIfiSb4WVGBUv-EEFtzlsFwWYpfxUiu7cU8FIHhkIAIITZhk_jKiaZ5PGs6cv_78qdncYZLtPvo02WfuBwyTMgsKFltCUOkSy_ibtmVWUXEGR3DgQRiDwBc3MQ4JiAUogIWOSrBDI5uC3rveo04Yc6BbnKHe-JgoKggH0rK_wZo0GN6wAQDfgaN9SHHxEsmiB3NDYK5RutxXpWwf"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
