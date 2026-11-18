"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Chip } from "@/components/ui";
import { categories } from "@/lib/site";

const FILTERS = ["All", "In store", "Amazon", "eBay", "Trade"] as const;
type Filter = (typeof FILTERS)[number];

export default function ShopGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const shown = useMemo(
    () => (filter === "All" ? categories : categories.filter((c) => c.where.includes(filter))),
    [filter]
  );

  return (
    <div>
      <div className="sticky top-[var(--header-h)] z-20 -mx-4 flex items-center gap-2 overflow-x-auto border-b border-line bg-paper/95 px-4 py-4 backdrop-blur-md [scrollbar-width:none] md:mx-0 md:px-0">
        <span className="tag mr-3 shrink-0 text-mute">Sold via</span>
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`shrink-0 rounded-full border px-4 py-2 text-[0.875rem] transition-[background-color,color,border-color] duration-300 ${
              filter === f
                ? "border-ink bg-ink text-cream"
                : "border-ink/20 text-ink/75 hover:border-ink hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="tag ml-auto shrink-0 pl-4 tabular-nums text-mute">
          {String(shown.length).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2 md:gap-y-24">
        {shown.map((c, i) => (
          <article
            key={c.name}
            className={`rise group ${i % 2 === 1 ? "md:translate-y-20" : ""}`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={c.image}
                alt={c.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 44vw"
                className="photo transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
              />
              <span className="tag absolute left-4 top-4 rounded-full bg-cream px-2.5 py-1 text-ink">
                {String(categories.indexOf(c) + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-baseline">
              <h3 className="t-h3">{c.name}</h3>
              <div className="flex flex-wrap gap-1.5">
                {c.where.map((w) => (
                  <Chip key={w} active={w === filter}>{w}</Chip>
                ))}
              </div>
            </div>
            <p className="mt-4 max-w-[48ch] text-[1rem] leading-[1.65] text-ink/70">{c.blurb}</p>
          </article>
        ))}
      </div>

      {shown.length % 2 === 0 && shown.length > 0 ? <div className="hidden h-20 md:block" /> : null}
    </div>
  );
}
