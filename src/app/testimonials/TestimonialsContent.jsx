"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function TestimonialsContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Header */}
      <header className="pt-24 pb-12 px-5 md:px-20 max-w-[1280px] mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-secondary block mb-4">
          {t.testimonials.label}
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
          {t.testimonials.title}
        </h1>
        <p className="text-lg text-on-surface-muted max-w-2xl mx-auto leading-relaxed">
          {t.testimonials.intro}
        </p>
      </header>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-5 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item) => (
            <div
              key={item.name}
              className="ghost-border p-10 relative flex flex-col justify-between bg-surface-low min-h-[400px]"
            >
              <svg
                className="absolute top-6 right-8 w-20 h-20 opacity-10 text-primary pointer-events-none"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-on-surface leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="mt-8 border-t border-outline-light/30 pt-6">
                <h4 className="font-semibold text-primary">{item.name}</h4>
                <p className="text-xs font-semibold text-secondary uppercase tracking-[0.1em] mt-1">
                  {item.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-surface-container py-24 md:py-32">
        <div className="px-5 md:px-20 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-secondary block mb-4">
                {t.testimonials.processLabel}
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-primary">
                {t.testimonials.processHeading}
              </h2>
            </div>
            <p className="text-base text-on-surface-muted md:max-w-sm">
              {t.testimonials.processText}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Progress line */}
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-outline-light/50" />

            {t.testimonials.steps.map((step, i) => (
              <div key={step.title} className="group relative z-10">
                <div className="w-20 h-20 bg-surface ghost-border rounded-full flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <span className="font-display text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-on-surface-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual CTA */}
      <section className="py-24 md:py-32 px-5 md:px-20 max-w-[1280px] mx-auto">
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAYI3Mi-Nr1IEBxEG_cpQ86TH4nWcf5OrqSXqMvNVjtpRxbJZjACaHKz0Uw6ZNnxG3BDAwJuI0sVypWHpuc8kQnVULSbe-JA3rsr-l2qzszvObt-HxV6CnRs_Q3lXRS_Wmr3ZCeW3vghYCKyIbE4aeluC6r5hMfrIyBDkQ7HUZateBvcvRP79pSqHDqgI3y3RTYM3uMW6bahnbMU7fmGuapmpnWUO9tjDEL4HYHpby-YBhEpsbUmFphRQXnoLtKx_-tANtN--X7mtT"
            alt="Modern minimalist interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
            <div className="text-center p-12 bg-surface/90 backdrop-blur-md max-w-xl mx-4">
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-6">
                {t.testimonials.ctaHeading}
              </h2>
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-primary-container transition-colors"
              >
                {t.testimonials.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
