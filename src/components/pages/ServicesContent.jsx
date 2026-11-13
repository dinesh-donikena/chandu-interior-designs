import ClosingCta from "@/components/ClosingCta";
import PageHeader from "@/components/PageHeader";
import ProcessSteps from "@/components/ProcessSteps";
import ServiceGallery from "@/components/ServiceGallery";
import { Tick } from "@/components/icons";
import { curatedPhotos } from "@/lib/curated-photos";
import { localePath } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { wrap } from "@/lib/ui";

// Services owns the work we do and the one way that work proceeds.
// Photos of finished rooms live on Portfolio; this page shows a short
// curated set so the lists are not only words.
export default function ServicesContent({ lang }) {
  const t = translations[lang];
  const sv = t.services;
  const steps = sv.process.map((title, i) => ({
    title,
    desc: t.testimonials.steps[i].desc,
  }));
  const photos = curatedPhotos(t.portfolio.projects);

  return (
    <>
      <PageHeader title={sv.title} intro={sv.intro} align="left" />

      <section className={`${wrap} pb-16 md:pb-24 flex flex-col gap-14 md:gap-20`}>
        {sv.categories.map((cat, i) => (
          <article key={cat.key} id={cat.key} className="border-t border-primary pt-6">
            <p className="type-small text-accent mb-3">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="type-h2 text-primary mb-3">{cat.title}</h2>
            <p className="type-body text-on-surface-muted mb-6">{cat.tagline}</p>
            <ul className="dock-safe grid grid-cols-2 gap-x-6 gap-y-2">
              {cat.items.map((item) => (
                <li key={item} className="flex gap-3 type-body text-primary">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <ProcessSteps
        label={sv.processLabel}
        heading={t.testimonials.processHeading}
        text={t.testimonials.processText}
        steps={steps}
      />

      <section className={`${wrap} py-16 md:py-24`}>
        <ServiceGallery photos={photos} labels={t.portfolio.viewer} />
      </section>

      <section className="bg-surface-low grain border-y border-outline-light/70">
        <div className={`${wrap} py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12`}>
          <div>
            <h2 className="type-h2 text-primary mb-6">{sv.buildHeading}</h2>
            <ul className="dock-safe flex flex-wrap gap-2">
              {sv.buildTypes.map((type) => (
                <li key={type} className="type-small px-3 py-2 rounded-full border border-outline-light bg-card text-primary">
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="type-h2 text-primary mb-3">{sv.areasHeading}</h2>
            <p className="type-body text-on-surface-muted mb-5">{sv.areasText}</p>
            <ul className="dock-safe flex flex-wrap gap-2">
              {sv.areas.map((area) => (
                <li key={area} className="type-small px-3 py-2 rounded-full border border-outline-light bg-card text-primary">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${wrap} dock-safe py-14 md:py-20`}>
        <h2 className="type-h2 text-primary mb-3">{sv.materialsHeading}</h2>
        <p className="type-body text-on-surface-muted mb-8">{sv.materialsNote}</p>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
          {sv.materials.map((m) => (
            <div key={m.name} className="border-t border-outline-light pt-3">
              <dt className="type-h3 text-primary">{m.name}</dt>
              <dd className="type-small text-on-surface-muted mt-1">{m.brands}</dd>
            </div>
          ))}
        </dl>
      </section>

      <ClosingCta
        heading={sv.ctaHeading}
        button={t.nav.portfolio}
        href={localePath(lang, "/portfolio")}
      />
    </>
  );
}
