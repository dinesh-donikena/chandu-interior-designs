"use client";

import Image from "next/image";
import { useState } from "react";
import { usePhotoLightbox } from "@/components/PhotoLightbox";

// Option A: an editorial grid. Crops are fixed, so every room sits in the
// same rhythm. Images load when they near the screen.
export default function ServiceGallery({ photos, labels }) {
  const [open, setOpen] = useState(null);
  const lightbox = usePhotoLightbox({ photos, open, setOpen, labels });

  return (
    <>
      <div className="editorial-grid">
        {photos.map((photo, i) => (
          <figure key={photo.image} className={`m-0 ${photo.crop === "wide" ? "span-2" : ""}`}>
            <button
              type="button"
              onClick={() => lightbox.show(i)}
              aria-label={`${labels.view}: ${photo.title}`}
              className="block w-full cursor-zoom-in"
            >
              <span className={`relative block overflow-hidden bg-surface-high ${photo.crop === "wide" ? "crop-wide" : "crop-tall"}`}>
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  loading="lazy"
                  sizes={photo.crop === "wide" ? "(min-width: 800px) 66vw, 100vw" : "(min-width: 800px) 33vw, 50vw"}
                  className="object-cover"
                />
              </span>
            </button>
            <figcaption className="mt-3 pt-3 border-t border-outline-light">
              <span className="type-h3 text-primary">{photo.title}</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-on-surface-muted mt-1">
                {photo.location}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      {lightbox.dialog}
    </>
  );
}
