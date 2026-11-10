import { SITE } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import { PAGE_PATHS } from "@/lib/seo";

const PRIORITY = {
  "/": 1,
  "/services": 0.9,
  "/portfolio": 0.9,
  "/contact": 0.8,
  "/testimonials": 0.7,
};

const abs = (path) => `${SITE.url}${path === "/" ? "" : path}`;

// Every page in both languages, each pointing at its twin so Google knows
// they are the same page in English and Telugu.
export default function sitemap() {
  const lastModified = new Date();

  return PAGE_PATHS.flatMap((path) => {
    const languages = {
      en: abs(path),
      te: abs(localePath("te", path)),
    };
    return ["en", "te"].map((lang) => ({
      url: languages[lang],
      lastModified,
      changeFrequency: "monthly",
      priority: PRIORITY[path] ?? 0.5,
      alternates: { languages },
    }));
  });
}
