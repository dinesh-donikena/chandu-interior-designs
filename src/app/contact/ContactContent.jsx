"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { SITE } from "@/lib/site";

const labelClass =
  "block text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-2";
const inputClass =
  "w-full bg-transparent py-2 px-0 border-0 border-b border-outline-light focus:border-primary text-base transition-all";

export default function ContactContent() {
  const { t } = useLanguage();
  const f = t.contact.form;

  // The form hands off to WhatsApp with the message pre-filled — enquiries
  // land where the owner already replies, and there is no form backend or
  // API key that can quietly break.
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const services = [...form.querySelectorAll('input[name="service"]:checked')]
      .map((el) => el.value)
      .join(", ");
    const location = form.location.value.trim();

    const lines = [`${f.waHello} ${form.name.value.trim()}.`];
    if (services) lines.push(`${f.waNeed}: ${services}`);
    if (location) lines.push(`${f.waSite}: ${location}`);
    lines.push("", form.message.value.trim());

    window.open(
      `${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <>
      {/* Header */}
      <header className="pt-24 pb-12 px-5 md:px-20 max-w-[1280px] mx-auto text-center md:text-left">
        <h1 className="font-display text-4xl md:text-6xl text-primary mb-4">
          {t.contact.title}
        </h1>
        <p className="text-lg text-on-surface-muted max-w-2xl leading-relaxed">
          {t.contact.intro}
        </p>
      </header>

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-20 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-soft ghost-border p-6 sm:p-8 md:p-12 rounded-lg">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      {f.name}
                    </label>
                    <input
                      className={inputClass}
                      id="name"
                      name="name"
                      placeholder={f.namePlaceholder}
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="location">
                      {f.location}
                    </label>
                    <input
                      className={inputClass}
                      id="location"
                      name="location"
                      placeholder={f.locationPlaceholder}
                      type="text"
                      autoComplete="address-level2"
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className={labelClass}>{f.need}</legend>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {t.home.services.map((service) => (
                      <label key={service.title} className="cursor-pointer">
                        <input
                          type="checkbox"
                          name="service"
                          value={service.title}
                          className="peer sr-only"
                        />
                        <span className="inline-block px-4 py-2 rounded-full border border-outline-light text-sm text-secondary transition-colors peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 hover:border-accent">
                          {service.title}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label className={labelClass} htmlFor="message">
                    {f.message}
                  </label>
                  <textarea
                    className={`${inputClass} resize-none`}
                    id="message"
                    name="message"
                    placeholder={f.messagePlaceholder}
                    rows={4}
                    required
                  />
                </div>
                <div className="pt-2 space-y-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 md:px-10 py-4 text-xs font-semibold uppercase tracking-[0.1em] bg-accent text-white hover:bg-accent-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={WHATSAPP_PATH} />
                    </svg>
                    {f.send}
                  </button>
                  <p className="text-sm text-on-surface-muted">{f.sendNote}</p>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-outline mb-4">
                {t.contact.infoHeading}
              </h2>
              <div className="space-y-5">
                <a href={SITE.phoneHref} className="flex items-start gap-4 group">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
                  </svg>
                  <span>
                    <span className="block text-base text-on-surface group-hover:text-accent transition-colors">
                      {SITE.phoneDisplay}
                    </span>
                    <span className="block text-xs font-semibold text-on-surface-muted">
                      {t.contact.hours}
                    </span>
                  </span>
                </a>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={WHATSAPP_PATH} />
                  </svg>
                  <span>
                    <span className="block text-base text-on-surface group-hover:text-accent transition-colors">
                      WhatsApp
                    </span>
                    <span className="block text-xs font-semibold text-on-surface-muted">
                      {t.contact.responseTime}
                    </span>
                  </span>
                </a>
                {SITE.email && (
                  <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 group">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="text-base text-on-surface group-hover:text-accent transition-colors break-all">
                      {SITE.email}
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Address + real map */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-outline mb-4">
                {t.contact.officeHeading}
              </h2>
              <div className="flex items-start gap-4 mb-5">
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-base text-on-surface whitespace-pre-line">
                    {t.contact.address}
                  </p>
                  <a
                    href={SITE.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent border-b border-accent pb-0.5 hover:text-accent-dark hover:border-accent-dark transition-colors"
                  >
                    {t.contact.openMap}
                  </a>
                </div>
              </div>
              <div className="w-full aspect-video rounded-lg overflow-hidden ghost-border bg-surface-container">
                <iframe
                  src={SITE.mapsEmbed}
                  title={t.contact.mapTitle}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container ghost-border rounded-full hover:bg-surface-high transition-colors"
            >
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="text-xs font-semibold text-on-surface">
                {t.contact.instagram}
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const WHATSAPP_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";
