import Image from "next/image";
import { Italicise } from "@/components/Italicise";
import PhotoBackdrop from "@/components/PhotoBackdrop";
import { Label } from "@/components/ui";

export default function PageHero({
  eyebrow,
  heading,
  body,
  image,
  imageAlt,
  backdrop,
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  backdrop?: string;
}) {
  return (
    <section className="relative isolate pt-12 md:pt-20">
      {backdrop ? (
        <PhotoBackdrop
          src={backdrop}
          blend="opacity-60 mix-blend-multiply"
          gradient="linear-gradient(180deg, rgb(242 237 227 / .25) 0%, rgb(242 237 227 / .7) 60%, rgb(242 237 227) 100%)"
        />
      ) : null}
      <div className="shell">
        <Label className="rise">{eyebrow}</Label>
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 className="t-hero rise lg:col-span-8" style={{ animationDelay: "80ms" }}>
            <Italicise text={heading} emClass="text-tomato" />
          </h1>
          {body ? (
            <p
              className="rise t-lead max-w-md text-ink/70 lg:col-span-4 lg:pb-3"
              style={{ animationDelay: "200ms" }}
            >
              {body}
            </p>
          ) : null}
        </div>
      </div>

      {image ? (
        <div className="shell mt-12 md:mt-16">
          <div
            className="rise relative aspect-[4/3] overflow-hidden md:aspect-[21/9]"
            style={{ animationDelay: "280ms" }}
          >
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              preload
              sizes="(max-width: 1408px) 100vw, 88rem"
              className="photo"
            />
          </div>
        </div>
      ) : (
        <div className="shell mt-12"><div className="border-t border-ink" /></div>
      )}
    </section>
  );
}
