import { WhatsAppIcon } from "@/components/icons";
import { translations } from "@/lib/translations";
import { btnPrimary, btnSecondary, btnWhatsApp, wrap } from "@/lib/ui";

// Hidden sample of the type scale and the three buttons, so the pairing
// can be compared with the previous site. Not linked and not indexed.
export default function DesignSpecimen({ lang }) {
  const t = translations[lang];
  return (
    <section className={`${wrap} py-16 md:py-24`}>
      <p className="type-small text-accent mb-4">H1</p>
      <h1 className="type-h1 text-primary mb-8">
        {t.home.heroTitle1} {t.home.heroTitle2}
      </h1>
      <p className="type-small text-accent mb-3">H2</p>
      <h2 className="type-h2 text-primary mb-8">{t.home.introHeading}</h2>
      <p className="type-small text-accent mb-3">H3</p>
      <h3 className="type-h3 text-primary mb-8">{t.services.categories[0].title}</h3>
      <p className="type-small text-accent mb-3">Body</p>
      <p className="type-body text-on-surface-muted mb-10">{t.services.intro}</p>
      <div className="flex flex-wrap gap-3">
        <span className={btnPrimary}>{t.home.servicesMore}</span>
        <span className={btnSecondary}>{t.nav.portfolio}</span>
        <span className={btnWhatsApp}>
          <WhatsAppIcon className="w-5 h-5" />
          {t.common.whatsappLabel}
        </span>
      </div>
    </section>
  );
}
