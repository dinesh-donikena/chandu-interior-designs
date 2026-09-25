// Central place for business identity & links — edit once, updates everywhere.
export const SITE = {
  name: "Mana Illu Interiors and Constructions",
  whatsapp: "https://wa.me/919133509293",
  // Still the old Chandu Homely page — swap for the new Mana Illu handle
  // once it is live (it feeds the footer, Contact page and Google schema).
  instagram: "https://www.instagram.com/chandu__homely_interiors/",
  phoneDisplay: "+91 91335 09293",
  phoneHref: "tel:+919133509293",
  // No business inbox yet, so email is hidden everywhere. Set a real address
  // (e.g. "hello@manailluinteriors.com") and it appears on Contact + footer.
  email: null,

  // Swap for the Google Business Profile link / exact street address once
  // the owner shares it — the map pin then lands on the office itself.
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Hanamakonda%2C+Warangal%2C+Telangana",
  mapsEmbed:
    "https://maps.google.com/maps?q=Hanamakonda%2C+Warangal%2C+Telangana&z=13&output=embed",

  // The site's own address — canonical links, sitemap.xml, robots.txt,
  // share previews and structured data all use it. Free Vercel address for
  // now; switch to https://manailluinteriors.com once it's bought and
  // connected (or set NEXT_PUBLIC_SITE_URL in Vercel).
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://manailluinteriors.vercel.app",

  // Address is partial on purpose — owner will supply the street line.
  address: {
    locality: "Hanamakonda",
    region: "Telangana",
    postalCode: "506001",
    country: "IN",
  },
  areasServed: ["Warangal", "Hanamakonda", "Kazipet", "Telangana", "Andhra Pradesh"],
};
