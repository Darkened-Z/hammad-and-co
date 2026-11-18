"use client";

import Image from "next/image";
import { useState } from "react";
import { Label } from "@/components/ui";
import PhotoBackdrop from "@/components/PhotoBackdrop";
import { channels } from "@/lib/site";

/* An index of the four counters. Hovering a row swaps the photo on the right;
   on small screens each row carries its own photo instead. */
export default function ChannelGrid() {
  const [active, setActive] = useState(0);

  return (
    <section id="where-to-buy" className="relative isolate bg-leaf py-24 text-cream md:py-32">
      <PhotoBackdrop
        src="/images/store/frozen-aisle.jpg"
        position="bottom"
        gradient="linear-gradient(180deg, rgb(30 59 44) 0%, rgb(30 59 44 / .84) 45%, rgb(30 59 44 / .6) 100%)"
      />
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Label index="02" light>Where to buy</Label>
            <h2 className="t-h2 mt-8 max-w-[13ch]">
              One stockroom, <em className="text-mustard">four</em> ways to shop it.
            </h2>
          </div>
          <p className="max-w-sm text-[1rem] leading-[1.6] text-cream/65">
            Same buying, same prices, same people behind all of it. Pick whichever suits the week you&rsquo;re having.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <ol className="lg:col-span-7">
            {channels.map((c, i) => {
              const external = /^https?:/.test(c.cta.href);
              return (
                <li key={c.id} className="border-t border-cream/15 last:border-b">
                  <a
                    href={c.cta.href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 py-7 md:gap-x-8 md:py-9"
                  >
                    <span className={`tag transition-colors duration-300 ${active === i ? "text-mustard" : "text-cream/40"}`}>
                      0{i + 1}
                    </span>
                    <span>
                      <span className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                        <span className={`font-display text-[1.875rem] leading-none tracking-[-0.03em] transition-[color,transform] duration-500 ease-[var(--ease-out-expo)] md:text-[2.75rem] ${active === i ? "translate-x-2 italic text-mustard" : ""}`}>
                          {c.name}
                        </span>
                        <span className="tag rounded-full border border-cream/25 px-2.5 py-1 text-[0.625rem] text-cream/70">
                          {c.badge}
                        </span>
                      </span>
                      <span className="mt-4 block max-w-[46ch] text-[0.975rem] leading-[1.6] text-cream/65">
                        {c.body}
                      </span>
                      <span className="relative mt-6 block aspect-[16/10] overflow-hidden lg:hidden">
                        <Image src={c.image} alt={c.imageAlt} fill sizes="90vw" className="photo" />
                      </span>
                      <span className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-medium text-cream underline decoration-cream/30 underline-offset-[6px] transition-colors group-hover:decoration-mustard">
                        {c.cta.label} <span aria-hidden>&rarr;</span>
                      </span>
                    </span>
                    <span aria-hidden className={`hidden text-[1.5rem] transition-transform duration-500 ease-[var(--ease-out-expo)] md:block ${active === i ? "-rotate-45 text-mustard" : "text-cream/30"}`}>
                      &rarr;
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-[calc(var(--header-h)+2rem)] aspect-[4/5] overflow-hidden rounded-t-full">
              {channels.map((c, i) => (
                <Image
                  key={c.id}
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="36vw"
                  className={`photo transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] ${
                    active === i ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                  }`}
                />
              ))}
              <span className="tag absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-cream px-3 py-1.5 text-ink">
                {channels[active].badge}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
