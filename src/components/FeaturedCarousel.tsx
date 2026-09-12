"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { featured } from "@/lib/site";

const pad = (n: number) => String(n).padStart(2, "0");

export default function FeaturedCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  /* Slides sit inside the track's inline padding, so their offsetLeft is one
     gutter ahead of the scroll position that shows them. */
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
        let nearest = 0;
        let best = Infinity;
        const pad = parseFloat(getComputedStyle(track).paddingLeft || "0");
        items.forEach((el, idx) => {
          const d = Math.abs(el.offsetLeft - pad - track.scrollLeft);
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

  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">{featured.eyebrow}</p>
            <h2 className="t-h2">{featured.heading}</h2>
            <p className="t-lead mt-6 text-bark/90">{featured.body}</p>
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous slide"
              disabled={active === 0}
              className="flex h-11 w-11 items-center justify-center border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-bone disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              <span aria-hidden>&#8592;</span>
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next slide"
              disabled={active === featured.slides.length - 1}
              className="flex h-11 w-11 items-center justify-center border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-bone disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              <span aria-hidden>&#8594;</span>
            </button>
            <span className="font-display text-[0.95rem] font-semibold tabular-nums text-bark">
              {pad(active + 1)} / {pad(featured.slides.length)}
            </span>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="track mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
      >
        {featured.slides.map((s, i) => (
          <figure
            key={s.src + i}
            className="w-[82vw] shrink-0 snap-start sm:w-[52vw] lg:w-[36vw] xl:w-[30rem]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 52vw, 30rem"
                className="object-cover"
              />
              <span className="absolute right-0 top-0 bg-bone px-3 py-1.5 font-display text-[0.75rem] font-bold tracking-[0.1em] text-ink">
                {pad(i + 1)}
              </span>
            </div>
            <figcaption className="mt-4 text-[0.925rem] text-bark/90">
              {s.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="shell mt-10 flex flex-wrap gap-3">
        {featured.slides.map((s, i) => (
          <button
            key={"nav" + i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={active === i}
            className={`font-display text-[0.8rem] font-semibold tabular-nums tracking-[0.1em] transition-colors ${
              active === i ? "text-ink underline underline-offset-4" : "text-bark/45 hover:text-bark"
            }`}
          >
            {pad(i + 1)}
          </button>
        ))}
      </div>
    </section>
  );
}
