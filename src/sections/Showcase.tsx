import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { InstagramPill } from "@/components/InstagramPill";
import { Modal } from "@/components/Modal";
import { RevealImage } from "@/components/RevealImage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { brand, showcase, showcaseCategories } from "@/config/site";
import { cn } from "@/utils/cn";

/* ============================================================================
   05 — INSTAGRAM SHOWCASE
   Every tile links straight to its post on Instagram (opens in a new tab).
   ✏️ To connect a real post: src/config/site.ts → `showcase` → paste the post
      URL into `link` and replace `image` with that post's artwork.
   ========================================================================== */

export function Showcase() {
  const [filter, setFilter] = useState("All");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? showcase : showcase.filter((s) => s.category === filter)),
    [filter]
  );

  const activeIndex = filtered.findIndex((f) => f.id === activeId);
  const active = activeIndex >= 0 ? filtered[activeIndex] : null;

  const step = (dir: number) => {
    if (!filtered.length) return;
    const nextIdx = (activeIndex + dir + filtered.length) % filtered.length;
    setActiveId(filtered[nextIdx]?.id ?? null);
  };

  const countFor = (cat: string) =>
    cat === "All" ? showcase.length : showcase.filter((s) => s.category === cat).length;

  return (
    <section id="showcase" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(249,234,231,0.95),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow={`From Instagram · ${brand.handle}`}
          index="05"
          title={["My design feed,", "post by post."]}
          lead="Everything below is posted on Instagram — tap any piece and it opens there directly. Use the filters to browse by craft, or the ⊕ button for a quick preview here."
          action={<InstagramPill size="md" />}
        />

        {/* ---- filters ---- */}
        <Reveal delay={80} className="mt-10">
          <div
            role="tablist"
            aria-label="Filter Instagram posts by category"
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {showcaseCategories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => {
                    setFilter(cat);
                    setActiveId(null);
                  }}
                  className={cn(
                    "group relative shrink-0 rounded-full px-4 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "bg-plum text-cream shadow-soft"
                      : "bg-paper text-mist ring-1 ring-line hover:-translate-y-0.5 hover:text-plum hover:ring-rose/50"
                  )}
                >
                  {cat}
                  <span className={cn("ml-2 text-[0.6rem]", isActive ? "text-blush/70" : "text-mist/50")}>
                    {countFor(cat)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ---- masonry grid ---- */}
        <div className="mt-8 gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3 xl:columns-4">
          {filtered.map((item, i) => {
            const isArch = item.ratio.replace(/\s/g, "") === "3/4";
            return (
              <div
                key={`${filter}-${item.id}`}
                className="group pop-in relative mb-4 break-inside-avoid"
                style={{ animationDelay: `${Math.min(i * 45, 400)}ms` }}
              >
                {/* primary action → opens the post on Instagram */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} — open this post on Instagram`}
                  className="block"
                >
                  <RevealImage
                    src={item.image}
                    alt={item.alt}
                    ratio={item.ratio}
                    shape={isArch ? "arch" : "rounded"}
                    className="ring-1 ring-line shadow-soft transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:shadow-lift group-hover:ring-rose/40"
                    overlay={
                      <span className="absolute inset-0 z-10 flex flex-col justify-end gap-1 bg-[linear-gradient(to_top,rgba(36,28,36,0.85),rgba(36,28,36,0.12)_52%,transparent)] p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <span className="eyebrow flex items-center gap-2 translate-y-2 text-blush transition-transform duration-500 group-hover:translate-y-0">
                          <Icon name="instagram" size={13} />
                          {item.category}
                        </span>
                        <span className="translate-y-2 font-display text-[1.1rem] leading-snug text-cream transition-transform delay-75 duration-500 group-hover:translate-y-0">
                          {item.title}
                        </span>
                        <span className="mt-1 translate-y-2 text-[0.62rem] tracking-[0.2em] text-rose uppercase transition-transform delay-100 duration-500 group-hover:translate-y-0">
                          Open on Instagram ↗
                        </span>
                      </span>
                    }
                  />
                </a>

                {/* secondary action → quick preview without leaving the site */}
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  aria-label={`Quick preview: ${item.title}`}
                  className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-cream/95 text-plum opacity-100 shadow-soft ring-1 ring-line transition-all duration-500 hover:scale-110 hover:bg-plum hover:text-cream lg:opacity-0 lg:group-hover:opacity-100"
                >
                  <Icon name="plus" size={16} />
                </button>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-[0.68rem] tracking-[0.18em] text-mist uppercase">
            Showing {filtered.length} of {showcase.length} posts · {filter}
          </p>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[0.68rem] tracking-[0.14em] text-mist uppercase transition-colors hover:text-plum"
          >
            <Icon
              name="instagram"
              size={14}
              className="text-rose transition-transform duration-500 group-hover:-rotate-6"
            />
            Follow {brand.handle} for new work
            <Icon
              name="arrowUpRight"
              size={13}
              className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>
      </div>

      {/* ---- lightbox preview ---- */}
      <Modal
        open={Boolean(active)}
        onClose={() => setActiveId(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
        counter={active ? `${active.category} — ${brand.handle}` : ""}
        label={active ? active.title : "Instagram post preview"}
        className="max-w-4xl"
      >
        {active && (
          <div className="p-5 sm:p-7">
            <RevealImage
              key={active.id}
              src={active.image}
              alt={active.alt}
              ratio="16 / 10"
              shape="rounded"
              eager
              zoomOnHover={false}
              imgClassName="object-contain"
              className="mx-auto w-full bg-petal ring-1 ring-blush"
            />
            <div className="mt-6 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="eyebrow text-rose">{active.category}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight font-light text-plum">
                  {active.title}
                </h3>
                <p className="mt-1.5 text-[0.9rem] font-light text-mist">{active.note}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-[0.66rem] tracking-[0.2em] text-mist/70 uppercase">
                  {activeIndex + 1} / {filtered.length}
                </p>
                <Button href={active.link} size="sm" icon="arrowUpRight">
                  Open on Instagram
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default Showcase;
