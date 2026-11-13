"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Lets sections arrive as you reach them instead of all being there at
// once: anything marked data-reveal fades up, and photos marked
// data-reveal="photo" open out from a slightly smaller frame, like the
// doorway at the top of the home page. (Looks live in globals.css.)
//
// Only what is still below the screen waits to be revealed, so nothing you
// can already see blinks out and back. Without JavaScript, or for visitors
// who ask for reduced motion, everything simply shows.
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (entry.target.hasAttribute("data-door")) entry.target.dataset.door = "open";
          else entry.target.dataset.revealState = "shown";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    // Only what is on screen right now counts as already seen. (Right after
    // moving to another page the window may still be scrolled down from
    // the last one, so "above the screen" doesn't mean "seen".)
    const frame = requestAnimationFrame(() => {
      const fold = window.innerHeight;
      document.querySelectorAll("[data-reveal]:not([data-reveal-state])").forEach((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        if (top < fold && bottom > 0) return;
        el.dataset.revealState = "waiting";
        observer.observe(el);
      });
      // Door photos and the process line start shut, then open when reached,
      // including the one already on screen.
      document.querySelectorAll("[data-door]").forEach((el) => {
        el.dataset.door = "closed";
        observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      // Anything still waiting (you left before reaching it) just shows
      document
        .querySelectorAll('[data-reveal-state="waiting"]')
        .forEach((el) => (el.dataset.revealState = "shown"));
    };
  }, [pathname]);

  return null;
}
