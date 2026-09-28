import type { ReactNode, SVGProps } from "react";

/* ============================================================================
   ICON LIBRARY — all icons are hand-written SVG (no icon font dependency).
   ✏️ Add, remove or restyle icons here; reference them by name from site.ts.
   ========================================================================== */

type IconDef = { node: ReactNode; solid?: boolean };

const icons: Record<string, IconDef> = {
  /* --- brand glyphs ---------------------------------------------------- */
  instagram: {
    node: (
      <>
        <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.6" />
        <circle cx="12" cy="12" r="4.3" />
        <circle cx="17.7" cy="6.3" r="1.15" fill="currentColor" stroke="none" />
      </>
    ),
  },
  linkedin: {
    solid: true,
    node: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.5c0-1.31-.02-3-1.9-3-1.9 0-2.2 1.42-2.2 2.9V21h-4z" />
    ),
  },
  /* --- interface ------------------------------------------------------- */
  arrowUpRight: { node: <path d="M7 17 17 7M9 7h8v8" /> },
  arrowRight: { node: <path d="M4 12h15m-6-6 6 6-6 6" /> },
  arrowDown: { node: <path d="M12 4v15m-6-6 6 6 6-6" /> },
  arrowLeft: { node: <path d="M20 12H5m6 6-6-6 6-6" /> },
  chevronDown: { node: <path d="m6 9 6 6 6-6" /> },
  close: { node: <path d="M6 6l12 12M18 6 6 18" /> },
  menu: { node: <path d="M3 7h18M3 12h18M3 17h12" /> },
  plus: { node: <path d="M12 5v14M5 12h14" /> },
  minus: { node: <path d="M5 12h14" /> },
  check: { node: <path d="m4.5 12.5 5 5 10-11" /> },
  copy: {
    node: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="3" />
        <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v7A2.5 2.5 0 0 0 5.5 15" />
      </>
    ),
  },
  mail: {
    node: (
      <>
        <rect x="2.5" y="4.5" width="19" height="15" rx="3.5" />
        <path d="m4 8 7.1 4.8a2 2 0 0 0 2.2 0L20.5 8" />
      </>
    ),
  },
  pin: {
    node: (
      <>
        <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
  },
  clock: {
    node: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5.4l3.4 2" />
      </>
    ),
  },
  quote: {
    solid: true,
    node: (
      <path d="M9.6 5.4c-3 1.5-4.9 4.3-4.9 7.9 0 3.3 1.9 5.3 4.3 5.3 2.1 0 3.7-1.5 3.7-3.5 0-1.9-1.3-3.3-3.1-3.3-.4 0-.8.1-1 .2.3-1.7 1.7-3.4 3.4-4.3zm9 0c-3 1.5-4.9 4.3-4.9 7.9 0 3.3 1.9 5.3 4.3 5.3 2.1 0 3.7-1.5 3.7-3.5 0-1.9-1.3-3.3-3.1-3.3-.4 0-.8.1-1 .2.3-1.7 1.7-3.4 3.4-4.3z" />
    ),
  },
  heart: {
    node: <path d="M12 20s-7.4-4.5-8.9-9.2C2 7.4 4 4.5 7 4.5c2 0 3.4 1.2 5 3.2 1.6-2 3-3.2 5-3.2 3 0 5 2.9 3.9 6.3C19.4 15.5 12 20 12 20z" />,
  },
  star: { solid: true, node: <path d="m12 3 2.6 5.7 6.2.7-4.6 4.2 1.3 6.1L12 16.8 6.5 19.7l1.3-6.1L3.2 9.4l6.2-.7z" /> },

  /* --- craft ----------------------------------------------------------- */
  pen: { node: <path d="m3.5 20.5 4-1 10-10a2.1 2.1 0 0 0-3-3l-10 10-1 4zM14 6.5l3.5 3.5" /> },
  brush: {
    node: (
      <>
        <path d="M15.5 3.5 20 8 10.4 17.6a3.4 3.4 0 0 1-2 .95l-4.3.7.7-4.3a3.4 3.4 0 0 1 .95-2z" />
        <path d="M4 21c1.4.6 3 .2 3.6-1.2" />
      </>
    ),
  },
  sparkle: {
    node: (
      <>
        <path d="M12 3.2c.9 4.3 2.4 5.8 6.7 6.7-4.3.9-5.8 2.4-6.7 6.7-.9-4.3-2.4-5.8-6.7-6.7 4.3-.9 5.8-2.4 6.7-6.7z" />
        <path d="M18.4 15.6c.4 1.9 1 2.6 2.9 3-1.9.4-2.6 1-3 2.9-.4-1.9-1-2.6-2.9-3 1.9-.4 2.6-1 3-2.9z" />
      </>
    ),
  },
  layers: { node: <path d="m12 3 9 5-9 5-9-5 9-5zM3.5 12.5 12 17l8.5-4.5M3.5 16.8 12 21.3l8.5-4.5" /> },
  screen: {
    node: (
      <>
        <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
        <path d="M8.5 20.5h7M12 17v3.5" />
      </>
    ),
  },
  grid: { node: <path d="M4 4h6.5v6.5H4zM13.5 4H20v6.5h-6.5zM4 13.5h6.5V20H4zM13.5 13.5H20V20h-6.5z" /> },
  box: { node: <path d="m12 3 8.5 4.6v8.8L12 21l-8.5-4.6V7.6zM3.7 7.7 12 12.2l8.3-4.5M12 12.2V21" /> },
  printer: {
    node: (
      <>
        <path d="M7 9V3.8h10V9" />
        <rect x="3" y="9" width="18" height="7.5" rx="2.4" />
        <path d="M7 14.5h10v5.7H7z" />
      </>
    ),
  },
  compass: {
    node: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.4 8.6-2 4.8-4.8 2 2-4.8z" />
      </>
    ),
  },
  sliders: { node: <path d="M5 20V13M5 9V4M12 20v-8M12 8V4M19 20v-4M19 12V4M2.5 11h5M9.5 10h5M16.5 15h5" /> },
  palette: {
    node: (
      <>
        <path d="M12 21a9 9 0 1 1 9-9c0 2-1.6 3-3.4 3H16a2 2 0 0 0-1.4 3.4c.4.5.4 1.2 0 1.7-.4.6-1 .9-1.7.9z" />
        <circle cx="8" cy="10" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="16" cy="10" r="1.1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  crop: { node: <path d="M6 2.5v15h15M2.5 6h15v15" /> },
  type: { node: <path d="M4 6.5V4.5h16v2M12 4.8V20M8.5 20h7" /> },
};

export type IconName = keyof typeof icons | string;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number | string;
  strokeWidth?: number;
};

/** ✏️ Single entry point for icons: <Icon name="instagram" /> */
export function Icon({ name, size = 20, strokeWidth = 1.5, className, ...rest }: IconProps) {
  const def = icons[name] ?? icons.sparkle;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill={def.solid ? "currentColor" : "none"}
      stroke={def.solid ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {def.node}
    </svg>
  );
}

export default Icon;
