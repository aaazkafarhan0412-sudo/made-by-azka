/* ============================================================================
   MADE.BYAZKA — SITE CONTENT CONFIG  (Azka · Faisalabad, Pakistan · est. 2026)
   ----------------------------------------------------------------------------
   ✏️ THIS IS THE ONLY FILE YOU NEED TO EDIT FOR TEXT, LINKS AND IMAGES.
   • Swap an image → change the `src` / `image` value (keep the same ratio).
   • Swap a project → duplicate an object in `projects` / `showcase` and edit.
   • Swap a colour   → edit src/index.css (@theme block).
   • Swap the logo   → edit src/components/Logo.tsx.
   ========================================================================== */

import brandImg from "@/assets/desi.jpeg";
import illustrationImg from "@/assets/work-illustration.jpg";
import packagingImg from "@/assets/cutout.jpeg";
import posterImg from "@/assets/bwp.jpeg";
import socialImg from "@/assets/05.jpeg";
import uiuxImg from "@/assets/work-uiux.jpg";
import post1 from "@/assets/01.jpeg";
import post2 from "@/assets/02.jpeg";
import post3 from "@/assets/02.jpeg";
import post4 from "@/assets/03.jpeg";

/** Helper for stock photography. ✏️ Replace any `px(...)` call with your own file/URL. */
const px = (id: number, w = 1200, h = 1500) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;


/* -------------------------------------------------------------------------- */
/* BRAND + CONTACT DETAILS                                                     */
/* -------------------------------------------------------------------------- */
export const brand = {
  name: "Azka",
  brandName: "Made by Azka",
  role: "Graphic Designer",
  handle: "@made.byazka",
  username: "made.byazka",
  instagramUrl: "https://www.instagram.com/made.byazka/",
  linkedinUrl: "https://www.linkedin.com/in/made-byazka/",
  email: "aaazkafarhan0412@gmail.com",
  location: "Faisalabad, Pakistan",
  workingWith: "Open to freelance & remote work",
  availability: "Available for new projects — 2026",
  responseTime: "Within 24 hours",
  startedIn: "2026",
  copyright: `© ${new Date().getFullYear()} Made by Azka. All rights reserved.`,
};

/* -------------------------------------------------------------------------- */
/* SOCIAL LINKS — Instagram + LinkedIn only                                    */
/* -------------------------------------------------------------------------- */
export type Social = { label: string; handle: string; url: string; icon: string };

export const socials: Social[] = [
  { label: "Instagram", handle: "made.byazka", url: brand.instagramUrl, icon: "instagram" },
  { label: "LinkedIn", handle: "made.byazka", url: brand.linkedinUrl, icon: "linkedin" },
];

/* -------------------------------------------------------------------------- */
/* NAVIGATION                                                                  */
/* -------------------------------------------------------------------------- */
export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Instagram", href: "#showcase" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
];

/* -------------------------------------------------------------------------- */
/* HERO                                                                        */
/* -------------------------------------------------------------------------- */
export const hero = {
  eyebrow: "Portfolio 2026 · Faisalabad, Pakistan",
  /* ✏️ Each string becomes one masked line of the headline. */
  titleLines: ["Design that feels", "soft, feminine", "& sincere."],
  accentWord: "feminine",
  lead: "I'm Azka — a beginner graphic designer from Faisalabad, Pakistan. I started learning design in 2026 and I'm building my portfolio in public: brand identities, social media posts, posters, packaging and illustration.",
  primaryCta: { label: "See my work", href: "#work" },
  secondaryCta: { label: "Work with me", href: "#contact" },
  /* Rotating circular stamp around the hero image */
  stampText: "made.byazka · learning every day · since 2026 · ",
  image: {
    src: px(7147700, 1000, 1300),
    alt: "Azka, graphic designer, sketching on a drawing tablet",
    ratio: "4 / 5",
  },
  /* ✏️ The two small cards floating over the hero image */
  notes: {
    nowPlaying: { label: "Latest on Instagram", value: "Lumière — concept identity" },
    palette: { label: "Palette I love", swatches: ["#EFD5D1", "#CF9D97", "#A17E9B", "#4E2B45"] },
  },
};

