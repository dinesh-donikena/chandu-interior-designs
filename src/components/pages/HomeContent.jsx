import Image from "next/image";
import Link from "next/link";
import ClosingCta from "@/components/ClosingCta";
import HeroScroll from "@/components/HeroScroll";
import { ArrowDown, ArrowRight, Plus } from "@/components/icons";
import { localePath } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { btnPrimary, wrap } from "@/lib/ui";

// Home is the overview only: the doorway, what we do in one line, three
// claims already written for the company, the questions, and a way onward.
export default function HomeContent({ lang }) {
  const t = translations[lang];
  const path = (to) => localePath(lang, to);
  const names = [
    t.services.categories[0].title,
    t.services.categories[1].title,
    t.services.categories[2].title,
    t.services.categories[2].items[2],
    t.services.categories[2].items[3],
    t.services.categories[2].items[4],
  ];

  return (
    <>
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
            <p className="eyebrow eyebrow-centred mb-4">{t.home.heroEyebrow}</p>
            <h1 className="type-display text-primary mx-auto text-balance">
              {t.home.heroTitle1}{" "}
              <em className="italic text-accent">{t.home.heroTitle2}</em>
            </h1>
            <div className="flex flex-wrap justify-center mt-8">
              <Link href={path("/services")} className={`${btnPrimary} group`}>
                {t.home.servicesMore}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <a
              href="#overview"
              className="hero-cue mt-5 inline-flex items-center min-h-12 gap-2 type-small text-primary hover:text-accent transition-colors"
            >
              {t.home.heroCue}
              <ArrowDown className="hero-cue-arrow w-4 h-4" />
            </a>
          </div>

          <p className="hero-caption type-small text-white/90">{t.home.heroCaption}</p>
        </div>
      </section>

      <section id="overview" className={`${wrap} scroll-mt-(--nav-h) py-10 md:py-20`}>
        <p className="type-body text-on-surface-muted mb-8">{t.services.intro}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-3">
          {names.map((name) => (
            <li key={name}>
              <Link href={path("/services")} className="type-body text-primary border-b border-accent/50 hover:text-accent transition-colors">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-outline-light/70 bg-surface-low">
        <div className={`${wrap} py-10 md:py-16`}>
          <h2 className="type-h2 text-primary mb-8">{t.home.introHeading}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.home.promise.map((item) => (
              <li key={item} className="type-h3 text-primary border-t border-accent pt-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className={`${wrap} py-10 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start`}>
          <div className="lg:col-span-4">
            <h2 className="type-h2 text-primary mb-4">{t.home.faqHeading}</h2>
            <p className="type-body text-on-surface-muted">{t.home.faqNote}</p>
          </div>
          <div className="lg:col-span-8 border-t border-outline-light">
            {t.home.faq.map((item) => (
              <details key={item.q} className="faq-item border-b border-outline-light">
                <summary className="flex items-center justify-between gap-6 py-4 type-body font-medium text-primary hover:text-accent transition-colors">
                  {item.q}
                  <Plus className="faq-icon w-5 h-5 shrink-0 text-accent" />
                </summary>
                <p className="type-body text-on-surface-muted pb-6 -mt-1">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta heading={t.home.ctaHeading} button={t.home.servicesMore} href={path("/services")} />
    </>
  );
}
