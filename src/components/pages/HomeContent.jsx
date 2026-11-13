import Image from "next/image";
import Link from "next/link";
import ClosingCta from "@/components/ClosingCta";
import HeroScroll from "@/components/HeroScroll";
import { ArrowDown, ArrowRight, Plus, Tick } from "@/components/icons";
import { localePath } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { translations } from "@/lib/translations";
import { btnPrimary, numeral, textLink, wrap } from "@/lib/ui";

// Real photos of the Hanamakonda home — no stock. Titles come from
// translations (home.projects) by index. The hall arch opens the section
// edge to edge; the rest follow in a grid. Frames stay rectangular: an arch
// top would clip the carved symbols in the corners of the pooja panel.
const FEATURE = "/portfolio/hanamakonda-hall-arch.jpg";
const GRID = [
  {
    image: "/portfolio/hanamakonda-kitchen.jpg",
    className: "col-span-12 md:col-span-6",
    frame: "aspect-[4/3]",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  {
    image: "/portfolio/hanamakonda-pooja-panel.jpg",
    className: "col-span-6 md:col-span-3",
    frame: "aspect-[2/3]",
    sizes: "(min-width: 768px) 25vw, 50vw",
  },
  {
    image: "/portfolio/hanamakonda-tv-unit.jpg",
    className: "col-span-6 md:col-span-3",
    frame: "aspect-[2/3]",
    sizes: "(min-width: 768px) 25vw, 50vw",
  },
  {
    image: "/portfolio/hanamakonda-bedroom-olive.jpg",
    className: "col-span-12 md:col-span-8",
    frame: "aspect-[16/10]",
    sizes: "(min-width: 768px) 66vw, 100vw",
  },
  {
    image: "/portfolio/hanamakonda-wash-counter.jpg",
    className: "col-span-12 md:col-span-4",
    frame: "aspect-[4/5]",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
];
// Photos in the same row arrive one after another
const DELAYS = [0, 120, 240, 0, 120];

function Caption({ title, location }) {
  return (
    <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mt-3 pt-3 border-t border-outline-light">
      <span className="font-display text-base md:text-xl text-primary">{title}</span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-muted">
        {location}
      </span>
    </figcaption>
  );
}

export default function HomeContent({ lang }) {
  const t = translations[lang];
  const path = (to) => localePath(lang, to);
  const [feature, ...rest] = t.home.projects;

  return (
    <>
      {/* Hero — the TV unit in an arched doorway that grows into a full
          frame as you scroll (HeroScroll + .hero-* in globals.css) */}
      <section className="hero-stage">
        <HeroScroll />
        <div className="hero-frame">
          <div className="hero-door">
            <Image
              src="/portfolio/hanamakonda-tv-unit.jpg"
              alt={t.home.heroPhotoAlt}
              fill
              preload
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="hero-scrim" aria-hidden="true" />
          </div>

          <div className="hero-copy">
            <p className="eyebrow eyebrow-centred mb-3 md:mb-5">{t.home.heroEyebrow}</p>
            <h1 className="font-display font-medium text-primary text-[2.05rem] leading-[1.12] md:text-5xl lg:text-[3.3rem] xl:text-[3.8rem] lg:leading-[1.08] tracking-tight">
              {t.home.heroTitle1} <br className="lg:hidden" />
              <em className="italic text-accent">{t.home.heroTitle2}</em>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-7 lg:mt-8">
              <Link href={path("/portfolio")} className={`${btnPrimary} group`}>
                {t.home.heroCta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <a
              href="#intro"
              className="hero-cue mt-4 md:mt-6 inline-flex items-center min-h-11 gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors"
            >
              {t.home.heroCue}
              <ArrowDown className="hero-cue-arrow w-4 h-4" />
            </a>
          </div>

          <p className="hero-caption text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            {t.home.heroCaption}
          </p>
        </div>
      </section>

      {/* Introduction — the name, and the promise behind it */}
      <section id="intro" className={`${wrap} scroll-mt-(--nav-h) py-24 md:py-36`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div data-reveal className="lg:col-span-5">
            <p lang="te" className="font-display text-6xl md:text-7xl lg:text-8xl text-accent leading-none mb-8">
              సుమ శ్రీ
            </p>
            <ul className="space-y-3">
              {t.home.promise.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-primary"
                >
                  <span className="w-6 h-px bg-accent shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ "--reveal-delay": "120ms" }} className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] text-primary mb-6 leading-tight">
              {t.home.introHeading}
            </h2>
            <p className="text-lg text-secondary mb-4 leading-relaxed">{t.home.introP1}</p>
            <p className="text-base text-on-surface-muted">{t.home.introP2}</p>
          </div>
        </div>
      </section>

      {/* Work — one real home, room by room, ahead of the service lists:
          the photos speak first. (No top padding: the intro's bottom
          padding already makes the gap.) */}
      <section className="pb-24 md:pb-36">
        <div className={`${wrap} flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-14 gap-6`}>
          <div data-reveal>
            <p className="eyebrow mb-4">{t.home.portfolioLabel}</p>
            <h2 className="font-display text-3xl md:text-5xl text-primary leading-tight">
              {t.home.portfolioHeading}
            </h2>
          </div>
          <Link href={path("/portfolio")} className={`${textLink} shrink-0`}>
            {t.home.portfolioLink}
          </Link>
        </div>

        {/* The hall arch, edge to edge */}
        <figure className="group m-0">
          <div
            data-reveal="photo"
            className="relative w-full aspect-[16/10] md:aspect-[16/7] max-h-[85svh] overflow-hidden bg-surface-high"
          >
            <Image
              src={FEATURE}
              alt={feature.title}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
            />
          </div>
          <div className={wrap}>
            <Caption {...feature} />
          </div>
        </figure>

        <div className={`${wrap} grid grid-cols-12 gap-x-4 gap-y-10 md:gap-x-7 md:gap-y-14 mt-12 md:mt-16`}>
          {rest.map((project, i) => (
            <figure key={GRID[i].image} className={`${GRID[i].className} group m-0`}>
              <div
                data-reveal="photo"
                style={{ "--reveal-delay": `${DELAYS[i]}ms` }}
                className={`relative overflow-hidden bg-surface-high ${GRID[i].frame}`}
              >
                <Image
                  src={GRID[i].image}
                  alt={project.title}
                  fill
                  sizes={GRID[i].sizes}
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <Caption {...project} />
            </figure>
          ))}
        </div>
      </section>

      {/* Services — the three things we do, with a taste of each list */}
      <section className="bg-surface-low grain border-y border-outline-light/70">
        <div className={`${wrap} py-24 md:py-36`}>
          <div data-reveal>
            <p className="eyebrow mb-4">{t.home.servicesLabel}</p>
            <h2 className="font-display text-3xl md:text-5xl text-primary mb-14 md:mb-20">
              {t.home.servicesHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 lg:gap-14">
            {t.services.categories.map((cat, i) => (
              <div
                key={cat.key}
                data-reveal
                style={{ "--reveal-delay": `${i * 120}ms` }}
                className="border-t border-primary pt-5"
              >
                <p className="font-display italic text-4xl md:text-[2.75rem] leading-none text-accent mb-7">
                  {numeral(i)}
                </p>
                <h3 className="font-display text-2xl md:text-[1.7rem] text-primary mb-3">{cat.title}</h3>
                <p className="text-base text-on-surface-muted leading-relaxed mb-6">{cat.tagline}</p>
                <ul className="space-y-2.5">
                  {cat.items.slice(0, 6).map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-primary leading-snug">
                      <Tick />
                      {item}
                    </li>
                  ))}
                  <li className="pl-7 text-[15px] text-on-surface-muted">{t.home.servicesAndMore}…</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-14 md:mt-20">
            <Link href={path("/services")} className={`${btnPrimary} group`}>
              {t.home.servicesMore}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — native <details> so it works without JS and Google can read it */}
      <section>
        <div className={`${wrap} py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start`}>
          <div data-reveal className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="eyebrow mb-4">{t.home.faqLabel}</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-5">{t.home.faqHeading}</h2>
            <p className="text-base text-on-surface-muted leading-relaxed">
              {t.home.faqNote}{" "}
              <a
                href={SITE.phoneHref}
                className="text-primary font-semibold border-b border-accent hover:text-accent transition-colors"
              >
                {t.home.faqCall}
              </a>
            </p>
          </div>

          <div data-reveal style={{ "--reveal-delay": "120ms" }} className="lg:col-span-8 border-t border-outline-light">
            {t.home.faq.map((item) => (
              <details key={item.q} className="faq-item border-b border-outline-light">
                <summary className="flex items-center justify-between gap-6 py-6 text-base md:text-lg font-semibold text-primary hover:text-accent transition-colors">
                  {item.q}
                  <Plus className="faq-icon w-5 h-5 shrink-0 text-accent" />
                </summary>
                <p className="pb-7 -mt-1 pr-6 md:pr-14 text-base text-on-surface-muted leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        heading={t.home.ctaHeading}
        text={t.home.ctaText}
        button={t.home.ctaButton}
        href={path("/contact")}
      />
    </>
  );
}
