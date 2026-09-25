"use client";

import { useLanguage } from "@/components/LanguageProvider";

// Two-line lockup — the full name is too long for one line beside the menu
// on a phone, so the name carries the brand and the trade sits beneath.
// Follows the language toggle: మన ఇల్లు in Telugu, Mana Illu in English.
export default function Logo({ large = false }) {
  const { lang, t } = useLanguage();
  const te = lang === "te";

  return (
    <span className="flex flex-col leading-none text-primary whitespace-nowrap">
      <span
        className={`font-display tracking-tight ${
          large
            ? te ? "text-[1.7rem]" : "text-3xl"
            : te ? "text-[19px] lg:text-[21px]" : "text-[22px] lg:text-2xl"
        }`}
      >
        {t.brand.name}
      </span>
      <span
        className={`font-semibold text-accent ${
          te
            ? large ? "text-sm mt-2.5" : "text-[10px] lg:text-[11px] mt-1.5"
            : large
              ? "uppercase text-[11px] tracking-[0.22em] mt-2"
              : "uppercase text-[8.5px] lg:text-[9.5px] tracking-[0.18em] mt-1.5"
        }`}
      >
        {t.brand.trade}
      </span>
    </span>
  );
}
