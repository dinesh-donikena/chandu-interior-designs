"use client";

import { track } from "@vercel/analytics";
import { WhatsAppIcon } from "@/components/icons";
import { SITE } from "@/lib/site";
import { btnPrimary } from "@/lib/ui";

const labelClass = "block text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-2";
const inputClass =
  "w-full bg-transparent py-2.5 px-0 border-0 border-b border-outline-light focus:border-accent focus:outline-none text-base transition-colors placeholder:text-outline/70";

// The enquiry form hands off to WhatsApp with the message pre-filled —
// enquiries land where the owner already replies, and there is no form
// backend or API key that can quietly break.
export default function EnquiryForm({ f, services }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const need = data.getAll("service").join(", ");
    const site = data.get("location").trim();

    const lines = [`${f.waHello} ${data.get("name").trim()}.`];
    if (need) lines.push(`${f.waNeed}: ${need}`);
    if (site) lines.push(`${f.waSite}: ${site}`);
    lines.push("", data.get("message").trim());

    // Counted without any of the visitor's details — only that the form
    // was used, and on which page.
    track("enquiry_form", { page: window.location.pathname });

    window.open(
      `${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form className="space-y-9" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        <div>
          <label className={labelClass} htmlFor="name">
            {f.name}
          </label>
          <input
            className={inputClass}
            id="name"
            name="name"
            placeholder={f.namePlaceholder}
            type="text"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="location">
            {f.location}
          </label>
          <input
            className={inputClass}
            id="location"
            name="location"
            placeholder={f.locationPlaceholder}
            type="text"
            autoComplete="address-level2"
          />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>{f.need}</legend>
        <div className="flex flex-wrap gap-2.5 pt-1">
          {services.map((service) => (
            <label key={service} className="cursor-pointer">
              <input type="checkbox" name="service" value={service} className="peer sr-only" />
              <span className="inline-block px-4 py-2 rounded-full border border-outline-light text-sm text-secondary transition-colors peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 hover:border-accent">
                {service}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={labelClass} htmlFor="message">
          {f.message}
        </label>
        <textarea
          className={`${inputClass} resize-none`}
          id="message"
          name="message"
          placeholder={f.messagePlaceholder}
          rows={4}
          required
        />
      </div>

      <div className="pt-1 space-y-4">
        <button type="submit" className={btnPrimary}>
          <WhatsAppIcon className="w-5 h-5" />
          {f.send}
        </button>
        <p className="text-sm text-on-surface-muted">{f.sendNote}</p>
      </div>
    </form>
  );
}
