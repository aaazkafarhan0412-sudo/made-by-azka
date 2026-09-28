import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/config/site";
import { useInView } from "@/hooks";

/* ============================================================================
   06 — CREATIVE PROCESS (dark plum timeline that draws itself on scroll)
   ✏️ Edit `processSteps` in src/config/site.ts
   ========================================================================== */

export function Process() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="process" className="relative overflow-hidden bg-plum py-24 text-cream lg:py-32">
      {/* ambient washes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(207,157,151,0.32),transparent_66%)] blur-2xl" />
        <div className="absolute -right-32 bottom-0 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(205,185,216,0.22),transparent_66%)] blur-2xl" />
        <svg className="absolute -bottom-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 text-cream/8" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 8c-40 0-66 27-66 66v110a8 8 0 0 0 8 8h116a8 8 0 0 0 8-8V74c0-39-26-66-66-66z"
            stroke="currentColor"
            strokeWidth="0.7"
          />
        </svg>
      </div>

      <div ref={ref} className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <SectionHeading
          tone="light"
          eyebrow="Creative process"
          index="06"
          title={["Five calm steps from", "brief to brand."]}
          lead="No mystery, no chaos. You always know what's happening, what's next and when it lands — usually about two weeks, even for small projects."
          action={
            <div className="hidden items-center gap-3 rounded-full bg-cream/10 px-5 py-3 ring-1 ring-cream/20 lg:flex">
              <Icon name="clock" size={16} className="text-blush" />
              <span className="text-[0.66rem] tracking-[0.18em] text-blush/85 uppercase">
                Usually 1–2 weeks per project
              </span>
            </div>
          }
        />

        {/* ---------------- timeline ---------------- */}
        <div className="relative mt-16">
          {/* desktop rail */}
          <div aria-hidden="true" className="absolute inset-x-0 top-[15px] hidden h-px bg-cream/15 lg:block">
            <span
              className="block h-full origin-left bg-[linear-gradient(90deg,#EFD5D1,#CF9D97,#CDB9D8)] transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `scaleX(${inView ? 1 : 0})` }}
            />
          </div>
          {/* mobile rail */}
          <div aria-hidden="true" className="absolute bottom-4 left-[15px] top-4 w-px bg-cream/15 lg:hidden">
            <span
              className="block h-full origin-top bg-[linear-gradient(180deg,#EFD5D1,#CF9D97,#CDB9D8)] transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `scaleY(${inView ? 1 : 0})` }}
            />
          </div>

          <ol className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((s, i) => (
              <li key={s.step} className="relative pl-12 lg:pl-0">
                <Reveal delay={i * 110} className="group h-full">
                  {/* node */}
                  <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full bg-plum ring-1 ring-cream/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-rose group-hover:ring-rose lg:relative lg:mb-6">
                    <span className="h-2.5 w-2.5 rounded-full bg-blush transition-colors duration-500 group-hover:bg-plum" />
                  </span>

                  <div className="lg:pr-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="font-display text-[2.4rem] leading-none font-light text-cream/25 transition-colors duration-500 group-hover:text-rose">
                        {s.step}
                      </span>
                      <span className="rounded-full bg-cream/10 px-3 py-1 text-[0.58rem] tracking-[0.18em] text-blush/80 uppercase ring-1 ring-cream/15">
                        {s.duration}
                      </span>
                    </div>

                    <h3 className="mt-3 flex items-center gap-2.5 font-display text-[1.5rem] leading-tight font-light text-cream">
                      <Icon
                        name={s.icon}
                        size={19}
                        className="text-rose transition-transform duration-500 group-hover:-rotate-12"
                      />
                      {s.title}
                    </h3>

                    <p className="mt-3 text-[0.94rem] leading-relaxed font-light text-blush/70">{s.text}</p>

                    <ul className="mt-5 space-y-2 border-t border-cream/12 pt-4">
                      {s.outputs.map((o) => (
                        <li key={o} className="flex items-center gap-2 text-[0.78rem] text-blush/60">
                          <Icon name="check" size={12} className="shrink-0 text-rose" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={140} className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[1.6rem] bg-cream/8 p-7 ring-1 ring-cream/15 backdrop-blur-sm sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="eyebrow text-rose">Day one starts with a conversation</p>
            <p className="mt-3 max-w-xl font-display text-[1.5rem] leading-snug font-light text-cream sm:text-[1.8rem]">
              Tell me about your idea — I'll reply within 24 hours with a simple plan and a quote in PKR.
            </p>
          </div>
          <Button href="#contact" variant="light" size="lg" icon="arrowUpRight" className="shrink-0">
            Start the conversation
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export default Process;
