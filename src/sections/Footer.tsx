import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { InstagramPill } from "@/components/InstagramPill";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { brand, footerNote, nav, services, socials } from "@/config/site";

/* ============================================================================
   10 — FOOTER
   ========================================================================== */

export function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      {/* ---- closing CTA ---- */}
      <div className="relative border-b border-cream/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(161,126,155,0.35),transparent_66%)] blur-2xl"
        />
        <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-5 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-10 lg:py-20">
          <Reveal>
            <p className="eyebrow text-rose">Next step</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.04] font-light">
              Have a brand that deserves to feel like <span className="text-blush italic">you</span>?
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap items-center gap-3">
            <Button
              href={`mailto:${brand.email}`}
              variant="light"
              size="md"
              icon="mail"
              className="max-w-full text-center"
            >
              {brand.email}
            </Button>
            <InstagramPill tone="light" size="md" />
          </Reveal>
        </div>
      </div>

      {/* ---- link columns ---- */}
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <Logo variant="light" size="lg" />
          <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed font-light text-blush/60">
            {brand.role} from {brand.location} — soft, feminine logos, Instagram designs, posters and
            packaging. Learning something new every day since {brand.startedIn}.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} — ${s.handle}`}
                title={s.handle}
                className="grid h-10 w-10 place-items-center rounded-full bg-cream/8 text-blush ring-1 ring-cream/12 transition-all duration-500 hover:-translate-y-1 hover:bg-rose hover:text-ink"
              >
                <Icon name={s.icon} size={17} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <p className="eyebrow text-blush/45">Navigate</p>
          <ul className="mt-5 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="link-underline text-[0.95rem] font-light text-cream/80 transition-colors hover:text-blush"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="eyebrow text-blush/45">Services</p>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.title}>
                <a
                  href="#services"
                  className="link-underline text-[0.95rem] font-light text-cream/80 transition-colors hover:text-blush"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow text-blush/45">Connect</p>
          <ul className="mt-5 space-y-3.5 text-[0.95rem] font-light text-cream/80">
            <li className="flex items-start gap-3">
              <Icon name="pin" size={16} className="mt-0.5 shrink-0 text-rose" />
              <span>
                {brand.location}
                <span className="block text-blush/50">{brand.workingWith}</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-rose" />
              <a href={`mailto:${brand.email}`} className="link-underline">
                {brand.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="instagram" size={16} className="mt-0.5 shrink-0 text-rose" />
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                {brand.handle}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="clock" size={16} className="mt-0.5 shrink-0 text-rose" />
              <span>{brand.responseTime}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ---- giant wordmark ticker ---- */}
      <div
        className="relative overflow-hidden border-t border-cream/10 py-8 select-none"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee-slow items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center">
              <span
                className="px-8 font-display text-[clamp(2.6rem,8vw,6.5rem)] leading-none font-light whitespace-nowrap"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(239,213,209,0.32)",
                }}
              >
                made.byazka
              </span>
              <Icon name="sparkle" size={22} className="shrink-0 text-rose/70" />
            </span>
          ))}
        </div>
      </div>

      {/* ---- bottom bar ---- */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-5 py-6 text-[0.74rem] font-light text-blush/55 sm:flex-row sm:items-center sm:px-6 lg:px-10">
          <p>{brand.copyright}</p>
          <p className="max-w-md">{footerNote}</p>
          <button
            type="button"
            onClick={toTop}
            className="group inline-flex items-center gap-2 tracking-[0.18em] text-blush/70 uppercase transition-colors hover:text-blush"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full bg-cream/8 ring-1 ring-cream/15 transition-transform duration-500 group-hover:-translate-y-1">
              <Icon name="arrowDown" size={14} className="rotate-180" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
