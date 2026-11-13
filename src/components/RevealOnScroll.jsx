"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Words are never hidden in CSS unless <html> has .motion-ok, and this
// effect is the only thing that adds that class. It does so only when
// IntersectionObserver exists and reduced motion is off.
// Text already on screen is left visible. A door that has been on screen
// for 1.5s without opening is opened, so a stuck animation cannot hide it.
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduce) {
      root.classList.remove("motion-ok");
      return;
    }
    root.classList.add("motion-ok");

    const scroller = document.querySelector(".page-scroll");
    const scrollRoot =
      scroller && getComputedStyle(scroller).overflowY === "auto" ? scroller : null;
    const viewBox = () =>
      scrollRoot
        ? scrollRoot.getBoundingClientRect()
        : { top: 0, bottom: window.innerHeight };
    const onScreen = (el) => {
      const rect = el.getBoundingClientRect();
      const box = viewBox();
      return rect.bottom > box.top + 2 && rect.top < box.bottom - 2;
    };

    const show = (el) => {
      if (el.hasAttribute("data-door")) el.dataset.door = "open";
      if (el.hasAttribute("data-reveal")) el.dataset.revealState = "shown";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          observer.unobserve(entry.target);
        }
      },
      // A closed door is a narrow slit, so its intersection ratio stays
      // under 0.1. Any visible pixel is enough to start the open.
      { root: scrollRoot, rootMargin: "0px", threshold: 0 }
    );

    const seen = new WeakMap();
    const frame = requestAnimationFrame(() => {
      document.querySelectorAll("[data-door]").forEach((el) => {
        el.dataset.door = "closed";
        if (onScreen(el)) seen.set(el, Date.now());
      });
      // Let the closed clip paint, then watch for the open.
      requestAnimationFrame(() => {
        document.querySelectorAll("[data-door]").forEach((el) => observer.observe(el));
      });
    });

    const watchdog = setInterval(() => {
      document
        .querySelectorAll('[data-reveal-state="waiting"], [data-door="closed"]')
        .forEach((el) => {
          if (!onScreen(el)) return;
          const since = seen.get(el) ?? Date.now();
          if (!seen.has(el)) seen.set(el, since);
          if (Date.now() - since >= 1500) show(el);
        });
    }, 300);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(watchdog);
      observer.disconnect();
      document
        .querySelectorAll('[data-reveal-state="waiting"], [data-door="closed"]')
        .forEach(show);
    };
  }, [pathname]);

  return null;
}
