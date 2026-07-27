import {
  Playfair_Display,
  Montserrat,
  Noto_Serif_Telugu,
  Noto_Sans_Telugu,
} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PageTransition from "@/components/PageTransition";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE } from "@/lib/site";
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
  metadataBase: new URL(SITE.url),
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

// Tells Google this is a local business in Hanamakonda, which is what
// surfaces the phone number and map pin in local search results.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  description:
    "House construction and interior design from Warangal, serving Telangana and Andhra Pradesh.",
  url: SITE.url,
  telephone: SITE.phoneDisplay,
  image: `${SITE.url}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: SITE.areasServed.map((name) => ({ "@type": "Place", name })),
  sameAs: [SITE.instagram],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "19:00",
  },
  knowsLanguage: ["en", "te"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${notoSerifTelugu.variable} ${notoSansTelugu.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
