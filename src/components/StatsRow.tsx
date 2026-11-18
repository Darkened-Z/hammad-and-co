import Reveal from "@/components/Reveal";
import { stats } from "@/lib/site";

/* Big-number ledger on the leaf-green band. */
export default function StatsRow() {
  return (
    <section className="bg-leaf text-cream">
      <div className="shell grid grid-cols-2 gap-y-12 py-20 md:grid-cols-4 md:py-24">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className={`md:px-6 ${i ? "md:border-l md:border-cream/15" : "md:pl-0"}`}>
            <p className="font-display text-[3rem] leading-none tracking-[-0.045em] md:text-[4.5rem]">
              {s.value}
            </p>
            <p className="tag mt-4 text-cream/55">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
