import Link from "next/link";
import type { ReactNode } from "react";

/* Square-cornered solid button — the reference template uses no radius. */
export function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light" | "outlineLight";
  external?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 text-[0.95rem] font-medium transition-colors duration-200";
  const variants = {
    solid: "bg-ink text-bone hover:bg-bark",
    outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-bone",
    light: "bg-bone text-ink hover:bg-blush",
    outlineLight: "border border-bone/35 text-bone hover:bg-bone hover:text-ink",
  } as const;

  const cls = `${base} ${variants[variant]} ${className}`;
  const isExternal = external || /^https?:|^mailto:|^tel:/.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* Text link with the growing underline used throughout the template. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const isExternal = /^https?:|^mailto:|^tel:/.test(href);
  // Standing underline — an in-body CTA needs to read as a link at a glance.
  const cls = `inline-block text-[0.95rem] font-medium underline decoration-1 underline-offset-[6px] transition-colors duration-200 hover:text-bark ${className}`;
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* Eyebrow + heading pair. */
export function SectionHead({
  eyebrow,
  heading,
  body,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <h2 className="t-h2">{heading}</h2>
      {body ? (
        <p className="t-lead mt-6 max-w-2xl text-bark/90" style={align === "center" ? { marginInline: "auto" } : undefined}>
          {body}
        </p>
      ) : null}
    </div>
  );
}

/* Channel chip used on category cards. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="border border-ink/20 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-bark">
      {children}
    </span>
  );
}
