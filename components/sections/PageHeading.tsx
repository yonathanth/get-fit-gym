interface PageHeadingProps {
  title: string;
  subtitle?: string;
  highlightWord?: string;
  images?: string[]; // Array of image URLs for the grid
}

export default function PageHeading({ title, subtitle, highlightWord, images = [] }: PageHeadingProps) {
  // If there's a highlight word, split the title and highlight it
  const renderTitle = () => {
    if (highlightWord && title.includes(highlightWord)) {
      const parts = title.split(highlightWord);
      return (
        <>
          {parts[0]}
          <span className="text-primary">{highlightWord}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="w-full px-4 md:px-6 py-8 md:py-12" style={{ height: 'calc(100vh - 72px)' }}>
      <div className="max-w-[1200px] mx-auto h-full">
        <div className="w-full h-full rounded-[24px] md:rounded-[32px] overflow-hidden relative border border-white/5 bg-background">
          {/* Image Grid - no outer padding, only gaps between cards */}
          {images.length > 0 && (
            <div className="absolute inset-0 flex gap-4 md:gap-5">
              {/* Large card - left side, spans full height */}
              <div className="relative flex-1 overflow-hidden rounded-[16px] md:rounded-[20px] group cursor-pointer">
                <img
                  src={images[0]}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              
              {/* Right side - two stacked cards */}
              <div className="flex-1 flex flex-col gap-4 md:gap-5">
                {/* Top right card */}
                {images[1] && (
                  <div className="relative flex-1 overflow-hidden rounded-[16px] md:rounded-[20px] group cursor-pointer">
                    <img
                      src={images[1]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                )}
                
                {/* Bottom right card */}
                {images[2] && (
                  <div className="relative flex-1 overflow-hidden rounded-[16px] md:rounded-[20px] group cursor-pointer">
                    <img
                      src={images[2]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Gradient Overlay - dark at bottom, transparent at top to show photos */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none"></div>
          
          {/* Content - Bottom Left */}
          <div className="relative h-full px-8 md:px-12 pb-12 md:pb-16 flex flex-col justify-end pointer-events-none">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-3 italic">
                {renderTitle()}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-white font-inter leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
