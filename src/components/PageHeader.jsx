import { wrap } from "@/lib/ui";

// The opening of every inner page: a small brass label, the page title and
// one line of introduction.
export default function PageHeader({ eyebrow, title, intro, align = "center" }) {
  const centred = align === "center";
  return (
    <header className={`${wrap} pt-20 pb-14 md:pt-28 md:pb-20 ${centred ? "text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow mb-5 ${centred ? "eyebrow-centred" : ""}`}>{eyebrow}</p>}
      <h1 className={`type-h1 text-primary mb-6 ${centred ? "mx-auto" : ""}`}>
        {title}
      </h1>
      {intro && (
        <p className={`type-body text-on-surface-muted ${centred ? "mx-auto" : ""}`}>
          {intro}
        </p>
      )}
    </header>
  );
}
