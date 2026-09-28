import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { Modal } from "@/components/Modal";
import { RevealImage } from "@/components/RevealImage";
import type { Project } from "@/config/site";

/* ============================================================================
   CASE STUDY MODAL — opened by the "View project" button on each work card.
   ========================================================================== */

type CaseStudyModalProps = {
  project: Project | null;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function CaseStudyModal({ project, index, total, onClose, onPrev, onNext }: CaseStudyModalProps) {
  return (
    <Modal
      open={Boolean(project)}
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
      counter={project ? `${project.index} — ${project.title}` : ""}
      label={project ? `${project.title} case study` : "Case study"}
    >
      {project && (
        <div className="px-5 pb-9 sm:px-7">
          {/* hero image of the case */}
          <RevealImage
            key={project.id}
            src={project.image}
            alt={project.alt}
            ratio="16 / 9"
            shape="rounded"
            eager
            zoomOnHover={false}
            className="mt-6 ring-1 ring-line"
          />

          <div className="mt-8 grid gap-9 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-rose">
                {project.category} · {project.year}
              </p>
              <h3 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] leading-tight font-light text-plum">
                {project.title}
              </h3>
              <p className="mt-4 max-w-xl text-[1rem] leading-[1.8] font-light text-mist">{project.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.role.map((r) => (
                  <span
                    key={r}
                    className="rounded-full bg-petal px-3.5 py-1.5 text-[0.66rem] tracking-[0.16em] text-plum uppercase ring-1 ring-blush/60"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="eyebrow text-mauve">Deliverables</p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {project.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-[0.92rem] font-light text-ink/80">
                      <Icon name="check" size={14} className="mt-1 shrink-0 text-rose" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[0.62rem] tracking-[0.18em] text-mist/70 uppercase">
                  {project.kind} · {project.year}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#contact" icon="arrowUpRight" onClick={onClose}>
                  Brief me something like this
                </Button>
                <Button href={project.link} variant="outline" icon="instagram">
                  Open the post on Instagram
                </Button>
              </div>
            </div>

            {/* supporting gallery */}
            <div className="lg:col-span-5">
              <p className="eyebrow flex items-center gap-2 text-mauve">
                <Icon name="crop" size={14} /> Project frames
              </p>
              <div className="mt-4 space-y-4">
                {project.gallery.map((g, i) => (
                  <RevealImage
                    key={`${project.id}-g${i}`}
                    src={g.src}
                    alt={g.alt}
                    ratio={g.ratio}
                    shape={i % 2 === 0 ? "rounded" : "arch"}
                    className="ring-1 ring-line shadow-soft transition-transform duration-500 hover:-translate-y-1"
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-[0.66rem] tracking-[0.24em] text-mist/70 uppercase">
            {index + 1} of {total} · use ← → to browse
          </p>
        </div>
      )}
    </Modal>
  );
}

export default CaseStudyModal;
