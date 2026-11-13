// Shared class names, so every page's buttons and margins match exactly.

export const wrap = "max-w-[1280px] mx-auto px-5 md:px-20";

// Exactly three action styles. Icon-only controls add btn-icon.
export const btnPrimary = "btn btn-primary";
export const btnSecondary = "btn btn-secondary";
export const btnWhatsApp = "btn btn-whatsapp";
// Older name kept so a dark closing band can use the secondary style.
export const btnOutline = "btn btn-secondary";
export const btnOutlineLight = "btn btn-secondary btn-on-dark";

export const textLink =
  "type-small inline-flex items-center min-h-12 text-primary border-b border-accent pb-1 hover:text-accent transition-colors";

export const numeral = (i) => String(i + 1).padStart(2, "0");
