import Reveal from "@/components/Reveal";
import { stats } from "@/lib/site";

export default function StatsRow() {
  return (
    <section className="bg-ink text-bone">
      <div className="shell grid grid-cols-2 divide-ink/0 py-14 md:grid-cols-4 md:py-16">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className="border-bone/15 px-1 py-5 md:border-l md:first:border-l-0 md:px-8 md:first:pl-0 md:py-0"
          >
            <p className="font-display text-[2.25rem] font-bold leading-none tracking-[-0.03em] md:text-[2.75rem]">
              {s.value}
            </p>
            <p className="mt-3 text-[0.85rem] uppercase tracking-[0.14em] text-bone/60">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
