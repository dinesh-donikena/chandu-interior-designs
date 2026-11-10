import { SITE } from "@/lib/site";
import { localePath } from "@/lib/i18n";

// What Google and link previews (WhatsApp, Facebook) show for each page, in
// each language. Kept out of translations.js because none of it is rendered
// on the page itself.

const SITE_NAME = {
  en: SITE.name,
  te: "సుమ శ్రీ ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్స్",
};

const CITY = { en: "Warangal", te: "వరంగల్" };

// The picture WhatsApp / Facebook show beside a shared link — a real project
// photo (public/og-image.jpg, 1200×630).
const SHARE_IMAGE_ALT = {
  en: "Hand-carved wooden hall arch and modular kitchen in a Hanamakonda home by Suma Sri Interiors and Constructions",
  te: "హనుమకొండ ఇంట్లో సుమ శ్రీ ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్స్ చేసిన చెక్క హాల్ ఆర్చ్, మాడ్యులర్ కిచెన్",
};

const PAGES = {
  home: {
    path: "/",
    en: {
      description:
        "House construction, renovation and interiors from Warangal — serving all of Telangana & Andhra Pradesh. Plans, construction and complete home interiors, end to end.",
    },
    te: {
      description:
        "వరంగల్ నుంచి ఇంటి నిర్మాణం, రెనోవేషన్, ఇంటీరియర్స్ — తెలంగాణ, ఆంధ్రప్రదేశ్ అంతటా. ప్లాన్ నుంచి ఇంటీరియర్స్ దాకా అన్నీ ఒకే దగ్గర.",
    },
  },
  services: {
    path: "/services",
    en: {
      title: "Services",
      description:
        "Construction, renovation and interiors by Suma Sri Interiors and Constructions — 2D & 3D plans, civil works, modular kitchens, wardrobes, false ceilings and more, across Telangana & Andhra Pradesh.",
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
        "Our own work, in photos — hall, kitchen, bedroom and pooja room interiors from a home in Hanamakonda, Warangal.",
    },
    te: {
      title: "మా పనులు",
      description:
        "మా సొంత పనుల ఫోటోలు — హనుమకొండలోని ఒక ఇంట్లో చేసిన హాల్, కిచెన్, బెడ్‌రూమ్, పూజ గది ఇంటీరియర్స్.",
    },
  },
  testimonials: {
    path: "/testimonials",
    en: {
      title: "Testimonials",
      description:
        "What families say about building with Suma Sri Interiors and Constructions, and how our simple 4-step process works.",
    },
    te: {
      title: "కస్టమర్ల మాటలు",
      description:
        "సుమ శ్రీతో పని చేయించుకున్న కుటుంబాలు ఏమంటున్నాయో, మా పని నాలుగు స్టెప్స్‌లో ఎలా జరుగుతుందో చూడండి.",
    },
  },
  contact: {
    path: "/contact",
    en: {
      title: "Contact",
      description:
        "Contact Suma Sri Interiors and Constructions in Hanamakonda, Warangal — call, WhatsApp or send a message to start your house project.",
    },
    te: {
      title: "కాంటాక్ట్",
      description:
        "హనుమకొండ, వరంగల్‌లోని సుమ శ్రీ ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్స్ — కాల్ చేయండి, WhatsApp చేయండి, లేదా మెసేజ్ పంపండి.",
    },
  },
};

export const PAGE_PATHS = Object.values(PAGES).map((page) => page.path);

// Site-wide defaults, set once in each language's layout.
export function siteMetadata(lang) {
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE_NAME[lang]} | ${CITY[lang]}`,
      template: `%s | ${SITE_NAME[lang]}`,
    },
    keywords: [
      "house construction Warangal",
      "interior design Warangal",
      "interior designers Hanamakonda",
      "home interiors Telangana",
      "house plans Warangal",
      "modular kitchen Warangal",
      "home renovation Telangana",
      "Suma Sri Interiors",
      "సుమ శ్రీ ఇంటీరియర్స్",
      "ఇంటి నిర్మాణం వరంగల్",
    ],
    // The large card makes the share image fill the WhatsApp / Facebook
    // link preview.
    twitter: { card: "summary_large_image" },
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
    : `${SITE_NAME[lang]} | ${CITY[lang]}`;

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
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: SHARE_IMAGE_ALT[lang],
        },
      ],
    },
  };
}
