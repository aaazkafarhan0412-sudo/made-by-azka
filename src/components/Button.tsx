import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/Icons";
import { cn } from "@/utils/cn";

/* ============================================================================
   ✏️ BUTTON — one component, four looks. Change the palette in src/index.css.
   ========================================================================== */

type Variant = "solid" | "outline" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconLeft?: IconName;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
  disabled?: boolean;
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.72rem]",
  md: "px-6 py-3 text-[0.78rem]",
  lg: "px-8 py-4 text-[0.82rem]",
};

const variants: Record<Variant, string> = {
  solid: "bg-plum text-cream hover:bg-plum-soft shadow-soft hover:shadow-lift",
  outline: "border border-plum/30 text-plum hover:border-plum/60",
  light: "bg-cream text-plum hover:bg-blush",
  ghost: "text-plum hover:text-rose px-0 py-0",
};

export function Button({
  children,
  href,
  variant = "solid",
  size = "md",
  icon,
  iconLeft,
  external,
  className,
  onClick,
  type = "button",
  ariaLabel,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full",
    "eyebrow transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50",
    variant !== "ghost" && sizes[size],
    variants[variant],
    className
  );

  const inner = (
    <>
      {/* sweeping fill for the outline style */}
      {variant === "outline" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-0 origin-left scale-x-0 rounded-full bg-plum transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:scale-x-100"
        />
      )}
      <span
        className={cn(
          "relative z-10 inline-flex items-center gap-2.5 transition-colors duration-500",
          variant === "outline" && "group-hover/btn:text-cream"
        )}
      >
        {iconLeft && (
          <Icon name={iconLeft} size={size === "sm" ? 15 : 17} className="transition-transform duration-500" />
        )}
        {children}
        {icon && (
          <Icon
            name={icon}
            size={size === "sm" ? 15 : 17}
            className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
          />
        )}
      </span>
    </>
  );

  if (href) {
    const isExternal = external ?? href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
      {inner}
    </button>
  );
}

export default Button;
