import type { ReactNode } from "react";
import { Ambient } from "@/components/Ambient";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { InstagramPill } from "@/components/InstagramPill";
import { RevealImage } from "@/components/RevealImage";
import { LineMaskTitle, Reveal } from "@/components/Reveal";
import { StampSeal } from "@/components/StampSeal";
import { brand, facts, hero } from "@/config/site";
import { cn } from "@/utils/cn";

/* ============================================================================
   01 — HERO
   ========================================================================== */

/** Wraps `hero.accentWord` in an italic rose treatment, wherever it appears. */
function accentLine(line: string): ReactNode {
  const word = hero.accentWord;
  if (!word || !line.includes(word)) return line;
  const [before, after] = line.split(word);
  return (
    <>
      {before}
      <em className="font-normal text-rose italic">{word}</em>
      {after}
    </>
  );
}

/** Honest quick facts — no invented numbers, just where I am in my journey. */
function Fact({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="group border-l border-line pl-4 transition-colors duration-500 hover:border-rose first:border-l-0 first:pl-0"
    >
      <span className="block text-[0.6rem] tracking-[0.22em] text-mist uppercase">{label}</span>
      <span className="mt-2 block font-display text-[1.12rem] leading-snug font-light text-plum italic transition-transform duration-500 group-hover:translate-x-0.5">
        {value}
      </span>
    </Reveal>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40">
      <Ambient petals={5} />

      {/* vertical credit — editorial detail */}
      <div className="pointer-events-none absolute top-1/2 left-3 hidden -translate-y-1/2 xl:block">
        <span className="writing-vertical text-[0.6rem] tracking-[0.42em] text-mist/60 uppercase">
          {brand.handle} — {brand.role}
        </span>
      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        {/* ---------------- LEFT: type ---------------- */}
        <div className="lg:col-span-7 xl:col-span-6">
          <Reveal className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 ring-1 ring-line shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rose" />
              </span>
              <span className="text-[0.66rem] tracking-[0.2em] text-plum uppercase">{brand.availability}</span>
            </span>
            <span className="text-[0.66rem] tracking-[0.24em] text-mist uppercase">{hero.eyebrow}</span>
          </Reveal>

          <LineMaskTitle
            as="h1"
            lines={hero.titleLines.map(accentLine)}
            stagger={130}
            className="mt-7 font-display text-[clamp(2.7rem,7.6vw,5.6rem)] leading-[0.98] font-light text-plum"
          />

          <Reveal delay={420} className="mt-7 max-w-xl">
            <p className="text-[1.06rem] leading-[1.8] font-light text-mist">{hero.lead}</p>
          </Reveal>

          <Reveal delay={520} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={hero.primaryCta.href} size="lg" icon="arrowDown">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline" size="lg" icon="arrowUpRight">
              {hero.secondaryCta.label}
            </Button>
          </Reveal>

          <Reveal delay={620} className="mt-6 flex flex-wrap items-center gap-4">
            <InstagramPill size="md" />
            <span className="hidden h-6 w-px bg-line sm:block" />
            <span className="text-[0.7rem] tracking-[0.18em] text-mist uppercase">
              {brand.location} · {brand.workingWith}
            </span>
          </Reveal>

          {/* quick facts */}
          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 sm:grid-cols-4">
            {facts.map((f, i) => (
              <Fact key={f.label} {...f} delay={700 + i * 90} />
            ))}
          </div>
        </div>

        {/* ---------------- RIGHT: image collage ---------------- */}
        <div className="relative lg:col-span-5 xl:col-span-6">
          <Reveal variant="scale" className="relative mx-auto max-w-[30rem] lg:max-w-none">
            {/* offset outline frame */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-5 -top-5 bottom-10 rounded-t-full border border-plum/12"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-8 -right-8 hidden w-px bg-[linear-gradient(180deg,transparent,rgba(78,43,69,0.25),transparent)] lg:block"
            />

            <RevealImage
              src={hero.image.src}
              alt={hero.image.alt}
              ratio={hero.image.ratio}
              shape="arch"
              kenBurns
              eager
              className="relative z-10 shadow-lift ring-1 ring-plum/10"
            />

            {/* floating note → links to the Instagram profile */}
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group/note absolute -top-2 -left-3 z-20 block w-[13.5rem] rounded-2xl bg-paper/95 p-4 shadow-lift ring-1 ring-line backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:ring-rose/50 sm:-left-8",
                "animate-float"
              )}
            >
              <p className="flex items-center gap-1.5 text-[0.6rem] tracking-[0.22em] text-mauve uppercase">
                <Icon name="instagram" size={12} className="text-rose" />
                {hero.notes.nowPlaying.label}
              </p>
              <p className="mt-1.5 font-display text-[0.98rem] leading-snug text-plum italic">
                {hero.notes.nowPlaying.value}
                <Icon
                  name="arrowUpRight"
                  size={13}
                  className="ml-1 inline text-rose opacity-0 transition-all duration-500 group-hover/note:translate-x-0.5 group-hover/note:-translate-y-0.5 group-hover/note:opacity-100"
                />
              </p>
            </a>

            {/* palette card */}
            <div className="absolute -right-2 bottom-16 z-20 animate-float-slow rounded-2xl bg-plum p-4 text-cream shadow-lift sm:-right-8">
              <p className="text-[0.58rem] tracking-[0.22em] text-blush/70 uppercase">
                {hero.notes.palette.label}
              </p>
              <div className="mt-2.5 flex gap-1.5">
                {hero.notes.palette.swatches.map((c: string) => (
                  <span
                    key={c}
                    title={c}
                    className="h-7 w-7 rounded-full ring-1 ring-cream/25 transition-transform duration-500 hover:-translate-y-1"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            {/* rotating seal */}
            <StampSeal
              text={hero.stampText}
              size={132}
              className="absolute -bottom-10 left-2 z-30 hidden sm:grid"
            />
          </Reveal>
        </div>
      </div>

      {/* scroll cue */}
      <Reveal delay={900} className="mx-auto mt-16 hidden max-w-[1400px] px-10 lg:block">
        <a
          href="#about"
          className="group inline-flex items-center gap-3 text-[0.62rem] tracking-[0.3em] text-mist uppercase transition-colors hover:text-plum"
        >
          <span className="relative block h-px w-16 overflow-hidden bg-line">
            <span className="absolute inset-y-0 left-0 w-1/2 bg-plum transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[200%]" />
          </span>
          Scroll to explore
          <Icon name="arrowDown" size={14} className="animate-float" />
        </a>
      </Reveal>
    </section>
  );
}

export default Hero;