/* ✏️ Honest quick facts — no invented numbers */
export const facts = [
  { label: "Based in", value: "Faisalabad, PK" },
  { label: "Journey", value: "Started 2026" },
  { label: "Focus", value: "Brands & social" },
  { label: "Status", value: "Open to work" },
];

/* -------------------------------------------------------------------------- */
/* MARQUEE TICKER                                                              */
/* -------------------------------------------------------------------------- */
export const marqueeItems = [
  "Brand Identity",
  "Social Media Design",
  "Poster Design",
  "Packaging",
  "Illustration",
  "UI / UX",
  "Typography",
  "made.byazka",
  "Faisalabad · Pakistan",
];

/* -------------------------------------------------------------------------- */
/* ABOUT                                                                       */
/* -------------------------------------------------------------------------- */
export const about = {
  eyebrow: "About me",
  title: ["Learning in public,", "designing with heart."],
  paragraphs: [
    "Assalam-o-alaikum, I'm Azka. I picked up design in 2026 — no studio, no agency, just a laptop, Canva and a lot of curiosity. What started as making posts for fun quickly turned into a real love for typography, colour and layout.",
    "Most of the work you'll see here is self-initiated: concept identities, poster studies and packaging experiments I designed to learn. I treat every practice project like a real brief — research, moodboard, sketch, design, refine — because that's how the skill actually sticks.",
    "I'm looking for my first real clients, internships and collaborations. If you're a small brand, a student society or a home business in Pakistan (or anywhere), I'd love to design something beautiful with you at a beginner-friendly rate.",
  ],
  quote: "“I'm at the start of my journey — but I design every piece like it's the only one that matters.”",
  signature: "Azka",
  focuses: [
    {
      title: "Feminine, not frilly",
      text: "Soft palettes balanced with clean grids and clear hierarchy.",
      icon: "sparkle",
    },
    {
      title: "Brief-first thinking",
      text: "I ask questions, write the idea down, then open Illustrator.",
      icon: "pen",
    },
    {
      title: "Learning in public",
      text: "Every practice project is posted on Instagram so you can watch me grow.",
      icon: "layers",
    },
    {
      title: "Neat file handover",
      text: "Layered, named files plus PNG/PDF exports — even on small projects.",
      icon: "box",
    },
  ],
  images: {
    main: { src: px(12902984, 900, 1150), alt: "Designer working on layouts in a bright room", ratio: "4 / 5" },
    small: { src: px(7598069, 700, 700), alt: "Colour swatches and pantone chips on a desk", ratio: "1 / 1" },
  },
  /* ✏️ Small personal details shown in the "notes from my desk" list */
  currently: [
    { label: "Learning", value: "Typography & grid systems" },
    { label: "Practising", value: "One design a day on Instagram" },
    { label: "Obsessed with", value: "Blush pink over deep plum" },
    { label: "Tools", value: "Canva, Illustrator, Figma" },
  ],
  credentials: [
    "Self-taught designer",
    "Designing since 2026",
    "Open to freelance & internships",
  ],
};

/* -------------------------------------------------------------------------- */
/* SKILLS — honest beginner levels (edit the numbers as you improve)           */
/* -------------------------------------------------------------------------- */
export type Discipline = { name: string; level: number; blurb: string; icon: string };

export const disciplines: Discipline[] = [
  { name: "Social Media Design", level: 78, blurb: "Instagram posts, carousels, story templates", icon: "grid" },
  { name: "Graphic Design", level: 72, blurb: "Layout, posters, flyers, thumbnails", icon: "pen" },
  { name: "Branding & Identity", level: 64, blurb: "Logos, colour palettes, type pairing", icon: "sparkle" },
  { name: "Illustration", level: 58, blurb: "Hand-drawn florals and simple characters", icon: "brush" },
  { name: "UI / UX Design", level: 48, blurb: "Learning app & website layouts in Figma", icon: "screen" },
  { name: "Print & Packaging", level: 42, blurb: "Labels, boxes and print-ready files", icon: "box" },
];

