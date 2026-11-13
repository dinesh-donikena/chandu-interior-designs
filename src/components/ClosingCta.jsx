import Link from "next/link";
import { btnPrimary, wrap } from "@/lib/ui";

// The dark band that closes a page with an invitation. A hairline arch
// (two brass lines, like a carved door frame) stands behind the words, so
// the band reads as an open doorway without saying so. Drawn in CSS
// (.cta-arch in globals.css), wide enough that no text ever crosses it.
export default function ClosingCta({ heading, text, button, href }) {
  return (
    <section className="relative overflow-hidden bg-primary text-center">
      <div className="cta-arch" aria-hidden="true" />
      <div className={`${wrap} relative py-16 md:py-24`}>
        <h2 className="type-h2 text-white mx-auto mb-6">
          {heading}
        </h2>
        {text && (
          <p className="type-body text-primary-light mx-auto mb-8">
            {text}
          </p>
        )}
        <div data-reveal className={`dock-safe flex flex-col sm:flex-row gap-4 justify-center ${text ? "" : "mt-10"}`}>
          <Link href={href} className={btnPrimary}>
            {button}
          </Link>
        </div>
      </div>
    </section>
  );
}
