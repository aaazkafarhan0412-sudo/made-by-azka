import { useState } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { RevealImage } from "@/components/RevealImage";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/config/site";
import { usePointerPosition } from "@/hooks";
import { cn } from "@/utils/cn";

/* ============================================================================
   07 — SERVICES & INVESTMENT
   Accordion list + a cursor-following preview image on desktop.
   ✏️ Edit `services` in src/config/site.ts
   ========================================================================== */

export function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [previewIdx, setPreviewIdx] = useState(0);
  const [previewOn, setPreviewOn] = useState(false);
  const { ref, pos, onPointerMove, onPointerLeave } = usePointerPosition<HTMLDivElement>();
  const preview = services[previewIdx];

  return (
    <section id="services" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Services & investment"
          index="07"
          title={["Ways we can", "work together."]}
          lead="Six focused offers, each with a clear scope, timeline and starting investment. Everything includes source files, organised layers and a handover call."
          action={
            <div className="rounded-2xl bg-petal px-5 py-4 ring-1 ring-blush">
              <p className="eyebrow text-mauve">Design partner</p>
              <p className="mt-1.5 font-display text-[1.05rem] text-plum italic">
                Monthly design support from PKR 15,000
              </p>
            </div>
          }
        />

        <div
          ref={ref}
          onPointerMove={onPointerMove}
          onPointerLeave={() => {
            onPointerLeave();
            setPreviewOn(false);
          }}
          className="relative mt-12"
        >
          {/* cursor-following preview (desktop only) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
            style={{ left: `${pos.x * 100}%`, top: `${pos.y * 100}%`, width: 0, height: 0 }}
          >
            <div
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                previewOn && pos.active ? "scale-100 opacity-100" : "scale-90 opacity-0"
              )}
              style={{ transform: `translate(-50%,-50%) rotate(${previewOn ? -4 : 0}deg)` }}
            >
              {preview && (
                <img
                  src={preview.image}
                  alt=""
                  className="h-52 w-40 rounded-2xl object-cover shadow-lift ring-4 ring-cream"
                />
              )}
            </div>
          </div>

          <ul className="relative border-t border-line">
            {services.map((s, i) => {
              const isOpen = openIdx === i;
              return (
                <li
                  key={s.title}
                  className="border-b border-line"
                  onPointerEnter={() => {
                    setPreviewIdx(i);
                    setPreviewOn(true);
                  }}
                >
                  <Reveal delay={i * 55}>
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-4 py-6 text-left transition-colors duration-500 sm:gap-6"
                    >
                      <span
                        className={cn(
                          "font-display text-[0.85rem] tracking-[0.1em] transition-colors duration-500",
                          isOpen ? "text-rose" : "text-mist/50 group-hover:text-rose"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            "block font-display text-[clamp(1.45rem,3.1vw,2.15rem)] leading-tight font-light transition-all duration-500",
                            isOpen ? "text-plum" : "text-plum/85 group-hover:translate-x-1.5 group-hover:text-plum"
                          )}
                        >
                          {s.title}
                        </span>
                        <span className="mt-2 block max-w-xl text-[0.94rem] leading-relaxed font-light text-mist">
                          {s.blurb}
                        </span>
                      </span>

                      <span className="hidden shrink-0 text-right sm:block">
                        <span className="block font-display text-[1.05rem] text-plum">{s.price}</span>
                        <span className="mt-1 block text-[0.62rem] tracking-[0.16em] text-mist uppercase">
                          {s.timeline}
                        </span>
                      </span>

                      <span
                        className={cn(
                          "grid h-10 w-10 shrink-0 place-items-center rounded-full ring-1 transition-all duration-500",
                          isOpen
                            ? "rotate-180 bg-plum text-cream ring-plum"
                            : "bg-paper text-plum ring-line group-hover:ring-rose"
                        )}
                      >
                        <Icon name={isOpen ? "minus" : "plus"} size={16} />
                      </span>
                    </button>

                    {/* expanding panel */}
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="grid gap-6 pb-8 sm:grid-cols-2 lg:grid-cols-12 lg:pl-12">
                          <div className="lg:col-span-7">
                            <p className="eyebrow text-mauve">What's included</p>
                            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                              {s.includes.map((inc) => (
                                <li key={inc} className="flex items-start gap-2.5 text-[0.92rem] font-light text-ink/80">
                                  <Icon name="check" size={14} className="mt-1 shrink-0 text-rose" />
                                  {inc}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-6 flex flex-wrap items-center gap-4">
                              <Button href="#contact" size="sm" icon="arrowUpRight">
                                Enquire about {s.title}
                              </Button>
                              <span className="text-[0.66rem] tracking-[0.16em] text-mist uppercase sm:hidden">
                                {s.price} · {s.timeline}
                              </span>
                            </div>
                          </div>
                          <div className="lg:col-span-5">
                            <RevealImage
                              src={s.image}
                              alt={s.alt}
                              ratio="4 / 3"
                              shape="rounded"
                              className="ring-1 ring-line shadow-soft"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        <Reveal delay={120} className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="max-w-lg text-[0.94rem] leading-relaxed font-light text-mist">
            Not sure which offer fits? Send a rough idea — I'll reply with a recommended scope, timeline
            and a fixed quote. No pressure, no jargon.
          </p>
          <Button href="#contact" variant="outline" icon="mail" className="shrink-0">
            Ask about a custom scope
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export default Services;
