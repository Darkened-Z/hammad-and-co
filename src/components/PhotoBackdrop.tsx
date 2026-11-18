import Image from "next/image";

/* A store photo toned into a section's colour, then washed out with a gradient
   so text on top stays readable. The section needs `relative isolate`. */
export default function PhotoBackdrop({
  src,
  gradient,
  blend = "opacity-35 mix-blend-luminosity grayscale",
  position = "center",
}: {
  src: string;
  gradient: string;
  blend?: string;
  position?: string;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className={`object-cover ${blend}`}
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0" style={{ background: gradient }} />
    </div>
  );
}
