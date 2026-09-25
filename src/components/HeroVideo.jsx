"use client";

import { useEffect, useRef } from "react";
import { preload } from "react-dom";

// A real walkthrough of the Hanamakonda home: through the carved front door,
// up to the hall arch. It plays once and rests on the arch — no loop, no sound.
// Visitors who ask for reduced motion or data saving keep the still poster.
export default function HeroVideo() {
  const ref = useRef(null);
  preload("/video/hero-start.jpg", { as: "image", fetchPriority: "high" });

  useEffect(() => {
    const video = ref.current;
    const keepStill =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      navigator.connection?.saveData;
    if (!keepStill) video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video"
      poster="/video/hero-start.jpg"
      preload="none"
      muted
      playsInline
      aria-hidden="true"
    >
      {/* Phones get the 720p cut (~0.75 MB) */}
      <source src="/video/hero-720.mp4" type="video/mp4" media="(max-width: 900px)" />
      <source src="/video/hero-1080.mp4" type="video/mp4" />
    </video>
  );
}
