"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* One observer for every .reveal on the page. The failsafe shows anything
   still hidden after 1.5s (headless captures, anchor landings). */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not([data-shown])")
    );
    const show = (el: Element) => el.setAttribute("data-shown", "true");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    pending.forEach((el) => io.observe(el));

    const failsafe = window.setTimeout(() => {
      pending.forEach(show);
      io.disconnect();
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
