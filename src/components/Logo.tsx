/* The mark: the shop-window arch drawn as an "A", with a fresh leaf at the apex.
   The arch is the same shape the site uses to frame its photos. */
export function Mark({
  className = "",
  bg = "var(--color-tomato)",
  fg = "var(--color-cream)",
  leaf = "var(--color-mustard)",
}: {
  className?: string;
  bg?: string;
  fg?: string;
  leaf?: string;
}) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="24" fill={bg} />
      <path d="M15 38V25a9 9 0 0 1 18 0v13" fill="none" stroke={fg} strokeWidth="4" />
      <path d="M15 30h18" stroke={fg} strokeWidth="3.5" />
      <path d="M24 16c0-5.5 3.6-8.6 10-8.6 0 5.8-3.8 8.6-10 8.6z" fill={leaf} />
      <path d="M24 16c2-2.4 4.4-4.4 7.2-6" stroke={bg} strokeWidth="1" fill="none" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`whitespace-nowrap font-display font-medium tracking-[-0.04em] ${className}`}>
      Aliyar
    </span>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.32em] ${className}`}>
      <Mark className="h-[1.15em] w-[1.15em] shrink-0" />
      <Wordmark />
    </span>
  );
}
