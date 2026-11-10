import TestimonialsContent from "@/components/pages/TestimonialsContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "testimonials");

export default function Testimonials() {
  return <TestimonialsContent />;
}
