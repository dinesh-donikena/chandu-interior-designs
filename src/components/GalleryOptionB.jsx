"use client";

import Image from "next/image";
import { useState } from "react";
import { usePhotoLightbox } from "@/components/PhotoLightbox";
import { curatedPhotos } from "@/lib/curated-photos";
import { translations } from "@/lib/translations";
import { wrap } from "@/lib/ui";

// Option B, kept in this one file so the demo route can be deleted with it.
// A sideways row you flick through, then the same full-screen viewer.
export default function GalleryOptionB({ lang }) {
  const copy = translations[lang].portfolio;
  const photos = curatedPhotos(copy.projects);
  const [open, setOpen] = useState(null);
  const lightbox = usePhotoLightbox({ photos, open, setOpen, labels: copy.viewer });

  return (
    <section className={`${wrap} pt-20 pb-24 md:pt-28 md:pb-36`}>
      <header className="mb-12 md:mb-16 max-w-[65ch]">
        <h1 className="type-h1 text-primary mb-6">{copy.title}</h1>
        <p className="type-body text-on-surface-muted">{copy.intro}</p>
      </header>
      <ul className="gallery-snap list-none m-0 p-0">
        {photos.map((photo, i) => (
          <li key={photo.image}>
            <figure className="m-0">
              <button
                type="button"
                onClick={() => lightbox.show(i)}
                aria-label={`${copy.viewer.view}: ${photo.title}`}
                className="block w-full cursor-zoom-in"
              >
                <span className="relative block overflow-hidden bg-surface-high crop-wide">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    loading="lazy"
                    sizes="80vw"
                    className="object-cover"
                  />
                </span>
              </button>
              <figcaption className="mt-3">
                <span className="type-h3 text-primary">{photo.title}</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-on-surface-muted mt-1">
                  {photo.location}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      {lightbox.dialog}
    </section>
  );
}
