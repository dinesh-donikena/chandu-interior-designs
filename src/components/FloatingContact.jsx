import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { SITE } from "@/lib/site";

const button =
  "w-[52px] h-[52px] flex items-center justify-center rounded-full text-white shadow-lg shadow-black/25 hover:scale-105 active:scale-95 transition-transform";

// Most enquiries for a local builder arrive by phone or WhatsApp, so both
// stay within thumb reach on every page.
export default function FloatingContact({ labels }) {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.whatsappLabel}
        className={`${button} bg-[#25D366]`}
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
      <a href={SITE.phoneHref} aria-label={`${labels.callLabel}: ${SITE.phoneDisplay}`} className={`${button} bg-accent`}>
        <PhoneIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
