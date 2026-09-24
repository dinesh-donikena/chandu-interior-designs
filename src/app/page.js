import HomeContent from "./HomeContent";
import { translations } from "@/lib/translations";

// The site answers on more than one vercel.app address — canonical tells
// Google which one to rank so they don't compete as duplicates.
export const metadata = {
  alternates: { canonical: "/" },
};

// FAQ rich results are indexed from the English copy — the language toggle is
// client-side, so English is what crawlers see.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
      <HomeContent />
    </>
  );
}
