import Image from "next/image";
import { Button, TextLink } from "@/components/ui";
import { Italicise } from "@/components/Italicise";
import Stamp from "@/components/Stamp";
import { hero, site, stats } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="shell grid min-h-viewport items-center gap-12 pb-10 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="tag rise flex flex-wrap items-center gap-x-3 gap-y-1 text-mute">
            <span className="text-tomato">Est. {site.established}</span>
            <span aria-hidden className="h-px w-8 bg-line" />
            <span>{site.address.line1}, {site.address.city}</span>
          </p>

          <h1 className="t-hero mt-8" aria-label={hero.heading}>
            {hero.lines.map((line, i) => (
              <span key={line} className="line-mask" aria-hidden>
                <span style={{ animationDelay: `${120 + i * 90}ms` }}>
                  <Italicise text={line} emClass="text-tomato" />
                </span>
              </span>
            ))}
          </h1>

          <p
            className="rise t-lead mt-9 max-w-[36ch] text-ink/75"
            style={{ animationDelay: "520ms" }}
          >
            {hero.sub}
          </p>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
            style={{ animationDelay: "620ms" }}
          >
            <Button href={hero.cta.href}>{hero.cta.label}</Button>
            <TextLink href={site.marketplaces.amazon}>Or order on Amazon</TextLink>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div
            className="rise relative mx-auto aspect-[4/5] w-full max-w-[30rem] overflow-hidden rounded-t-full"
            style={{ animationDelay: "200ms" }}
          >
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="photo"
            />
          </div>
          <Stamp className="absolute -bottom-6 left-0 h-32 w-32 md:h-36 md:w-36 lg:-left-10" />
        </div>
      </div>

      <div className="shell">
        <dl className="grid grid-cols-2 border-t border-ink md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`rise border-line py-6 md:py-8 ${i % 2 ? "pl-4 md:pl-6" : "pr-4"} ${
                i > 0 ? "md:border-l md:pl-6" : ""
              } ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""}`}
              style={{ animationDelay: `${700 + i * 80}ms` }}
            >
              <dt className="tag text-mute">{s.label}</dt>
              <dd className="mt-3 font-display text-[2.25rem] leading-none tracking-[-0.04em] md:text-[3rem]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
