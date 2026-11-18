import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Button, Label } from "@/components/ui";
import { categories } from "@/lib/site";

/* Four departments in uneven tiles: one tall lead, one wide, two small. */
const layout = [
  "md:col-span-6 md:row-span-2",
  "md:col-span-6",
  "md:col-span-3",
  "md:col-span-3",
];

export default function RangeBento() {
  const picks = categories.slice(0, 4);

  return (
    <section className="py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Label index="03">The range</Label>
            <h2 className="t-h2 mt-8">
              What&rsquo;s actually <em className="text-tomato">on the shelves.</em>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="text-[1rem] leading-[1.6] text-ink/70 md:ml-auto md:max-w-xs">
              Fourteen hundred lines, from a tin of chickpeas to a pallet of them.
            </p>
            <Button href="/shop" variant="outline" className="mt-6">
              See the full range
            </Button>
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[17rem] gap-3 md:auto-rows-[19rem] md:grid-cols-12 md:gap-4">
          {picks.map((c, i) => (
            <Reveal key={c.name} variant="scale" delay={i * 90} className={layout[i]}>
              <Link
                href="/shop"
                className="group relative flex h-full flex-col justify-end overflow-hidden bg-ink p-5 text-cream md:p-7"
              >
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                  className="photo opacity-80 transition-[transform,opacity] duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05] group-hover:opacity-60"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <span className="tag absolute left-5 top-5 text-cream/80 md:left-7 md:top-7">
                  Dept. 0{i + 1}
                </span>
                <span className="relative">
                  <span className={`block font-display leading-none tracking-[-0.03em] ${i === 0 ? "text-[2.5rem] md:text-[3.75rem]" : "text-[1.75rem] md:text-[2rem]"}`}>
                    {c.name}
                  </span>
                  {i < 2 ? (
                    <span className="mt-3 block max-w-[40ch] text-[0.925rem] leading-[1.55] text-cream/75">
                      {c.blurb}
                    </span>
                  ) : null}
                  <span className="mt-4 flex flex-wrap gap-1.5">
                    {c.where.map((w) => (
                      <span key={w} className="tag rounded-full bg-cream/15 px-2.5 py-1 text-[0.6rem] backdrop-blur-sm">
                        {w}
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

