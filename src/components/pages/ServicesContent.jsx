import Image from "next/image";
import ClosingCta from "@/components/ClosingCta";
import PageHeader from "@/components/PageHeader";
import { Tick } from "@/components/icons";
import { localePath } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { numeral, wrap } from "@/lib/ui";

// Real rooms from the Hanamakonda renovation, one beside each service.
// Alt text is the title already written for that photo.
const SERVICE_PHOTOS = {
  construction: { src: "/portfolio/hanamakonda-hall-arch.jpg", project: 3 },
  renovation: { src: "/portfolio/hanamakonda-kitchen.jpg", project: 1 },
  interiors: { src: "/portfolio/hanamakonda-tv-unit.jpg", project: 0 },
};

const chip =
  "inline-block px-4 py-2 rounded-full border border-outline-light bg-card text-sm text-primary";

export default function ServicesContent({ lang }) {
  const t = translations[lang];
  const sv = t.services;

  return (
    <>
      <PageHeader
        eyebrow={sv.categories.map((cat) => cat.title).join(" · ")}
        title={sv.title}
        intro={sv.intro}
      />

      {/* The three services, each with its full list */}
      <section className={`${wrap} pb-24 md:pb-36 flex flex-col gap-16 md:gap-24`}>
        {sv.categories.map((cat, i) => {
          const photo = SERVICE_PHOTOS[cat.key];
          return (
            <article
              key={cat.key}
              id={cat.key}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` }}
              className="service-card scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              <div
                data-door
                className={`service-photo relative aspect-[4/3] overflow-hidden bg-surface-high lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={photo.src}
                  alt={t.portfolio.projects[photo.project].title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1" : ""}`}>
                <p className="font-display italic text-5xl md:text-6xl leading-none text-accent mb-5">
                  {numeral(i)}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-3">{cat.title}</h2>
                <p className="text-base text-on-surface-muted leading-relaxed max-w-md mb-8">{cat.tagline}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {cat.items.map((item, n) => (
                    <li
                      key={item}
                      data-reveal
                      style={{ "--reveal-delay": `${180 + n * 40}ms` }}
                      className="flex gap-3 text-base text-primary leading-snug"
                    >
                      <Tick />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      {/* What we build + where */}
      <section className="bg-surface-low grain border-y border-outline-light/70">
        <div className={`${wrap} py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20`}>
          <div data-reveal>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-8">{sv.buildHeading}</h2>
            <div className="flex flex-wrap gap-2.5">
              {sv.buildTypes.map((type) => (
                <span key={type} className={chip}>
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div data-reveal style={{ "--reveal-delay": "120ms" }}>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">{sv.areasHeading}</h2>
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
      <section className={`${wrap} py-24 md:py-36`}>
        <div data-reveal>
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">{sv.materialsHeading}</h2>
          <p className="text-base text-on-surface-muted mb-12 max-w-2xl">{sv.materialsNote}</p>
        </div>
        <div
          data-reveal
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-outline-light border border-outline-light"
        >
          {sv.materials.map((m, i) => (
            <div
              key={m.name}
              data-reveal
              style={{ "--reveal-delay": `${i * 50}ms` }}
              className="bg-card p-6"
            >
              <p className="font-display italic text-xl text-accent mb-3">{numeral(i)}</p>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-2">{m.name}</h3>
              <p className="text-[15px] text-on-surface-muted leading-relaxed">{m.brands}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${wrap} pb-4 md:pb-8`}>
        <ol data-door className="process-strip" aria-label={sv.processLabel}>
          {sv.process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <ClosingCta
        heading={sv.ctaHeading}
        button={sv.ctaButton}
        href={localePath(lang, "/contact")}
      />
    </>
  );
}
