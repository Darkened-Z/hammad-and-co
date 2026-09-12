import Image from "next/image";
import Reveal from "@/components/Reveal";
import { TextLink } from "@/components/ui";
import { about } from "@/lib/site";

export default function AboutStrip() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6">{about.eyebrow}</p>
          <h2 className="t-h2">{about.heading}</h2>
          <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.62] text-bark/90">
            {about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-9">
            <TextLink href={about.cta.href} className="text-ink">
              {about.cta.label}
            </TextLink>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-5 gap-4 md:gap-6">
            <Reveal delay={80} className="col-span-3">
              <div className="relative aspect-[4/5]">
                <Image
                  src={about.images[0].src}
                  alt={about.images[0].alt}
                  fill
                  sizes="(max-width: 1024px) 60vw, 32vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={200} className="col-span-2 self-end">
              <div className="relative aspect-[3/4]">
                <Image
                  src={about.images[1].src}
                  alt={about.images[1].alt}
                  fill
                  sizes="(max-width: 1024px) 40vw, 22vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
