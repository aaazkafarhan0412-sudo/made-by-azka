import { Ambient } from "@/components/Ambient";
import { Icon } from "@/components/Icons";
import { InstagramPill } from "@/components/InstagramPill";
import { RevealImage } from "@/components/RevealImage";
import { LineMaskTitle, Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { about, brand } from "@/config/site";

/* ============================================================================
   02 — ABOUT ME  (sticky visual column + scrolling story)
   ========================================================================== */

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <Ambient grid={false} petals={2} className="opacity-70" />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        {/* ---------------- sticky collage ---------------- */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal variant="scale" className="relative">
              <RevealImage
                src={about.images.main.src}
                alt={about.images.main.alt}
                ratio={about.images.main.ratio}
                shape="arch"
                className="shadow-lift ring-1 ring-plum/10"
              />

              {/* small overlapping square */}
              <RevealImage
                src={about.images.small.src}
                alt={about.images.small.alt}
                ratio={about.images.small.ratio}
                shape="rounded"
                className="absolute -bottom-10 -right-4 w-32 ring-4 ring-cream shadow-lift sm:-right-8 sm:w-44 animate-float-slow"
              />

              {/* "since" seal */}
              <div className="absolute -left-3 top-8 grid h-24 w-24 place-items-center rounded-full bg-paper text-center shadow-lift ring-1 ring-line sm:-left-8 sm:h-28 sm:w-28">
                <div>
                  <p className="font-display text-2xl leading-none font-light text-plum">
                    {brand.startedIn}
                  </p>
                  <p className="mt-1 text-[0.52rem] tracking-[0.22em] text-mist uppercase">
                    my journey
                    <br />
                    began
                  </p>
                </div>
              </div>
            </Reveal>

            {/* quote card */}
            <Reveal delay={160} className="mt-16 rounded-[1.5rem] bg-petal p-6 ring-1 ring-blush/70">
              <Icon name="quote" size={22} className="text-rose" />
              <p className="mt-3 font-display text-[1.15rem] leading-relaxed font-light text-plum italic">
                {about.quote}
              </p>
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-blush pt-4">
                <div>
                  <p className="font-display text-xl leading-none text-plum italic">{about.signature}</p>
                  <p className="mt-1.5 text-[0.6rem] tracking-[0.2em] text-mist uppercase">{brand.role}</p>
                </div>
                <InstagramPill size="sm" showHandle={false} />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------------- story ---------------- */}
        <div className="lg:col-span-7 lg:pl-10">
          <SectionHeading
            eyebrow={about.eyebrow}
            index="02"
            title={about.title}
            titleClassName="text-[clamp(2.1rem,5vw,3.6rem)]"
          />

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 110}>
                <p
                  className={
                    i === 0
                      ? "text-[1.12rem] leading-[1.85] font-light text-ink/85"
                      : "text-[1rem] leading-[1.85] font-light text-mist"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          {/* focus areas */}
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.4rem] bg-line sm:grid-cols-2">
            {about.focuses.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 90}
                className="group bg-cream p-6 transition-colors duration-500 hover:bg-paper"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-petal text-plum ring-1 ring-blush transition-all duration-500 group-hover:scale-110 group-hover:bg-plum group-hover:text-blush">
                  <Icon name={f.icon} size={19} />
                </span>
                <LineMaskTitle
                  as="h3"
                  lines={[f.title]}
                  delay={i * 60}
                  className="mt-4 font-display text-[1.18rem] leading-snug font-normal text-plum"
                />
                <p className="mt-2 text-[0.92rem] leading-relaxed font-light text-mist">{f.text}</p>
              </Reveal>
            ))}
          </div>

          {/* notes from my desk */}
          <Reveal delay={120} className="mt-12">
            <p className="eyebrow flex items-center gap-3 text-mauve">
              <span className="h-px w-8 bg-rose/70" /> Notes from my desk
            </p>
            <dl className="mt-5 divide-y divide-line border-y border-line">
              {about.currently.map((c) => (
                <div key={c.label} className="group flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-[0.66rem] tracking-[0.2em] text-mist uppercase">{c.label}</dt>
                  <dd className="text-right font-display text-[1.02rem] font-light text-plum italic transition-transform duration-500 group-hover:-translate-x-1">
                    {c.value}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2">
              {about.credentials.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full bg-shell px-3.5 py-1.5 text-[0.66rem] tracking-[0.12em] text-plum/80 ring-1 ring-line"
                >
                  <Icon name="check" size={12} className="text-rose" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
