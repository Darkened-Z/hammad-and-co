import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SectionHead, TextLink } from "@/components/ui";
import { channels } from "@/lib/site";

export default function ChannelGrid() {
  return (
    <section id="where-to-buy" className="bg-blush/45 py-24 md:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="Where to buy"
          heading="One stockroom, four ways to shop it"
          body="The same buying, the same prices and the same people behind all of it. Pick whichever suits the week you are having."
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.id} delay={i * 90}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-0 top-0 bg-bone px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink">
                    {c.badge}
                  </span>
                </div>

                <h3 className="t-h4 mt-7">{c.name}</h3>
                <p className="mt-4 flex-1 text-[0.975rem] leading-[1.62] text-bark/90">
                  {c.body}
                </p>
                <div className="mt-6">
                  <TextLink href={c.cta.href} className="text-ink">
                    {c.cta.label}
                  </TextLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
