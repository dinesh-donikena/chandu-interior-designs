import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { SITE } from "@/lib/site";

const button =
  "w-11 h-11 flex items-center justify-center rounded-full text-white shadow-lg shadow-black/20";

// The pair sits in a strip under the scrolling page on a phone, so a photo,
// a pill or a line of text can never slide underneath it.
export default function FloatingContact({ labels }) {
  return (
    <div className="float-dock fixed z-40 flex flex-col gap-2 right-3 bottom-[max(0.6rem,env(safe-area-inset-bottom))] md:bottom-5 md:right-5 md:gap-3">
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
