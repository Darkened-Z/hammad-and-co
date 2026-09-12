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
    () =>
      filter === "All"
        ? categories
        : categories.filter((c) => c.where.includes(filter)),
    [filter]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3 border-b border-ink/15 pb-6">
        <span className="eyebrow mr-4">Filter</span>
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`border px-4 py-2 text-[0.875rem] transition-colors duration-200 ${
              filter === f
                ? "border-ink bg-ink text-bone"
                : "border-ink/20 text-bark hover:border-ink/60 hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-[0.85rem] tabular-nums text-bark/70">
          {shown.length} of {categories.length}
        </span>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((c) => (
          <article key={c.name} className="group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={c.image}
                alt={c.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <h3 className="t-h4 mt-7">{c.name}</h3>
            <p className="mt-4 text-[0.975rem] leading-[1.62] text-bark/90">
              {c.blurb}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.where.map((w) => (
                <Chip key={w}>{w}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="mt-14 text-[1rem] text-bark/80">
          Nothing in that channel yet. Try another filter.
        </p>
      ) : null}
    </div>
  );
}
