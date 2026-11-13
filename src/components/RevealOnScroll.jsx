"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Nothing is clipped unless <html> has .motion-ok, and this effect is the
// only thing that adds it: IntersectionObserver must exist, and the visitor
// must not have asked for reduced motion.
// A door opens once, when about 30% of its frame is in view. One already
// above the fold waits a moment so the slit is visible, then eases open.
// Anything still shut after 1.5s on screen is opened.
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

    const timers = new Set();
    const later = (fn, ms) => {
      const id = setTimeout(fn, ms);
      timers.add(id);
      return id;
    };

    const finish = (el) => {
      el.classList.remove("is-animating");
    };

    const open = (el) => {
      if (el.dataset.door === "open") return;
      el.classList.add("is-animating");
      el.dataset.door = "open";
      const stop = (event) => {
        if (event && event.target !== el && event.target !== el.querySelector(".service-photo")) return;
        finish(el);
      };
      el.addEventListener("transitionend", stop, { once: true });
      later(() => finish(el), 1400);
    };

    const started = new WeakSet();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target;
          const first = !started.has(el);
          started.add(el);
          if (entry.intersectionRatio < 0.28) continue;
          observer.unobserve(el);
          // Already on screen at the first check: hold the slit, then open.
          later(() => open(el), first ? 450 : 0);
        }
      },
      { root: null, rootMargin: "0px", threshold: [0.28, 0.35] }
    );

    let frame = requestAnimationFrame(() => {
      document.querySelectorAll("[data-door]").forEach((el) => {
        el.dataset.door = "closed";
        el.classList.remove("is-animating");
      });
      frame = requestAnimationFrame(() => {
        document.querySelectorAll("[data-door]").forEach((el) => observer.observe(el));
      });
    });

    const watchdog = setInterval(() => {
      document.querySelectorAll('[data-door="closed"]').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        if (visible < rect.height * 0.28) return;
        open(el);
      });
    }, 1500);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(watchdog);
      timers.forEach((id) => clearTimeout(id));
      observer.disconnect();
      document.querySelectorAll("[data-door]").forEach((el) => {
        el.dataset.door = "open";
        finish(el);
      });
    };
  }, [pathname]);

  return null;
}
