"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE } from "@/lib/site";

const serviceIcons = [
  <svg key="home" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5M10.5 21V9.75M3.75 21V9.75m0 0l7.5-6.75 3.75 3.375M3.75 9.75h16.5" />
  </svg>,
  <svg key="office" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>,
  <svg key="plan" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>,
];

// Real photos from the Hanamakonda renovation. Slot shape follows the
// photo's own shape — the landscape kitchen gets the wide cell, the two
// portrait shots get tall narrow cells — so nothing is cropped to a sliver.
const projectImages = [
  {
    image: "/portfolio/hanamakonda-hall-arch.jpg",
    className: "col-span-12 aspect-[16/10] md:aspect-[16/7]",
  },
  {
    image: "/portfolio/hanamakonda-kitchen.jpg",
    className: "col-span-12 md:col-span-6 aspect-[16/10]",
  },
  {
    image: "/portfolio/hanamakonda-tv-unit.jpg",
    className: "col-span-6 md:col-span-3 aspect-[2/3]",
  },
  {
    image: "/portfolio/hanamakonda-wash-counter.jpg",
    className: "col-span-6 md:col-span-3 aspect-[2/3]",
  },
];

export default function HomeContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero — native Indian home behind a bottom-up scrim so the heading
          stays readable; same crop on every screen. */}
      <section className="relative h-[88vh] min-h-[560px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1713192704825-74a0017f585d?auto=format&fit=crop&w=1920&q=75"
            alt="Warm Indian living room with an arched opening, marble floor and ceiling fan"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-scrim absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-20 w-full pb-14 md:pb-20">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.15] tracking-tight">
              {t.home.heroTitle1}
              <br />
              {t.home.heroTitle2}
            </h1>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-accent-dark transition-colors duration-300 group"
            >
              {t.home.heroCta}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction — stays stacked until lg. On tablet the big heading in a
          narrow column was colliding with the paragraph, so the split only
          kicks in on wide screens. */}
      <section className="py-20 md:py-28 lg:py-32 max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight">
              {t.home.introHeading}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-secondary mb-4 leading-relaxed">
              {t.home.introP1}
            </p>
            <p className="text-base text-on-surface-muted">{t.home.introP2}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-surface-low">
        <div className="max-w-[1280px] mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent block mb-4">
              {t.home.servicesLabel}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              {t.home.servicesHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.home.services.map((service, i) => (
              <div
                key={service.title}
                className="p-10 bg-surface border border-outline-light/60 hover:border-accent hover:shadow-[0_6px_28px_rgba(46,42,36,0.08)] transition-all duration-500 relative group overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="text-accent mb-6">{serviceIcons[i]}</div>
                  <h3 className="font-display text-2xl mb-4 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-base text-secondary">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent block mb-4">
              {t.home.portfolioLabel}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-primary">
              {t.home.portfolioHeading}
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-xs font-semibold uppercase tracking-[0.1em] text-accent border-b border-accent pb-1 hover:text-accent-dark hover:border-accent-dark transition-colors"
          >
            {t.home.portfolioLink}
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-6 items-start">
          {t.home.projects.map((project, i) => (
            <div
              key={project.title}
              className={`${projectImages[i].className} relative group overflow-hidden`}
            >
              <Image
                src={projectImages[i].image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="reveal-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="text-center px-6">
                  <h4 className="font-display text-2xl text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-xs text-white/80 uppercase tracking-[0.1em] font-semibold">
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — native <details> so it works without JS and Google can read it */}
      <section className="py-24 md:py-32 bg-surface-low">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent block mb-4">
              {t.home.faqLabel}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              {t.home.faqHeading}
            </h2>
          </div>

          <div className="space-y-3">
            {t.home.faq.map((item) => (
              <details
                key={item.q}
                className="faq-item bg-surface ghost-border rounded-lg px-6 md:px-8"
              >
                <summary className="flex items-center justify-between gap-6 py-5 text-base md:text-lg font-semibold text-primary">
                  {item.q}
                  <svg
                    className="faq-icon w-5 h-5 shrink-0 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </summary>
                <p className="pb-6 -mt-1 text-base text-on-surface-muted leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center">
        <div className="max-w-[1280px] mx-auto px-5 md:px-20">
          <h2 className="font-display text-3xl md:text-5xl text-white mb-8">
            {t.home.ctaHeading}
          </h2>
          <p className="text-lg text-primary-light/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.home.ctaText}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-white px-10 py-5 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-accent-dark transition-colors duration-300"
            >
              {t.home.ctaButton}
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-10 py-5 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-white/10 transition-colors duration-300"
            >
              {t.home.ctaWhatsApp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
