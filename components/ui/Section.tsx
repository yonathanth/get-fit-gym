import type { ReactNode } from "react";

/** Shared page container: consistent max width, side gutters and vertical rhythm. */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

/**
 * Section heading in the hero's style: soft white fade on the main words and a
 * gold sheen on the accent. Sizes scale fluidly with the viewport.
 */
export function SectionHeading({
  title,
  accent,
  align = "center",
  as: Tag = "h2",
  className = "",
}: {
  title: string;
  accent?: string;
  align?: "center" | "left" | "responsive";
  as?: "h2" | "h3";
  className?: string;
}) {
  const alignClass =
    align === "center" ? "text-center" : align === "left" ? "text-left" : "text-center lg:text-left";
  return (
    <Tag
      className={`font-impact uppercase tracking-tight leading-[1.02] text-[clamp(2.1rem,5.2vw,4rem)] text-balance ${alignClass} ${className}`}
    >
      <span className="text-fade">{title}</span>
      {accent && (
        <>
          {" "}
          <span className="text-shimmer">{accent}</span>
        </>
      )}
    </Tag>
  );
}
