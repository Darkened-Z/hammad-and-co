import Image from "next/image";
import Hero from "@/components/Hero";
import StatsRow from "@/components/StatsRow";
import AboutStrip from "@/components/AboutStrip";
import ChannelGrid from "@/components/ChannelGrid";
import Testimonials from "@/components/Testimonials";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import ClosingBand from "@/components/ClosingBand";
import Reveal from "@/components/Reveal";
import { Button, Chip, SectionHead } from "@/components/ui";
import { categories } from "@/lib/site";

export default function HomePage() {
  const highlights = categories.slice(0, 4);

  return (
    <>
      <Hero />
      <StatsRow />
      <AboutStrip />
      <ChannelGrid />

      {/* Range preview — four categories, full list on /shop */}
      <section className="bg-bone py-24 md:py-32">
        <div className="shell">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="The range"
              heading="What is actually on the shelves"
              body="Fourteen hundred lines, from a tin of chickpeas to a pallet of them."
            />
            <Button href="/shop" variant="outline" className="shrink-0">
              See the full range
            </Button>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <article className="group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="t-h4 mt-6">{c.name}</h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.6] text-bark/85">
                    {c.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.where.map((w) => (
                      <Chip key={w}>{w}</Chip>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FeaturedCarousel />
      <ClosingBand />
    </>
  );
}
