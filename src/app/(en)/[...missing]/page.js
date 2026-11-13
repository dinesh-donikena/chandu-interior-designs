import { notFound } from "next/navigation";
import { notFoundMetadata } from "@/lib/seo";

// Any address that matches no page lands here and shows this language's
// "page not found" (not-found.js) inside the normal site frame. Needed
// because English and Telugu each have their own root layout, so there is
// no single top-level not-found page to fall back on.
export const metadata = notFoundMetadata("en");

export default function Missing() {
  notFound();
}
