// Every icon on the site, in one place. Plain components with no hooks, so
// both server-rendered pages and interactive (client) components can use
// them. Each is decorative (aria-hidden): the link or button around it
// carries the label.

const WHATSAPP =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const PHONE =
  "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z";

const INSTAGRAM =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z";

const PIN =
  "M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z";

const MAIL =
  "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75";

function Filled({ d, className, evenOdd = false }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} {...(evenOdd ? { fillRule: "evenodd", clipRule: "evenodd" } : {})} />
    </svg>
  );
}

function Stroked({ d, className, width = 1.8 }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export const WhatsAppIcon = ({ className = "w-5 h-5" }) => <Filled d={WHATSAPP} className={className} />;
export const PhoneIcon = ({ className = "w-5 h-5" }) => <Filled d={PHONE} className={className} />;
export const InstagramIcon = ({ className = "w-5 h-5" }) => <Filled d={INSTAGRAM} className={className} />;
export const PinIcon = ({ className = "w-5 h-5" }) => <Filled d={PIN} className={className} evenOdd />;
export const MailIcon = ({ className = "w-5 h-5" }) => <Stroked d={MAIL} className={className} width={1.5} />;

export const ArrowRight = ({ className = "w-4 h-4" }) => (
  <Stroked d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" className={className} width={2} />
);
export const ArrowLeft = ({ className = "w-4 h-4" }) => (
  <Stroked d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" className={className} width={2} />
);
export const ArrowDown = ({ className = "w-4 h-4" }) => (
  <Stroked d="M12 4.5v15m0 0l-6-6m6 6l6-6" className={className} />
);
export const Plus = ({ className = "w-5 h-5" }) => (
  <Stroked d="M12 4.5v15m7.5-7.5h-15" className={className} width={1.6} />
);
export const Close = ({ className = "w-6 h-6" }) => (
  <Stroked d="M6 18L18 6M6 6l12 12" className={className} width={1.6} />
);
export const Menu = ({ className = "w-6 h-6" }) => (
  <Stroked d="M4 7h16M4 12h16M4 17h16" className={className} width={1.6} />
);
export const Chevron = ({ className = "w-4 h-4" }) => (
  <Stroked d="M9 5l7 7-7 7" className={className} width={2} />
);

// Small brass tick for the service lists
export const Tick = () => (
  <Stroked d="M4.5 12.75l6 6 9-13.5" className="w-4 h-4 mt-[3px] shrink-0 text-accent" width={2.2} />
);
