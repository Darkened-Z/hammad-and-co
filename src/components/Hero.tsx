import Image from "next/image";
import { Button, TextLink } from "@/components/ui";
import { hero, site, stats } from "@/lib/site";

/* The photo is the hero. Copy sits above it like a shop fascia; the opening
   hours hang off the photo as a copy of the yellow price boards in the store. */
export default function Hero() {
  const telHref = `tel:${site.phone.replace(/\s/g, "")}`;

  return (
    <section className="pt-8 md:pt-12">
      <div className="shell">
        <div className="tag flex flex-wrap gap-x-6 gap-y-1 border-b border-ink pb-3 text-mute">
          <span>{site.address.line1}, {site.address.city}</span>
          <span className="hidden sm:inline">Open 7 days</span>
          <a href={telHref} className="ml-auto text-ink hover:text-tomato">{site.phone}</a>
        </div>

        <div className="mt-8 grid gap-8 md:mt-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h1 className="t-hero lg:col-span-8" aria-label={hero.heading}>
            {hero.lines.map((line, i) => (
              <span key={line} className="line-mask" aria-hidden>
                <span
                  className={i ? "text-ink/40" : ""}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-[34ch] text-[1.0625rem] leading-[1.55] text-ink/75">{hero.sub}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href={hero.cta.href}>{hero.cta.label}</Button>
              <TextLink href={site.marketplaces.amazon}>Amazon store</TextLink>
            </div>
          </div>
        </div>
      </div>

      <div className="shell mt-10 md:mt-14">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[16/7]">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1408px) 100vw, 88rem"
              className="photo object-[60%_center]"
            />
          </div>

          <div
            className="absolute -bottom-6 left-4 w-[10.5rem] -rotate-2 bg-mustard text-ink shadow-[0_10px_30px_-12px_rgb(23_21_15/0.5)] md:-bottom-8 md:left-8 md:w-[13rem]"
          >
            <p className="tag bg-tomato px-3 py-1.5 text-center text-cream">Every day</p>
            <p className="px-3 pt-2 text-center font-display text-[3.25rem] font-semibold leading-none tracking-[-0.05em] md:text-[4.25rem]">
              {site.openFrom}–{site.openTo % 12 || 12}
            </p>
            <p className="tag px-3 pb-3 pt-2 text-center text-ink/70">
              {site.openFrom}am – {site.openTo % 12 || 12}pm
            </p>
          </div>
        </div>
      </div>

      <div className="shell mt-16 md:mt-20">
        <dl className="grid grid-cols-2 border-y border-line md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse justify-end gap-2 py-5${i % 2 ? "border-l border-line pl-4" : "pr-4"} ${
                i > 1 ? "border-t border-line md:border-t-0" : ""
              } ${i === 2 ? "md:border-l md:pl-4" : ""} md:px-5 md:first:pl-0`}
            >
              <dt className="tag text-mute">{s.label}</dt>
              <dd className="font-display text-[1.6rem] leading-none tracking-[-0.03em] md:text-[2rem]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
