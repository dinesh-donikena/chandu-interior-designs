import HomeContent from "@/components/pages/HomeContent";
import { translations } from "@/lib/translations";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "home");

// Lets Google show these questions and answers under the search result.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: translations.en.home.faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeContent lang="en" />
    </>
  );
}
