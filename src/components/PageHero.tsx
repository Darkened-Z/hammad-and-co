import Image from "next/image";

export default function PageHero({
  eyebrow,
  heading,
  body,
  image,
  imageAlt,
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="under-header bg-sky">
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="rise text-ink" style={{ fontSize: "clamp(2.5rem, 5.4vw, 4.25rem)" }}>
            {heading}
          </h1>
          {body ? (
            <p className="t-lead mt-7 max-w-xl text-ink/85">{body}</p>
          ) : null}
        </div>

        {image ? (
          <div className="lg:col-span-5">
            <div className="relative aspect-[5/3] lg:aspect-[4/3]">
              <Image
                src={image}
                alt={imageAlt ?? ""}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
