"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui";
import { featured } from "@/lib/site";

const pad = (n: number) => String(n).padStart(2, "0");

/* Varying heights give the strip the rhythm of a market table, not a slider. */
const heights = ["aspect-[4/5]", "aspect-[1/1]", "aspect-[3/4]", "aspect-[4/5]", "aspect-[1/1]", "aspect-[3/4]", "aspect-[4/5]"];

export default function FeaturedCarousel({ index = "05" }: { index?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Slides sit inside the track's inline padding, so offsetLeft is one gutter ahead.
  const slideStart = (track: HTMLElement, item: HTMLElement) =>
    item.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft || "0");

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(i, featured.slides.length - 1));
    const item = track.children[clamped] as HTMLElement | undefined;
    if (item) track.scrollTo({ left: slideStart(track, item), behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const items = Array.from(track.children) as HTMLElement[];
        const padL = parseFloat(getComputedStyle(track).paddingLeft || "0");
        let nearest = 0;
        let best = Infinity;
        items.forEach((el, idx) => {
          const d = Math.abs(el.offsetLeft - padL - track.scrollLeft);
          if (d < best) {
            best = d;
            nearest = idx;
          }
        });
        setActive(nearest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const navBtn =
    "flex h-12 w-12 items-center justify-center rounded-full border border-ink/25 text-ink transition-[background-color,color,transform] duration-300 hover:bg-ink hover:text-cream active:scale-95 disabled:pointer-events-none disabled:opacity-25";

  return (
    <section className="py-24 md:py-32">
      <div className="shell flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Label index={index}>{featured.eyebrow}</Label>
          <h2 className="t-h2 mt-8">
            On the shelf <em className="text-tomato">right now.</em>
          </h2>
          <p className="t-lead mt-6 max-w-lg text-ink/70">{featured.body}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="tag mr-3 tabular-nums text-mute">
            <span className="text-ink">{pad(active + 1)}</span> / {pad(featured.slides.length)}
          </span>
          <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous photo" disabled={active === 0} className={navBtn}>
            <span aria-hidden>&larr;</span>
          </button>
          <button type="button" onClick={() => goTo(active + 1)} aria-label="Next photo" disabled={active === featured.slides.length - 1} className={navBtn}>
            <span aria-hidden>&rarr;</span>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="track mt-14 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
      >
        {featured.slides.map((s, i) => (
          <figure key={s.src + i} className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[26rem]">
            <div className={`relative overflow-hidden ${heights[i % heights.length]}`}>
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 26rem"
                className="photo"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline gap-3 border-t border-line pt-3">
              <span className="tag text-tomato">{pad(i + 1)}</span>
              <span className="text-[0.95rem] text-ink/80">{s.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
