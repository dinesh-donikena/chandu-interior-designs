import ContactContent from "@/components/pages/ContactContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "contact");

export default function Contact() {
  return <ContactContent />;
}
