import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PhotoBackdrop from "@/components/PhotoBackdrop";
import StatsRow from "@/components/StatsRow";
import ClosingBand from "@/components/ClosingBand";
import { Label } from "@/components/ui";
import { site, timeline, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `How ${site.name} went from one shuttered unit on Cheetham Hill to three trading counters.`,
};

const ownerNote = [
  `I took the unit in ${site.established} because the rent was cheap and the street was busy. There was no plan beyond opening at seven and shutting at ten.`,
  "Before that I’d spent five years managing a grocery store, two years as an independent contractor for Amazon, and three years running shifts as assistant manager at Burger King. None of it was glamorous, but it taught me how stock actually moves and what people actually want when they are not being sold to.",
  "What changed the business was not a strategy. It was cafés asking whether they could buy a case instead of a tin, and customers who had moved away asking whether we could post it. So we did both.",
  "Most of our customers are not chasing the cheapest thing on the shelf. They want good things at a price that does not punish them for shopping carefully — that is who we buy for, every morning at market.",
  "Today the shop, the Amazon storefront and the eBay shop all run off one stockroom. If you buy a bag of rice online it is picked from the same pallet the man in front of you just bought from. That is the whole trick.",
  "Outside the shop I have a stake in Smoke Zone with AZ Retail and in Pak Foods, a Save A Lot store — different counters, same instinct for what is worth stocking. The plan is more branches, not just more lines. Off the clock it is cricket and whatever trip I am planning next.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        heading="Fifteen years, one street, *three counters.*"
        body="A grocery shop that learned to post things. Everything below is the same business — the shelves just got further away."
        image="/images/storefront.jpg"
        imageAlt="Exterior of the store"
      />

      {/* Owner note — portrait pins while the letter scrolls past it */}
      <section className="py-24 md:py-36">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <Reveal variant="clip" className="relative aspect-[4/5] overflow-hidden rounded-t-full">
                <Image
                  src="/images/owner.jpg"
                  alt="Hammad, owner of the shop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="photo"
                />
              </Reveal>
              <p className="tag mt-5 text-mute">Hammad Farooq · Owner, {site.name}</p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Label index="01">A note from the owner</Label>
            <h2 className="t-h2 mt-8">
              I buy everything I sell, and sell everything <em className="text-tomato">I&rsquo;d take home.</em>
            </h2>
            <div className="mt-12 space-y-6 text-[1.0625rem] leading-[1.7] text-ink/75">
              {ownerNote.map((p, i) => (
                <Reveal key={i} variant="fade">
                  <p className={i === 0 ? "text-[1.25rem] leading-[1.55] text-ink" : ""}>{p}</p>
                </Reveal>
              ))}
            </div>
            <p className="mt-12 font-display text-[2.5rem] italic leading-none tracking-[-0.03em] text-tomato">
              Hammad
            </p>
          </div>
        </div>
      </section>

      <StatsRow />

      {/* Timeline — years hang in the margin */}
      <section className="py-24 md:py-36">
        <div className="shell">
          <Label index="02">The road here</Label>
          <h2 className="t-h2 mt-8 max-w-[16ch]">
            How a corner shop ended up with <em className="text-tomato">three shopfronts.</em>
          </h2>

          <ol className="mt-16 md:mt-20">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 60} className="group grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-12 last:border-b">
                <p className="font-display text-[3.5rem] leading-[0.85] tracking-[-0.05em] text-ink/15 transition-colors duration-500 group-hover:text-tomato md:col-span-4 md:text-[6.5rem]">
                  {t.year}
                </p>
                <h3 className="t-h3 md:col-span-4 md:pt-2">{t.title}</h3>
                <p className="text-[1rem] leading-[1.65] text-ink/70 md:col-span-4 md:pt-3">{t.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values — three rules, set like shop signage */}
      <section className="relative isolate bg-ink py-24 text-cream md:py-32">
        <PhotoBackdrop
          src="/images/store/grocery-aisle.jpg"
          gradient="linear-gradient(180deg, rgb(23 21 15 / .94) 0%, rgb(23 21 15 / .78) 100%)"
        />
        <div className="shell">
          <Label index="03" light>How we trade</Label>
          <h2 className="t-h2 mt-8">Three rules that <em className="text-mustard">haven&rsquo;t moved.</em></h2>
          <div className="mt-16 grid gap-px bg-cream/15 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="bg-ink p-0 py-8 md:px-8 md:py-10 md:first:pl-0">
                <p className="font-display text-[5rem] italic leading-none text-mustard">{i + 1}</p>
                <h3 className="t-h3 mt-8">{v.title}</h3>
                <p className="mt-4 max-w-[34ch] text-[1rem] leading-[1.65] text-cream/65">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
