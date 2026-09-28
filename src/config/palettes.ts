/* ============================================================================
   ✏️ COLOUR PALETTES — each preset overrides the CSS variables declared in
   src/index.css (@theme). Add a fourth palette by copying one block below.
   The floating swatch button in the corner switches them live.
   ========================================================================== */

export type Palette = {
  id: string;
  name: string;
  /** dots shown in the switcher */
  preview: string[];
  /** CSS custom properties to override */
  vars: Record<string, string>;
};

const base = {
  "--color-cream": "#fbf6f1",
  "--color-shell": "#f5ebe2",
  "--color-petal": "#f9eae7",
  "--color-blush": "#efd5d1",
  "--color-rose": "#cf9d97",
  "--color-mauve": "#a17e9b",
  "--color-lav": "#cdb9d8",
  "--color-plum": "#4e2b45",
  "--color-plum-soft": "#6b3f60",
  "--color-ink": "#241c24",
  "--color-line": "#e6d7cd",
};

export const palettes: Palette[] = [
  {
    id: "blush-plum",
    name: "Blush & Plum",
    preview: ["#EFD5D1", "#CF9D97", "#A17E9B", "#4E2B45"],
    vars: { ...base },
  },
  {
    id: "mauve-dusk",
    name: "Mauve Dusk",
    preview: ["#E3DAEE", "#B79BC4", "#8A76A8", "#3B2C55"],
    vars: {
      ...base,
      "--color-cream": "#faf8fc",
      "--color-shell": "#ede7f3",
      "--color-petal": "#f1ebf9",
      "--color-blush": "#e3daee",
      "--color-rose": "#b79bc4",
      "--color-mauve": "#8a76a8",
      "--color-lav": "#d6c7e8",
      "--color-plum": "#3b2c55",
      "--color-plum-soft": "#54407a",
      "--color-ink": "#1e1a2a",
      "--color-line": "#e0d8ea",
    },
  },
  {
    id: "rose-noir",
    name: "Rose Noir",
    preview: ["#F0D9DC", "#C4808B", "#9A6B79", "#5A2436"],
    vars: {
      ...base,
      "--color-cream": "#fdf7f5",
      "--color-shell": "#f6e9e6",
      "--color-petal": "#fbeaec",
      "--color-blush": "#f0d9dc",
      "--color-rose": "#c4808b",
      "--color-mauve": "#9a6b79",
      "--color-lav": "#d9b3bc",
      "--color-plum": "#5a2436",
      "--color-plum-soft": "#7a3448",
      "--color-ink": "#2a1a1e",
      "--color-line": "#ecd9d6",
    },
  },
];

export default palettes;
