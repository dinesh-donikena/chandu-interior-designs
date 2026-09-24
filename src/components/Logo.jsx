// Two-line lockup — the full name is too long for one line beside the menu
// on a phone, so "Mana Illu" carries the brand and the trade sits beneath.
export default function Logo({ large = false }) {
  return (
    <span className="flex flex-col leading-none text-primary whitespace-nowrap">
      <span
        className={`font-display tracking-tight ${
          large ? "text-3xl" : "text-[22px] lg:text-2xl"
        }`}
      >
        Mana Illu
      </span>
      <span
        className={`font-semibold uppercase text-accent ${
          large
            ? "text-[11px] tracking-[0.22em] mt-2"
            : "text-[8.5px] lg:text-[9.5px] tracking-[0.18em] mt-1.5"
        }`}
      >
        Interiors &amp; Constructions
      </span>
    </span>
  );
}
