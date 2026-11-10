import {
  Playfair_Display,
  Montserrat,
  Noto_Serif_Telugu,
  Noto_Sans_Telugu,
} from "next/font/google";

// One set of fonts for both languages. The Latin faces load up front. The
// Telugu faces (over 200 KB together) are not preloaded, so a page only
// fetches them if it actually shows Telugu text in them: every Telugu page,
// and the English home page for the name in the intro. Other English pages
// fetch none — the తెలుగు label in the language switch deliberately uses
// the phone's own font (see Navbar). Until a Telugu face arrives, the
// phone's own Telugu font shows the text, so nothing waits on it.
// (A separate preloading set for the Telugu pages was tried: the build merges
// both sets into every page's stylesheet, so fonts got fetched twice.)

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// Playfair/Montserrat have no Telugu glyphs, so Telugu text falls through
// to these.
export const notoSerifTelugu = Noto_Serif_Telugu({
  subsets: ["telugu"],
  weight: ["600", "700"],
  variable: "--font-noto-serif-telugu",
  display: "swap",
  preload: false,
});

export const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-sans-telugu",
  display: "swap",
  preload: false,
});

export const fontClasses = `${playfair.variable} ${montserrat.variable} ${notoSerifTelugu.variable} ${notoSansTelugu.variable}`;
