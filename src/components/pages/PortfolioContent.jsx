import ClosingCta from "@/components/ClosingCta";
import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import { localePath } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { wrap } from "@/lib/ui";

// Every photo is the studio's own work from the Hanamakonda home (the
// bedroom is a still from the 4K walkthrough video). Titles come from
// translations (portfolio.projects) by index. Width/height are each photo's
// real proportions, so the wall reserves the right space before images load.
// hanamakonda-pooja-room.jpg (Balaji with the other deities) is not shown.
const PHOTOS = [
  { category: "hall", image: "/portfolio/hanamakonda-tv-unit.jpg", w: 1333, h: 2000, index: 0 },
  { category: "kitchen", image: "/portfolio/hanamakonda-kitchen.jpg", w: 2000, h: 1125, index: 1 },
  { category: "bedroom", image: "/portfolio/hanamakonda-bedroom-olive.jpg", w: 2000, h: 1126, index: 2 },
  { category: "hall", image: "/portfolio/hanamakonda-hall-arch.jpg", w: 2000, h: 1250, index: 3 },
  { category: "pooja", image: "/portfolio/hanamakonda-pooja-panel.jpg", w: 1200, h: 1800, index: 4 },
  { category: "hall", image: "/portfolio/hanamakonda-wash-counter.jpg", w: 1333, h: 2000, index: 6 },
];

export default function PortfolioContent({ lang }) {
  const t = translations[lang];
  const pf = t.portfolio;

  return (
    <>
      <PageHeader eyebrow={pf.projects[0].location} title={pf.title} intro={pf.intro} />

      <section className={`${wrap} pb-24 md:pb-36`}>
        <Gallery
          projects={PHOTOS.map((photo) => ({ ...photo, ...pf.projects[photo.index] }))}
          filters={Object.entries(pf.filters).map(([key, label]) => ({ key, label }))}
          labels={pf.viewer}
        />
      </section>

      <ClosingCta
        heading={pf.ctaHeading}
        button={pf.ctaButton}
        href={localePath(lang, "/contact")}
      />
    </>
  );
}
