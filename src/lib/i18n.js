// English lives at the plain addresses (/services); Telugu has its own
// under /te (/te/services). Each is a real page, so Google can index both
// and a shared link opens in the language it was shared in.
export const LOCALES = ["en", "te"];

// "/services" → "/te/services" for Telugu; unchanged for English.
export function localePath(lang, path = "/") {
  if (lang !== "te") return path;
  return path === "/" ? "/te" : `/te${path}`;
}

// "/te/services" → "/services", so the language switch can find the same
// page in the other language.
export function stripLocale(pathname = "/") {
  return pathname.replace(/^\/te(?=\/|$)/, "") || "/";
}
