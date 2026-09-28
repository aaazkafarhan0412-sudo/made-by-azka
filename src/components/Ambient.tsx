import { cn } from "@/utils/cn";

/* ============================================================================
   AMBIENT BACKDROP — layered washes, hairline grid, arch motif, drifting petals.
   ✏️ Change the wash colours in src/index.css (@theme) to re-tint every section.
   ========================================================================== */

type AmbientProps = {
  className?: string;
  /** show the fine vertical grid */
  grid?: boolean;
  /** show the outlined arch motif */
  arch?: boolean;
  /** number of drifting petals */
  petals?: number;
};

const petalSpots = [
  { top: "12%", left: "6%", size: 90, delay: "0s", color: "bg-blush" },
  { top: "68%", left: "12%", size: 54, delay: "1.4s", color: "bg-rose/40" },
  { top: "22%", left: "82%", size: 120, delay: "0.7s", color: "bg-lav/30" },
  { top: "76%", left: "72%", size: 70, delay: "2.1s", color: "bg-petal" },
  { top: "46%", left: "48%", size: 40, delay: "3s", color: "bg-blush/70" },
];

export function Ambient({ className, grid = true, arch = true, petals = 4 }: AmbientProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden="true">
      {/* soft washes */}
      <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(239,213,209,0.75),transparent_65%)] blur-2xl" />
      <div className="absolute top-1/3 -right-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(205,185,216,0.4),transparent_66%)] blur-2xl" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(249,234,231,0.9),transparent_70%)] blur-xl" />

      {/* hairline grid */}
      {grid && (
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(78,43,69,0.055) 1px, transparent 1px)",
            backgroundSize: "calc(100% / 6) 100%",
          }}
        />
      )}

      {/* arch motif */}
      {arch && (
        <svg
          className="absolute -right-24 top-16 h-[34rem] w-[34rem] text-plum/10"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M100 8c-40 0-66 27-66 66v110a8 8 0 0 0 8 8h116a8 8 0 0 0 8-8V74c0-39-26-66-66-66z"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <path
            d="M100 24c-30 0-50 20-50 50v110h100V74c0-30-20-50-50-50z"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="3 5"
          />
        </svg>
      )}

      {/* drifting petals */}
      {petalSpots.slice(0, petals).map((p, i) => (
        <span
          key={i}
          className={cn("absolute rounded-full blur-[1px] animate-float-slow", p.color)}
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            opacity: 0.55,
          }}
        />
      ))}
    </div>
  );
}

export default Ambient;
