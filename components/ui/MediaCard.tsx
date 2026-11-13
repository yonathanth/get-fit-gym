interface MediaCardProps {
  image: string;
  title: string;
  /** Height / rounding / sizing classes for the card. */
  className?: string;
  /** Text size classes for the title. */
  titleClassName?: string;
  /** Padding classes for the caption area. */
  captionClassName?: string;
  lazy?: boolean;
}

/**
 * Image card with a cinematic gradient, slow zoom on hover, a gold hairline
 * that brightens on hover and an underline that draws in under the title.
 */
export default function MediaCard({
  image,
  title,
  className = "h-[200px] rounded-[24px]",
  titleClassName = "text-xl",
  captionClassName = "p-5 sm:p-6",
  lazy = true,
}: MediaCardProps) {
  return (
    <div
      className={`group relative isolate overflow-hidden bg-surface border border-white/10 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)] transition-[border-color,box-shadow,transform] duration-500 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.95),0_0_40px_-20px_rgba(217,151,43,0.35)] ${className}`}
    >
      <img
        src={image}
        alt={title}
        loading={lazy ? "lazy" : undefined}
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/35 to-black/5" />

      <div className={`absolute inset-x-0 bottom-0 ${captionClassName}`}>
        <h3 className={`font-impact uppercase tracking-tight leading-[1.05] text-white text-balance ${titleClassName}`}>
          {title}
        </h3>
        <span className="mt-2.5 block h-[2px] w-8 origin-left scale-x-50 rounded-[9999px] bg-primary/80 transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </div>
    </div>
  );
}
