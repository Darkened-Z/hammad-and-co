import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ShopGrid from "@/components/ShopGrid";
import ClosingBand from "@/components/ClosingBand";
import Reveal from "@/components/Reveal";
import { SectionHead, TextLink } from "@/components/ui";
import { channels, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "The full range at Hammad & Co. — fresh produce, store cupboard, world foods, household, chilled, bulk and clearance. In store, on Amazon and on eBay.",
};

const deliveryNotes = [
  {
    title: "In store",
    body: "Cheetham Hill, seven days. Produce lands at six and is out by nine. Card, cash, contactless.",
  },
  {
    title: "Amazon",
    body: "Prime-eligible on our core lines. Ordered before 4pm on a working day, it leaves the same day.",
  },
  {
    title: "eBay",
    body: "Bulk cases and clearance, tracked 48-hour courier. Combined postage on multiple lots.",
  },
  {
    title: "Trade round",
    body: "Tuesday and Friday across Greater Manchester. Free over £150, otherwise a flat £8.",
  },
];

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        heading="Fourteen hundred lines, three ways to get them"
        body="The range below is what we hold. Where you buy it only changes how it reaches you."
        image="/images/citrus-crates.jpg"
        imageAlt="Crates of citrus fruit stacked in the shop"
      />

      {/* Channel strip */}
      <section className="bg-bone pt-20 md:pt-24">
        <div className="shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.id} delay={i * 70}>
              <div className="border-t border-ink/20 pt-6">
                <p className="font-display text-[0.75rem] font-bold uppercase tracking-[0.16em] text-bark/60">
                  {c.badge}
                </p>
                <h2 className="t-h4 mt-4">{c.name}</h2>
                <div className="mt-4">
                  <TextLink href={c.cta.href} className="text-ink">
                    {c.cta.label}
                  </TextLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Range */}
      <section className="bg-bone py-20 md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="The range"
            heading="Everything we hold, by department"
            className="mb-14"
          />
          <ShopGrid />
        </div>
      </section>

      {/* Delivery + how it works */}
      <section className="bg-sage/35 py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Getting it to you</p>
            <h2 className="t-h2">Same stockroom, four routes out of it</h2>
            <p className="t-lead mt-6 text-bark/90">
              Nothing is drop-shipped and nothing is held by a third party. Every
              order is picked by someone who works in the shop.
            </p>
            <div className="relative mt-10 aspect-[5/3]">
              <Image
                src="/images/warehouse-pallets.jpg"
                alt="Palletised stock in the wholesale unit"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <dl>
              {deliveryNotes.map((d, i) => (
                <Reveal key={d.title} delay={i * 70}>
                  <div className="grid gap-3 border-t border-ink/15 py-7 md:grid-cols-12 md:gap-8">
                    <dt className="font-display text-[1.15rem] font-bold tracking-[-0.02em] text-ink md:col-span-4">
                      {d.title}
                    </dt>
                    <dd className="text-[1rem] leading-[1.65] text-bark/90 md:col-span-8">
                      {d.body}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>

            <p className="mt-10 text-[0.95rem] text-bark/80">
              Looking for something not listed? Ring{" "}
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="link-underline text-ink"
              >
                {site.phone}
              </a>{" "}
              — if we can source it, we will.
            </p>
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
