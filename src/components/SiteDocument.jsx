import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PageTransition from "@/components/PageTransition";
import RevealOnScroll from "@/components/RevealOnScroll";
import ContactClickTracking from "@/components/ContactClickTracking";
import { SITE } from "@/lib/site";
import { translations } from "@/lib/translations";

// The whole page frame — <html>, fonts, navbar, footer — shared by the
// English layout (app/(en)) and the Telugu one (app/te). Each passes its
// language and the font classes from lib/fonts.js.
//
// Pages are rendered on the server, in their language, and only the parts
// that respond to taps (menu, gallery, form, hero) run in the browser. Those
// get just the words they show as props, so the full English + Telugu text
// file never has to be downloaded by a phone.

// Tells Google this is a local business in Hanamakonda, which is what
// surfaces the phone number and map pin in local search results.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  // The Telugu name, and the earlier English spelling, so a search for
  // either still finds the business
  alternateName: ["సుమ శ్రీ ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్స్", "Suma Sri Interiors and Constructions"],
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
  const t = translations[lang];

  return (
    // data-scroll-behavior: the smooth scrolling in globals.css is for the
    // "Step inside" link; this tells Next.js to switch it off while moving to
    // another page, so a new page opens at the top instead of gliding up
    // through the whole of the last one.
    <html lang={lang} className={`${fontClasses} antialiased`} data-scroll-behavior="smooth">
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
        <Navbar lang={lang} nav={t.nav} brand={t.brand} />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer lang={lang} />
        <FloatingContact labels={t.common} />
        <RevealOnScroll />
        <ContactClickTracking />
        <Analytics />
      </body>
    </html>
  );
}
