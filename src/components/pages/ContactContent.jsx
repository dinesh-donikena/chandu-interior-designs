import EnquiryForm from "@/components/EnquiryForm";
import PageHeader from "@/components/PageHeader";
import { InstagramIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { SITE } from "@/lib/site";
import { translations } from "@/lib/translations";
import { wrap } from "@/lib/ui";

const heading = "text-xs font-semibold uppercase tracking-[0.12em] text-outline mb-5";

// One way to reach us: an icon, the main line, and a small note beneath.
function Channel({ href, icon, children, note, external = false, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex items-center gap-4 min-h-11 py-1 group"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="text-accent mt-0.5 shrink-0">{icon}</span>
      <span>
        <span className="block text-base text-on-surface group-hover:text-accent transition-colors break-all">
          {children}
        </span>
        {note && <span className="block text-xs font-semibold text-on-surface-muted mt-0.5">{note}</span>}
      </span>
    </a>
  );
}

export default function ContactContent({ lang }) {
  const t = translations[lang];
  const c = t.contact;

  return (
    <>
      <PageHeader title={c.title} intro={c.intro} align="left" />

      <section className={`${wrap} pb-24 md:pb-36`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="bg-card border border-outline-light/80 p-6 sm:p-8 md:p-12">
              <EnquiryForm f={c.form} services={t.services.categories.map((cat) => cat.title)} />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className={heading}>{c.infoHeading}</h2>
              <div className="space-y-5">
                <Channel href={SITE.phoneHref} icon={<PhoneIcon />} note={c.hours}>
                  {SITE.phoneDisplay}
                </Channel>
                {SITE.email && (
                  <Channel href={`mailto:${SITE.email}`} icon={<MailIcon />}>
                    {SITE.email}
                  </Channel>
                )}
                {SITE.instagram && (
                  <Channel
                    href={SITE.instagram}
                    icon={<InstagramIcon />}
                    external
                    label={t.common.instagramLabel}
                  >
                    {c.instagram}
                  </Channel>
                )}
              </div>
            </div>

            {/* Address + a real map */}
            <div>
              <h2 className={heading}>{c.officeHeading}</h2>
              <div className="flex items-start gap-4 mb-6">
                <PinIcon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-base text-on-surface whitespace-pre-line">{c.address}</p>
                  <a
                    href={SITE.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent border-b border-accent pb-0.5 hover:text-accent-dark hover:border-accent-dark transition-colors"
                  >
                    {c.openMap}
                  </a>
                </div>
              </div>
              <div className="w-full aspect-video overflow-hidden border border-outline-light/80 bg-surface-container">
                <iframe
                  src={SITE.mapsEmbed}
                  title={c.mapTitle}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
