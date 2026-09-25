"use client";

import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE } from "@/lib/site";

// Real photos and video stills from the Hanamakonda home — no stock. Portrait
// shots get arch-topped frames, echoing the carved arch the studio is known
// for. Titles/locations come from translations by index.
const work = [
  {
    image: "/portfolio/hanamakonda-hall-arch.jpg",
    className: "col-span-12",
    frame: "aspect-[16/10] md:aspect-[16/7]",
    sizes: "(min-width: 1280px) 1120px, 100vw",
  },
  {
    image: "/portfolio/hanamakonda-kitchen.jpg",
    className: "col-span-12 md:col-span-6",
    frame: "aspect-[4/3]",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  {
    image: "/portfolio/hanamakonda-pooja-door.jpg",
    className: "col-span-6 md:col-span-3",
    frame: "aspect-[2/3] rounded-t-full",
    sizes: "(min-width: 768px) 25vw, 50vw",
  },
  {
    image: "/portfolio/hanamakonda-tv-unit.jpg",
    className: "col-span-6 md:col-span-3",
    frame: "aspect-[2/3] rounded-t-full",
    sizes: "(min-width: 768px) 25vw, 50vw",
  },
  {
    image: "/portfolio/hanamakonda-bedroom-olive.jpg",
    className: "col-span-12 md:col-span-6",
    frame: "aspect-[16/10]",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  {
    image: "/portfolio/hanamakonda-bedroom-white.jpg",
    className: "col-span-12 md:col-span-6",
    frame: "aspect-[16/10]",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-accent-dark transition-colors duration-300";

export default function HomeContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero — the arched doorway (behaviour lives in globals.css) */}
      <section className="hero-stage">
        <div className="hero-frame">
          <HeroVideo />
          <div className="hero-scrim" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow mb-4 md:mb-6">{t.home.heroEyebrow}</p>
            <h1 className="font-display font-medium text-primary text-[2.1rem] leading-[1.12] md:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] lg:leading-[1.06] tracking-tight">
              {t.home.heroTitle1}
              <br />
              <em className="italic text-accent">{t.home.heroTitle2}</em>
            </h1>

            <div className="hidden lg:flex flex-wrap gap-4 mt-10">
              <Link href="/portfolio" className={`${btnPrimary} group`}>
                {t.home.heroCta}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-primary/25 text-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] hover:border-primary transition-colors duration-300"
              >
                {t.home.ctaWhatsApp}
              </a>
            </div>

            <a
              href="#intro"
              className="mt-5 lg:mt-12 inline-flex items-center gap-2 self-start text-[11px] font-semibold uppercase tracking-[0.2em] text-on-surface-muted hover:text-accent transition-colors"
            >
              {t.home.heroCue}
              <svg className="hero-cue-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.5v15m0 0l-6-6m6 6l6-6" />
              </svg>
            </a>
          </div>

          <p className="hero-caption text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            {t.home.heroCaption}
          </p>
        </div>
      </section>

      {/* Introduction — the name itself is the story */}
      <section
        id="intro"
        className="scroll-mt-[73px] py-24 md:py-32 max-w-[1280px] mx-auto px-5 md:px-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p lang="te" className="font-display text-6xl md:text-7xl text-accent leading-none mb-6">
              మన ఇల్లు
            </p>
            <p className="text-sm text-on-surface-muted max-w-xs leading-relaxed">
              {t.home.nameMeaning}
            </p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] text-primary mb-6 leading-tight">
              {t.home.introHeading}
            </h2>
            <p className="text-lg text-secondary mb-4 leading-relaxed">
              {t.home.introP1}
            </p>
            <p className="text-base text-on-surface-muted">{t.home.introP2}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface-low grain border-y border-outline-light/70">
        <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-24 md:py-32">
          <p className="eyebrow mb-4">{t.home.servicesLabel}</p>
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-14 md:mb-20">
            {t.home.servicesHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-14">
            {t.home.services.map((service, i) => (
              <div key={service.title} className="border-t border-primary pt-6">
                <p className="font-display text-sm text-accent mb-8 md:mb-12">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl md:text-[1.7rem] text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-on-surface-muted leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work — one real home, room by room */}
      <section className="py-24 md:py-32 max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-14 gap-6">
          <div>
            <p className="eyebrow mb-4">{t.home.portfolioLabel}</p>
            <h2 className="font-display text-3xl md:text-5xl text-primary leading-tight">
              {t.home.portfolioHeading}
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-primary border-b border-accent pb-1 hover:text-accent transition-colors"
          >
            {t.home.portfolioLink}
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-x-4 gap-y-10 md:gap-x-7 md:gap-y-12">
          {t.home.projects.map((project, i) => (
            <figure key={work[i].image} className={`${work[i].className} group m-0`}>
              <div className={`relative overflow-hidden bg-surface-high ${work[i].frame}`}>
                <Image
                  src={work[i].image}
                  alt={project.title}
                  fill
                  sizes={work[i].sizes}
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mt-3 pt-3 border-t border-outline-light">
                <span className="font-display text-base md:text-xl text-primary">
                  {project.title}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-muted">
                  {project.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ — native <details> so it works without JS and Google can read it */}
      <section className="bg-surface-low grain border-t border-outline-light/70">
        <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="eyebrow mb-4">{t.home.faqLabel}</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-5">
              {t.home.faqHeading}
            </h2>
            <p className="text-base text-on-surface-muted leading-relaxed">
              {t.home.faqNote}{" "}
              <a
                href={SITE.phoneHref}
                className="text-primary font-semibold border-b border-accent whitespace-nowrap hover:text-accent transition-colors"
              >
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>

          <div className="lg:col-span-8 border-t border-outline-light">
            {t.home.faq.map((item) => (
              <details key={item.q} className="faq-item border-b border-outline-light">
                <summary className="flex items-center justify-between gap-6 py-6 text-base md:text-lg font-semibold text-primary">
                  {item.q}
                  <svg
                    className="faq-icon w-5 h-5 shrink-0 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </summary>
                <p className="pb-7 -mt-1 pr-6 md:pr-14 text-base text-on-surface-muted leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 md:py-32 text-center">
        <div className="max-w-[1280px] mx-auto px-5 md:px-20">
          <h2 className="font-display text-3xl md:text-5xl text-white mb-8">
            {t.home.ctaHeading}
          </h2>
          <p className="text-lg text-primary-light mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.home.ctaText}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/contact" className={`${btnPrimary} px-10 py-5`}>
              {t.home.ctaButton}
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-10 py-5 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-white/10 transition-colors duration-300"
            >
              {t.home.ctaWhatsApp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
