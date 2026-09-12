"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (n: number) =>
    setI((prev) => (prev + n + testimonials.length) % testimonials.length);

  return (
    <section className="bg-sage/35 py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-6">Testimonials</p>
          <h2 className="t-h2">Voices from the counter</h2>

          <div className="mt-10 flex items-center gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              <span aria-hidden>&#8592;</span>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              <span aria-hidden>&#8594;</span>
            </button>
            <span className="font-display text-[0.95rem] font-semibold tabular-nums text-bark">
              ({String(i + 1).padStart(2, "0")}) / ({String(testimonials.length).padStart(2, "0")})
            </span>
          </div>
        </div>

        <div className="lg:col-span-8 lg:pl-6">
          <blockquote key={t.name} className="rise">
            <p className="t-h3 font-display font-bold leading-[1.28] tracking-[-0.02em] text-ink">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-10 flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden">
                <Image
                  src={t.avatar}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-[1.05rem] font-bold tracking-[-0.02em] text-ink">
                  {t.name}
                </p>
                <p className="text-[0.9rem] text-bark/80">{t.role}</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
