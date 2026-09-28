import { Ambient } from "@/components/Ambient";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { disciplines, tools } from "@/config/site";
import { useInView } from "@/hooks";
import { cn } from "@/utils/cn";

/* ============================================================================
   03 — SKILLS / EXPERTISE
   Left: disciplines with animated meters · Right: toolkit panel on plum.
   ✏️ Edit `disciplines` and `tools` in src/config/site.ts
   ========================================================================== */

export function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section id="skills" className="relative overflow-hidden bg-shell py-24 lg:py-32">
      <Ambient grid={false} arch={false} petals={2} className="opacity-60" />

      <div ref={ref} className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="My skills"
          index="03"
          title={["Skills I'm building,", "rated honestly."]}
          lead="I'm a beginner, so these bars show where I actually am today — strongest in social media and graphic design, still learning UI/UX, print and motion. They'll move up as I practise, and I update them as I grow."
          action={
            <div className="hidden items-center gap-4 rounded-full bg-paper px-5 py-3 ring-1 ring-line shadow-soft lg:flex">
              <Icon name="palette" size={18} className="text-rose" />
              <span className="text-[0.68rem] tracking-[0.18em] text-mist uppercase">
                {disciplines.length} disciplines · {tools.length} tools
              </span>
            </div>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ---------------- disciplines ---------------- */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {disciplines.map((d, i) => (
                <li key={d.name}>
                  <Reveal
                    delay={i * 70}
                    className="group relative flex items-center gap-4 py-6 transition-[padding,background-color] duration-500 hover:bg-paper/70 sm:gap-6 sm:px-4"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-paper text-plum ring-1 ring-line transition-all duration-500 group-hover:-rotate-6 group-hover:bg-plum group-hover:text-blush group-hover:ring-plum">
                      <Icon name={d.icon} size={20} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="font-display text-[1.35rem] leading-tight font-normal text-plum">
                          {d.name}
                        </h3>
                        <span className="font-body text-[0.72rem] tracking-[0.16em] text-mist tabular-nums">
                          {d.level}%
                        </span>
                      </div>

                      {/* meter */}
                      <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-line">
                        <span
                          className="block h-full origin-left rounded-full bg-[linear-gradient(90deg,#EFD5D1,#CF9D97,#A17E9B)] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{
                            transform: `scaleX(${inView ? d.level / 100 : 0})`,
                            transitionDelay: `${220 + i * 110}ms`,
                          }}
                        />
                      </div>

                      <p className="mt-2.5 text-[0.9rem] leading-relaxed font-light text-mist">{d.blurb}</p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="hidden text-[0.7rem] tracking-[0.2em] text-rose/70 sm:block"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- toolkit ---------------- */}
          <div className="lg:col-span-5">
            <Reveal variant="left" delay={120} className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-plum p-7 text-cream shadow-lift sm:p-9">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(207,157,151,0.5),transparent_65%)] blur-xl"
                />
                <div className="relative">
                  <p className="eyebrow text-rose">Toolkit</p>
                  <h3 className="mt-3 font-display text-[1.9rem] leading-tight font-light">
                    Tools I'm learning
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed font-light text-blush/75">
                    Canva is where I'm fastest today, Illustrator and Photoshop are getting comfortable,
                    and Figma, InDesign and After Effects are my next steps. Your files still arrive
                    layered, named and exported in every format you need.
                  </p>

                  <ul className="mt-8 space-y-5">
                    {tools.map((t, i) => (
                      <li key={t.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-[0.92rem] font-normal tracking-wide">{t.name}</span>
                          <span className="text-[0.68rem] tracking-[0.14em] text-blush/60 tabular-nums">
                            {t.level}
                          </span>
                        </div>
                        <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-cream/15">
                          <span
                            className="block h-full origin-left rounded-full bg-[linear-gradient(90deg,#EFD5D1,#CF9D97)] transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                            style={{
                              transform: `scaleX(${inView ? t.level / 100 : 0})`,
                              transitionDelay: `${320 + i * 90}ms`,
                            }}
                          />
                        </div>
                        <p className="mt-1.5 text-[0.76rem] font-light text-blush/55">{t.note}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* small capability chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Logo design", "Instagram posts", "Carousels", "Posters & flyers", "Colour palettes", "Mockups", "Story templates"].map(
                  (chip, i) => (
                    <Reveal
                      key={chip}
                      delay={i * 60}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-[0.66rem] tracking-[0.14em] uppercase ring-1 transition-colors duration-500",
                        "bg-paper text-mist ring-line hover:bg-blush hover:text-plum hover:ring-blush"
                      )}
                    >
                      {chip}
                    </Reveal>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