export type Tool = { name: string; level: number; note: string };

export const tools: Tool[] = [
  { name: "Canva Pro", level: 92, note: "My daily driver for social posts" },
  { name: "Adobe Illustrator", level: 70, note: "Logos, vectors, layout" },
  { name: "Adobe Photoshop", level: 66, note: "Retouching and mockups" },
  { name: "Figma", level: 52, note: "Practising UI and design systems" },
  { name: "Procreate", level: 45, note: "Sketching illustration ideas" },
  { name: "Adobe InDesign", level: 38, note: "Learning editorial layouts" },
  { name: "After Effects", level: 28, note: "Just started — simple motion" },
];

/* -------------------------------------------------------------------------- */
/* FEATURED WORK — concept & practice projects (2026)                          */
/* ✏️ `link` = paste the Instagram post URL for that project.                  */
/* -------------------------------------------------------------------------- */
export type Project = {
  id: string;
  index: string;
  title: string;
  kind: string;
  category: string;
  year: string;
  description: string;
  image: string;
  alt: string;
  ratio: string;
  role: string[];
  deliverables: string[];
  gallery: { src: string; alt: string; ratio: string }[];
  accent: string;
  link: string;
};

export const projects: Project[] = [
  {
    id: "lumiere",
    index: "01",
    title: "Lumière Skincare",
    kind: "Concept project",
    category: "Brand Identity · Packaging",
    year: "2026",
    description:
      "A self-initiated identity for an imaginary botanical skincare label. I practised a serif logotype, a blush-and-plum palette, ingredient marks and label layouts across a small product range.",
    image: brandImg,
    alt: "Lumière Skincare concept brand identity board with logotype, business cards and colour swatches",
    ratio: "4 / 3",
    role: ["Research", "Logo design", "Palette", "Labels"],
    deliverables: ["Logotype & monogram", "Colour + type system", "Business card & tag", "Packaging labels"],
    gallery: [
      { src: brandImg, alt: "Lumière identity board", ratio: "4 / 3" },
      { src: packagingImg, alt: "Lumière packaging concept", ratio: "4 / 3" },
      { src: px(5706015, 900, 900), alt: "Lumière stationery detail", ratio: "1 / 1" },
    ],
    accent: "#CF9D97",
    link: brand.instagramUrl,
  },
  {
    id: "bloom",
    index: "02",
    title: "Bloom Poster Series",
    kind: "Practice work",
    category: "Poster · Typography",
    year: "2026",
    description:
      "A typographic poster study made to practise hierarchy and scale — oversized serif letterforms, dusty rose overprints and a simple grid that lets the type breathe.",
    image: posterImg,
    alt: "Bloom poster series with large serif typography leaning against a blush wall",
    ratio: "3 / 4",
    role: ["Typography", "Layout", "Colour"],
    deliverables: ["Poster layouts", "Type pairing study", "Print-ready PDF"],
    gallery: [
      { src: posterImg, alt: "Bloom poster series", ratio: "3 / 4" },
      { src: px(5490083, 900, 1100), alt: "Bloom layout experiments", ratio: "4 / 5" },
      { src: px(6065407, 900, 900), alt: "Bloom colour studies", ratio: "1 / 1" },
    ],
    accent: "#A17E9B",
    link: brand.instagramUrl,
  },
  {
    id: "rose-atelier",
    index: "03",
    title: "Rosé Atelier",
    kind: "Concept project",
    category: "Packaging · Identity",
    year: "2026",
    description:
      "Packaging practice for a made-up candle and body-care label: a hand-lettered monogram, cream cartons and botanical labels — plus mockups to see how it would look on a shelf.",
    image: packagingImg,
    alt: "Rosé Atelier packaging concept — blush cartons and jars with plum foil monogram",
    ratio: "4 / 3",
    role: ["Packaging", "Illustration", "Mockups"],
    deliverables: ["Carton & label design", "Botanical illustration", "Product mockups"],
    gallery: [
      { src: packagingImg, alt: "Rosé Atelier packaging", ratio: "4 / 3" },
      { src: px(8015791, 1100, 800), alt: "Rosé Atelier product range", ratio: "3 / 2" },
      { src: px(8148583, 900, 900), alt: "Rosé Atelier gift tag system", ratio: "1 / 1" },
    ],
    accent: "#BD9A5F",
    link: brand.instagramUrl,
  },
  {
    id: "muse",
    index: "04",
    title: "Muse Journal App",
    kind: "Learning project",
    category: "UI / UX · Product",
    year: "2026",
    description:
      "My first proper UI attempt — a journaling app concept for creative girls. Soft mauve screens, serif prompts and a small component set I built while learning Figma.",
    image: uiuxImg,
    alt: "Muse journaling app UI design presented on three phone screens",
    ratio: "4 / 3",
    role: ["Wireframes", "UI design", "Figma basics"],
    deliverables: ["Onboarding flow", "Home & journal screens", "Colour + type kit"],
    gallery: [
      { src: uiuxImg, alt: "Muse app screens", ratio: "4 / 3" },
      { src: px(3850204, 900, 1100), alt: "Muse app in hand", ratio: "4 / 5" },
      { src: px(242492, 1100, 800), alt: "Muse content grid", ratio: "3 / 2" },
    ],
    accent: "#4E2B45",
    link: brand.instagramUrl,
  },
];

