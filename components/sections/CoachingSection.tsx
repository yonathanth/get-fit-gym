"use client";

const coachingFeatures = [
  {
    title: "Sports Science Leadership",
    description:
      "Led by founders holding BSc in Sports Science & MSc in Exercise Physiology with over 20 years coaching experience.",
    active: true,
  },
  {
    title: "Over 20 Skilled Trainers",
    description:
      "A dedicated team of knowledgeable professional coaches providing continuous technique guidance.",
    active: false,
  },
  {
    title: "Level-Based Progression",
    description:
      "Tailored workout programming grouped according to your exact physical fitness level.",
    active: false,
  },
];

export default function CoachingSection() {
  return (
    <>
      {/* Section Header */}
      <section className="px-4 md:px-6 pt-12 pb-12">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <span className="text-xs font-inter font-medium text-primary tracking-[0.2em] uppercase">
              Coaching Excellence
            </span>
            <h2 className="text-4xl md:text-6xl font-impact text-white mt-6 leading-[1.1] tracking-tight uppercase">
              Science-backed guidance from
              <br />
              over 20 expert coaches
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4 md:px-6">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="border-outline-variant overflow-hidden flex flex-col lg:flex-row-reverse w-full min-h-[600px] gap-12">
            {/* Content Side */}
            <div className="w-full lg:w-2/5 flex flex-col justify-between py-5">
              <div className="flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      sports_gymnastics
                    </span>
                    <h2 className="text-3xl font-impact text-white tracking-tight uppercase">
                      Expert Coaching Team
                    </h2>
                  </div>
                  <p className="text-secondary text-base mb-12 leading-relaxed font-inter">
                    Access over 20 skilled and knowledgeable coaches led by exercise physiology and sports science specialists. We turn repetitive gym workouts into an engaging, motivating, and highly effective transformation.
                  </p>
                </div>

                <div className="space-y-4 mt-auto">
                  {coachingFeatures.map((feature, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="border-t border-white/10 pt-8 pb-6 relative overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-[3px] bg-primary transition-all duration-500 group-hover:w-full ${
                            feature.active ? "w-1/3" : "w-0"
                          }`}
                        ></div>
                        <h3
                          className={`text-xl font-impact mb-3 tracking-tight uppercase transition-colors ${
                            feature.active
                              ? "text-white group-hover:text-primary"
                              : "text-secondary group-hover:text-primary"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                          <p className="text-sm text-secondary overflow-hidden leading-relaxed pr-4 font-inter">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="w-full lg:w-3/5 relative flex items-center justify-center overflow-hidden group self-stretch rounded-[32px] border border-white/5">
              <img
                alt="Focused athlete training"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChyKVS4W15uWgUCuiM_MbCOT_67GdyHubm2mal44QNnUFZquiuwxU6xCfKt9Be8i3VSc5rEI4POSpQuOUYmwTexLoBWqZd635bUFAWCPVeecaanf-1SmobHLtrEO2WsFFd8LjMop8VU3tfyof_LYDs2lqlB04wxgQM0Eottn57_Qz3foiRLRoYlYYOH90GXvkAb39r2-kKj1vj4nzS3BOq82qFV6gCmMyrCWlADEaiGHmBuJoao3z6"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
