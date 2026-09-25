"use client";

import { useEffect, useRef } from "react";

// The hero doorway grows via CSS scroll-driven animations. Browsers without
// them — Safari/iOS before support landed (which is also Chrome on iPhone,
// since iOS browsers use Safari's engine) and Firefox — would show a static
// doorway that just scrolls away. There, this drives the same values from a
// scroll listener; everywhere else it does nothing. Timings mirror the CSS
// in globals.css (grow over 0–42svh, copy fades 0–20svh, caption 28–46svh).
export default function HeroScrollFallback() {
  const ref = useRef(null);

  useEffect(() => {
    if (CSS.supports("animation-timeline: scroll()")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stage = ref.current.closest(".hero-stage");
    const frame = stage.querySelector(".hero-frame");
    const copy = stage.querySelector(".hero-copy");
    const fades = stage.querySelectorAll(".hero-scrim, .hero-caption");
    stage.classList.add("hero-js");

    let w0 = 0;
    let wEnd = 0;
    const measure = () => {
      frame.style.removeProperty("--arch-w");
      const cs = getComputedStyle(frame);
      w0 = parseFloat(cs.getPropertyValue("--arch-w0"));
      wEnd = parseFloat(cs.getPropertyValue("--arch-w-end"));
    };

    const clamp = (v) => Math.min(1, Math.max(0, v));
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!w0 || !wEnd) return; // sizes unreadable: leave the static doorway
      const svh = window.innerHeight / 100;
      const y = window.scrollY;
      // Ease-in, like walking up to a door
      const grow = Math.pow(clamp(y / (42 * svh)), 2.2);
      frame.style.setProperty("--arch-w", `${w0 + (wEnd - w0) * grow}px`);
      const out = clamp(y / (20 * svh));
      copy.style.opacity = String(1 - out);
      copy.style.transform = `translateY(${-28 * out}px)`;
      copy.style.visibility = out >= 1 ? "hidden" : "";
      const reveal = String(clamp((y - 28 * svh) / (18 * svh)));
      fades.forEach((el) => (el.style.opacity = reveal));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      stage.classList.remove("hero-js");
      frame.style.removeProperty("--arch-w");
      copy.removeAttribute("style");
      fades.forEach((el) => el.style.removeProperty("opacity"));
    };
  }, []);

  return <span ref={ref} hidden />;
}
