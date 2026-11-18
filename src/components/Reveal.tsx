import type { ReactNode } from "react";

/* Server-rendered: no hydration per instance. RevealObserver (in the layout)
   flips data-shown when each one scrolls into view. The hidden state lives in
   CSS so the <noscript> rule in the layout can undo it. */
export default function Reveal({
  children,
  delay = 0,
  variant = "rise",
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "rise" | "fade" | "clip" | "scale";
  className?: string;
  as?: "div" | "li" | "article" | "figure";
}) {
  return (
    <Tag
      data-variant={variant}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
