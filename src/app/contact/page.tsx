import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { TextLink } from "@/components/ui";
import { channels, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Find ${site.name} on Cheetham Hill Road, or reach us by phone, email, Amazon or eBay.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading="Come in, ring up, or write"
        body="Someone who works in the shop answers all three. No ticket numbers."
        image="/images/market-stall.jpg"
        imageAlt="Produce stall at the front of the shop"
      />

      <section className="bg-bone py-20 md:py-28">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Details */}
          <div className="lg:col-span-5">
            <div className="grid gap-10">
              <Reveal>
                <p className="eyebrow mb-5">The shop</p>
                <address className="space-y-1 text-[1.0625rem] not-italic leading-[1.6] text-ink">
                  <p>{site.address.line1}</p>
                  <p>
                    {site.address.city} {site.address.postcode}
                  </p>
                  <p>{site.address.country}</p>
                </address>
                <div className="mt-5">
                  <TextLink href={site.address.mapsUrl} className="text-ink">
                    Open in Maps
                  </TextLink>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <p className="eyebrow mb-5">Direct</p>
                <ul className="space-y-2 text-[1.0625rem] text-ink">
                  <li>
                    <a
                      href={`tel:${site.phone.replace(/\s/g, "")}`}
                      className="link-underline"
                    >
                      {site.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="link-underline">
                      {site.email}
                    </a>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={140}>
                <p className="eyebrow mb-5">Opening hours</p>
                <dl className="divide-y divide-ink/12 border-y border-ink/12">
                  {site.hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex items-baseline justify-between gap-6 py-3.5"
                    >
                      <dt className="text-[0.975rem] text-bark">{h.days}</dt>
                      <dd className="text-[0.975rem] tabular-nums text-ink">
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={200}>
                <p className="eyebrow mb-5">Online</p>
                <ul className="space-y-2 text-[1.0625rem] text-ink">
                  {channels
                    .filter((c) => c.id === "amazon" || c.id === "ebay")
                    .map((c) => (
                      <li key={c.id}>
                        <TextLink href={c.cta.href} className="text-ink">
                          {c.name}
                        </TextLink>
                      </li>
                    ))}
                  {site.social.map((s) => (
                    <li key={s.label}>
                      <TextLink href={s.href} className="text-ink">
                        {s.label}
                      </TextLink>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:pl-6">
            <Reveal delay={60}>
              <h2 className="t-h3 font-display">Send us a note</h2>
              <p className="mt-4 max-w-lg text-[1rem] leading-[1.6] text-bark/90">
                Trade enquiries, a line you cannot find, or a problem with an
                order — this reaches the same inbox either way.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Storefront image band */}
      <section className="relative h-[42vh] min-h-[20rem] w-full">
        <Image
          src="/images/aisle-household.jpg"
          alt="Inside the Cheetham Hill store"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>
    </>
  );
}
