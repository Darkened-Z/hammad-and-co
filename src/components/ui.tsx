import Link from "next/link";
import type { ReactNode } from "react";

const isExternalHref = (href: string) => /^https?:|^mailto:|^tel:/.test(href);

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (isExternalHref(href)) {
    const newTab = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={className}
        {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/btn:translate-x-1"
    >
      &rarr;
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "ink",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "ink" | "tomato" | "outline" | "cream" | "outlineLight";
  className?: string;
}) {
  const base =
    "group/btn inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[0.95rem] font-medium transition-[background-color,color,border-color,transform] duration-300 ease-[var(--ease-out-expo)] active:scale-[0.97]";
  const variants = {
    ink: "bg-ink text-cream hover:bg-tomato",
    tomato: "bg-tomato text-cream hover:bg-ink",
    outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream",
    cream: "bg-cream text-ink hover:bg-mustard",
    outlineLight: "border border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-ink",
  } as const;

  return (
    <SmartLink href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <Arrow />
    </SmartLink>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <SmartLink
      href={href}
      className={`group/btn inline-flex items-center gap-2 border-b border-current pb-1 text-[0.95rem] font-medium transition-colors duration-300 hover:text-tomato ${className}`}
    >
      {children}
      <Arrow />
    </SmartLink>
  );
}

/* Section label: a mono index number and a short name, sat on a hairline. */
export function Label({
  index,
  children,
  className = "",
  light = false,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={`tag flex items-center gap-3 ${light ? "text-cream/60" : "text-mute"} ${className}`}
    >
      {index ? (
        <span className={light ? "text-mustard" : "text-tomato"}>{index}</span>
      ) : null}
      <span>{children}</span>
    </p>
  );
}

/* Channel chip — looks like a sticker on a shelf edge. */
export function Chip({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      className={`tag rounded-full border px-2.5 py-1 text-[0.625rem] ${
        active ? "border-tomato bg-tomato text-cream" : "border-ink/20 text-ink/70"
      }`}
    >
      {children}
    </span>
  );
}
