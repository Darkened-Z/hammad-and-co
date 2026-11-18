import Reveal from "@/components/Reveal";
import { Italicise } from "@/components/Italicise";
import { Button } from "@/components/ui";
import { closing } from "@/lib/site";

export default function ClosingBand() {
  return (
    <section className="relative overflow-hidden bg-tomato text-cream">
      <div className="shell grid gap-10 py-24 md:py-36 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <h2 className="t-mega">
            <Italicise text={closing.heading} />
          </h2>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-4">
          <p className="t-lead max-w-sm text-cream/85">{closing.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={closing.primary.href} variant="cream">
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
