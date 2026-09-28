# Made by Azka — portfolio site

A single-page, component-based portfolio for **@made.byazka** — Azka, a graphic designer from
**Faisalabad, Pakistan**, building her portfolio in public since **2026**.

React + Vite + Tailwind CSS v4, designed around editable tokens so the whole identity can be re-skinned
without touching layout.

```bash
npm install
npm run dev      # local development
npm run build    # production build → dist/index.html
```

**Deploying?** See [`DEPLOYMENT.md`](./DEPLOYMENT.md) — step-by-step for GitHub + Vercel (a `vercel.json`
and a GitHub Pages workflow are already included).

## Contact details used across the site

| Field     | Value                                            |
| --------- | ------------------------------------------------ |
| Instagram | [@made.byazka](https://www.instagram.com/made.byazka/) |
| Email     | aaazkafarhan0412@gmail.com                       |
| LinkedIn  | linkedin.com/in/made-byazka                      |
| Location  | Faisalabad, Pakistan                             |
| Currency  | PKR                                              |

All of it is defined once in `src/config/site.ts` → `brand` and reused by the header, hero, contact
section and footer.

## Where to edit what

| I want to change…                 | File                                            | Notes                                                                |
| --------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------- |
| **All text, links, prices (PKR)** | `src/config/site.ts`                            | Brand, nav, hero, about, skills, projects, showcase, process, services |
| **Instagram handle / email**      | `src/config/site.ts` → `brand`                  | Updates every occurrence automatically                                |
| **Connect a real Instagram post** | `src/config/site.ts` → `showcase[].link`        | Paste the post URL (⋯ menu → Copy link); the tile then opens that post |
| **Logo**                          | `src/components/Logo.tsx`                       | Or pass `imageSrc="/logo.png"` to use your own artwork at the same size |
| **Colours**                       | `src/index.css` → `@theme`                      | Live presets: `src/config/palettes.ts` (floating swatch button)        |
| **Fonts**                         | `index.html` + `src/index.css`                  | Display: Fraunces · Body: Jost                                        |
| **Any image**                     | `src/config/site.ts`                            | Every image renders inside `<RevealImage />`, so ratio, crop, hover and alignment stay identical when you swap the file |
| **Projects / case studies**       | `src/config/site.ts` → `projects`               | Duplicating an object adds a card, a case-study modal entry and ←/→ navigation |
| **Section order**                 | `src/App.tsx`                                   | Reorder or delete sections freely                                     |

## Sections

1. Hero — masked line-reveal headline, Ken Burns arch portrait, floating cards, rotating seal, honest quick facts
2. Skill marquee
3. About — sticky collage column + notes from my desk
4. Skills — six disciplines and seven tools, rated honestly with meters that grow on scroll
5. Featured work — four concept projects (2026) with case-study modals
6. Instagram showcase — 16 filterable posts, each linking straight to Instagram, plus a quick-preview lightbox
7. Process — five steps on a self-drawing timeline
8. Services & investment — six offers in PKR with an accordion and cursor-following previews
9. Contact — email copy button, Instagram + LinkedIn, and a brief form that opens the visitor's email app
10. Footer — wordmark ticker, quick links, back to top

## Interaction & accessibility notes

- Scroll reveals, line-mask headlines, Ken Burns image, self-drawing timeline, cursor-following service
  previews, filter pop-in, two marquees and a live palette switcher.
- Every animation is disabled under `prefers-reduced-motion: reduce`.
- Skip link, focus-visible rings, `aria-expanded` accordions, `role="dialog"` modals with Escape / ← →
  support, labelled form fields with inline validation, and scroll lock while a dialog is open.
- The contact form needs **no backend**: it validates, then opens a pre-filled email to you.
