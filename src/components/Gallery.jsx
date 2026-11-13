"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Close } from "@/components/icons";

// The Our Work gallery: room filters, the photo wall, and a full-screen
// viewer so visitors can see the joinery and carving up close. The viewer
// is the browser's own <dialog>, which already handles the Escape key,
// keeps keyboard focus inside, and returns it to the photo on close.
export default function Gallery({ projects, filters, labels }) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null); // index into `shown`
  const dialog = useRef(null);
  const swipeFrom = useRef(null);

  const shown = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const current = open === null ? null : shown[open];

  const view = (i) => {
    setOpen(i);
    dialog.current?.showModal();
  };
  const step = (by) => setOpen((i) => (i + by + shown.length) % shown.length);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12 pb-12" role="group">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={`inline-flex items-center min-h-11 text-xs font-semibold uppercase tracking-[0.12em] border-b-2 transition-colors ${
              filter === f.key
                ? "text-primary border-accent"
                : "text-on-surface-muted border-transparent hover:text-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {shown.map((project, i) => (
          <figure key={project.image} className="masonry-item group m-0">
            <button
              type="button"
              onClick={() => view(i)}
              aria-label={`${labels.view}: ${project.title}`}
              className="block w-full cursor-zoom-in"
            >
              <span data-reveal="photo" className="block overflow-hidden bg-surface-high">
                {/* The first photo is the biggest thing on screen when the
                    page opens, so it loads straight away, not lazily. */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.w}
                  height={project.h}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-auto transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </span>
            </button>
            <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mt-3 pt-3 border-t border-outline-light">
              <h2 className="type-h3 text-primary">{project.title}</h2>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-muted">
                {project.location}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={current?.title}
        onClose={() => setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onPointerDown={(e) => (swipeFrom.current = e.clientX)}
        onPointerUp={(e) => {
          const dx = e.clientX - (swipeFrom.current ?? e.clientX);
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          swipeFrom.current = null;
        }}
      >
        {current && (
          <div className="flex flex-col h-full text-white">
            <div className="flex items-center justify-between px-5 md:px-8 h-16 shrink-0">
              <p className="text-xs font-semibold tracking-[0.2em] text-white/70">
                {open + 1} / {shown.length}
              </p>
              <button
                type="button"
                onClick={() => dialog.current.close()}
                aria-label={labels.close}
                className="inline-flex items-center justify-center min-h-11 min-w-11 -mr-2 text-white/80 hover:text-white transition-colors"
              >
                <Close />
              </button>
            </div>

            <div className="relative flex-1 min-h-0 mx-5 md:mx-24">
              <Image
                key={current.image}
                src={current.image}
                alt={current.title}
                fill
                sizes="100vw"
                className="lightbox-photo object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4 px-5 md:px-8 h-20 shrink-0">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label={labels.prev}
                className="lightbox-step"
              >
                <ArrowLeft />
              </button>
              <p className="text-center">
                <span className="font-display text-lg md:text-xl">{current.title}</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 mt-1">
                  {current.location}
                </span>
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label={labels.next}
                className="lightbox-step"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
