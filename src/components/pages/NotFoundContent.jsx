import Link from "next/link";
import { localePath } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { btnPrimary, btnSecondary, wrap } from "@/lib/ui";

// "Page not found", in the site's own voice: the doorway from the home page,
// standing empty.
export default function NotFoundContent({ lang }) {
  const nf = translations[lang].notFound;

  return (
    <section className={`${wrap} py-24 md:py-36 text-center`}>
      <div className="doorway mx-auto mb-10 w-24 h-[134px]" aria-hidden="true" />
      <p className="eyebrow eyebrow-centred mb-5">{nf.label}</p>
      <h1 className="type-h1 text-primary mx-auto mb-6">{nf.title}</h1>
      <p className="type-body text-on-surface-muted mx-auto mb-10">{nf.text}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href={localePath(lang, "/")} className={btnPrimary}>
          {nf.home}
        </Link>
        <Link href={localePath(lang, "/portfolio")} className={btnSecondary}>
          {nf.work}
        </Link>
      </div>
    </section>
  );
}
