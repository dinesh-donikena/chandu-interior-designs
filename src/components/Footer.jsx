import Link from "next/link";
import Logo from "@/components/Logo";
import { localePath } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { translations } from "@/lib/translations";
import { wrap } from "@/lib/ui";

const heading = "block text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-5";
const link = "text-on-surface-muted hover:text-primary transition-colors text-base";

export default function Footer({ lang }) {
  const t = translations[lang];
  const path = (to) => localePath(lang, to);

  return (
    <footer className="bg-surface-container grain">
      <div className={`${wrap} grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 pt-20 pb-16`}>
        <div className="col-span-2 lg:col-span-5">
          <h2>
            <Logo lang={lang} large />
          </h2>
          <p className="text-base text-on-surface-muted max-w-xs leading-relaxed mt-5">{t.footer.tagline}</p>
        </div>

        <nav className="lg:col-span-2 flex flex-col gap-3" aria-label={t.footer.pages}>
          <span className={heading}>{t.footer.pages}</span>
          <Link href={path("/portfolio")} className={link}>
            {t.nav.portfolio}
          </Link>
          <Link href={path("/services")} className={link}>
            {t.nav.services}
          </Link>
          <Link href={path("/testimonials")} className={link}>
            {t.nav.testimonials}
          </Link>
          <Link href={path("/contact")} className={link}>
            {t.footer.contactUs}
          </Link>
        </nav>

        <div className="lg:col-span-2 flex flex-col gap-3">
          <span className={heading}>{t.footer.connect}</span>
          <a href={SITE.phoneHref} className={`${link} whitespace-nowrap`}>
            {SITE.phoneDisplay}
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className={link}>
            WhatsApp
          </a>
          {SITE.instagram && (
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={link}>
              Instagram
            </a>
          )}
          {SITE.email && (
            <a href={`mailto:${SITE.email}`} className={`${link} break-all`}>
              {SITE.email}
            </a>
          )}
        </div>

        <div className="col-span-2 lg:col-span-3">
          <span className={heading}>{t.footer.office}</span>
          <p className="text-on-surface-muted text-base leading-relaxed whitespace-pre-line">{t.footer.address}</p>
          <a
            href={SITE.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary border-b border-accent pb-0.5 hover:text-accent transition-colors"
          >
            {t.contact.openMap}
          </a>
        </div>
      </div>

      <div className={wrap}>
        {/* Right padding on phones keeps the line clear of the floating
            WhatsApp/call buttons, which sit over this corner at page end. */}
        <p className="border-t border-outline-light py-6 text-xs font-semibold text-on-surface-muted pr-20 md:pr-0">
          &copy; {new Date().getFullYear()} {t.brand.full}, {t.footer.city}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
