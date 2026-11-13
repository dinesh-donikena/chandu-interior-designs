// Central place for business identity & links — edit once, updates everywhere.
export const SITE = {
  name: "Suma Sree Interiors and Constructions",
  whatsapp: "https://wa.me/919133509293",
  // Instagram stays hidden until a handle exists. Set its URL here and it
  // appears in the footer, Contact page and schema.
  instagram: "https://www.instagram.com/sumasreeinteriorsconstructions/",
  phoneDisplay: "+91 91335 09293",
  phoneHref: "tel:+919133509293",
  // No business inbox yet, so email is hidden everywhere. Set a real address
  // (e.g. "hello@sumasreeinteriors.com") and it appears on Contact + footer.
  email: null,

  // Swap for the Google Business Profile link / exact street address once
  // the owner shares it — the map pin then lands on the office itself.
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Hanamakonda%2C+Warangal%2C+Telangana",
  mapsEmbed:
    "https://maps.google.com/maps?q=Hanamakonda%2C+Warangal%2C+Telangana&z=13&output=embed",

  // The site's own address — canonical links, sitemap.xml, robots.txt,
  // share previews and structured data all use it. Production is the Vercel
  // address below; switch to a custom domain once it's connected, or set
  // NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sumasreeinteriors.vercel.app",

  // Address is partial on purpose — owner will supply the street line.
  address: {
    locality: "Hanamakonda",
    region: "Telangana",
    postalCode: "506001",
    country: "IN",
  },
  // Structured-data service area: all of Telangana and Andhra Pradesh.
  // The office address stays Hanamakonda, Warangal.
  areasServed: ["Telangana", "Andhra Pradesh"],
};
