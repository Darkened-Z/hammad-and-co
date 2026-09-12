import Image from "next/image";
import { Button } from "@/components/ui";
import { hero, site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="under-header relative overflow-hidden bg-sky">
      {/* Photo panel — bleeds off the right edge, sits behind text on mobile. */}
      <div className="absolute inset-x-0 bottom-0 top-[var(--header-h)] lg:left-auto lg:right-0 lg:w-[46%]">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 46vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-sky/[0.88] lg:hidden" />
      </div>

      <div className="shell min-h-viewport relative flex flex-col justify-center py-24 lg:py-32">
        {/* max-width in em so it tracks the display size, not the body size */}
        <h1 className="t-hero rise max-w-[10em] text-ink lg:max-w-[8.4em]">
          {hero.heading}
        </h1>

        <p
          className="rise mt-9 max-w-[38ch] text-[1.0625rem] leading-[1.5] text-ink/90 md:text-[1.125rem]"
          style={{ animationDelay: "120ms" }}
        >
          {hero.sub}
        </p>

        <div
          className="rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          style={{ animationDelay: "220ms" }}
        >
          <Button href={hero.cta.href}>{hero.cta.label}</Button>
          <a
            href={site.marketplaces.amazon}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-[0.95rem] text-ink"
          >
            Or order on Amazon
          </a>
        </div>
      </div>
    </section>
  );
}
