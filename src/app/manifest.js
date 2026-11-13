import { themeColor } from "@/lib/brand";

// Home-screen name and icons. theme_color is limewash, the page ground
// from the Gadapa palette (the dark theme-color meta tag is separate).
export default function manifest() {
  return {
    name: "Suma Sree Interiors and Constructions",
    short_name: "Suma Sree",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: themeColor.light,
    background_color: themeColor.light,
    display: "standalone",
    start_url: "/",
  };
}
