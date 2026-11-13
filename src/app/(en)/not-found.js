import NotFoundContent from "@/components/pages/NotFoundContent";
import { notFoundMetadata } from "@/lib/seo";

export const metadata = notFoundMetadata("en");

export default function NotFound() {
  return <NotFoundContent lang="en" />;
}
