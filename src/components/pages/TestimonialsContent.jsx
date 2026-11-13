import ClosingCta from "@/components/ClosingCta";
import PageHeader from "@/components/PageHeader";
import { localePath } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { wrap } from "@/lib/ui";

// Quotes only. How the work proceeds lives on Services, and the rooms
// live on Portfolio.
export default function TestimonialsContent({ lang }) {
  const t = translations[lang];
  const ts = t.testimonials;

  return (
    <>
      <PageHeader eyebrow={ts.label} title={ts.title} intro={ts.intro} />

      <section className={`${wrap} pb-16 md:pb-24`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ts.items.map((item) => (
            <figure key={item.name} className="bg-card border border-outline-light/80 p-7 md:p-8 m-0 flex flex-col">
              <blockquote className="flex-1">
                <p className="testimonial-quote type-h3 text-primary">{item.quote}</p>
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-outline-light">
                <p className="type-small text-primary">{item.name}</p>
                <p className="type-small text-on-surface-muted mt-1">{item.project}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ClosingCta heading={ts.ctaHeading} button={ts.ctaButton} href={localePath(lang, "/contact")} />
    </>
  );
}
