import type { ReactNode } from "react";
import { LineMaskTitle, Reveal } from "@/components/Reveal";
import { cn } from "@/utils/cn";

/* ============================================================================
   SECTION HEADING — eyebrow + line-mask headline + lead + optional action.
   Keeps every section of the site on the same typographic rhythm.
   ========================================================================== */

type SectionHeadingProps = {
  eyebrow?: string;
  title?: ReactNode[];
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  index?: string;
  action?: ReactNode;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  index,
  action,
  className,
  titleClassName,
}: SectionHeadingProps) {
  const light = tone === "light";
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-6",
        centered ? "items-center text-center" : "items-start",
        !centered && action && "md:flex-row md:items-end md:justify-between md:gap-12",
        className
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto flex flex-col items-center")}>
        {(eyebrow || index) && (
          <Reveal className={cn("flex items-center gap-3", centered && "justify-center")}>
            <span
              aria-hidden="true"
              className={cn("h-px w-8 origin-left", light ? "bg-blush/60" : "bg-rose/70")}
            />
            <span className={cn("eyebrow", light ? "text-blush" : "text-mauve")}>
              {index && <span className={cn("mr-2 italic", light ? "text-rose" : "text-rose")}>{index}</span>}
              {eyebrow}
            </span>
          </Reveal>
        )}

        {title && (
          <LineMaskTitle
            as="h2"
            lines={title}
            className={cn(
              "mt-4 font-display text-[clamp(2.1rem,5.4vw,3.9rem)] leading-[1.02] font-light",
              light ? "text-cream" : "text-plum",
              titleClassName
            )}
          />
        )}

        {lead && (
          <Reveal delay={220}>
            <p
              className={cn(
                "mt-5 max-w-xl text-[1.02rem] leading-[1.75] font-light",
                light ? "text-blush/85" : "text-mist",
                centered && "mx-auto"
              )}
            >
              {lead}
            </p>
          </Reveal>
        )}
      </div>

      {action && <Reveal delay={160} className="shrink-0">{action}</Reveal>}
    </div>
  );
}

export default SectionHeading;
