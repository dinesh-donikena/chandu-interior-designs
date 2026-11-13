import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { SITE } from "@/lib/site";
import { btnPrimary, btnWhatsApp } from "@/lib/ui";

// Floats over the corner. The footer can scroll clear of the stack, and
// pill rows and the closing button keep a right inset on a phone.
export default function FloatingContact({ labels }) {
  return (
    <div className="float-dock fixed z-40 flex flex-col gap-2 right-3 bottom-[max(0.6rem,env(safe-area-inset-bottom))] md:bottom-5 md:right-5 md:gap-3">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.whatsappLabel}
        className={`${btnWhatsApp} btn-icon shadow-lg shadow-black/20`}
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
      <a href={SITE.phoneHref} aria-label={`${labels.callLabel}: ${SITE.phoneDisplay}`} className={`${btnPrimary} btn-icon shadow-lg shadow-black/20`}>
        <PhoneIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
