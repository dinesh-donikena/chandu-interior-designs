// Shared class names, so every page's buttons and margins match exactly.
// (Tailwind finds class names in any source file, these included.)

// The page column: 1280px wide at most, with the side margins the whole
// site uses.
// On a phone the floating WhatsApp and call buttons occupy the lower right.
// The extra right padding keeps lines and buttons out from under them.
export const wrap = "max-w-[1280px] mx-auto pl-5 pr-[5.75rem] md:px-20";

const btn =
  "inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-colors duration-300";

// Brass, for the one main action in a section
export const btnPrimary = `${btn} bg-accent text-white hover:bg-accent-dark`;
// Hairline outline beside it, on the light background
export const btnOutline = `${btn} border border-primary/25 text-primary hover:border-primary hover:bg-primary hover:text-white`;
// The same outline on the dark charcoal bands
export const btnOutlineLight = `${btn} border border-white/30 text-white hover:border-white hover:bg-white hover:text-primary`;

// Small underlined link ("See all")
export const textLink =
  "inline-block text-xs font-semibold uppercase tracking-[0.14em] text-primary border-b border-accent pb-1 hover:text-accent transition-colors";

// "01", "02"… beside each service and material
export const numeral = (i) => String(i + 1).padStart(2, "0");
