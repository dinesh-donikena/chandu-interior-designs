import { themeColor } from "@/lib/brand";
import { SITE } from "@/lib/site";
import { localePath } from "@/lib/i18n";

// What Google and link previews (WhatsApp, Facebook) show for each page, in
// each language. Kept out of translations.js because none of it is rendered
// on the page itself.

const SITE_NAME = {
  en: SITE.name,
  te: "సుమ శ్రీ ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్స్",
};

const AREA = {
  en: "Telangana & Andhra Pradesh",
  te: "తెలంగాణ & ఆంధ్రప్రదేశ్",
};

// Share cards. Absolute URLs, built from the site address, so WhatsApp and
// Facebook don't have to guess the host. The wide card is the og:image;
// Twitter uses its own 1200×600 card. The square card is published at
// /og-image-square.png for a 1:1 slot, and is not a second og:image — a
// second image makes some apps pick the square and crop the wide card.
const SHARE_ALT =
  "Suma Sree Interiors and Constructions logo: an open door on a turmeric threshold";

// Used only when a page has no description of its own (the unknown-address
// pages). Real pages keep the description already written for them.
const SHARE_DESCRIPTION =
  "Design · Construction · Renovation | Telangana & Andhra Pradesh. Office: Hanamakonda, Warangal";

const ogImage = {
  url: new URL("/og-image.png", SITE.url).href,
  width: 1200,
  height: 630,
  alt: SHARE_ALT,
};

const twitterImage = {
  url: new URL("/twitter-card.png", SITE.url).href,
  width: 1200,
  height: 600,
  alt: SHARE_ALT,
};

// Browser chrome. Light is limewash, dark is ink — the Gadapa palette,
// not a restyle of the page.
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: themeColor.dark },
  ],
};

const PAGES = {
  home: {
    path: "/",
    en: {
      description:
        "Interior design and construction across Telangana and Andhra Pradesh. Plans, construction, renovation and complete home interiors, end to end.",
    },
    te: {
      description:
        "తెలంగాణ, ఆంధ్రప్రదేశ్ అంతటా ఇంటీరియర్ డిజైన్ & కన్‌స్ట్రక్షన్. ప్లాన్ నుంచి ఇంటీరియర్స్ దాకా అన్నీ ఒకే దగ్గర.",
    },
  },
  services: {
    path: "/services",
    en: {
      title: "Services",
      description:
        "Construction, renovation and interiors by Suma Sree Interiors and Constructions — 2D & 3D plans, civil works, modular kitchens, wardrobes, false ceilings and more, across Telangana and Andhra Pradesh.",
    },
    te: {
      title: "సర్వీసులు",
      description:
        "సుమ శ్రీ ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్స్ సర్వీసులు — 2D, 3D ప్లాన్లు, సివిల్ వర్క్స్, మాడ్యులర్ కిచెన్, వార్డ్‌రోబ్స్, ఫాల్స్ సీలింగ్, ఇంకా మరెన్నో. తెలంగాణ, ఆంధ్రప్రదేశ్ అంతటా.",
    },
  },
  portfolio: {
    path: "/portfolio",
    en: {
      title: "Our Work",
      description:
        "Our own work, in photos — hall, kitchen, bedroom and pooja room interiors. Interior design and construction across Telangana and Andhra Pradesh.",
    },
    te: {
      title: "మా పనులు",
      description:
        "మా సొంత పనుల ఫోటోలు — హాల్, కిచెన్, బెడ్‌రూమ్, పూజ గది. తెలంగాణ, ఆంధ్రప్రదేశ్ అంతటా ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్.",
    },
  },
  testimonials: {
    path: "/testimonials",
    en: {
      title: "Testimonials",
      description:
        "What families say about building with Suma Sree Interiors and Constructions across Telangana and Andhra Pradesh, and how our simple 4-step process works.",
    },
    te: {
      title: "కస్టమర్ల మాటలు",
      description:
        "తెలంగాణ, ఆంధ్రప్రదేశ్ అంతటా సుమ శ్రీతో పని చేయించుకున్న కుటుంబాలు ఏమంటున్నాయో, మా పని నాలుగు స్టెప్స్‌లో ఎలా జరుగుతుందో చూడండి.",
    },
  },
  contact: {
    path: "/contact",
    en: {
      title: "Contact",
      description:
        "Contact Suma Sree Interiors and Constructions for interior design and construction across Telangana and Andhra Pradesh. Office in Hanamakonda, Warangal — call, WhatsApp or send a message.",
    },
    te: {
      title: "కాంటాక్ట్",
      description:
        "తెలంగాణ, ఆంధ్రప్రదేశ్ అంతటా ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్ కోసం సుమ శ్రీని కాంటాక్ట్ చేయండి. ఆఫీస్ హనుమకొండ, వరంగల్ — కాల్, WhatsApp లేదా మెసేజ్.",
    },
  },
};

export const PAGE_PATHS = Object.values(PAGES).map((page) => page.path);

// Site-wide defaults, set once in each language's layout.
export function siteMetadata(lang) {
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE_NAME[lang]} | ${AREA[lang]}`,
      template: `%s | ${SITE_NAME[lang]}`,
    },
    keywords: [
      "interior design Telangana",
      "interior design Andhra Pradesh",
      "house construction Telangana",
      "house construction Andhra Pradesh",
      "home interiors Telangana and Andhra Pradesh",
      "home renovation Telangana",
      "home renovation Andhra Pradesh",
      "modular kitchen Telangana",
      "house plans Andhra Pradesh",
      "Suma Sree Interiors",
      "సుమ శ్రీ ఇంటీరియర్స్",
      "ఇంటి నిర్మాణం తెలంగాణ",
      "ఇంటీరియర్స్ ఆంధ్రప్రదేశ్",
    ],
    // Fallback share text for a page that sets no description of its own.
    // A page that sets openGraph replaces this whole object, and brings
    // the image with it (see pageMetadata). Twitter is not replaced by
    // those pages, so the card and image set here stay, and the description
    // is filled from that page's own text.
    openGraph: {
      siteName: SITE_NAME[lang],
      description: SHARE_DESCRIPTION,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      images: [twitterImage],
    },
    // Google Search Console: paste the verification code into the
    // GOOGLE_SITE_VERIFICATION setting in Vercel — no code change needed.
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  };
}

// Per-page title, description and the links that tell Google "this page
// also exists in the other language" (hreflang), so a Telugu search gets
// the Telugu page and the two never compete as duplicates.
export function pageMetadata(lang, key) {
  const page = PAGES[key];
  const copy = page[lang];
  const url = localePath(lang, page.path);
  const fullTitle = copy.title
    ? `${copy.title} | ${SITE_NAME[lang]}`
    : `${SITE_NAME[lang]} | ${AREA[lang]}`;

  return {
    ...(copy.title ? { title: copy.title } : {}),
    description: copy.description,
    alternates: {
      canonical: url,
      languages: {
        en: page.path,
        te: localePath("te", page.path),
        "x-default": page.path,
      },
    },
    openGraph: {
      title: fullTitle,
      description: copy.description,
      url,
      siteName: SITE_NAME[lang],
      locale: lang === "te" ? "te_IN" : "en_IN",
      type: "website",
      images: [ogImage],
    },
  };
}
