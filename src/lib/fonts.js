import { Fraunces, DM_Sans, Noto_Serif_Telugu, Noto_Sans_Telugu } from "next/font/google";

// Fraunces for headings (a soft, high-contrast serif) and DM Sans for
// everything else. Telugu falls through to Noto Serif / Noto Sans, and
// those files are not preloaded, so an English page does not download them.
// Few weights, swap, and the latin/telugu subsets only.

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const notoSerifTelugu = Noto_Serif_Telugu({
  subsets: ["telugu"],
  weight: ["600"],
  variable: "--font-noto-serif-telugu",
  display: "swap",
  preload: false,
});

export const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "600"],
  variable: "--font-noto-sans-telugu",
  display: "swap",
  preload: false,
});

export const fontClasses = `${fraunces.variable} ${dmSans.variable} ${notoSerifTelugu.variable} ${notoSansTelugu.variable}`;
