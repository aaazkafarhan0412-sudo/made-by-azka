import { Icon } from "@/components/Icons";
import { cn } from "@/utils/cn";

/* ============================================================================
   MARQUEE — infinite ticker band. Pause on hover, reverses if asked.
   ========================================================================== */

type MarqueeProps = {
  items: string[];
  tone?: "plum" | "cream" | "blush";
  speed?: "normal" | "slow";
  reverse?: boolean;
  className?: string;
  separator?: "sparkle" | "dot" | "none";
};

const tones = {
  plum: { wrap: "bg-plum text-cream", item: "text-cream", accent: "text-rose" },
  cream: { wrap: "bg-shell text-plum", item: "text-plum", accent: "text-mauve" },
  blush: { wrap: "bg-petal text-plum", item: "text-plum", accent: "text-rose" },
} as const;

export function Marquee({
  items,
  tone = "plum",
  speed = "normal",
  reverse = false,
  className,
  separator = "sparkle",
}: MarqueeProps) {
  const t = tones[tone];
  const row = [...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-4 select-none",
        t.wrap,
        className
      )}
      style={{
        maskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
      }}
      aria-hidden="true"
    >
      <div
        className={cn(
          "flex w-max items-center",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
          "hover:[animation-play-state:paused]"
        )}
      >
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span
              className={cn(
                "font-display px-6 text-[clamp(1.05rem,2.1vw,1.7rem)] font-light tracking-tight whitespace-nowrap",
                t.item,
                i % 3 === 1 && "italic"
              )}
            >
              {item}
            </span>
            {separator !== "none" &&
              (separator === "sparkle" ? (
                <Icon name="sparkle" size={14} className={cn("shrink-0", t.accent)} />
              ) : (
                <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60", t.accent)} />
              ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
