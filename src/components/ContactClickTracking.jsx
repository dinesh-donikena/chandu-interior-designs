"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// Counts taps on any WhatsApp or phone link, anywhere on the site, so we can
// see which pages actually bring enquiries. One listener on the document
// covers every such link, including ones added later. No personal data is
// sent — just the event name and the page it happened on.
export default function ContactClickTracking() {
  useEffect(() => {
    const onClick = (event) => {
      const href = event.target.closest?.("a[href]")?.getAttribute("href");
      if (!href) return;
      if (href.startsWith("https://wa.me")) {
        track("whatsapp_click", { page: window.location.pathname });
      } else if (href.startsWith("tel:")) {
        track("call_click", { page: window.location.pathname });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
