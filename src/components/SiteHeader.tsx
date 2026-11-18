"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import OpenStatus from "@/components/OpenStatus";
import { nav, site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-300 ${
        open
          ? "border-b border-transparent bg-ink text-cream"
          : scrolled
            ? "border-b border-line bg-paper/92 backdrop-blur-md"
            : "border-b border-transparent bg-paper"
      }`}
    >
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" className="text-[1.5rem] md:text-[1.7rem]" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-[0.95rem] transition-colors duration-300 ${
                isActive(item.href)
                  ? "bg-ink text-cream"
                  : "text-ink hover:bg-ink/[0.06]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <OpenStatus className={`hidden xl:inline-flex ${open ? "text-cream/70" : "text-mute"}`} />
          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-tomato px-5 py-2.5 text-[0.9rem] font-medium text-cream transition-colors duration-300 hover:bg-ink lg:inline-flex"
          >
            Find the shop
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] ${
                  open ? "top-[5px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] ${
                  open ? "top-[5px] -rotate-45" : "top-[10px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 top-[var(--header-h)] bg-ink text-cream transition-[opacity,transform] duration-500 ease-[var(--ease-out-expo)] lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="shell flex h-full flex-col justify-between py-10">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-baseline gap-4 border-b border-cream/12 py-4 font-display text-[2.75rem] leading-none tracking-[-0.035em]"
              >
                <span className="tag text-mustard">0{i + 1}</span>
                <span className={isActive(item.href) ? "italic text-mustard" : ""}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
          <div className="space-y-2 text-[0.95rem] text-cream/70">
            <OpenStatus className="flex text-cream/70" />
            <a className="block" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <a className="block" href={`mailto:${site.email}`}>{site.email}</a>
            <a className="block" href={site.address.mapsUrl} target="_blank" rel="noreferrer">
              {site.address.line1}, {site.address.city}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
