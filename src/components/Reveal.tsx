"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* The hidden state lives in CSS (`.reveal[data-variant]`) so the <noscript>
   rule in the layout can override it. The 1.5s failsafe forces content
   visible if the observer never fires (headless captures, anchor landings). */
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
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);

    const failsafe = window.setTimeout(() => {
      setShown(true);
      io.disconnect();
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-shown={shown}
      data-variant={variant}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
