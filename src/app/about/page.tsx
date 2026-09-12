import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import StatsRow from "@/components/StatsRow";
import ClosingBand from "@/components/ClosingBand";
import { SectionHead } from "@/components/ui";
import { site, timeline, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `How ${site.name} went from one shuttered unit on Cheetham Hill to three trading counters.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        heading="Fifteen years, one street, three counters"
        body="A grocery shop that learned to post things. Everything below is the same business — the shelves just got further away."
        image="/images/aisle-wide.jpg"
        imageAlt="The main aisle of the Cheetham Hill store"
      />

      {/* Owner note */}
      <section className="bg-bone py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/owner.jpg"
                alt="Hammad, owner of the shop"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={110} className="lg:col-span-7 lg:pl-6">
            <p className="eyebrow mb-6">The owner</p>
            <h2 className="t-h2">
              I buy everything I sell, and I sell everything I would take home
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.65] text-bark/90">
              <p>
                I took the unit in {site.established} because the rent was cheap and the
                street was busy. There was no plan beyond opening at seven and
                shutting at ten.
              </p>
              <p>
                What changed the business was not a strategy. It was cafés asking
                whether they could buy a case instead of a tin, and customers who
                had moved away asking whether we could post it. So we did both.
              </p>
              <p>
                Today the shop, the Amazon storefront and the eBay shop all run
                off one stockroom. If you buy a bag of rice online it is picked
                from the same pallet the man in front of you just bought from.
                That is the whole trick.
              </p>
            </div>
            <p className="mt-9 font-display text-[1.1rem] font-bold tracking-[-0.02em] text-ink">
              Hammad
              <span className="ml-3 font-text text-[0.9rem] font-normal text-bark/70">
                Owner, {site.name}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <StatsRow />

      {/* Timeline */}
      <section className="bg-blush/45 py-24 md:py-32">
        <div className="shell">
          <SectionHead
            eyebrow="The road here"
            heading="How a corner shop ended up with three shopfronts"
          />

          <ol className="mt-16">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 70}>
                <li className="grid gap-4 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                  <p className="font-display text-[1.5rem] font-bold tracking-[-0.03em] text-ink md:col-span-2 md:text-[1.75rem]">
                    {t.year}
                  </p>
                  <h3 className="t-h4 md:col-span-4">{t.title}</h3>
                  <p className="text-[1rem] leading-[1.65] text-bark/90 md:col-span-6">
                    {t.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bone py-24 md:py-32">
        <div className="shell">
          <SectionHead
            eyebrow="How we trade"
            heading="Three rules that have not moved"
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="border-t border-ink/20 pt-7">
                  <p className="font-display text-[0.85rem] font-bold tabular-nums tracking-[0.14em] text-bark/60">
                    ({String(i + 1).padStart(2, "0")})
                  </p>
                  <h3 className="t-h4 mt-5">{v.title}</h3>
                  <p className="mt-4 text-[1rem] leading-[1.65] text-bark/90">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
