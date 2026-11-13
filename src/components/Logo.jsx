import Image from "next/image";

// Gadapa horizontal lockup. Sized in CSS (globals.css) so the same SVG
// stays sharp and still fits the 320px menu bar. The file is served as-is
// (unoptimized): it is already a vector, and the image optimizer does not
// handle SVG.
//
// Telugu pages use the Telugu lockup: it is the same height as the English
// one but about half as wide, so the wordmark stays readable beside the
// language switch. The English horizontal lockup is the one on English pages.
//
// Header and footer sit on limewash and sand, so they use the colour lockup.
// Pass onDark where the logo is placed on ink — that swaps in the reversed
// artwork (limewash lettering, pasupu threshold).

const ALT = "Suma Sree Interiors and Constructions";

export default function Logo({ lang = "en", large = false, onDark = false }) {
  const te = lang === "te";
  const src = te
    ? onDark
      ? "/brand/telugu-reversed.svg"
      : "/brand/telugu-colour.svg"
    : onDark
      ? "/brand/horizontal-reversed.svg"
      : "/brand/horizontal-colour.svg";

  const place = large
    ? te
      ? "brand-lockup-footer-te"
      : "brand-lockup-footer"
    : te
      ? "brand-lockup-bar-te"
      : "brand-lockup-bar";

  // Intrinsic ratio only. Display width comes from the CSS class.
  const width = te ? 432 : 849;
  const height = 201;

  return (
    <Image
      src={src}
      alt={ALT}
      width={width}
      height={height}
      unoptimized
      className={`brand-lockup ${place}`}
    />
  );
}
