import { useState } from "react";
import { Button } from "@/components/Button";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { Icon } from "@/components/Icons";
import { RevealImage } from "@/components/RevealImage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { brand, projects, showcase, type Project } from "@/config/site";
import { cn } from "@/utils/cn";

/* ============================================================================
   04 — FEATURED WORK (alternating editorial rows + case-study modal)
   ✏️ Add / remove projects in src/config/site.ts → `projects`
   ========================================================================== */

function ProjectRow({
  project,
  i,
  onOpen,
}: {
  project: Project;
  i: number;
  onOpen: () => void;
}) {
  const flip = i % 2 === 1;
  const shape = project.ratio.replace(/\s/g, "") === "3/4" ? "arch" : "rounded";

  return (
    <article className="mt-20 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14 first:mt-16">
      {/* ---- image ---- */}
      <Reveal
        variant={flip ? "right" : "left"}
        className={cn("relative lg:col-span-7", flip && "lg:order-2")}
      >
        {/* oversized index behind the frame */}
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-10 font-display text-[7rem] leading-none font-light text-outline select-none sm:text-[9rem]",
            flip ? "-right-2" : "-left-2"
          )}
        >
          {project.index}
        </span>

        <button
          type="button"
          onClick={onOpen}
          aria-label={`Open case study: ${project.title}`}
          className="group block w-full cursor-pointer text-left"
        >
          <RevealImage
            src={project.image}
            alt={project.alt}
            ratio={project.ratio}
            shape={shape}
            className="shadow-lift ring-1 ring-plum/10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5"
            overlay={
              <span className="absolute inset-0 z-10 flex items-end justify-between gap-4 bg-[linear-gradient(to_top,rgba(36,28,36,0.78),rgba(36,28,36,0.05)_55%,transparent)] p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="translate-y-3 font-display text-lg text-cream italic transition-transform duration-500 group-hover:translate-y-0">
                  View case study
                </span>
                <span className="grid h-11 w-11 shrink-0 translate-y-3 place-items-center rounded-full bg-cream text-plum transition-transform duration-500 group-hover:translate-y-0">
                  <Icon name="arrowUpRight" size={18} />
                </span>
              </span>
            }
          />
        </button>

        {/* accent swatch */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute -bottom-3 hidden h-6 w-24 rounded-full ring-4 ring-cream lg:block",
            flip ? "left-8" : "right-8"
          )}
          style={{ backgroundColor: project.accent }}
        />
      </Reveal>

      {/* ---- copy ---- */}
      <div className={cn("lg:col-span-5", flip && "lg:order-1")}>
        <Reveal delay={80} className="flex items-center gap-4">
          <span className="font-display text-[0.95rem] tracking-[0.1em] text-rose italic">
            {project.index}
          </span>
          <span className="h-px w-8 bg-line" />
          <span className="eyebrow text-mist">{project.category}</span>
        </Reveal>

        <Reveal delay={130}>
          <h3 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.05] font-light text-plum">
            {project.title}
          </h3>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-4 text-[1rem] leading-[1.8] font-light text-mist">{project.description}</p>
        </Reveal>

        <Reveal delay={230} className="mt-6 flex flex-wrap gap-2">
          {project.role.map((r) => (
            <span
              key={r}
              className="rounded-full bg-petal px-3.5 py-1.5 text-[0.64rem] tracking-[0.16em] text-plum/85 uppercase ring-1 ring-blush/70 transition-colors duration-300 hover:bg-blush"
            >
              {r}
            </span>
          ))}
        </Reveal>

        <Reveal delay={280} className="mt-7 border-t border-line pt-5">
          <p className="eyebrow text-mauve">What's inside this project</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {project.deliverables.map((d) => (
              <li key={d} className="flex items-center gap-2 text-[0.88rem] font-light text-ink/80">
                <Icon name="check" size={13} className="shrink-0 text-rose" />
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[0.62rem] tracking-[0.18em] text-mist/70 uppercase">
            {project.kind} · {project.year}
          </p>
        </Reveal>

        <Reveal delay={330} className="mt-7 flex flex-wrap items-center gap-3">
          <Button onClick={onOpen} icon="arrowUpRight">
            View project
          </Button>
          <Button href="#contact" variant="ghost" icon="mail" className="eyebrow">
            Brief me
          </Button>
        </Reveal>
      </div>
    </article>
  );
}

export function FeaturedWork() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const project = openIndex !== null ? projects[openIndex] : null;

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? i : (i - 1 + projects.length) % projects.length));
  const next = () => setOpenIndex((i) => (i === null ? i : (i + 1) % projects.length));

  return (
    <section id="work" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(78,43,69,0.18),transparent)]"
      />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Featured work"
          index="04"
          title={["Practice projects,", "treated like real ones."]}
          lead="Self-initiated work from 2026 — concept identities, poster studies, packaging and my first UI attempt. Each one follows a real brief, a real process and a real handover."
          action={
            <Button href="#showcase" variant="outline" icon="arrowDown">
              All {showcase.length} pieces
            </Button>
          }
        />

        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} i={i} onOpen={() => setOpenIndex(i)} />
        ))}

        <Reveal delay={100} className="mt-24 flex flex-col items-center gap-4 text-center">
          <p className="max-w-md text-[0.95rem] leading-relaxed font-light text-mist">
            Much more lives on Instagram — practice projects, works in progress and something new
            almost every week.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="#showcase" variant="outline" icon="instagram">
              Browse the Instagram grid
            </Button>
            <Button href={brand.instagramUrl} icon="arrowUpRight">
              {brand.handle}
            </Button>
          </div>
        </Reveal>
      </div>

      <CaseStudyModal
        project={project}
        index={openIndex ?? 0}
        total={projects.length}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}

export default FeaturedWork;
