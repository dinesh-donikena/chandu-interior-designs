import ServicesContent from "@/components/pages/ServicesContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("te", "services");

export default function Services() {
  return <ServicesContent />;
}
