import { useEffect, useState } from "react";
import { Icon } from "@/components/Icons";
import { palettes } from "@/config/palettes";
import { cn } from "@/utils/cn";

/* ============================================================================
   PALETTE SWITCHER — floating swatch button that re-skins the whole site by
   overriding the design tokens from src/config/palettes.ts.
   ========================================================================== */

const STORAGE_KEY = "azka-palette";

export function PaletteSwitcher() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(palettes[0]?.id ?? "");

  // restore a saved palette
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && palettes.some((p) => p.id === saved)) setActiveId(saved);
    } catch {
      /* storage blocked — fall back to default */
    }
  }, []);

  // apply tokens
  useEffect(() => {
    const palette = palettes.find((p) => p.id === activeId) ?? palettes[0];
    if (!palette) return;
    const root = document.documentElement;
    Object.entries(palette.vars).forEach(([key, value]) => root.style.setProperty(key, value));
    try {
      window.localStorage.setItem(STORAGE_KEY, palette.id);
    } catch {
      /* ignore */
    }
  }, [activeId]);

  const active = palettes.find((p) => p.id === activeId) ?? palettes[0];

  return (
    <div className="fixed bottom-5 left-4 z-[65] sm:left-6">
      <div
        className={cn(
          "flex items-center gap-2 rounded-full bg-paper/90 p-1.5 shadow-lift ring-1 ring-line backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "pr-3" : "pr-1.5"
        )}
      >
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Hide palette options" : "Change colour palette"}
          title="Change colour palette"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-plum text-blush transition-transform duration-500 hover:rotate-90"
        >
          <Icon name="palette" size={17} />
        </button>

        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-columns,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "grid-cols-[1fr] opacity-100" : "grid-cols-[0fr] opacity-0"
          )}
        >
          <div className="flex min-w-0 items-center gap-2">
            {palettes.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveId(p.id)}
                aria-label={`Palette: ${p.name}`}
                aria-pressed={p.id === activeId}
                title={p.name}
                className={cn(
                  "relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 transition-all duration-300 hover:scale-110",
                  p.id === activeId ? "ring-2 ring-plum" : "ring-line"
                )}
              >
                <span className="grid h-full w-full grid-cols-2 grid-rows-2">
                  {p.preview.map((c) => (
                    <span key={c} style={{ backgroundColor: c }} />
                  ))}
                </span>
              </button>
            ))}
            <span className="hidden whitespace-nowrap text-[0.6rem] tracking-[0.18em] text-mist uppercase md:block">
              {active?.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaletteSwitcher;
