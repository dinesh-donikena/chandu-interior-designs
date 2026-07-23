import {
  Playfair_Display,
  Montserrat,
  Noto_Serif_Telugu,
  Noto_Sans_Telugu,
} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// Telugu fallbacks — Playfair/Montserrat have no Telugu glyphs,
// so Telugu text falls through to these.
const notoSerifTelugu = Noto_Serif_Telugu({
  subsets: ["telugu"],
  weight: ["600", "700"],
  variable: "--font-noto-serif-telugu",
  display: "swap",
});

const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-sans-telugu",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Chandu Interior Designs | Warangal",
    template: "%s | Chandu Interior Designs",
  },
  description:
    "Interior design studio in Warangal & Hanamakonda. Home interiors, renovations, shops and offices — local craftsmanship with a modern touch.",
  keywords: [
    "interior design Warangal",
    "interior designers Hanamakonda",
    "home interiors Warangal",
    "house renovation Warangal",
    "interior design Kazipet",
    "commercial interiors Warangal",
    "చందు ఇంటీరియర్ డిజైన్స్",
  ],
  openGraph: {
    title: "Chandu Interior Designs | Warangal",
    description:
      "Home interiors, renovations, shops and offices in Warangal & Hanamakonda — local craftsmanship with a modern touch.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${notoSerifTelugu.variable} ${notoSansTelugu.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
