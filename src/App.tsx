import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { PaletteSwitcher } from "@/components/PaletteSwitcher";
import { marqueeItems } from "@/config/site";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { FeaturedWork } from "@/sections/FeaturedWork";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Process } from "@/sections/Process";
import { Services } from "@/sections/Services";
import { Showcase } from "@/sections/Showcase";
import { Skills } from "@/sections/Skills";

/* ============================================================================
   MADE.BYAZKA — single-page portfolio
   ----------------------------------------------------------------------------
   Section order is editable right here. Content lives in src/config/site.ts,
   colours & type in src/index.css, the logo in src/components/Logo.tsx and
   every image sits inside a <RevealImage /> container so it can be swapped
   without touching layout.
   ========================================================================== */

export default function App() {
  return (
    <div className="fade-in relative min-h-screen bg-cream">
      {/* fine film grain over the whole page */}
      <div className="grain-overlay" aria-hidden="true" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-plum focus:px-5 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Marquee items={marqueeItems} tone="plum" separator="sparkle" />
        <About />
        <Skills />
        <FeaturedWork />
        <Showcase />
        <Process />
        <Services />
        <Contact />
      </main>

      <Footer />

      {/* live colour-token switcher (edit presets in src/config/palettes.ts) */}
      <PaletteSwitcher />
    </div>
  );
}
