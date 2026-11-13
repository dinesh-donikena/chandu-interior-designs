import { wrap } from "@/lib/ui";

// The opening of every inner page: a small brass label, the page title and
// one line of introduction.
export default function PageHeader({ eyebrow, title, intro, align = "center" }) {
  const centred = align === "center";
  return (
    <header className={`${wrap} pt-20 pb-14 md:pt-28 md:pb-20 ${centred ? "text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow mb-5 ${centred ? "eyebrow-centred" : ""}`}>{eyebrow}</p>}
      <h1 className="font-display text-[2.6rem] leading-[1.1] md:text-6xl lg:text-7xl text-primary tracking-tight mb-6">
        {title}
      </h1>
      {intro && (
        <p className={`text-lg text-on-surface-muted max-w-2xl leading-relaxed ${centred ? "mx-auto" : ""}`}>
          {intro}
        </p>
      )}
    </header>
  );
}
