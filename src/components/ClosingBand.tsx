import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui";
import { closing } from "@/lib/site";

export default function ClosingBand() {
  return (
    <section className="bg-ink text-bone">
      <div className="shell py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <h2 className="t-h2">{closing.heading}</h2>
          <p className="t-lead mt-6 max-w-xl text-bone/70">{closing.body}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={closing.primary.href} variant="light">
              {closing.primary.label}
            </Button>
            <Button href={closing.secondary.href} variant="outlineLight">
              {closing.secondary.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
