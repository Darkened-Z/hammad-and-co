import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Italicise } from "@/components/Italicise";
import { Label, TextLink } from "@/components/ui";
import { about } from "@/lib/site";

export default function AboutStrip() {
  return (
    <section className="py-24 md:py-36">
      <div className="shell">
        <Label index="01">{about.eyebrow}</Label>

        <div className="mt-10 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <h2 className="t-h2 max-w-[14ch]">
              <Italicise text={about.heading} emClass="text-tomato" />
            </h2>
            <div className="mt-10 grid gap-6 text-[1.0625rem] leading-[1.65] text-ink/75 sm:grid-cols-2 sm:gap-8">
              {about.body.map((p, i) => (
                <p key={p} className={i === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-[3.6rem] first-letter:leading-[0.85] first-letter:text-ink" : ""}>
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-10">
              <TextLink href={about.cta.href}>{about.cta.label}</TextLink>
            </div>
          </Reveal>

          <div className="relative lg:col-span-5">
            <Reveal variant="clip" className="relative aspect-[4/5] w-[82%]">
              <Image
                src={about.images[0].src}
                alt={about.images[0].alt}
                fill
                sizes="(max-width: 1024px) 80vw, 34vw"
                className="photo"
              />
            </Reveal>
            <Reveal
              variant="clip"
              delay={180}
              className="absolute -bottom-10 right-0 aspect-square w-[46%] border-[6px] border-paper md:-bottom-14"
            >
              <Image
                src={about.images[1].src}
                alt={about.images[1].alt}
                fill
                sizes="(max-width: 1024px) 45vw, 18vw"
                className="photo"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
