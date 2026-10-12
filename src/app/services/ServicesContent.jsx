"use client";

import Link from "next/link";
import Tick from "@/components/Tick";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE } from "@/lib/site";

const chip =
  "inline-block px-4 py-2 rounded-full border border-outline-light bg-card text-sm text-primary";

export default function ServicesContent() {
  const { t } = useLanguage();
  const sv = t.services;

  return (
    <>
      {/* Header */}
      <header className="pt-24 pb-14 md:pb-20 px-5 md:px-20 max-w-[1280px] mx-auto text-center">
        <p className="eyebrow mb-4">{t.home.servicesLabel}</p>
        <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
          {sv.title}
        </h1>
        <p className="text-lg text-on-surface-muted max-w-2xl mx-auto leading-relaxed">
          {sv.intro}
        </p>
      </header>

      {/* The three services, each with its full list */}
      <section className="px-5 md:px-20 max-w-[1280px] mx-auto pb-24 md:pb-32">
        {sv.categories.map((cat, i) => (
          <div
            key={cat.key}
            id={cat.key}
            className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-primary py-12 md:py-16"
          >
            <div className="lg:col-span-4">
              <p className="font-display text-sm text-accent mb-6">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                {cat.title}
              </h2>
              <p className="text-base text-on-surface-muted leading-relaxed max-w-sm">
                {cat.tagline}
              </p>
            </div>
            <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3.5 lg:pt-12">
              {cat.items.map((item) => (
                <li key={item} className="flex gap-3 text-base text-primary leading-snug">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* What we build + where */}
      <section className="bg-surface-low grain border-y border-outline-light/70">
        <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-8">
              {sv.buildHeading}
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {sv.buildTypes.map((type) => (
                <span key={type} className={chip}>
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
              {sv.areasHeading}
            </h2>
            <p className="text-base text-on-surface-muted mb-6">{sv.areasText}:</p>
            <div className="flex flex-wrap gap-2.5">
              {sv.areas.map((area) => (
                <span key={area} className={chip}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials & brands */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-20 py-24 md:py-32">
        <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">
          {sv.materialsHeading}
        </h2>
        <p className="text-base text-on-surface-muted mb-12 max-w-2xl">
          {sv.materialsNote}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-outline-light border border-outline-light">
          {sv.materials.map((m, i) => (
            <div key={m.name} className="bg-card p-6">
              <p className="font-display text-sm text-accent mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-2">
                {m.name}
              </h3>
              <p className="text-[15px] text-on-surface-muted leading-relaxed">{m.brands}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 md:py-28 text-center">
        <div className="max-w-[1280px] mx-auto px-5 md:px-20">
          <h2 className="font-display text-3xl md:text-5xl text-white mb-10">
            {sv.ctaHeading}
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent text-white px-10 py-5 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-accent-dark transition-colors"
            >
              {sv.ctaButton}
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-10 py-5 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-white/10 transition-colors"
            >
              {t.home.ctaWhatsApp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
