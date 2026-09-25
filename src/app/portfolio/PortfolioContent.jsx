"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

// Every photo is the studio's own work from the Hanamakonda home (the
// bedroom is a still from the 4K walkthrough video).
// Titles/locations come from translations by index. Width/height are each
// photo's real proportions, so the masonry reserves the right space before
// images load.
const projectData = [
  { category: "hall", image: "/portfolio/hanamakonda-tv-unit.jpg", w: 2000, h: 3000 },
  { category: "kitchen", image: "/portfolio/hanamakonda-kitchen.jpg", w: 2000, h: 1125 },
  { category: "bedroom", image: "/portfolio/hanamakonda-bedroom-olive.jpg", w: 2000, h: 1125 },
  { category: "hall", image: "/portfolio/hanamakonda-hall-arch.jpg", w: 2600, h: 1625 },
  { category: "pooja", image: "/portfolio/hanamakonda-pooja-panel.jpg", w: 1200, h: 1800 },
  { category: "pooja", image: "/portfolio/hanamakonda-pooja-room.jpg", w: 1200, h: 1800 },
  { category: "hall", image: "/portfolio/hanamakonda-wash-counter.jpg", w: 2000, h: 3000 },
];

export default function PortfolioContent() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: t.portfolio.filters.all },
    { key: "hall", label: t.portfolio.filters.hall },
    { key: "kitchen", label: t.portfolio.filters.kitchen },
    { key: "bedroom", label: t.portfolio.filters.bedroom },
    { key: "pooja", label: t.portfolio.filters.pooja },
  ];

  const projects = projectData.map((p, i) => ({
    ...p,
    ...t.portfolio.projects[i],
  }));

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 px-5 md:px-20 max-w-[1280px] mx-auto text-center">
        <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
          {t.portfolio.title}
        </h1>
        <p className="text-lg text-on-surface-muted max-w-2xl mx-auto leading-relaxed">
          {t.portfolio.intro}
        </p>
      </section>

      {/* Filters */}
      <section className="pb-12 px-5 md:px-20 max-w-[1280px] mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              aria-pressed={filter === cat.key}
              className={`relative text-xs font-semibold uppercase tracking-[0.1em] transition-colors pb-1 ${
                filter === cat.key
                  ? "text-primary font-bold border-b-2 border-accent"
                  : "text-on-surface-muted hover:text-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32 px-5 md:px-20 max-w-[1280px] mx-auto">
        <div className="masonry-grid">
          {filtered.map((project) => (
            <figure key={project.image} className="masonry-item group m-0">
              <div className="overflow-hidden bg-surface-high">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.w}
                  height={project.h}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-auto object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mt-3 pt-3 border-t border-outline-light">
                <h3 className="font-display text-lg md:text-xl text-primary">
                  {project.title}
                </h3>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-muted">
                  {project.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface-low grain border-y border-outline-light/70">
        <div className="px-5 md:px-20 max-w-[1280px] mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-8">
            {t.portfolio.ctaHeading}
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-accent-dark transition-colors duration-300"
          >
            {t.portfolio.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
