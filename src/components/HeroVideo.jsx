"use client";

import { useEffect, useRef, useState } from "react";

// Real footage of the Hanamakonda home, cut from the 4K walkthrough and
// centred on the teak arch so the doorway never shows a lopsided slice.
// Landscape screens get the walk-in through the carved front door; portrait
// screens get their own crop — a slow glide to the TV wall — because a
// landscape frame squeezed into a phone can only show one of the arch posts.
// A matching still sits underneath: it is what shows before the video loads,
// and all that shows for visitors who ask for reduced motion or data saving.
export default function HeroVideo() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const keepStill =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      navigator.connection?.saveData;
    if (!keepStill) ref.current.play().catch(() => {});
  }, []);

  return (
    <>
      <picture>
        <source media="(orientation: portrait)" srcSet="/video/hero-port.jpg" />
        <img
          src="/video/hero-land.jpg"
          alt=""
          className="hero-fill"
          fetchPriority="high"
        />
      </picture>
      <video
        ref={ref}
        className={`hero-fill transition-opacity duration-700 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
        onPlaying={() => setPlaying(true)}
        preload="none"
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/video/hero-port-1080.mp4" type="video/mp4" media="(orientation: portrait) and (min-width: 700px)" />
        <source src="/video/hero-port-720.mp4" type="video/mp4" media="(orientation: portrait)" />
        <source src="/video/hero-land-720.mp4" type="video/mp4" media="(max-width: 900px)" />
        <source src="/video/hero-land-1080.mp4" type="video/mp4" />
      </video>
    </>
  );
}
