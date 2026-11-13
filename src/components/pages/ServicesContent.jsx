import ClosingCta from "@/components/ClosingCta";
import PageHeader from "@/components/PageHeader";
import { Tick } from "@/components/icons";
import { localePath } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { numeral, wrap } from "@/lib/ui";

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
      <section className={`${wrap} pb-24 md:pb-36`}>
        {sv.categories.map((cat, i) => (
          <div
            key={cat.key}
            id={cat.key}
            className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-primary py-12 md:py-20"
          >
            <div data-reveal className="lg:col-span-4">
              <p className="font-display italic text-5xl md:text-6xl leading-none text-accent mb-6">
                {numeral(i)}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">{cat.title}</h2>
              <p className="text-base text-on-surface-muted leading-relaxed max-w-sm">{cat.tagline}</p>
            </div>
            <ul
              data-reveal
              style={{ "--reveal-delay": "120ms" }}
              className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3.5 lg:pt-[4.5rem]"
            >
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
            <div key={m.name} className="bg-card p-6">
              <p className="font-display italic text-xl text-accent mb-3">{numeral(i)}</p>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-2">{m.name}</h3>
              <p className="text-[15px] text-on-surface-muted leading-relaxed">{m.brands}</p>
            </div>
          ))}
        </div>
      </section>

      <ClosingCta
        heading={sv.ctaHeading}
        button={sv.ctaButton}
        href={localePath(lang, "/contact")}
        whatsapp={t.home.ctaWhatsApp}
      />
    </>
  );
}
