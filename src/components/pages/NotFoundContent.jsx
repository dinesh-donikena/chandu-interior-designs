"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

// "Page not found", in the site's own voice: the doorway from the home page,
// standing empty.
export default function NotFoundContent() {
  const { t, path } = useLanguage();
  const nf = t.notFound;

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-20 py-24 md:py-32 text-center">
      <div
        className="mx-auto mb-10 w-24 h-[134px] rounded-t-full border border-b-0 border-accent/60"
        aria-hidden="true"
      />
      <p className="eyebrow mb-4">{nf.label}</p>
      <h1 className="font-display text-4xl md:text-5xl text-primary mb-6">
        {nf.title}
      </h1>
      <p className="text-lg text-on-surface-muted max-w-xl mx-auto leading-relaxed mb-10">
        {nf.text}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={path("/")}
          className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-accent-dark transition-colors"
        >
          {nf.home}
        </Link>
        <Link
          href={path("/portfolio")}
          className="inline-flex items-center justify-center border border-primary/25 text-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] hover:border-primary transition-colors"
        >
          {nf.work}
        </Link>
      </div>
    </section>
  );
}
