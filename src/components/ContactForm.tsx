"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

/* ---------------------------------------------------------------------------
   No backend is wired up. On submit this composes a pre-filled email and hands
   it to the visitor's mail client, which works on any static host.
   To take submissions server-side instead, replace handleSubmit with a POST to
   Formspree / Resend / a route handler — the markup below does not need to change.
--------------------------------------------------------------------------- */

const enquiryTypes = [
  "General question",
  "Trade or wholesale account",
  "Amazon or eBay order",
  "Sourcing a specific line",
];

const field =
  "w-full border border-ink/25 bg-transparent px-4 py-3.5 text-[0.975rem] text-ink placeholder:text-bark/50 focus:border-ink focus:outline-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const type = String(data.get("type") ?? "");
    const body = [
      `Name: ${name}`,
      `Email: ${String(data.get("email") ?? "")}`,
      `Phone: ${String(data.get("phone") ?? "")}`,
      `Enquiry: ${type}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${type} — ${name}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow mb-2.5 block">Name</span>
          <input name="name" required className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="eyebrow mb-2.5 block">Email</span>
          <input
            name="email"
            type="email"
            required
            className={field}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow mb-2.5 block">Phone (optional)</span>
          <input name="phone" className={field} placeholder="0161 000 0000" />
        </label>
        <label className="block">
          <span className="eyebrow mb-2.5 block">Enquiry</span>
          <select name="type" className={field} defaultValue={enquiryTypes[0]}>
            {enquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="eyebrow mb-2.5 block">Message</span>
        <textarea
          name="message"
          rows={6}
          required
          className={`${field} resize-y`}
          placeholder="Tell us what you need and roughly how much of it."
        />
      </label>

      <div className="flex flex-wrap items-center gap-6 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center bg-ink px-8 py-4 text-[0.95rem] font-medium text-bone transition-colors duration-200 hover:bg-bark"
        >
          Send it
        </button>
        {sent ? (
          <p className="text-[0.9rem] text-bark">
            Your email app should have opened. If it did not, write to{" "}
            <a href={`mailto:${site.email}`} className="link-underline text-ink">
              {site.email}
            </a>
            .
          </p>
        ) : (
          <p className="text-[0.9rem] text-bark/70">
            We answer within one working day.
          </p>
        )}
      </div>
    </form>
  );
}
