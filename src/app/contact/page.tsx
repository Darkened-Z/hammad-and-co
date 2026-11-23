import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import OpenStatus from "@/components/OpenStatus";
import Reveal from "@/components/Reveal";
import PhotoBackdrop from "@/components/PhotoBackdrop";
import { Label } from "@/components/ui";
import { channels, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Find ${site.name} at 2705 West Cold Spring Lane, Baltimore, or reach us by phone, email, Amazon or eBay.`,
};

export default function ContactPage() {
  const telHref = `tel:${site.phone.replace(/\s/g, "")}`;
  const online = [
    ...channels
      .filter((c) => c.id === "amazon" || c.id === "ebay")
      .map((c) => ({ label: c.name, href: c.cta.href })),
    ...site.social,
  ];

  return (
    <>
      <section className="relative isolate pt-12 pb-4 md:pt-20">
        <PhotoBackdrop
          src="/images/store/bg/bakery-tables.jpg"
          blend="opacity-60 mix-blend-multiply"
          gradient="linear-gradient(180deg, rgb(242 237 227 / .25) 0%, rgb(242 237 227 / .72) 60%, rgb(242 237 227) 100%)"
        />
        <div className="shell">
          <Label className="rise">Contact</Label>
          <h1 className="t-mega rise mt-8" style={{ animationDelay: "80ms" }}>
            Come in, ring up, <em className="text-tomato">or write.</em>
          </h1>
          <div className="rise mt-8 flex max-w-md items-center gap-4" style={{ animationDelay: "180ms" }}>
            <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
              <Image src="/images/hammad-portrait.jpg" alt="" fill sizes="64px" className="photo object-[50%_8%] scale-[1.6] origin-top" />
            </span>
            <p className="t-lead text-ink/70">
              Someone who works in the shop answers all three &mdash; usually Hammad. No ticket numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Big direct lines */}
      <section className="mt-12 border-y border-ink md:mt-16">
        <div className="shell grid md:grid-cols-2">
          <a href={telHref} className="group border-b border-line py-8 md:border-b-0 md:border-r md:py-12 md:pr-8">
            <p className="tag text-mute">Ring the shop</p>
            <p className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-none tracking-[-0.04em] transition-colors duration-300 group-hover:text-tomato">
              {site.phone}
            </p>
          </a>
          <a href={`mailto:${site.email}`} className="group py-8 md:py-12 md:pl-8">
            <p className="tag text-mute">Write to us</p>
            <p className="mt-4 break-all font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-[-0.03em] transition-colors duration-300 group-hover:text-tomato">
              {site.email}
            </p>
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-12">
          <aside className="space-y-12 lg:col-span-4">
            <Reveal>
              <Label index="01">The shop</Label>
              <address className="mt-5 text-[1.125rem] not-italic leading-[1.6]">
                {site.address.line1}<br />
                {site.address.city}, {site.address.postcode}<br />
                {site.address.country}
              </address>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 border-b border-current pb-1 text-[0.95rem] font-medium hover:text-tomato"
              >
                Open in Maps <span aria-hidden>&rarr;</span>
              </a>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex items-center justify-between gap-4">
                <Label index="02">Hours</Label>
                <OpenStatus className="inline-flex text-mute" />
              </div>
              <dl className="mt-5 border-t border-ink">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                    <dt className="text-[1rem] text-ink/70">{h.days}</dt>
                    <dd className="font-mono text-[0.9rem] tabular-nums">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={140}>
              <Label index="03">Online</Label>
              <ul className="mt-5 flex flex-wrap gap-2">
                {online.map((o) => (
                  <li key={o.label}>
                    <a
                      href={o.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block rounded-full border border-ink/20 px-4 py-2 text-[0.9rem] transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream"
                    >
                      {o.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="bg-cream p-6 md:p-12">
              <h2 className="t-h3">Send us a note</h2>
              <p className="mt-3 max-w-lg text-[1rem] leading-[1.6] text-ink/65">
                Trade enquiries, a line you can&rsquo;t find, or a problem with an order — it all reaches the same inbox.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell pb-24 md:pb-32">
        <Reveal variant="clip" className="relative aspect-[16/9] overflow-hidden rounded-t-[50vw] md:aspect-[21/8]">
          <Image
            src="/images/store/produce-aisle.jpg"
            alt="The produce run inside the store"
            fill
            sizes="(max-width: 1408px) 100vw, 88rem"
            className="photo"
          />
        </Reveal>
      </section>
    </>
  );
}
