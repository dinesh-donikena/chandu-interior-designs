"use client";

import { useEffect, useRef } from "react";

// Drives the hero doorway from the scroll position, in every browser. (CSS
// scroll-driven animations behave differently across Chrome, Safari and
// iPhone browsers — which all use Safari's engine — and a quick swipe could
// skip the effect entirely.) As you scroll:
//   0–45svh   the doorway grows until it becomes a full rectangle
//   0–22svh   the headline fades up and away
//   35–55svh  the caption and its shade appear
//   to 80svh  the full image holds, then the page moves on
// Sizes are measured from what is actually on screen, not read back from
// CSS variables, so every engine gets the same numbers. Visitors who ask
// for reduced motion keep the still doorway.
// Add ?debug=hero to the address to see what the browser reports.
const GROW = 45;
const COPY_OUT = 22;
const CAPTION_FROM = 35;
const CAPTION_TO = 55;

const clamp = (v) => Math.min(1, Math.max(0, v));
const easeInOut = (p) => (p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2);

export default function HeroScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const debug =
      new URLSearchParams(window.location.search).get("debug") === "hero"
        ? makeDebugPanel()
        : null;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) {
      debug?.show({ status: "still doorway: phone/computer has Reduce Motion ON" });
      return () => debug?.remove();
    }

    const stage = ref.current.closest(".hero-stage");
    const frame = stage.querySelector(".hero-frame");
    const door = stage.querySelector(".hero-door");
    const copy = stage.querySelector(".hero-copy");
    const fades = stage.querySelectorAll(".hero-scrim, .hero-caption");

    // 1svh as the browser sees it (steady even as phone toolbars slide)
    const probe = document.createElement("div");
    probe.style.cssText =
      "position:fixed;top:0;left:0;width:0;height:100svh;visibility:hidden;pointer-events:none";
    document.body.appendChild(probe);

    let w0 = 0;
    let wEnd = 0;
    let svh = 0;
    const measure = () => {
      frame.style.removeProperty("--arch-w");
      w0 = door.getBoundingClientRect().width; // the resting doorway
      // Wide enough that the arch's straight sides (0.9 × its width tall)
      // clear the whole frame, so the doorway ends as a full rectangle
      wEnd = Math.max(window.innerWidth * 1.1, frame.getBoundingClientRect().height / 0.85);
      svh = probe.offsetHeight / 100;
    };

    let raf = 0;
    let w = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const grow = easeInOut(clamp(y / (GROW * svh)));
      w = w0 + (wEnd - w0) * grow;
      frame.style.setProperty("--arch-w", `${w}px`);
      const out = clamp(y / (COPY_OUT * svh));
      copy.style.opacity = String(1 - out);
      copy.style.transform = `translateY(${-28 * out}px)`;
      copy.style.visibility = out >= 1 ? "hidden" : "";
      const shown = clamp((y - CAPTION_FROM * svh) / ((CAPTION_TO - CAPTION_FROM) * svh));
      fades.forEach((el) => (el.style.opacity = String(shown)));
      debug?.show({ status: "active", svh, w0, wEnd, scrollY: y, archNow: w });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      update();
    };

    measure();
    // Sizes unreadable (very old browser): leave the still doorway
    if (!(w0 > 0 && wEnd > 0 && svh > 0)) {
      debug?.show({ status: "still doorway: sizes unreadable", svh, w0, wEnd });
      probe.remove();
      return () => debug?.remove();
    }
    stage.classList.add("hero-js");
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      probe.remove();
      debug?.remove();
      stage.classList.remove("hero-js");
      frame.style.removeProperty("--arch-w");
      copy.removeAttribute("style");
      fades.forEach((el) => el.style.removeProperty("opacity"));
    };
  }, []);

  return <span ref={ref} hidden />;
}

// Small on-screen readout for checking a real phone (?debug=hero)
function makeDebugPanel() {
  const el = document.createElement("div");
  el.style.cssText =
    "position:fixed;left:8px;top:80px;z-index:9999;max-width:calc(100vw - 16px);padding:8px 10px;background:rgba(0,0,0,.8);color:#fff;font:11px/1.45 ui-monospace,Menlo,monospace;border-radius:6px;pointer-events:none;white-space:pre-wrap";
  document.body.appendChild(el);
  const ua = navigator.userAgent;
  const engine = /CriOS/.test(ua)
    ? "Chrome on iPhone (WebKit)"
    : /iPhone|iPad/.test(ua)
      ? "Safari on iPhone (WebKit)"
      : /Chrome/.test(ua)
        ? "Chrome"
        : /Safari/.test(ua)
          ? "Safari"
          : "other";
  const round = (v) => (typeof v === "number" ? Math.round(v) : v);
  return {
    show(data) {
      el.textContent = [
        `hero script v4 · ${engine}`,
        `screen ${window.innerWidth}×${window.innerHeight}`,
        ...Object.entries(data).map(([k, v]) => `${k}: ${round(v)}`),
      ].join("\n");
    },
    remove() {
      el.remove();
    },
  };
}
