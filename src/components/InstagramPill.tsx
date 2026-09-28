import { Icon } from "@/components/Icons";
import { brand } from "@/config/site";
import { cn } from "@/utils/cn";

/* ============================================================================
   ✏️ INSTAGRAM PILL — the clickable @made.byazka lockup.
   Icon + handle, linking to https://www.instagram.com/made.byazka/
   Used in: header, hero, about card, contact section, footer.
   ========================================================================== */

type InstagramPillProps = {
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showHandle?: boolean;
  className?: string;
  label?: string;
};

const sizeMap = {
  sm: { box: "h-8 w-8", text: "text-[0.78rem]", pad: "gap-2.5 py-1.5 pl-1.5 pr-4" },
  md: { box: "h-10 w-10", text: "text-[0.9rem]", pad: "gap-3 py-1.5 pl-1.5 pr-5" },
  lg: { box: "h-12 w-12", text: "text-[1.05rem]", pad: "gap-3.5 py-2 pl-2 pr-6" },
} as const;

export function InstagramPill({
  tone = "dark",
  size = "md",
  showHandle = true,
  className,
  label,
}: InstagramPillProps) {
  const s = sizeMap[size];
  const light = tone === "light";

  return (
    <a
      href={brand.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ?? `${brand.brandName} on Instagram — ${brand.handle}`}
      className={cn(
        "group/ig relative inline-flex items-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        s.pad,
        light
          ? "bg-cream/10 text-cream ring-1 ring-cream/20 hover:bg-cream/20 hover:ring-cream/40"
          : "bg-paper text-plum ring-1 ring-line hover:ring-rose/60 shadow-soft hover:shadow-lift",
        !showHandle && "p-1.5",
        className
      )}
    >
      {/* soft gradient halo on hover — the only "instagram-y" flourish */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-500 group-hover/ig:opacity-60",
          "bg-[linear-gradient(120deg,#EFD5D1,#CF9D97,#A17E9B)]"
        )}
      />
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/ig:-rotate-6 group-hover/ig:scale-105",
          s.box,
          light ? "bg-blush text-plum" : "bg-plum text-blush"
        )}
      >
        <Icon name="instagram" size={size === "lg" ? 22 : size === "md" ? 19 : 16} />
      </span>
      {showHandle && (
        <span className={cn("font-body tracking-[0.06em]", s.text)}>
          <span className={cn("font-normal", light ? "text-blush/70" : "text-mist")}>Instagram</span>
          <span className={cn("mx-1.5", light ? "text-blush/40" : "text-line")}>·</span>
          <span className="font-medium">{brand.handle}</span>
        </span>
      )}
    </a>
  );
}

export default InstagramPill;
