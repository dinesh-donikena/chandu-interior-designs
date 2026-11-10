import SiteDocument from "@/components/SiteDocument";
import { fontClasses } from "@/lib/fonts";
import { siteMetadata } from "@/lib/seo";
import "../globals.css";

// English pages — the plain addresses (/, /services, …). Telugu has its own
// layout in app/te. Both share one frame: components/SiteDocument.
export const metadata = siteMetadata("en");

export default function RootLayout({ children }) {
  return (
    <SiteDocument lang="en" fontClasses={fontClasses}>
      {children}
    </SiteDocument>
  );
}
