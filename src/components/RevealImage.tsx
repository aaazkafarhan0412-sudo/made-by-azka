import { useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

/* ============================================================================
   ✏️ REPLACEABLE IMAGE CONTAINER
   ----------------------------------------------------------------------------
   Drop ANY image into `src` — the container keeps the ratio, crop, alignment
   and hover behaviour identical, so the layout never shifts.
   Shapes: "arch" (signature) · "rounded" · "circle" · "petal" · "square"
   ========================================================================== */

type Shape = "arch" | "rounded" | "circle" | "petal" | "square";

const shapeClass: Record<Shape, string> = {
  arch: "shape-arch",
  rounded: "rounded-[1.75rem]",
  circle: "rounded-full",
  petal: "shape-petal",
  square: "rounded-none",
};

type RevealImageProps = {
  src: string;
  alt: string;
  /** CSS aspect-ratio, e.g. "4 / 5", "1 / 1", "16 / 10" */
  ratio?: string;
  shape?: Shape;
  /** Ken Burns "breathing" motion inside the frame */
  kenBurns?: boolean;
  /** Gentle zoom on hover (default true) */
  zoomOnHover?: boolean;
  eager?: boolean;
  className?: string;
  imgClassName?: string;
  overlay?: ReactNode;
  /** Fallback caption shown if the file is missing / still empty */
  placeholderLabel?: string;
};

export function RevealImage({
  src,
  alt,
  ratio = "4 / 5",
  shape = "rounded",
  kenBurns = false,
  zoomOnHover = true,
  eager = false,
  className,
  imgClassName,
  overlay,
  placeholderLabel = "Replace image",
}: RevealImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const missing = !src || failed;

  return (
    <div
      className={cn(
        "group/img relative isolate overflow-hidden bg-shell",
        shapeClass[shape],
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      {/* loading shimmer — keeps the box exactly the same size */}
      {!loaded && !missing && <div className="img-shimmer absolute inset-0" aria-hidden="true" />}

      {missing ? (
        /* Empty-state: patterned placeholder so a missing file never breaks the grid */
        <div
          className="absolute inset-0 grid place-items-center bg-petal text-center"
          aria-hidden="true"
        >
          <div className="px-6">
            <svg viewBox="0 0 48 48" className="mx-auto h-10 w-10 text-rose">
              <rect x="4" y="8" width="40" height="32" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="m6 34 11-11 8 8 6-5 11 9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <circle cx="16" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <p className="eyebrow mt-3 text-mist">{placeholderLabel}</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)]",
            loaded ? "opacity-100" : "opacity-0 scale-[1.04]",
            zoomOnHover && !kenBurns && "group-hover/img:scale-[1.06]",
            kenBurns && "animate-kenburns",
            imgClassName
          )}
        />
      )}

      {overlay}
    </div>
  );
}

export default RevealImage;
