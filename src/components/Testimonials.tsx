"use client";

import Image from "next/image";
import { useState } from "react";
import { Label } from "@/components/ui";
import { testimonials } from "@/lib/site";

/* One quote at a time, set large. The speakers double as the tabs. */
export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="border-y border-line bg-cream py-24 md:py-32">
      <div className="shell">
        <Label index="04">From the counter</Label>

        <blockquote key={t.name} className="mt-10 md:mt-14">
          <p className="rise font-display text-[clamp(1.875rem,4.4vw,4rem)] leading-[1.08] tracking-[-0.03em]">
            <span aria-hidden className="mr-1 text-tomato">&ldquo;</span>
            {t.quote}
            <span aria-hidden className="text-tomato">&rdquo;</span>
          </p>
        </blockquote>

        <div className="mt-14 grid gap-3 sm:grid-cols-3" role="tablist" aria-label="Choose a customer">
          {testimonials.map((p, idx) => (
            <button
              key={p.name}
              type="button"
              role="tab"
              aria-selected={idx === i}
              onClick={() => setI(idx)}
              className={`group flex items-center gap-4 border-t-2 pt-5 text-left transition-colors duration-300 ${
                idx === i ? "border-tomato" : "border-line hover:border-ink/40"
              }`}
            >
              <span className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full transition-[filter] duration-300 ${idx === i ? "" : "grayscale"}`}>
                <Image src={p.avatar} alt="" fill sizes="48px" className="object-cover" />
              </span>
              <span>
                <span className={`block font-display text-[1.2rem] leading-tight tracking-[-0.02em] ${idx === i ? "text-ink" : "text-ink/55 group-hover:text-ink"}`}>
                  {p.name}
                </span>
                <span className="tag mt-1 block text-mute">{p.role}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
