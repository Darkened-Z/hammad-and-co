"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

/* No backend: submit composes a pre-filled email for the visitor's mail client.
   To take submissions server-side, replace handleSubmit with a POST. */

const enquiryTypes = [
  "General question",
  "Trade or wholesale account",
  "Amazon or eBay order",
  "Sourcing a specific line",
];

const field =
  "peer w-full border-0 border-b border-ink/25 bg-transparent px-0 pb-3 pt-2 text-[1.0625rem] text-ink placeholder:text-ink/30 transition-colors duration-300 focus:border-tomato focus:outline-none focus:ring-0";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="tag block text-mute">{label}</span>
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [type, setType] = useState(enquiryTypes[0]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
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
    <form onSubmit={handleSubmit} className="grid gap-9">
      <fieldset>
        <legend className="tag mb-4 text-mute">What&rsquo;s it about?</legend>
        <div className="flex flex-wrap gap-2">
          {enquiryTypes.map((t) => (
            <label
              key={t}
              className={`cursor-pointer rounded-full border px-4 py-2 text-[0.9rem] transition-[background-color,color,border-color] duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-tomato ${
                type === t ? "border-ink bg-ink text-cream" : "border-ink/20 text-ink/75 hover:border-ink"
              }`}
            >
              <input
                type="radio"
                name="type"
                value={t}
                checked={type === t}
                onChange={() => setType(t)}
                className="sr-only"
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-9 sm:grid-cols-2">
        <Field label="Name">
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
        </Field>
      </div>

      <Field label="Phone (optional)">
        <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="07…" />
      </Field>

      <Field label="Message">
        <textarea
          name="message"
          rows={5}
          required
          className={`${field} resize-y`}
          placeholder="Tell us what you need and roughly how much of it."
        />
      </Field>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="group/btn inline-flex items-center gap-3 rounded-full bg-tomato px-8 py-4 text-[0.95rem] font-medium text-cream transition-[background-color,transform] duration-300 hover:bg-ink active:scale-[0.97]"
        >
          Send it
          <span aria-hidden className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/btn:translate-x-1">&rarr;</span>
        </button>
        <p className="text-[0.9rem] text-ink/60" aria-live="polite">
          {sent ? (
            <>
              Your email app should have opened. If not, write to{" "}
              <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">{site.email}</a>.
            </>
          ) : (
            "We answer within one working day."
          )}
        </p>
      </div>
    </form>
  );
}
