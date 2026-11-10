"use client";

import { createContext, useContext, useMemo } from "react";
import { translations } from "@/lib/translations";
import { localePath } from "@/lib/i18n";

const LanguageContext = createContext(null);

// The language comes from the address (/… is English, /te/… is Telugu), set
// by each language's layout — so the server sends the page already in the
// right language. `path` turns a plain link ("/contact") into the one for
// the current language.
export function LanguageProvider({ lang, children }) {
  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      path: (to) => localePath(lang, to),
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
