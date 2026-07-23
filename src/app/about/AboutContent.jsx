"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const valueIcons = [
  <svg key="craft" className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
  </svg>,
  <svg key="personal" className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>,
  <svg key="modern" className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>,
];

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero - Meet the Designer */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Portrait */}
          <div className="md:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 border border-outline-light/30 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7fjqA_gp5fsayhsiwKYUI7CpQ-vNLs2KB_PtQoiLtovJyd9Fu8bTFx3mmdOEyNp-3FjbfEV5Yb-qAE385QmbbzKbZ4YP48EYsYXf0nqqPbLm6cjcutaB2sFB2XKSQShH5TtqM25P3e7Halvy51qAT6gV822pz9yBVdDZ1Yy32AwqzTBSNMtVQXVpWoAZKAKuEtXJ6psAOJE7bav-UzGZDhRr6u965w6ymVo462dUDmj1O6XQEDiVJqd_12VCsqp82flAky5hJwwDy"
                alt="Lead Designer - Chandu Interior Designs"
                width={500}
                height={625}
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Narrative */}
          <div className="md:col-span-6 md:col-start-7">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-4 block">
              {t.about.label}
            </span>
            <h1 className="font-display text-3xl md:text-5xl text-primary mb-8 leading-tight">
              {t.about.title}
            </h1>
            <div className="space-y-6 text-on-surface-muted text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
            <div className="mt-10 pt-10 border-t border-outline-light/30 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full border-2 border-surface bg-primary-fixed flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-surface bg-surface-high flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
              </div>
              <p className="text-xs font-semibold text-secondary uppercase tracking-[0.1em]">
                {t.about.badge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-surface-low py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl text-primary">
              {t.about.principlesHeading}
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.about.values.map((value, i) => (
              <div
                key={value.title}
                className="text-center p-8 border border-outline-light/20 hover:border-primary/40 transition-colors duration-500 group"
              >
                <div className="mb-6 relative inline-block">
                  <div className="text-primary/30 group-hover:text-primary transition-colors duration-500">
                    {valueIcons[i]}
                  </div>
                  <span className="absolute -top-4 -right-4 font-display text-5xl opacity-5 text-primary select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-primary mb-3 uppercase tracking-[0.1em]">
                  {value.title}
                </h3>
                <p className="text-base text-on-surface-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <svg className="w-16 h-16 mx-auto mb-6 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="font-display text-2xl md:text-3xl italic text-primary leading-snug">
            &ldquo;{t.about.quote}&rdquo;
          </p>
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              {t.about.quoteLocation}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
