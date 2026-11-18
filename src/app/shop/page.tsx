import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ShopGrid from "@/components/ShopGrid";
import ClosingBand from "@/components/ClosingBand";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import Reveal from "@/components/Reveal";
import PhotoBackdrop from "@/components/PhotoBackdrop";
import { Label } from "@/components/ui";
import { channels, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "The full range at Aliyar — fresh produce, store cupboard, world foods, household, chilled, bulk and clearance. In store, on Amazon and on eBay.",
};

const deliveryNotes = [
  { title: "In store", when: "7 days", body: "Cheetham Hill. Produce lands at six and is out by nine. Card, cash, contactless." },
  { title: "Amazon", when: "Same day", body: "Prime-eligible on our core lines. Ordered before 4pm on a working day, it leaves the same day." },
  { title: "eBay", when: "48 hr", body: "Bulk cases and clearance, tracked 48-hour courier. Combined postage on multiple lots." },
  { title: "Trade round", when: "Tue & Fri", body: "Across Greater Manchester. Free over £150, otherwise a flat £8." },
];

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        heading="Fourteen hundred lines, *three ways* to get them."
        body="The range below is what we hold. Where you buy it only changes how it reaches you."
        backdrop="/images/store/endcap-99c.jpg"
      />

      {/* Channel ledger */}
      <section className="pt-2">
        <div className="shell grid sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => {
            const external = /^https?:/.test(c.cta.href);
            return (
              <Reveal key={c.id} delay={i * 70} className={`border-b border-line lg:border-b-0 ${i ? "lg:border-l" : ""} ${i % 2 ? "sm:border-l" : ""}`}>
                <a
                  href={c.cta.href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group block px-0 py-8 transition-colors duration-300 hover:bg-cream sm:px-6 lg:first:pl-0"
                >
                  <p className="tag text-tomato">{c.badge}</p>
                  <h2 className="mt-4 font-display text-[1.75rem] leading-none tracking-[-0.03em] transition-[font-style] group-hover:italic">
                    {c.name}
                  </h2>
                  <p className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-medium">
                    {c.cta.label}
                    <span aria-hidden className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1">&rarr;</span>
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Range */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <Label index="01" className="mb-6">Everything we hold, by department</Label>
          <ShopGrid />
        </div>
      </section>

      {/* Delivery timetable */}
      <section className="bg-cream py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Label index="02">Getting it to you</Label>
            <h2 className="t-h2 mt-8">Same stockroom, <em className="text-tomato">four routes</em> out of it.</h2>
            <p className="t-lead mt-6 text-ink/70">
              Nothing is drop-shipped and nothing is held by a third party. Every order is picked by someone who works in the shop.
            </p>
            <Reveal variant="clip" className="relative mt-10 aspect-[5/3] overflow-hidden">
              <Image
                src="/images/store/pallet-deals.jpg"
                alt="Case stock stacked on pallets on the shop floor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="photo"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Delivery routes</caption>
              <thead>
                <tr className="tag border-b border-ink text-mute">
                  <th scope="col" className="pb-3 font-medium">Route</th>
                  <th scope="col" className="pb-3 font-medium">Speed</th>
                  <th scope="col" className="hidden pb-3 font-medium md:table-cell">Detail</th>
                </tr>
              </thead>
              <tbody>
                {deliveryNotes.map((d) => (
                  <tr key={d.title} className="border-b border-line align-top">
                    <th scope="row" className="py-6 pr-4 font-display text-[1.5rem] font-normal leading-tight tracking-[-0.02em]">
                      {d.title}
                      <span className="mt-2 block font-text text-[0.95rem] leading-[1.6] tracking-normal text-ink/70 md:hidden">{d.body}</span>
                    </th>
                    <td className="py-7 pr-4">
                      <span className="tag whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-cream">{d.when}</span>
                    </td>
                    <td className="hidden py-6 text-[0.975rem] leading-[1.6] text-ink/70 md:table-cell">{d.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-10 text-[1rem] text-ink/70">
              Looking for something not listed? Ring{" "}
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-medium text-ink underline decoration-tomato underline-offset-4">
                {site.phone}
              </a>{" "}
              — if we can source it, we will.
            </p>
          </div>
        </div>
      </section>

      <FeaturedCarousel index="03" />
      <ClosingBand />
    </>
  );
}
