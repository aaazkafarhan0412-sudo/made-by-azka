import { useId } from "react";
import { Icon, type IconName } from "@/components/Icons";
import { cn } from "@/utils/cn";

/* ============================================================================
   ROTATING SEAL — circular text stamp used on the hero and in the contact card.
   ✏️ Change `text` in src/config/site.ts (hero.stampText).
   ========================================================================== */

type StampSealProps = {
  text: string;
  center?: IconName;
  size?: number;
  tone?: "dark" | "light";
  className?: string;
};

export function StampSeal({ text, center = "sparkle", size = 132, tone = "dark", className }: StampSealProps) {
  const id = useId().replace(/:/g, "");
  const pathId = `seal-${id}`;
  const light = tone === "light";

  return (
    <div
      className={cn("relative grid place-items-center", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className={cn(
          "absolute inset-0 rounded-full backdrop-blur-sm",
          light ? "bg-plum/85" : "bg-cream/85",
          "ring-1",
          light ? "ring-blush/25" : "ring-plum/10"
        )}
      />
      <svg viewBox="0 0 132 132" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id={pathId} d="M66,66 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" fill="none" />
        </defs>
        <text
          className={cn("font-body", light ? "fill-blush" : "fill-plum")}
          style={{ fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase" }}
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {text.repeat(2)}
          </textPath>
        </text>
      </svg>
      <span
        className={cn(
          "relative grid h-11 w-11 place-items-center rounded-full",
          light ? "bg-blush text-plum" : "bg-plum text-blush"
        )}
      >
        <Icon name={center} size={19} />
      </span>
    </div>
  );
}

export default StampSeal;
