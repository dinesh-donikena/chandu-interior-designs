"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

// Static project data (images + categories); titles/locations come from
// translations by index. Unsplash placeholders of real Indian homes —
// swap with the family's own project photos when they arrive.
const projectData = [
  {
    category: "hall",
    image:
      "https://images.unsplash.com/photo-1633604712918-6ab1173d0ecd?auto=format&fit=crop&w=900&q=75",
  },
  {
    category: "kitchen",
    image:
      "https://images.unsplash.com/photo-1682662045846-77f6e1ce55b4?auto=format&fit=crop&w=900&q=75",
  },
  {
    category: "bedroom",
    image:
      "https://images.unsplash.com/photo-1771327811766-5f4149190b3d?auto=format&fit=crop&w=900&q=75",
  },
  {
    category: "hall",
    image:
      "https://images.unsplash.com/photo-1682662045247-3740fa9f51c6?auto=format&fit=crop&w=900&q=75",
  },
  {
    category: "kitchen",
    image:
      "https://images.unsplash.com/photo-1682662045815-9016c6225dd3?auto=format&fit=crop&w=900&q=75",
  },
  {
    category: "bedroom",
    image:
      "https://images.unsplash.com/photo-1771328756144-02bde5549a9a?auto=format&fit=crop&w=900&q=75",
  },
];

export default function PortfolioContent() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: t.portfolio.filters.all },
    { key: "hall", label: t.portfolio.filters.hall },
    { key: "kitchen", label: t.portfolio.filters.kitchen },
    { key: "bedroom", label: t.portfolio.filters.bedroom },
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
              className={`relative text-xs font-semibold uppercase tracking-[0.1em] transition-colors pb-1 ${
                filter === cat.key
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-on-surface-muted hover:text-primary"
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
            <div
              key={project.image}
              className="masonry-item group relative cursor-pointer overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="reveal-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-8">
                <h3 className="font-display text-2xl text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-white/80 uppercase tracking-[0.1em] font-semibold">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface-low border-y border-outline-light/20">
        <div className="px-5 md:px-20 max-w-[1280px] mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-8">
            {t.portfolio.ctaHeading}
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.1em] hover:opacity-90 transition-all duration-300"
          >
            {t.portfolio.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
