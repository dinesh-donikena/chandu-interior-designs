import PortfolioContent from "@/components/pages/PortfolioContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("te", "portfolio");

export default function Portfolio() {
  return <PortfolioContent />;
}
