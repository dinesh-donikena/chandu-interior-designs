import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PageTransition from "@/components/PageTransition";
import ContactClickTracking from "@/components/ContactClickTracking";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE } from "@/lib/site";

// The whole page frame — <html>, fonts, navbar, footer — shared by the
// English layout (app/(en)) and the Telugu one (app/te). Each passes its
// language and the font classes from lib/fonts.js.

// Tells Google this is a local business in Hanamakonda, which is what
// surfaces the phone number and map pin in local search results.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  alternateName: "సుమ శ్రీ ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్స్",
  description:
    "House construction, renovation and interior design from Warangal, serving Telangana and Andhra Pradesh.",
  url: SITE.url,
  telephone: SITE.phoneDisplay,
  image: `${SITE.url}/portfolio/hanamakonda-hall-arch.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: SITE.areasServed.map((name) => ({ "@type": "Place", name })),
  sameAs: SITE.instagram ? [SITE.instagram] : undefined,
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

// A visitor who chose తెలుగు with the language switch keeps getting Telugu
// when they later open an English link: this runs before anything is drawn
// and sends them to the same page under /te. Only an explicit choice counts
// (stored by the switch in Navbar); search engines never have one.
const REMEMBER_TELUGU = `try{if(localStorage.getItem("lang")==="te"){document.documentElement.style.visibility="hidden";var l=location;l.replace("/te"+(l.pathname==="/"?"":l.pathname)+l.search+l.hash)}}catch(e){}`;

export default function SiteDocument({ lang, fontClasses, children }) {
  return (
    <html lang={lang} className={`${fontClasses} antialiased`}>
      <body className="min-h-screen flex flex-col">
        {lang === "en" && (
          <script dangerouslySetInnerHTML={{ __html: REMEMBER_TELUGU }} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <LanguageProvider lang={lang}>
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
        <ContactClickTracking />
        <Analytics />
      </body>
    </html>
  );
}
