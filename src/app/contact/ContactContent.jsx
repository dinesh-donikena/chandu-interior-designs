"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactContent() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    // Using Web3Forms (free, no backend needed)
    // Replace YOUR_ACCESS_KEY with a real key from https://web3forms.com
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY",
          ...data,
          subject: `New inquiry from ${data.name} - Chandu Interior Designs`,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <>
      {/* Header */}
      <header className="pt-24 pb-12 px-5 md:px-20 max-w-[1280px] mx-auto text-center md:text-left">
        <h1 className="font-display text-4xl md:text-6xl text-primary mb-4">
          {t.contact.title}
        </h1>
        <p className="text-lg text-on-surface-muted max-w-2xl leading-relaxed">
          {t.contact.intro}
        </p>
      </header>

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-20 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-low p-8 md:p-12 ghost-border rounded-lg">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-2"
                      htmlFor="name"
                    >
                      {t.contact.form.name}
                    </label>
                    <input
                      className="w-full bg-transparent py-2 px-0 border-0 border-b border-outline-light focus:border-primary text-base transition-all"
                      id="name"
                      name="name"
                      placeholder={t.contact.form.namePlaceholder}
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-2"
                      htmlFor="email"
                    >
                      {t.contact.form.email}
                    </label>
                    <input
                      className="w-full bg-transparent py-2 px-0 border-0 border-b border-outline-light focus:border-primary text-base transition-all"
                      id="email"
                      name="email"
                      placeholder={t.contact.form.emailPlaceholder}
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-2"
                    htmlFor="phone"
                  >
                    {t.contact.form.phone}
                  </label>
                  <input
                    className="w-full bg-transparent py-2 px-0 border-0 border-b border-outline-light focus:border-primary text-base transition-all"
                    id="phone"
                    name="phone"
                    placeholder={t.contact.form.phonePlaceholder}
                    type="tel"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-2"
                    htmlFor="message"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    className="w-full bg-transparent py-2 px-0 border-0 border-b border-outline-light focus:border-primary text-base transition-all resize-none"
                    id="message"
                    name="message"
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={4}
                    required
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`inline-flex items-center gap-2 px-10 py-4 text-xs font-semibold uppercase tracking-[0.1em] transition-all ${
                      status === "sent"
                        ? "bg-tertiary text-white"
                        : "bg-primary text-white hover:bg-primary-container"
                    } disabled:opacity-70`}
                  >
                    {status === "idle" && (
                      <>
                        {t.contact.form.send}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                    {status === "sending" && t.contact.form.sending}
                    {status === "sent" && t.contact.form.sent}
                    {status === "error" && t.contact.form.error}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              {/* Phone & Email */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-outline mb-4">
                  {t.contact.infoHeading}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
                    </svg>
                    <div>
                      <p className="text-base text-on-surface">+91 90000 12345</p>
                      <p className="text-xs font-semibold text-on-surface-muted">
                        {t.contact.hours}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <p className="text-base text-on-surface">
                        hello@chanduinteriors.com
                      </p>
                      <p className="text-xs font-semibold text-on-surface-muted">
                        {t.contact.responseTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-outline mb-4">
                  {t.contact.officeHeading}
                </h3>
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base text-on-surface whitespace-pre-line">
                    {t.contact.address}
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="w-full aspect-video rounded-lg overflow-hidden ghost-border relative group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt3Frl3OsXS5MZoJ88aK7oyvAqvdpQsL__xjXKThQmL2bl_B08PqEGD8KhmxFHTrgS--R8E5m0A6WAURty2QuXQRBKFgad0N17pG0cOmc4YgoKX4WB8VcEgJEt2Px7ML5O6SRpXhDfqsaAL8TObh2BFnVyAQ-kHfTgeI0EQRE2TO1WRf_6SmonwQGdKrQNFERnxwjprc1iHq-d4_5i2c64554Aqset7bjJTZO5C1gN31uc6ZGE0_xgmUT9MFKv6u_qgUlrsrSzTblk"
                  alt="Office location in Hanamakonda, Warangal"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://wa.me/919000012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-surface-container ghost-border rounded-full hover:bg-surface-high transition-colors"
                >
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-xs font-semibold text-on-surface">
                    WhatsApp
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-surface-container ghost-border rounded-full hover:bg-surface-high transition-colors"
                >
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span className="text-xs font-semibold text-on-surface">
                    Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
