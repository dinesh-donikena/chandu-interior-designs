import ContactContent from "@/components/pages/ContactContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("te", "contact");

export default function Contact() {
  return <ContactContent />;
}
