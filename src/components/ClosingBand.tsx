import Reveal from "@/components/Reveal";
import PhotoBackdrop from "@/components/PhotoBackdrop";
import { Italicise } from "@/components/Italicise";
import { Button } from "@/components/ui";
import { closing } from "@/lib/site";

export default function ClosingBand() {
  return (
    <section className="relative isolate overflow-hidden bg-tomato text-cream">
      <PhotoBackdrop
        src="/images/store/bg/crate-deals.jpg"
        blend="opacity-60 mix-blend-multiply"
        gradient="linear-gradient(100deg, rgb(214 58 31) 25%, rgb(214 58 31 / .4) 100%)"
      />
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
