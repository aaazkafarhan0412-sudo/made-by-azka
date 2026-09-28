import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { InstagramPill } from "@/components/InstagramPill";
import { Logo } from "@/components/Logo";
import { brand, nav } from "@/config/site";
import { useActiveSection, useScrollLock, useScrollProgress } from "@/hooks";
import { cn } from "@/utils/cn";

/* ============================================================================
   HEADER — floating pill navigation, scroll progress hairline, mobile drawer.
   ✏️ Links live in src/config/site.ts → `nav`.
   ========================================================================== */

export function Nav() {
  const { progress, scrolled } = useScrollProgress();
  const ids = useMemo(() => [...new Set([...nav.map((n) => n.href.slice(1)), "contact"])], []);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6 lg:px-10",
            scrolled && "lg:px-8"
          )}
        >
          {/* ---- logo ---- */}
          <a
            href="#top"
            aria-label={`${brand.brandName} — back to top`}
            className={cn(
              "rounded-full px-3 py-2 transition-all duration-500",
              scrolled ? "bg-cream/80 ring-1 ring-line backdrop-blur-md" : "bg-transparent"
            )}
          >
            <Logo size={scrolled ? "sm" : "md"} />
          </a>

          {/* ---- desktop nav pill ---- */}
          <nav
            aria-label="Primary"
            className={cn(
              "hidden items-center gap-0.5 rounded-full px-1.5 py-1.5 transition-all duration-500 lg:flex",
              scrolled ? "bg-cream/80 ring-1 ring-line backdrop-blur-md" : "bg-paper/50 ring-1 ring-line/70 backdrop-blur-sm"
            )}
          >
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300",
                    isActive ? "text-cream" : "text-mist hover:text-plum"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-0 rounded-full bg-plum transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive ? "scale-100 opacity-100" : "scale-75 opacity-0"
                    )}
                  />
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* ---- right cluster ---- */}
          <div className="flex items-center gap-2 sm:gap-3">
            <InstagramPill size="sm" className="hidden xl:inline-flex" />
            <Button href="#contact" size="sm" icon="arrowUpRight" className="hidden sm:inline-flex">
              Let's talk
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-full bg-plum text-cream transition-transform duration-300 hover:scale-105 active:scale-95 lg:hidden"
            >
              <Icon name="menu" size={19} />
            </button>
          </div>
        </div>

        {/* ---- scroll progress ---- */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-transparent">
          <div
            className="h-full origin-left bg-[linear-gradient(90deg,#CF9D97,#A17E9B,#4E2B45)] transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={cn(
          "fixed inset-0 z-[70] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/40 backdrop-blur-[2px] transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          role="dialog"
          aria-modal={open}
          aria-label="Menu"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[min(24rem,88vw)] flex-col overflow-y-auto bg-plum px-7 py-7 text-cream transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <Logo variant="light" size="sm" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-12 flex flex-col">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-b border-cream/12 py-4 transition-all duration-500"
                style={{
                  transitionDelay: `${open ? 120 + i * 55 : 0}ms`,
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateX(24px)",
                }}
              >
                <span className="font-body text-[0.62rem] tracking-[0.3em] text-rose">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[1.9rem] font-light leading-none transition-colors duration-300 group-hover:text-blush">
                  {item.label}
                </span>
                <Icon
                  name="arrowUpRight"
                  size={17}
                  className="ml-auto self-center text-blush/50 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blush"
                />
              </a>
            ))}
          </nav>

          <div
            className="mt-auto space-y-5 pt-10 transition-all duration-700"
            style={{ transitionDelay: `${open ? 460 : 0}ms`, opacity: open ? 1 : 0 }}
          >
            <InstagramPill tone="light" size="md" className="w-full justify-between" />
            <a
              href={`mailto:${brand.email}`}
              className="link-underline block font-display text-lg text-blush"
            >
              {brand.email}
            </a>
            <p className="text-sm font-light text-blush/60">
              {brand.location} · {brand.workingWith}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
