"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* Fade-and-rise on first scroll into view.

   The hidden state lives in CSS (`.reveal`) rather than an inline style so that
   the <noscript> rule in the layout can override it — without that, a visitor
   with JS off would get a page of empty boxes. A 1.5s safety timer also forces
   the content visible if the observer never fires (headless captures, odd
   scroll containers, a user landing mid-page via an anchor). */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // Already on screen at mount — show without waiting for a scroll event.
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
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
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
    <div
      ref={ref}
      data-shown={shown}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
