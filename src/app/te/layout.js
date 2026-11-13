import SiteDocument from "@/components/SiteDocument";
import { fontClasses } from "@/lib/fonts";
import { siteMetadata, viewport } from "@/lib/seo";
import "../globals.css";

// Telugu pages — everything under /te. Same frame as the English layout in
// app/(en), with <html lang="te">.
export const metadata = siteMetadata("te");
export { viewport };

export default function RootLayout({ children }) {
  return (
    <SiteDocument lang="te" fontClasses={fontClasses}>
      {children}
    </SiteDocument>
  );
}