/* -------------------------------------------------------------------------- */
/* INSTAGRAM SHOWCASE — every tile links straight to its post on Instagram     */
/* ✏️ HOW TO CONNECT A REAL POST:                                              */
/*    1. Open the post on Instagram → ⋯ menu → "Copy link"                     */
/*    2. Paste that URL into the `link` field of the matching item below       */
/*    3. Replace `image` with a screenshot/export of the same post             */
/* -------------------------------------------------------------------------- */
export type ShowcaseItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  ratio: string;
  note: string;
  link: string;
};

export const showcaseCategories = [
  "All",
  "Branding",
  "Poster",
  "Social Media",
  "Illustration",
  "Packaging",
  "UI / UX",
];

export const showcase: ShowcaseItem[] = [
  { id: "s1", title: "Lumière identity board", category: "Branding", image: brandImg, alt: "Concept brand identity board with logotype and swatches", ratio: "4 / 3", note: "Concept identity · 2026", link: "https://www.instagram.com/p/Db6VGysuh_e/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: "s2", title: "Bloom poster study", category: "Poster", image: posterImg, alt: "Typographic poster series in blush and plum", ratio: "3 / 4", note: "Typography practice · 2026", link: brand.instagramUrl },
  { id: "s3", title: "Petal & Co. grid concept", category: "Social Media", image: socialImg, alt: "Nine-tile Instagram grid design concept for a beauty brand", ratio: "1 / 1", note: "9-tile grid · 2026", link: brand.instagramUrl },
  { id: "s4", title: "Wildflower illustration", category: "Illustration", image: illustrationImg, alt: "Hand-drawn botanical illustrations in dusty rose and plum", ratio: "3 / 4", note: "Ink & colour study · 2026", link: "https://www.instagram.com/p/Db6VGysuh_e/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: "s5", title: "Cutout trends", category: "Illustration", image: packagingImg, alt: "purple landscape cutout", ratio: "4 / 3", note: "Packaging concept · 2026", link: brand.instagramUrl },
  { id: "s6", title: "Muse app screens", category: "UI / UX", image: uiuxImg, alt: "App screens and components on a mauve artboard", ratio: "4 / 3", note: "Figma learning project · 2026", link: brand.instagramUrl },
  { id: "s7", title: "Stationery suite", category: "Branding", image: px(5706026, 900, 1150), alt: "Minimal stationery mockup on a pastel pink surface", ratio: "4 / 5", note: "Cards & letterhead · 2026", link: brand.instagramUrl },
  { id: "s8", title: "Mood board practice", category: "Branding", image: px(7598016, 900, 1150), alt: "Brand strategy documents and colour samples flat lay", ratio: "4 / 5", note: "Research & moodboard · 2026", link: brand.instagramUrl },
  { id: "s9", title: "Colour story", category: "Branding", image: px(7598069, 900, 1150), alt: "Pantone colour swatches fanned across a desk", ratio: "4 / 5", note: "Palette development · 2026", link: brand.instagramUrl },
  { id: "s10", title: "Gift tag system", category: "Packaging", image: px(8148583, 1100, 850), alt: "Blush pink gift tag with twine on wood", ratio: "4 / 3", note: "Tags & labels · 2026", link: brand.instagramUrl },
  { id: "s11", title: "Skincare label concept", category: "Packaging", image: px(8015791, 1100, 850), alt: "Minimal skincare packaging in white and blush", ratio: "4 / 3", note: "Label design · 2026", link: brand.instagramUrl },
  { id: "s12", title: "Watercolour studies", category: "Illustration", image: px(25752160, 900, 1150), alt: "Soft pastel watercolour abstract painting", ratio: "4 / 5", note: "Texture experiments · 2026", link: brand.instagramUrl },
  { id: "s13", title: "App UI in context", category: "UI / UX", image: px(3850204, 900, 1150), alt: "Hand holding a phone with an app interface", ratio: "4 / 5", note: "Mobile UI practice · 2026", link: brand.instagramUrl },
  { id: "s14", title: "Editorial layout study", category: "Poster", image: post1, alt: "Notebook and dried flowers flat lay for editorial layout", ratio: "4 / 3", note: "Layout practice · 2026", link: "https://www.instagram.com/p/DdGamwGukHU/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: "s15", title: "Carousel template kit", category: "Social Media", image: px(7167825, 1100, 850), alt: "Cosy flat lay used in a social carousel design", ratio: "4 / 3", note: "Canva templates · 2026", link:"https://www.instagram.com/p/DdzLIiDDZ9e/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: "s16", title: "Lettering on walls", category: "Poster", image: px(29708134, 900, 1150), alt: "Framed typographic wall art with botanical motif", ratio: "4 / 5", note: "Lettering practice · 2026", link: "https://www.instagram.com/p/DcwM8c1DnsV/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
];
/* -------------------------------------------------------------------------- */
/* CREATIVE PROCESS (how I work, even on practice projects)                    */
/* -------------------------------------------------------------------------- */
export const processSteps = [
  {
    step: "01",
    title: "Research",
    duration: "Day 1–2",
    text: "I read your brief twice, look at similar brands and save references. Even for practice work, I start with a real question.",
    outputs: ["Questions & notes", "References", "Moodboard"],
    icon: "compass",
  },
  {
    step: "02",
    title: "Concept",
    duration: "Day 3–4",
    text: "Sketches on paper first, then two directions — different type, colour and logo ideas — so we choose together.",
    outputs: ["Paper sketches", "2 directions", "Palette options"],
    icon: "sparkle",
  },
  {
    step: "03",
    title: "Design",
    duration: "Day 5–9",
    text: "The chosen direction gets designed properly in Canva / Illustrator: final logo, posts, packaging or screens.",
    outputs: ["Final design", "Post or print files", "Mockups"],
    icon: "pen",
  },
  {
    step: "04",
    title: "Refinement",
    duration: "Day 10–11",
    text: "You send feedback, I fix spacing, colours and sizes — two rounds of revisions are always included.",
    outputs: ["2 revisions", "Size variants", "Accessibility check"],
    icon: "sliders",
  },
  {
    step: "05",
    title: "Final Result",
    duration: "Day 12",
    text: "You receive clean, layered files (PNG, PDF, JPG, editable source) plus a short guide on how to use them.",
    outputs: ["All file formats", "Editable source", "Usage guide"],
    icon: "check",
  },
];

/* -------------------------------------------------------------------------- */
/* SERVICES + INVESTMENT (PKR)                                                 */
/* -------------------------------------------------------------------------- */
export type Service = {
  title: string;
  blurb: string;
  price: string;
  timeline: string;
  includes: string[];
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    title: "Brand Identity",
    blurb: "Logo, colour palette, fonts and a mini guide so your brand looks the same everywhere.",
    price: "from PKR 15,000",
    timeline: "1–2 weeks",
    includes: ["Discovery questions", "2 logo directions", "Colour + font kit", "Logo files (PNG/SVG/AI)"],
    image: brandImg,
    alt: "Brand identity presentation board",
  },
  {
    title: "Social Media Design",
    blurb: "Instagram posts, carousels and story templates — plus editable Canva files you can reuse.",
    price: "from PKR 5,000",
    timeline: "3–7 days",
    includes: ["10–15 post designs", "Carousel + story set", "Editable Canva templates", "Highlight covers"],
    image: socialImg,
    alt: "Instagram grid design system",
  },
  {
    title: "Packaging & Labels",
    blurb: "Labels, boxes, tags and stickers designed with print-ready files and realistic mockups.",
    price: "from PKR 10,000",
    timeline: "1–2 weeks",
    includes: ["Label / box design", "Print-ready PDF", "Product mockups", "2 revisions"],
    image: packagingImg,
    alt: "Packaging design mockups",
  },
  {
    title: "Poster & Print Design",
    blurb: "Posters, flyers, menus, banners, CVs and event prints — designed to be read from far away.",
    price: "from PKR 3,000",
    timeline: "2–5 days",
    includes: ["Layout design", "Print-ready file", "Size variants (A4/A3/social)", "1 revision round"],
    image: posterImg,
    alt: "Editorial typographic poster series",
  },
  {
    title: "UI / UX & Web Design",
    blurb: "Landing pages and app screens designed in Figma — I'm learning fast and charge beginner rates.",
    price: "from PKR 20,000",
    timeline: "2–4 weeks",
    includes: ["Wireframes", "High-fidelity screens", "Mobile + desktop", "Figma handover"],
    image: uiuxImg,
    alt: "UI/UX design screens and components",
  },
  {
    title: "Illustration",
    blurb: "Hand-drawn florals, patterns and simple characters for your brand or gifts.",
    price: "from PKR 2,500",
    timeline: "3–6 days",
    includes: ["Sketch round", "Final coloured art", "PNG + vector file", "Personal use licence"],
    image: illustrationImg,
    alt: "Hand-drawn illustration sheet",
  },
];

/* -------------------------------------------------------------------------- */
/* CONTACT FORM OPTIONS                                                        */
/* -------------------------------------------------------------------------- */
export const projectTypes = [
  "Brand Identity",
  "Social Media Design",
  "Packaging / Labels",
  "Poster / Print",
  "UI / UX & Web",
  "Illustration",
  "Internship / Collaboration",
  "Something else",
];

export const budgets = [
  "Under PKR 5,000",
  "PKR 5,000 – 15,000",
  "PKR 15,000 – 40,000",
  "PKR 40,000+",
  "Not sure yet",
];

/* -------------------------------------------------------------------------- */
/* FOOTER                                                                      */
/* -------------------------------------------------------------------------- */
export const footerNote =
  "Designed & coded by Azka in Faisalabad, Pakistan. Type: Fraunces + Jost. Palette: blush, dusty rose, mauve & deep plum.";
