import { Mark } from "@/components/Logo";
import { site } from "@/lib/site";

/* Rotating circular seal — the shop's rubber stamp. */
export default function Stamp({ className = "" }: { className?: string }) {
  const text = `Bought at market · Four mornings a week · Since ${site.established} · `;
  return (
    <div className={`rounded-full bg-tomato text-cream ${className}`} aria-hidden>
      <svg viewBox="0 0 200 200" className="h-full w-full motion-safe:animate-[spin_24s_linear_infinite]">
        <defs>
          <path id="stamp-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text className="fill-current font-mono text-[13.5px] uppercase tracking-[0.18em]">
          <textPath href="#stamp-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <Mark className="h-[42%] w-[42%]" bg="var(--color-tomato)" />
      </span>
    </div>
  );
}
