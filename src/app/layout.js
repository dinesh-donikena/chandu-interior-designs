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
    default: "Chandu Homely Interiors | Warangal",
    template: "%s | Chandu Homely Interiors",
  },
  description:
    "House construction and interior design from Warangal — serving all of Telangana & Andhra Pradesh. Planning, construction and complete home interiors, end to end.",
  keywords: [
    "house construction Warangal",
    "interior design Warangal",
    "interior designers Hanamakonda",
    "home interiors Telangana",
    "house plans Warangal",
    "modular kitchen Warangal",
    "చందు హోమ్లీ ఇంటీరియర్స్",
    "ఇంటి నిర్మాణం వరంగల్",
  ],
  openGraph: {
    title: "Chandu Homely Interiors | Warangal",
    description:
      "House construction and interior design from Warangal — serving all of Telangana & Andhra Pradesh. Planning, construction and complete home interiors.",
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
