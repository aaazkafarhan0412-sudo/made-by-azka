import { createElement, type ElementType, type ReactNode } from "react";
import { useInView } from "@/hooks";
import { cn } from "@/utils/cn";

/* ============================================================================
   MOTION PRIMITIVES — scroll reveals + the signature line-mask headline
   ========================================================================== */

type RevealProps = {
  children: ReactNode;
  variant?: "up" | "mask" | "scale" | "left" | "right";
  delay?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
  once?: boolean;
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
  as = "div",
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold, once });
  const variantClass =
    variant === "up"
      ? ""
      : variant === "mask"
        ? "reveal-mask"
        : variant === "scale"
          ? "reveal-scale"
          : variant === "left"
            ? "reveal-left"
            : "reveal-right";

  return createElement(
    as,
    {
      ref,
      className: cn("reveal", variantClass, inView && "is-visible", className),
      style: { transitionDelay: `${delay}ms` },
    },
    children
  );
}

type LineMaskTitleProps = {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  /** stagger between lines, in ms */
  stagger?: number;
  delay?: number;
};

/** Each line slides up from behind its own mask — used for every headline. */
export function LineMaskTitle({
  lines,
  as = "h2",
  className,
  lineClassName,
  stagger = 110,
  delay = 0,
}: LineMaskTitleProps) {
  const { ref, inView } = useInView<HTMLHeadingElement>({ threshold: 0.25 });

  return createElement(
    as,
    { ref, className: cn(className), "aria-label": undefined },
    lines.map((line, i) => (
      <span key={i} className={cn("line-mask", inView && "is-visible", lineClassName)}>
        <span style={{ transitionDelay: `${delay + i * stagger}ms` }}>{line}</span>
      </span>
    ))
  );
}

export default Reveal;
