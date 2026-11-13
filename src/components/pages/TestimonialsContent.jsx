import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { localePath } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { translations } from "@/lib/translations";
import { btnOutline, btnPrimary, numeral, wrap } from "@/lib/ui";

export default function TestimonialsContent({ lang }) {
  const t = translations[lang];
  const ts = t.testimonials;

  return (
    <>
      <PageHeader eyebrow={ts.label} title={ts.title} intro={ts.intro} />

      {/* What families say — each quote set like a printed page, the
          brass quotation mark above the words rather than behind them */}
      <section className={`${wrap} pb-24 md:pb-36`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ts.items.map((item, i) => (
            <figure
              key={item.name}
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` }}
              className="bg-card border border-outline-light/80 p-8 md:p-10 m-0 flex flex-col"
            >
              <span aria-hidden="true" className="font-display text-7xl leading-[0.6] h-8 text-accent">
                &ldquo;
              </span>
              <blockquote className="flex-1 mt-5">
                <p className="testimonial-quote font-display text-xl leading-relaxed text-primary">
                  {item.quote}
                </p>
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-outline-light">
                <p className="font-semibold text-primary">{item.name}</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-muted mt-1.5">
                  {item.project}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* How it works — four steps, each marked by a small arched doorway */}
      <section className="bg-surface-low grain border-y border-outline-light/70 py-24 md:py-36">
        <div className={wrap}>
          <div data-reveal className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
            <div className="max-w-xl">
              <p className="eyebrow mb-4">{ts.processLabel}</p>
              <h2 className="font-display text-3xl md:text-5xl text-primary">{ts.processHeading}</h2>
            </div>
            <p className="text-base text-on-surface-muted md:max-w-sm">{ts.processText}</p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
            {/* The line the four doorways stand on */}
            <span aria-hidden="true" className="hidden md:block absolute top-20 left-0 w-full h-px bg-outline-light" />
            {ts.steps.map((step, i) => (
              <li key={step.title} data-reveal style={{ "--reveal-delay": `${i * 120}ms` }} className="relative">
                <div className="w-16 h-20 mb-8 rounded-t-full border border-b-0 border-accent/60 bg-surface-low flex items-end justify-center pb-3">
                  <span className="font-display italic text-2xl text-accent">{numeral(i)}</span>
                </div>
                <h3 className="font-display text-2xl text-primary mb-3">{step.title}</h3>
                <p className="text-base text-on-surface-muted leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing — the photo shown whole beside the message; a card laid
          over a photo hides the very work it is meant to show */}
      <section className={`${wrap} py-24 md:py-36`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div data-reveal="photo" className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-surface-high">
            <Image
              src="/portfolio/hanamakonda-hall-arch.jpg"
              alt="Wood-carved teak hall arch opening onto the pooja room and kitchen"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div data-reveal style={{ "--reveal-delay": "120ms" }} className="lg:col-span-5 text-center lg:text-left">
            <h2 className="font-display text-3xl md:text-5xl text-primary mb-8 leading-tight">{ts.ctaHeading}</h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center lg:justify-start">
              <Link href={localePath(lang, "/contact")} className={btnPrimary}>
                {ts.ctaButton}
              </Link>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className={btnOutline}>
                {t.home.ctaWhatsApp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
