import { cn } from "@/utils/cn";
import { brand } from "@/config/site";

/* ============================================================================
   ✏️ LOGO COMPONENT — the single place to change the logo everywhere.
   Used in: header, mobile menu, about, contact card and footer.
   → Want to use your own artwork? Pass `imageSrc="/logo.png"` (or import it)
     and the component swaps the drawn monogram for your file automatically,
     keeping the exact same size, alignment and spacing.
   ========================================================================== */

type LogoProps = {
  /** "dark" = plum mark on light backgrounds · "light" = cream mark on dark */
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  imageSrc?: string;
  className?: string;
  markClassName?: string;
};

const sizes = {
  sm: { mark: "h-8 w-8", text: "text-[0.95rem]", gap: "gap-2" },
  md: { mark: "h-10 w-10", text: "text-[1.15rem]", gap: "gap-2.5" },
  lg: { mark: "h-14 w-14", text: "text-[1.6rem]", gap: "gap-3.5" },
} as const;

export function Logo({
  variant = "dark",
  size = "md",
  showWordmark = true,
  imageSrc,
  className,
  markClassName,
}: LogoProps) {
  const s = sizes[size];
  const isLight = variant === "light";

  return (
    <span className={cn("inline-flex items-center", s.gap, className)}>
      {/* ---- MARK ---- */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`${brand.brandName} logo`}
          className={cn(s.mark, "object-contain", markClassName)}
        />
      ) : (
        <span
          className={cn(
            "relative grid shrink-0 place-items-center overflow-hidden",
            s.mark,
            markClassName
          )}
          aria-hidden="true"
        >
          <svg viewBox="0 0 48 48" className="h-full w-full">
            {/* arched plaque */}
            <path
              d="M24 2.5c-9.6 0-17 7-17 16.6V41a4.5 4.5 0 0 0 4.5 4.5h25A4.5 4.5 0 0 0 41 41V19.1c0-9.6-7.4-16.6-17-16.6z"
              className={isLight ? "fill-cream" : "fill-plum"}
            />
            {/* inner hairline arch */}
            <path
              d="M24 6.6c-7.4 0-12.9 5.3-12.9 12.6V40a2 2 0 0 0 2 2h21.8a2 2 0 0 0 2-2V19.2c0-7.3-5.5-12.6-12.9-12.6z"
              fill="none"
              strokeWidth="0.9"
              className={isLight ? "stroke-plum/35" : "stroke-blush/45"}
            />
            {/* monogram */}
            <text
              x="24"
              y="32.5"
              textAnchor="middle"
              fontFamily="Fraunces, Georgia, serif"
              fontStyle="italic"
              fontWeight="500"
              fontSize="23"
              className={isLight ? "fill-plum" : "fill-blush"}
            >
              a
            </text>
            {/* sparkle */}
            <path
              d="M35.4 12.2c.5 2.3 1.2 3 3.5 3.5-2.3.5-3 1.2-3.5 3.5-.5-2.3-1.2-3-3.5-3.5 2.3-.5 3-1.2 3.5-3.5z"
              className={isLight ? "fill-mauve" : "fill-rose"}
            />
          </svg>
        </span>
      )}

      {/* ---- WORDMARK ---- */}
      {showWordmark && (
        <span
          className={cn(
            "font-display leading-none tracking-tight",
            s.text,
            isLight ? "text-cream" : "text-plum"
          )}
        >
          <span className="font-medium">made</span>
          <span className={cn("italic", isLight ? "text-blush" : "text-rose")}>.by</span>
          <span className="font-medium">azka</span>
        </span>
      )}
    </span>
  );
}

export default Logo;
