// Central place for business identity & links — edit once, updates everywhere.
export const SITE = {
  name: "Chandu Homely Interiors",
  whatsapp: "https://wa.me/919133509293",
  instagram: "https://www.instagram.com/chandu__homely_interiors/",
  phoneDisplay: "+91 91335 09293",
  phoneHref: "tel:+919133509293",
  // Placeholder — swap when a real business email exists
  email: "hello@chanduinteriors.com",

  // TODO: set NEXT_PUBLIC_SITE_URL in Vercel once the domain is bought.
  // Used for sitemap.xml, robots.txt and structured data.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://chandu-interior-designs.vercel.app",

  // Address is partial on purpose — owner will supply the street line.
  address: {
    locality: "Hanamakonda",
    region: "Telangana",
    postalCode: "506001",
    country: "IN",
  },
  areasServed: ["Warangal", "Hanamakonda", "Kazipet", "Telangana", "Andhra Pradesh"],
};
